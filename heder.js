  const allowedDomain = 'smmservice12.socpanel.com';

        // Function to dynamically insert and show the popup
        function showPopup() {
            const overlay = document.createElement('div');
            overlay.className = 'x1y2z3';
            document.body.appendChild(overlay);

            const popup = document.createElement('div');
            popup.className = 'j4k5l6';
            popup.innerHTML = `
                <div class="k7m8n9">
                    <p>You have not purchased. <a href="https://yourlandingpage.com">Click here</a> to purchase.</p>
                    <button class="b1c2d3" onclick="window.location.href='https://yourlandingpage.com'">Purchase Now</button>
                </div>
            `;
            document.body.appendChild(popup);

            // Apply styles
            overlay.style.display = 'block';
            document.querySelector('.z9y8x7').classList.add('a1b2c3');
            popup.style.display = 'flex';
            popup.style.opacity = '0.9';  // Make it slightly transparent
        }

        // Check domain and show popup if necessary
        if (window.location.hostname !== allowedDomain) {
            showPopup();
        }
