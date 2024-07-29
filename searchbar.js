function searchCriminal() {
      const query = document.getElementById('search-input').value.toLowerCase();
      const entries = document.querySelectorAll('.data-card');

      entries.forEach(entry => {
        const name = entry.querySelector('.name').textContent.toLowerCase();
        if (name.includes(query)) {
          entry.style.display = 'block';
        } else {
          entry.style.display = 'none';
        }
      });
    }