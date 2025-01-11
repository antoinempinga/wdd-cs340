// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

// Function to show/hide car description
function toggleDescription(carNumber) {
  const descriptionDiv = document.getElementById(`car${carNumber}Description`);
  const button = document.querySelector(`button[data-car="${carNumber}"]`);

  // Toggle description visibility
  if (descriptionDiv.style.display === "block") {
    descriptionDiv.style.display = "none";  // Hide description if already visible
    button.innerText = "Learn More";        // Reset button text
  } else {
    // Display description and change button text
    descriptionDiv.style.display = "block";
    button.innerText = "Hide Info";         // Change button text
  }
}

// Add event listeners to each car's "Learn More" button
document.querySelectorAll('.learn-more-button').forEach(button => {
  button.addEventListener("click", function() {
    const carNumber = this.getAttribute("data-car");
    toggleDescription(carNumber);
  });
});

window.onload = function () {
  console.log("CSE Motors: Page Loaded.");
};
