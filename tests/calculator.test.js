import {calculateLoan} from '../src/services/calculator.js';

const closeTo=(value,expected,epsilon=0.5)=>Math.abs(value-expected)<=epsilon;

export const tests=[
  {
    name:'Анюитетен план с такси',
    run(){
      const result=calculateLoan({
        amount:'100000',
        rate:'3.6',
        months:'120',
        loanType:'mortgage',
        plan:'annuity',
        feeMode:'fixed1',
        customFee:'',
        infoLevel:'short',
        ctaType:'link'
      });
      const plan=result.modes.find(mode=>mode.key==='annuity');
      if(!plan)throw new Error('Планът не е наличен');
      if(!closeTo(plan.data.payment,1003.49,0.5)){
        throw new Error(`Очаквана вноска ~1003.49, получена ${plan.data.payment}`);
      }
    }
  },
  {
    name:'Намаляващ план има по-ниска обща лихва',
    run(){
      const result=calculateLoan({
        amount:'50000',
        rate:'6',
        months:'60',
        loanType:'consumer',
        plan:'both',
        feeMode:'none',
        customFee:'',
        infoLevel:'short',
        ctaType:'link'
      });
      const annuity=result.modes.find(mode=>mode.key==='annuity');
      const decreasing=result.modes.find(mode=>mode.key==='decreasing');
      if(!annuity||!decreasing)throw new Error('Липсват планове');
      if(!(decreasing.data.total<=annuity.data.total)){
        throw new Error('Намаляващият план трябва да има равна или по-ниска обща сума');
      }
    }
  }
];
