import {createEl} from './utils/dom.js';
import {createLoanForm} from './components/form.js';
import {createResultsView,renderResults} from './components/results.js';
import {calculateLoan} from './services/calculator.js';

const app=document.getElementById('app');
const hero=createEl('header',{className:'bg-gradient-to-r from-primary to-light text-white py-12 px-4 rounded-lg shadow-lg mb-8 animate-bounce-in'},[
  createEl('h1',{className:'text-4xl font-bold text-center mb-4'},['🚀 Кредитен Калкулатор v2']),
  createEl('p',{className:'text-center text-xl'},['Бързо, лесно и стилно за Gen Z! 💥'])
]);
app.appendChild(hero);

const layout=document.createElement('div');
layout.className='grid grid-cols-1 lg:grid-cols-2 gap-8';
app.appendChild(layout);

const resultsView=createResultsView();

const onFormChange=data=>{
  const result=calculateLoan(data);
  renderResults(resultsView,result,data);
};

const formView=createLoanForm(onFormChange);
layout.appendChild(formView);
layout.appendChild(resultsView);
