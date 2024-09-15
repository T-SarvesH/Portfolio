document.addEventListener("DOMContentLoaded", function () {
    const scrollingText = document.getElementById("BoDy");
    const textContent = scrollingText.querySelector("p");
    
    let startPosition = 0;
    const scrollStep = 1; // Adjust the scroll step as needed
    let scrollInterval;
    
    function startScrolling() {
      scrollInterval = setInterval(function () {
        startPosition -= scrollStep;
        if (Math.abs(startPosition) >= textContent.scrollHeight) {
          startPosition = scrollingText.clientHeight;
        }
        textContent.style.top = startPosition + "px";
      }, 30); // Adjust the interval as needed
    }
  
    function stopScrolling() {
      clearInterval(scrollInterval);
    }
  
    scrollingText.addEventListener("mouseover", stopScrolling);
    scrollingText.addEventListener("mouseout", startScrolling);
  
    startScrolling(); // Start scrolling initially
  });


