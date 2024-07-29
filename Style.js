// Function to load HTML content from a given URL
        function loadHTMLContent(url, elementId) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => console.error('Error loading HTML content:', error));
        }

        // Load the content from the specified URL into the 'content-placeholder' div
        loadHTMLContent('https://raw.githubusercontent.com/growwsocial/MyDatabase/main/Important.html', 'content-placeholder');
