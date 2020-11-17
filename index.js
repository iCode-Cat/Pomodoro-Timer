const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const pomodoro25 = document.querySelector('.p25');
const breakShort = document.querySelector('.p5');
const breakLong = document.querySelector('.p15');

//Default Options
let minute = 24;
let second = 60;



//Start and Pause the function.  
let go = false;
let stop = false;

pomodoro25.addEventListener('click' , ()=>{
    
    minute = 4;
    second = 60;
    clock.innerText = `${minute}:${second}`
    go = false;
})
//When user click start, go turns true, functions start or continue.
start.addEventListener('click', () => {
    go = true;
    if(!stop){
        fStart(minute,second)
    }
    stop = true;
    
})
//Pause stops function. It can continue by clicking start button.
pause.addEventListener('click', () => {
    go = false;
})

//Call the function.


function fStart(minutes,seconds) {
    //Check every one second. 
    setInterval(() => {

        if (go) {
            if (seconds == 0) {
                seconds = 60
                minutes--
            }
            seconds--
            clock.innerText = `${minutes}:${seconds}`
        }
    }, 1000);
}