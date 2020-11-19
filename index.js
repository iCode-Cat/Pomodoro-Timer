const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const pomodoro25 = document.querySelector('.p25');
const breakShort = document.querySelector('.p5');
const breakLong = document.querySelector('.p15');

//Default Options
let minute = 25;
let second = 00;
fStart()


//Start and Pause the function.  
let go = false;
let stop = false;
let breakS = false;

//
breakShort.addEventListener('click' , ()=>{
    minute = 5;
    second = 00;
    clock.innerText = `${minute}:${second}${'0'}`
    go = false;
})
//When user click start, go turns true, functions start or continue.
start.addEventListener('click', () => {
    go = true;
    
})
//Pause stops function. It can continue by clicking start button.
pause.addEventListener('click', () => {
    go = false;
})

//Call the function.
function fStart() {
    //Check every one second. 
    setInterval(() => {

        if (go) {
            if (second == 0) {
                second = 60
                minute--
            }
            second--
            clock.innerText = `${minute}:${second}`
        }
    }, 1000);
}

