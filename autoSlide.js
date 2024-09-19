let countdown = 30;
const countdownElement = document.getElementById('countdown');
const nextImageLink = document.getElementById('nextImageLink');

function updateCountdown() {
    countdownElement.textContent = countdown;
    if (countdown <= 0) {
        window.location.href = nextImageLink.href;
    } else {
        countdown--;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();
