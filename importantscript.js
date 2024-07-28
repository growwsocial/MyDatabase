function searchCriminal() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const entries = document.querySelectorAll('.crime-entry');

    entries.forEach(entry => {
        const title = entry.querySelector('.crime-title').textContent.toLowerCase();
        if (title.includes(input)) {
            entry.style.display = 'flex';
        } else {
            entry.style.display = 'none';
        }
    });

    // Show all entries if input is empty
    if (input === '') {
        entries.forEach(entry => {
            entry.style.display = 'none'; // Hide all entries
        });
    }
}

function openPopup(popupId) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
    
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';

    if (popupId === 'contactPopup') {
        fetchIpAddress();
    }
}

function closePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
}

window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            closePopup();
        }
    });
}

function submitReport() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
    
    if (name && age && country) {
        closePopup();
        showAnimation();
    } else {
        alert('Please fill in all fields.');
    }
}

function showAnimation() {
    const animation = document.getElementById('animation');
    animation.style.display = 'block';
    setTimeout(() => {
        animation.style.display = 'none';
    }, 5000);
}

function verifyAgent() {
    const agentId = document.getElementById('agentId').value;
    const password = document.getElementById('password').value;
    
    if (agentId && password) {
        document.getElementById('agentPopup').style.display = 'none';
        showVerificationAnimation();
    } else {
        alert('Please enter both Agent ID and Password.');
    }
}

function showVerificationAnimation() {
    const verifyAnimation = document.getElementById('verifyAnimation');
    verifyAnimation.style.display = 'block';
    setTimeout(() => {
        verifyAnimation.style.display = 'none';
        showErrorAnimation();
    }, 3000);
}

function showErrorAnimation() {
    const errorAnimation = document.getElementById('errorAnimation');
    errorAnimation.style.display = 'block';
    setTimeout(() => {
        errorAnimation.style.display = 'none';
    }, 5000);
}

function fetchIpAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipAddress').value = data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            document.getElementById('ipAddress').value = 'Unable to fetch IP';
        });
}

function submitContact() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const ipAddress = document.getElementById('ipAddress').value;
    
    if (fullName && email && mobile) {
        closePopup();
        showContactAnimation();
    } else {
        alert('Please fill in all fields.');
    }
}

function showContactAnimation() {
    const contactAnimation = document.getElementById('contactAnimation');
    contactAnimation.style.display = 'block';
    setTimeout(() => {
        contactAnimation.style.display = 'none';
    }, 5000);
}