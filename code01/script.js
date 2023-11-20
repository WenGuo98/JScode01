document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('vehicle1');
    
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        window.print();
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('vehicle2');
  
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        // Replace 'your_next_page.html' with the actual URL of your next page
        window.location.href = 'file:///Users/artemis/Desktop/Web%20to%20Print/F/web/code01-p2/index.html';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var colorButton = document.getElementById('colorButton');
  
    colorButton.addEventListener('click', function() {
      var randomColor = getRandomColor();
  
      colorButton.style.backgroundColor = randomColor;
    });
  
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var backgroundColorButton = document.getElementById('backgroundcolorButton');
  
    backgroundColorButton.addEventListener('click', function() {
      // 生成随机背景颜色
      var randomColor = getRandomColor();
  
      // 改变网页背景颜色
      document.body.style.backgroundColor = randomColor;
    });
  
    // 生成随机颜色的函数
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  
  