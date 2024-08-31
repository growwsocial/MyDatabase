// Create a function to load the websites in the background
function loadBackgroundTabs(urls) {
  // Get the container element
  var container = document.getElementById('iframe-container');

  // Create an iframe for each URL
  urls.forEach(function(url) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.frameBorder = 0;
    iframe.width = 0;
    iframe.height = 0;
    iframe.style.display = 'none';
    container.appendChild(iframe);
  });
}

// Function to refresh all tabs
function refreshTabs() {
  // Get all iframe elements
  var iframes = document.querySelectorAll('iframe');

  // Refresh each iframe
  iframes.forEach(function(iframe) {
    iframe.src = iframe.src;
  });
}

// Define the array of URLs
var urls = [
  'https://fast.com',
  'https://fast.com',
  'https://fast.com',
  'https://fast.com',
  'https://fast.com'
];

// Load the websites in the background
loadBackgroundTabs(urls);

// Refresh all tabs every 10 seconds
setInterval(refreshTabs, 10000);
