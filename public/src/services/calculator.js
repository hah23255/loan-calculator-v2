const toNumber=value=>Number(String(value).replace(/,/g,'').trim());
const monthRate=annual=>annual/12/100;
const applyFees=(principal,mode,custom)=>{if(mode==='fixed1')return principal*0.01; if(mode==='custom'&&custom)return principal*custom/100; return 0;};
const buildAnnuity=(principal,rate,months)=>{if(rate===0){const payment=principal/months;return {payment,total:payment*months,schedule:Array.from({length:months},(_,i)=>({month:i+1,payment,interest:0,principal:payment,remaining:Math.max(principal-payment*(i+1),0)}))};}
const pow=Math.pow(1+rate,months);const payment=principal*rate*pow/(pow-1);let balance=principal;const schedule=[];for(let i=1;i<=months;i+=1){const interest=balance*rate;const principalPart=payment-interest;balance=Math.max(balance-principalPart,0);schedule.push({month:i,payment,interest,principal:principalPart,remaining:balance});}return {payment,total:payment*months,schedule};};
const buildDecreasing=(principal,rate,months)=>{const basePrincipal=principal/months;let balance=principal;const schedule=[];for(let i=1;i<=months;i+=1){const interest=balance*rate;const payment=basePrincipal+interest;balance=Math.max(balance-basePrincipal,0);schedule.push({month:i,payment,interest,principal:basePrincipal,remaining:balance});}const total=schedule.reduce((acc,row)=>acc+row.payment,0);return {payment:schedule[0]?.payment??0,total,schedule};};
export const calculateLoan=formData=>{
  const principal=Math.max(toNumber(formData.amount),0);
  const months=Math.max(parseInt(formData.months,10)||0,1);
  const monthlyRate=monthRate(Math.max(toNumber(formData.rate),0));
  const fee=applyFees(principal,formData.feeMode,formData.customFee);
  const basePrincipal=principal+fee;
  const modes=[];
  if(formData.plan==='annuity'||formData.plan==='both')modes.push({key:'annuity',label:'Анюитетен план',data:buildAnnuity(basePrincipal,monthlyRate,months)});
  if(formData.plan==='decreasing'||formData.plan==='both')modes.push({key:'decreasing',label:'Намаляващ план',data:buildDecreasing(basePrincipal,monthlyRate,months)});
  return {principal,fee,months,rate:monthlyRate,modes};
};
