function validateAndProceed() {
    const mobileNumber = document.getElementById('mobile-number-input').value;
    const dataPlan = document.getElementById('data-plan-select').value;
    const boxContainer = document.querySelector('.box-container');

    // Check if the mobile number is 10 digits and a data plan is selected
    if (mobileNumber && dataPlan) {
        if (/^\d{10}$/.test(mobileNumber)) {
            boxContainer.classList.remove('invalid');
            boxContainer.classList.add('valid');
            changePage(1); // Proceed to the next page
        } else {
            boxContainer.classList.remove('valid');
            boxContainer.classList.add('invalid');
            alert('Please enter a valid 10-digit mobile number.');
        }
    } else {
        boxContainer.classList.remove('valid');
        boxContainer.classList.add('invalid');
        alert('Please complete all fields before proceeding.');
    }
}
