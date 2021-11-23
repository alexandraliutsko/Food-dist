export default function timer(id, deadline) {

    function getTimerDifference(endtime) {
        const t = Date.parse(endtime) - new Date(),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes':  minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimerDifference(endtime);

            days.innerHTML = t.days < 10 ? `0${t.days}` : `${t.days}`;
            hours.innerHTML = t.hours < 10 ? `0${t.hours}` : `${t.hours}`;
            minutes.innerHTML = t.minutes < 10 ? `0${t.minutes}` : `${t.minutes}`;
            seconds.innerHTML = t.seconds < 10 ? `0${t.seconds}` : `${t.seconds}`;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}
