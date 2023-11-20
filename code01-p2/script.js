document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('vehicle2');
  
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        // Replace 'your_next_page.html' with the actual URL of your next page
        window.location.href = 'file:///Users/artemis/Desktop/Web%20to%20Print/F/web/code01/index.html';
      }
    });
  });
  