import {createEl,clearEl,formatCurrency,formatNumber,createIcon} from '../utils/dom.js';

const planDescriptions={
  annuity:'🔄 Равни вноски – лесно планиране!',
  decreasing:'📉 Намаляващи – по-малко лихви общо!'
};

export const createResultsView=()=>{
  const container=createEl('section',{className:'animate-fade-in'},[
    createEl('h2',{className:'text-2xl font-bold text-primary mb-4 flex items-center gap-2'},[createIcon('chart',20),' 📊 Резултати']),
    createEl('div',{className:'grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'}),
    createEl('div',{className:'space-y-4'}),
    createEl('div',{className:'mt-6 text-center'})
  ]);
  return container;
};

export const renderResults=(root,{principal,fee,modes},options)=>{
  const summary=root.children[1];
  const details=root.children[2];
  const chart=root.children[3];
  clearEl(summary);
  clearEl(details);
  clearEl(chart);

  summary.appendChild(createEl('div',{className:'bg-blue-50 p-4 rounded-lg border-l-4 border-primary'},[
    createEl('h3',{className:'font-semibold text-primary'},['💡 Основни данни']),
    createEl('p',{},[`Главница: ${formatCurrency(principal)}`]),
    createEl('p',{},[`Такси: ${formatCurrency(fee)}`])
  ]));

  modes.forEach(({key,label,data})=>{
    details.appendChild(createPlanCard(label,data,key,options));
  });

  if(options.infoLevel!=='none'){
    details.appendChild(createInfoBlock(options));
  }

  if(options.ctaType!=='none'){
    details.appendChild(createCtaBlock(options.ctaType));
  }

  // Lazy load chart
  setTimeout(()=>renderChart(chart,modes),200);
};

const createPlanCard=(label,{payment,total,schedule},key,{infoLevel})=>{
  const items=schedule.slice(0,6).map(row=>createEl('li',{className:'text-sm'},[`Месец ${row.month}: ${formatCurrency(row.payment)} (лихва ${formatCurrency(row.interest)})`]));
  return createEl('article',{className:'bg-white p-4 rounded-lg shadow-md border-l-4 border-accent'},[
    createEl('h3',{className:'font-bold text-accent mb-2'},[label]),
    createEl('p',{},[`Първа вноска: ${formatCurrency(payment)}`]),
    createEl('p',{},[`Общо: ${formatCurrency(total)}`]),
    createEl('p',{className:'text-gray-600'},[planDescriptions[key]]),
    createEl('p',{},['Първите 6 месеца:']),
    createEl('ul',{className:'list-disc list-inside'},items),
    infoLevel==='extended'?createEl('p',{className:'mt-2 text-sm text-gray-500'},['Пълен график локално. Сподели с приятели! 📱']):null
  ]);
};

const createInfoBlock=({loanType,infoLevel})=>{
  const texts={
    mortgage:'🏠 Ипотеките изискват документи, но са за мечтан дом!',
    consumer:'💳 Гъвкави кредити за твоите нужди.',
    auto:'🚗 Каско задължително, сравни оферти!',
    other:'✨ Консултирай се с експерт.'
  };
  return createEl('article',{className:'bg-yellow-50 p-4 rounded-lg'},[
    createEl('h3',{className:'font-semibold text-yellow-800'},['💡 Съвети']),
    createEl('p',{className:'text-yellow-700'},[texts[loanType]]),
    infoLevel==='extended'?createEl('p',{className:'text-sm text-yellow-600'},['Провери ГПР преди подпис!']):null
  ]);
};

const createCtaBlock=type=>{
  if(type==='form'){
    return createEl('article',{className:'bg-green-50 p-4 rounded-lg'},[
      createEl('h3',{className:'font-semibold text-green-800'},['📧 Свържи се']),
      createEl('p',{className:'text-green-700 mb-4'},['Искаш помощ? Пиши ни!']),
      createEl('form',{className:'space-y-2'},[
        createEl('input',{type:'text',name:'name',placeholder:'Име',className:'w-full px-3 py-2 border rounded'}),
        createEl('input',{type:'email',name:'email',placeholder:'Имейл',className:'w-full px-3 py-2 border rounded'}),
        createEl('button',{type:'submit',className:'bg-accent text-white px-4 py-2 rounded hover:bg-red-700'},['Изпрати 🚀'])
      ])
    ]);
  }
  return createEl('article',{className:'bg-purple-50 p-4 rounded-lg'},[
    createEl('h3',{className:'font-semibold text-purple-800'},['🔗 Още']),
    createEl('a',{href:'#',className:'text-purple-600 hover:underline'},['Научи повече →'])
  ]);
};

const renderChart=(container,modes)=>{
  if(!modes.length)return;
  const canvas=createEl('canvas',{width:400,height:200,className:'mx-auto border rounded'});
  const ctx=canvas.getContext('2d');
  const data=modes[0].data.schedule.slice(0,12);
  const maxPayment=Math.max(...data.map(d=>d.payment));
  ctx.fillStyle='#0e3a5b';
  data.forEach((row,i)=>{
    const height=(row.payment/maxPayment)*150;
    ctx.fillRect(i*30+10,200-height,25,height);
  });
  ctx.fillStyle='#b33951';
  ctx.font='14px sans-serif';
  ctx.fillText('📈 График на първите 12 вноски',10,20);
  container.appendChild(canvas);
};
