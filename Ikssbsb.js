function obfuscate(str) {
            return btoa(str);
        }

        function deobfuscate(str) {
            return atob(str);
        }

        const obfuscatedId = obfuscate('9040');
        const obfuscatedPassword = obfuscate('3141');

        function login() {
            const loginId = document.getElementById('loginId');
            const loginPassword = document.getElementById('loginPassword');

            // Show verifying animation
            document.getElementById('verifyAnimation').style.display = 'block';
            
            // Simulate verification delay
            setTimeout(() => {
                document.getElementById('verifyAnimation').style.display = 'none';

                if (loginId.value === deobfuscate(obfuscatedId) && loginPassword.value === deobfuscate(obfuscatedPassword)) {
                    // Hide the login popup
                    document.getElementById('loginPopup').style.display = 'none';

                    // Redirect to a new link immediately
                    window.location.href = 'https://smmkink.socpanel.com/'; // Replace with your desired link
                } else {
                    // Show error popup
                    document.getElementById('errorAnimation').style.display = 'block';
                    
                    // Clear the input fields
                    loginId.value = '';
                    loginPassword.value = '';
                    
                    // Hide the error popup after a few seconds
                    setTimeout(() => {
                        document.getElementById('errorAnimation').style.display = 'none';
                    }, 3000);
                }
            }, 5000); // 5 seconds delay
        }
