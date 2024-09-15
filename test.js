
const scrollContainer = document.getElementById('scrollContainer');
const scrollContent = document.getElementById('scrollContent');

// Calculate total height of content to scroll
const contentHeight = scrollContent.clientHeight;

// Scroll speed (you can adjust this value)
const scrollSpeed = 50; // Lower values make it scroll faster

// Handle scroll event
window.addEventListener('scroll', function() {
  // Calculate how much user has scrolled down
  const scrollY = window.scrollY;
  
  // Calculate how much to move the content
  const translateY = -scrollY / scrollSpeed;

  // Apply the transformation
  scrollContent.style.transform = `translateY(${translateY}px)`;

  // Reset position if scrolled to the top
  if (scrollY === 0) {
    scrollContent.style.transform = 'translateY(0)';
  }
});