import {tests} from './calculator.test.js';

const results=tests.map(test=>{
  try{
    test.run();
    return {name:test.name,passed:true};
  }catch(error){
    return {name:test.name,passed:false,error};
  }
});

const passed=results.filter(r=>r.passed).length;
results.forEach(({name,passed,error})=>{
  if(passed){
    console.log(`✅ ${name}`);
  }else{
    console.error(`❌ ${name}: ${error.message}`);
  }
});

if(passed!==results.length){
  process.exitCode=1;
} else {
  console.log(`Всички ${passed} теста преминаха успешно.`);
}
