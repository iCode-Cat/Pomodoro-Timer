const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const pomodoro25 = document.querySelector('.p25');
const breakShort = document.querySelector('.p5');
const breakLong = document.querySelector('.p15');
const ring = document.querySelector('.ring');
const title = document.querySelector('title');
//Default Options
let minute = 25;
let second = 00;
fStart()

//Start and Pause the function.  
let go = false;
let stop = false;
let breakS = false;
let play = true;
//Reset the timer or set it to 25 minutes again. 
this.addEventListener('click' , (event)=> {
    if (event.target === pomodoro25 || event.target === reset ) {
        defaults()
    }
    if(event.target === breakShort) {
        breaks(5)
    }
    if(event.target === breakLong) {
        breaks(15)
    }
})
function defaults() {
    minute = 25;
    second = 00;
    clock.innerText = `${minute}:${second}${'0'}`
    go = false;
}
//Breaks
function breaks(mi){
    minute = mi;
    second = 00;
    clock.innerText = `${minute}:${second}${'0'}`
    go = false;
} 
//
//When user click start, go turns true, functions start or continue.
start.addEventListener('click', () => {
    go = true;
    play = true;
})
//Pause stops function. It can continue by clicking start button.
pause.addEventListener('click', () => {
    go = false;
})
//Call the function.
function fStart() {

    setInterval(() => {
        if(minute == 0 && second == 00) {
            go = false;
            if(play) {
                setTimeout(() => {
                    playRing()
                }, 2000);
            }
            
        }
    }, 1000);
    //Check every one second. 
    setInterval(() => {
        if (go) {

            

            if (second == 0) {
                second = 60
                minute--
            }
            second--
            clock.innerText = `${minute}:${second}`
            title.innerText = `${minute}:${second}`
    
        }
    }, 1000);
}

function playRing() {
    ring.load();
    ring.play();
    play = false;
}
