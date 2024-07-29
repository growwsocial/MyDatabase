 function searchEntry() {
      const query = document.getElementById('search-input').value.toLowerCase().trim();
      const entries = document.querySelectorAll('.data-card');
      const messageElement = document.getElementById('search-message');
      let found = false;
      let resultCount = 0;

      // If the search input is empty, hide all entries and clear the message
      if (query === '') {
        entries.forEach(entry => {
          entry.style.display = 'none';
        });
        messageElement.textContent = 'Please enter a search term';
        return;
      }

      // If the search input is not empty, show or hide entries based on the query
      entries.forEach(entry => {
        const name = entry.querySelector('.name').textContent.toLowerCase();
        if (name.includes(query)) {
          entry.style.display = 'block';
          found = true;
          resultCount++;
        } else {
          entry.style.display = 'none';
        }
      });

      // Update the message based on the search results
      if (found) {
        messageElement.textContent = `${resultCount} result${resultCount > 1 ? 's' : ''} found`;
      } else {
        messageElement.textContent = 'No results found';
      }
    }

    // Hide all data cards initially
    document.addEventListener('DOMContentLoaded', () => {
      const entries = document.querySelectorAll('.data-card');
      entries.forEach(entry => {
        entry.style.display = 'none';
      });
    });
