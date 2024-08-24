document.addEventListener('DOMContentLoaded', function() {
        // Elements for login/signup toggle
        const loginContainer = document.querySelector('.login-container');
        const signupContainer = document.querySelector('.signup-container');
        const showSignupLink = document.getElementById('show-signup');
        const showLoginLink = document.getElementById('show-login');
        
        // Toggle between login and signup containers
        showSignupLink.addEventListener('click', () => {
            loginContainer.classList.remove('active');
            signupContainer.classList.add('active');
        });

        showLoginLink.addEventListener('click', () => {
            signupContainer.classList.remove('active');
            loginContainer.classList.add('active');
        });

        // Elements for login form
        const form = document.getElementById('login-form');
        const inputs = form.querySelectorAll('.input-box');
        const loginBtn = form.querySelector('.login');

        // Toggle login button state based on form inputs
        function toggleButtonState() {
            const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
            loginBtn.disabled = !allFilled;
            loginBtn.classList.toggle('enabled', allFilled);
        }

        inputs.forEach(input => {
            input.addEventListener('input', toggleButtonState);
        });

        // Elements for signup tab functionality
        const tabs = document.querySelectorAll('.tab');
        const signupInputField = document.querySelector('.signup-container .input-field');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                signupInputField.placeholder = index === 0 ? 'Phone number' : 'Email address';
            });
        });

        // Elements for password visibility toggle
        const passwordInput = document.getElementById('password');
        const togglePasswordButton = document.getElementById('toggle-password');

        // Toggle visibility of the button based on input content
        passwordInput.addEventListener('input', function() {
            togglePasswordButton.style.display = passwordInput.value.length > 0 ? 'inline' : 'none';
        });

        // Toggle password visibility
        togglePasswordButton.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePasswordButton.textContent = type === 'password' ? '𝗦𝗵𝗼𝘄' : '𝗛𝗶𝗱𝗲';
        });

        // Elements for next button color change
        const inputField = document.querySelector('.input-field');
        const nextBtn = document.querySelector('.next-btn');

        // Update button color based on input field
        function updateButtonColor() {
            if (inputField.value.trim() !== '') {
                nextBtn.classList.add('filled');
            } else {
                nextBtn.classList.remove('filled');
            }
        }

        inputField.addEventListener('input', updateButtonColor);

        // Initial check in case input has pre-filled value
        updateButtonColor();
    });
