 let hours=document.getElementById("hrs");
 let mins=document.getElementById("mins");
 let secs=document.getElementById("sec");



 setInterval(()=>{

    let time= new Date();

    hours.innerHTML=(time.getHours()<10? "0":"")+time.getHours();
    mins.innerHTML=(time.getMinutes()<10? "0":"")+time.getMinutes();
    secs.innerHTML=(time.getSeconds()<10? "0":"")+time.getSeconds();

 },1000)


console.log(time)