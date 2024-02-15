let alhumdulillahValue = document.getElementById('alhumdulillah-value');
let alhumdulillahIncrese = document.getElementById('alhumdulillah-increse');
let alhumdulillahDecrese = document.getElementById('alhumdulillah-decrese');
const subanallahValue = document.getElementById('subanallah-value');
const subanallahIncrese = document.getElementById('subanallah-increse');
const subanallahDecrese = document.getElementById('subanallah-decrese');
const allahhuakburValue = document.getElementById('allahhuakbur-value');
const allahhuakburIncrese = document.getElementById('allahhuakbur-increse');
const allahhuakburDecrese = document.getElementById('allahhuakbur-decrese');
const resetBtn = document.getElementById('reset-btn');

let alhumdulillahIntialValue = 0;
let subanallahInititalValue = 0;
let allahhuakburIntialValue = 0;

// first card :
alhumdulillahIncrese.addEventListener('click',function(){
    if(alhumdulillahIntialValue === 33){
        alert("Plaese Fill Up Another Card")
    }
   alhumdulillahIntialValue += 1;
   alhumdulillahValue.innerText = alhumdulillahIntialValue;
})
alhumdulillahDecrese.addEventListener('click',function(){
    if(alhumdulillahIntialValue === 0){
        alert("There are nothing to Decrese Please go to another card")
    }
   alhumdulillahIntialValue -= 1;
   alhumdulillahValue.innerText = alhumdulillahIntialValue;
})

// second card :
subanallahIncrese.addEventListener('click',function(){
    if(subanallahInititalValue === 33){
        alert("Plaese Fill Up Another Card")
    }
    subanallahInititalValue += 1;
    subanallahValue.innerText = subanallahInititalValue;
})
subanallahDecrese.addEventListener('click',function(){
    if(subanallahInititalValue === 0){
        alert("There are nothing to Decrese Please go to another card")
    }
    subanallahInititalValue -= 1;
    subanallahValue.innerText = subanallahInititalValue;
})

// third card :
allahhuakburIncrese.addEventListener("click",function(){
    if(allahhuakburIntialValue === 33){
        alert("Plaese Fill Up Another Card")
    }
    allahhuakburIntialValue += 1;
    allahhuakburValue.innerText = allahhuakburIntialValue;
})
allahhuakburDecrese.addEventListener("click",function(){
    if(allahhuakburIntialValue === 0){
        alert("There are nothing to Decrese Please go to another card")
    }
    allahhuakburIntialValue -= 1;
    allahhuakburValue.innerText = allahhuakburIntialValue;
})

resetBtn.addEventListener("click",function(){
    alhumdulillahValue.innerText = 0;
    subanallahValue.innerText = 0;
    allahhuakburValue.innerText = 0;
    alhumdulillahIntialValue = 0;
    subanallahInititalValue = 0;
    allahhuakburIntialValue = 0;
})