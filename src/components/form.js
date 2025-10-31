import {createEl,createIcon,clearEl} from '../utils/dom.js';
import {validateLoanInputs} from '../utils/validation.js';

const loanOptions=[
  {value:'mortgage',label:'🏠 Ипотечен',icon:'house'},
  {value:'consumer',label:'💳 Потребителски',icon:'creditcard'},
  {value:'auto',label:'🚗 Автокредит',icon:'car'},
  {value:'other',label:'✨ Друг',icon:'calculator'}
];
const planOptions=[
  {value:'annuity',label:'🔄 Анюитетен'},
  {value:'decreasing',label:'📉 Намаляващ'},
  {value:'both',label:'⚖️ Сравнение'}
];
const feeOptions=[
  {value:'none',label:'🚫 Без такси'},
  {value:'fixed1',label:'💰 1% фиксирана'},
  {value:'custom',label:'🎛️ Персонализирана'}
];
const infoOptions=[
  {value:'short',label:'📝 Кратко'},
  {value:'extended',label:'📖 Разширено'},
  {value:'none',label:'🙅 Без'}
];
const ctaOptions=[
  {value:'form',label:'📧 Форма'},
  {value:'link',label:'🔗 Линк'},
  {value:'none',label:'❌ Без'}
];

export const createLoanForm=(onSubmit)=>{
  const errorContainer=createEl('div',{className:'mb-4'});
  const customFeeField=createEl('input',{type:'number',name:'customFee',step:'0.01',placeholder:'%',className:'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'});
  const form=createEl('form',{className:'bg-white p-6 rounded-lg shadow-lg space-y-4',noValidate:true},[
    errorContainer,
    createEl('label',{className:'block'},['💰 Сума (лв.)',createEl('input',{type:'number',name:'amount',value:'200000',step:'1000',className:'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'})]),
    createEl('label',{className:'block'},['📈 Лихва (%)',createEl('input',{type:'number',name:'rate',value:'3.2',step:'0.1',className:'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'})]),
    createEl('label',{className:'block'},['⏰ Месеци',createEl('input',{type:'number',name:'months',value:'240',className:'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'})]),
    createEl('label',{className:'block'},['🏦 Тип кредит',selectFrom('loanType',loanOptions,'mortgage',false)]),
    createEl('label',{className:'block'},['📊 План',selectFrom('plan',planOptions,'both',false)]),
    createEl('label',{className:'block'},['💸 Такси',selectFrom('feeMode',feeOptions,'none',false)]),
    createEl('label',{className:'block'},['🎯 % Такси',customFeeField]),
    createEl('label',{className:'block'},['ℹ️ Инфо',selectFrom('infoLevel',infoOptions,'short',false)]),
    createEl('label',{className:'block'},['📢 CTA',selectFrom('ctaType',ctaOptions,'link',false)]),
    createEl('div',{className:'flex gap-4 flex-wrap'},[
      createEl('button',{type:'submit',className:'bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded transition transform hover:scale-105'},[createIcon('calculator',16),' 🚀 Изчисли']),
      createEl('button',{type:'reset',className:'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition'},['🔄 Изчисли'])
    ])
  ]);

  form.addEventListener('submit',evt=>{
    evt.preventDefault();
    const formData=readForm(form);
    const errors=validateLoanInputs(formData);
    
    if(errors.length>0){
      displayErrors(errorContainer,errors);
      return;
    }
    
    clearErrors(errorContainer);
    onSubmit(formData);
  });

  form.addEventListener('reset',()=>{
    window.requestAnimationFrame(()=>{
      customFeeField.className='hidden';
      customFeeField.value='';
      clearErrors(errorContainer);
      onSubmit(readForm(form));
    });
  });

  form.elements.feeMode.addEventListener('change',evt=>{
    const mode=evt.target.value;
    customFeeField.className=mode==='custom'?'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary':'hidden';
    if(mode==='fixed1')customFeeField.value='';
  });

  const section=createEl('section',{className:'animate-fade-in'},[
    createEl('h1',{className:'text-3xl font-bold text-center text-primary mb-4'},['🎉 Кредитен Калкулатор v2']),
    createEl('p',{className:'text-center text-gray-600 mb-6'},['Изчисли кредита си като истински Gen Z! 💥']),
    form
  ]);

  // Initial calculation with default values
  const initialData=readForm(form);
  const initialErrors=validateLoanInputs(initialData);
  if(initialErrors.length===0){
    onSubmit(initialData);
  }
  
  return section;
};

const selectFrom=(name,options,selected,required=false)=>createEl('select',{name,required,className:'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'},options.map(({value,label,icon})=>{
  const option=createEl('option',{value},[label]);
  if(value===selected)option.selected=true;
  return option;
}));

const readForm=form=>({
  amount:form.elements.amount.value,
  rate:form.elements.rate.value,
  months:form.elements.months.value,
  loanType:form.elements.loanType.value,
  plan:form.elements.plan.value,
  feeMode:form.elements.feeMode.value,
  customFee:form.elements.customFee.value,
  infoLevel:form.elements.infoLevel.value,
  ctaType:form.elements.ctaType.value
});

const displayErrors=(container,errors)=>{
  clearEl(container);
  const errorBox=createEl('div',{className:'bg-red-50 border-l-4 border-red-500 p-4 mb-4 animate-fade-in'},[
    createEl('h3',{className:'font-bold text-red-800 mb-2'},['🚨 Опа! Нещо не е наред:']),
    createEl('ul',{className:'list-disc list-inside space-y-1'},errors.map(err=>
      createEl('li',{className:'text-red-700'},[err.message])
    ))
  ]);
  container.appendChild(errorBox);
};

const clearErrors=container=>{
  clearEl(container);
};
