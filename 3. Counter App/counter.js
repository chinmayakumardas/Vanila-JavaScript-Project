let counterValue=0;

function increase(){
    counterValue++;
    document.getElementById('value').innerText = counterValue;
    
}
function decrease(){
    counterValue--;
    document.getElementById('value').innerText = counterValue;
}
function reset(){
    counterValue=0;
    document.getElementById('value').innerText = counterValue;
}