window.addEventListener('load', () => {
    const targetDate = new Date('January 6, 2025 00:00:00').getTime();

    // Update the countdown every second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown-timer").innerHTML = "C'est le jour !";
        }


        document.querySelector('.loader').style.display = 'none'; // Hide loader
        document.querySelector('.content').style.display = 'block'; //
    }, 1000);
});
