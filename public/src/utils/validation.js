// Validation utilities for loan calculator form inputs
const toNumber=value=>Number(String(value).replace(/,/g,'').trim());

export const validateLoanInputs=(formData)=>{
  const errors=[];
  const amount=toNumber(formData.amount);
  const rate=toNumber(formData.rate);
  const months=parseInt(formData.months,10);
  const customFee=formData.customFee?toNumber(formData.customFee):0;

  // Validate amount
  if(!formData.amount||formData.amount.trim()===''){
    errors.push({field:'amount',message:'⚠️ Моля, въведи сума за кредита!'});
  }else if(amount<=0){
    errors.push({field:'amount',message:'❌ Сумата трябва да е положително число!'});
  }else if(amount>10000000){
    errors.push({field:'amount',message:'🚫 Сумата е твърде голяма (макс. 10 млн. лв.)'});
  }

  // Validate rate
  if(!formData.rate||formData.rate.trim()===''){
    errors.push({field:'rate',message:'⚠️ Моля, въведи лихвен процент!'});
  }else if(rate<0){
    errors.push({field:'rate',message:'❌ Лихвата не може да е отрицателна!'});
  }else if(rate>100){
    errors.push({field:'rate',message:'🚫 Лихвата е твърде висока (макс. 100%)'});
  }

  // Validate months
  if(!formData.months||formData.months.trim()===''){
    errors.push({field:'months',message:'⚠️ Моля, въведи срок в месеци!'});
  }else if(isNaN(months)||months<=0){
    errors.push({field:'months',message:'❌ Срокът трябва да е положително цяло число!'});
  }else if(months>600){
    errors.push({field:'months',message:'🚫 Срокът е твърде дълъг (макс. 600 месеца)'});
  }

  // Validate custom fee if applicable
  if(formData.feeMode==='custom'){
    if(!formData.customFee||formData.customFee.trim()===''){
      errors.push({field:'customFee',message:'⚠️ Моля, въведи процент за таксите!'});
    }else if(customFee<0){
      errors.push({field:'customFee',message:'❌ Процентът за такси не може да е отрицателен!'});
    }else if(customFee>50){
      errors.push({field:'customFee',message:'🚫 Процентът за такси е твърде висок (макс. 50%)'});
    }
  }

  return errors;
};
