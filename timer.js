const showDays = document.querySelector('[data-value="days"]');

const showHours = document.querySelector('[data-value="hours"]');
const showMins = document.querySelector('[data-value="mins"]');
const showSecs = document.querySelector('[data-value="secs"]');


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    start() {

        setInterval(() => {
            const currentTime = Date.now();
            const timeLeft = this.targetDate.getTime() - currentTime;
            const {days, hours, mins, secs} = getTimeComponents(timeLeft);
            screenTime(days, hours, mins, secs);
        },1000)
        
    }
 };

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 17, 2023'),
});

console.log(timer1);
timer1.start();

function pad(value) {
    return String(value).padStart(2, '0');
}
function getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs };
    
    
}


function screenTime(days, hours, mins, secs) {
    showDays.textContent = days;
           showHours.textContent = hours;
           showMins.textContent = mins;
           showSecs.textContent = secs;

}