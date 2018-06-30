var completeDate = new Date('July 10,2019 : 18:00:00').getTime();
var countdown = document.querySelector('.countdown');


const intvl = setInterval(()=>{

var currentDate = new Date().getTime();
var DistanceDays = completeDate - currentDate;

var days = Math.floor( DistanceDays / ( 1000 * 60 * 60 * 24 ) );
var hours = Math.floor( (DistanceDays % (1000 * 60 * 60 * 24) )/(1000 * 60 * 60));
var min = Math.floor((DistanceDays % (1000 * 60 * 60 ))/(1000 * 60 ));
const seconds = Math.floor( (DistanceDays % (1000 * 60) ) / 1000);



countdown.innerHTML = `
                    <div> ${days} <span> Days </span></div>
                    <div> ${hours} <span> Hours </span></div>
                    <div> ${min}<span> Min </span></div>
                    <div> ${seconds} <span> Seconds </span></div>
                    `;

                 if(countdown < 0){
                     clearInterval(intvl);
                     countdown.style.color = 'green';
                     countdown.innerHTML="Launched";
                 }   

},1000);