const toggleModeButton = document.getElementById("toggleMode");
let lastScroll = 0;

// Check the time and apply the appropriate mode automatically
function applyAutomaticMode() {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 17) {
    // Light mode during 6:00 AM to 5:00 PM
    document.body.classList.remove("dark-mode");
    toggleModeButton.textContent = "Dark Mode";
  } else {
    // Dark mode during 5:00 PM to 6:00 AM
    document.body.classList.add("dark-mode");
    toggleModeButton.textContent = "Light Mode";
  }
}

// Add event listener for manual toggle
toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text based on the current mode
  toggleModeButton.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";

  // Disable automatic mode after manual interaction
  clearInterval(autoModeInterval);
});

// Detect scroll direction to toggle header visibility
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down
    document.body.classList.remove("scroll-up");
    document.body.classList.add("scroll-down");
  } else {
    // Scrolling up
    document.body.classList.remove("scroll-down");
    document.body.classList.add("scroll-up");
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Ensure it doesn't go negative
});

// Initialize automatic mode
applyAutomaticMode();

// Check and update the mode every minute
const autoModeInterval = setInterval(applyAutomaticMode, 60000);

const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function changeImage() {
  // Remove active class from current image
  images[currentIndex].classList.remove('active');

  // Increment index and reset to 0 if at the end
  currentIndex = (currentIndex + 1) % images.length;

  // Add active class to the new image
  images[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
