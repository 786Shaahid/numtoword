const inputField=document.querySelector("#input");
const submitBtn=document.querySelector("#submitBtn");
const inputBox=document.querySelector("#input-box");
const outputBox=document.querySelector("#output");
const ones=['','one','two','three','four','five','six','seven','eight','nine'];
const teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninety'];
const tens=['','ten','twenty ','thirty','fourty','fifty','sixty','seventy','eighty','ninety',];

// function outputText(){
//         const outputDev=`<div id='output'></div>`
//         inputBox.insertAdjacentHTML('afterend',outputDev);
//     }
function outputfunction(value){
    if(value==='0'){
        return 'zero';
    }
    if(value<10){
        return  ones[value];
    }
    if(value<20){
        return teens[value-10]
    }
    if(value<100){
         const tensIndex=Math.floor(value/10);
         const onesIndex=value%10;
       return (tens[tensIndex] +"  "+ ones[onesIndex]) 
    }
    if(value<1000){
        const hundredPlace=Math.floor(value/100);
        const reminder=value%100;
        const tensIndex=Math.floor(reminder/10);
        const onesIndex=reminder%10;
return ( ones[hundredPlace] +"  "+"Hundred" +"  "+ tens[tensIndex]+"  " +ones[onesIndex]  )
    }
    return "mere aukad se bahar hai bhai";
}

    
submitBtn.addEventListener("click", ()=>{
  let value= inputField.value; 
  const toWord=outputfunction(value);
  outputBox.innerHTML=`${toWord}`
  inputField.value='';
})
