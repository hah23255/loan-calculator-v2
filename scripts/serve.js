import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const root=path.resolve(__dirname,'..');
const publicDir=path.join(root,'public');
const basePort=parseInt(process.env.PORT,10)||5173;

const mimeTypes={'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.svg':'image/svg+xml'};

const createServer=()=>http.createServer((req,res)=>{
  const requestPath=new URL(req.url,'http://localhost').pathname;
  const normalized=path.posix.normalize(requestPath);
  const segments=normalized.split('/').filter(Boolean).filter(segment=>segment!=='..');
  const safePath=segments.join('/')||'index.html';
  let filePath;
  if(safePath.startsWith('src/')){
    filePath=path.join(root,safePath);
  }else{
    filePath=path.join(publicDir,safePath);
  }
  if(requestPath==='/'||requestPath==='/index.html'){
    filePath=path.join(publicDir,'index.html');
  }
  const allowedRoots=[publicDir,root];
  if(!allowedRoots.some(allowed=>filePath.startsWith(allowed))){
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.stat(filePath,(err,stats)=>{
    if(err){
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    if(stats.isDirectory()){
      filePath=path.join(filePath,'index.html');
    }
    fs.readFile(filePath,(readErr,data)=>{
      if(readErr){
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      const ext=path.extname(filePath);
      res.writeHead(200,{ 'Content-Type': mimeTypes[ext]||'application/octet-stream'});
      res.end(data);
    });
  });
});

const startServer=(portToUse)=>{
  const server=createServer();
  server.listen(portToUse,()=>{
    console.log(`Сървърът работи на http://localhost:${portToUse}`);
  });
  server.on('error',err=>{
    if(err.code==='EADDRINUSE'){
      console.warn(`Порт ${portToUse} е зает. Опитвам с ${portToUse+1}...`);
      startServer(portToUse+1);
    }else{
      console.error('Грешка при стартиране на сървъра:',err);
    }
  });
};

startServer(basePort);
