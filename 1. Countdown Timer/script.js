const endDate = "24 March 2025 10:20:00 PM"
const inputs=document.querySelectorAll("input");
//const clock



document.getElementById("end-date").innerText = endDate;
const clock=()=>{
    const end=new Date(endDate);
    const now=new Date();

    const diff=(end-now)/1000;
    console.log(diff);//it show in sec
   inputs[0].value= Math.floor(diff/3600/24);
   inputs[1].value= Math.floor((diff/3600)%24);
   inputs[2].value= Math.floor((diff/60)%60);
   inputs[3].value= Math.floor((diff%60));
    //convert into days

}

//initial call
clock();

/**
1 day=24hr
1 hr=60 min
1 min=60 sec 
* */

setInterval(()=>{
    clock()
},1000)