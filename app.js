let count=0;
let saveEl=document.getElementById("save-el");
function increment(){
    count++;
    document.getElementById("count-el").textContent = count;
}
function save(){
    saveEl.textContent += count +" - ";
    document.getElementById("count-el").textContent = 0;
    count = 0;
    
}
