let currentPage = 1;
        const totalPages = 4;
        let countdownInterval;
        let provider, state, mobileNumber, dataPlan;

        function changePage(direction) {
            document.getElementById(`page${currentPage}`).classList.remove('active');
            currentPage += direction;
            document.getElementById(`page${currentPage}`).classList.add('active');
            updateButtons();

            if (currentPage === 3) {
                startCountdown();
            } else {
                stopCountdown();
            }

            if (currentPage === 4) {
                showFinalDetails();
            }

            if (currentPage === 1) {
                showPopup1();
            }
        }

        function updateButtons() {
            document.getElementById('prevButton').disabled = currentPage === 1;
            document.getElementById('nextButton').disabled = currentPage === totalPages;
        }

        function submitAndNext() {
            provider = document.getElementById('provider').value;
            state = document.getElementById('state').value;

            if (provider && state) {
                document.getElementById('popup1').style.display = 'none';
                changePage(1);
            } else {
                alert('Please select both provider and state.');
            }
        }

        function showPopup1() {
            document.getElementById('popup1').style.display = 'block';
            checkSelections(); // Update the Next button state
        }

        // Event listeners to enable the Next button when both selections are made
        document.getElementById('provider').addEventListener('change', checkSelections);
        document.getElementById('state').addEventListener('change', checkSelections);

        function checkSelections() {
            const provider = document.getElementById('provider').value;
            const state = document.getElementById('state').value;

            if (provider && state) {
                document.getElementById('nextButton').disabled = false;
            } else {
                document.getElementById('nextButton').disabled = true;
            }
        }

        function startCountdown() {
            let timeLeft = 130;
            document.getElementById('countdown').textContent = timeLeft;
            document.getElementById('viewStatusButton').style.display = 'none'; // Hide button initially
            
            countdownInterval = setInterval(() => {
                timeLeft--;
                document.getElementById('countdown').textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('countdown').textContent = '';
                    document.getElementById('viewStatusButton').style.display = 'inline-block'; // Show button when countdown ends
                }
            }, 2000);
        }

        function stopCountdown() {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = '';
            document.getElementById('viewStatusButton').style.display = 'none'; // Hide button if page is changed
        }

        function showFinalDetails() {
            mobileNumber = document.getElementById('mobile-number-input').value;
            dataPlan = document.getElementById('data-plan-select').value;

            document.getElementById('final-provider').textContent = provider;
            document.getElementById('final-state').textContent = state;
            document.getElementById('final-mobile-number').textContent = mobileNumber;
            document.getElementById('final-data-plan').textContent = dataPlan;

            // Generate a random 12-digit reference number
            const referenceNumber = '4' + Math.floor(Math.random() * 1e11).toString().padStart(11, '0');
            document.getElementById('reference-number').textContent = referenceNumber;
        }
