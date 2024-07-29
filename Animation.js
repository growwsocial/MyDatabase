// Create a new anchor element
  const link = document.createElement('a');
  
  // Set the href attribute
  link.href = 'https://raw.githubusercontent.com/growwsocial/MyDatabase/main/Important.html';
  
  // Set the class attribute
  link.className = 'popup';
  
  // Set the id attribute
  link.id = 'error';
  
  // Optionally, add any additional attributes or styles
  link.target = '_blank'; // Open in a new tab

  // Append the link to the body or another element
  document.body.appendChild(link);
