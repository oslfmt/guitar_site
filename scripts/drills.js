const button = document.querySelector('.button');
const counter = document.querySelector('.counter');

function countdown() {
    let seconds = 60;

    function tick() {
        counter.innerHTML = String(seconds);
        seconds--;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            counter.innerHTML = `Time's Up!`;
            button.classList.remove('d-none');
        }
    }
    tick()
}

button.addEventListener('click', () => {
    // remove start button
    button.classList.add('d-none');
    // countdown to start
    let i = 3;
    let timeout = setInterval(() => {
        counter.innerHTML = `Starting in ${i}`;
        i--;
        if (i < 0) {
            // stop countdown
            clearInterval(timeout);

            // begin 60s timer
            countdown();
        }
    }, 1000);

});