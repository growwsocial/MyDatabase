const providerSelect = document.getElementById('provider');
const stateSelect = document.getElementById('state');
const nextButton = document.getElementById('nextButton');

function checkSelections() {
    if (providerSelect.value && stateSelect.value) {
        nextButton.disabled = false;
        nextButton.classList.add('blinking');
    } else {
        nextButton.disabled = true;
        nextButton.classList.remove('blinking');
    }
}

providerSelect.addEventListener('change', checkSelections);
stateSelect.addEventListener('change', checkSelections);

function submitAndNext() {
    // Your existing code to handle the "Next" button click
}
