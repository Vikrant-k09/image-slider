// Initialize the current index to the first image
let currentIndex = 0;

// Select all images in the slider
const images = document.querySelectorAll('.slider img');

// Get the total number of images
const totalImages = images.length;

// Add event listener for the Next button
document.getElementById('next').addEventListener('click', () => {
    // Increment the current index and loop back if needed
    currentIndex = (currentIndex + 1) % totalImages;
    // Update the slider
    updateSlider();
});

// Add event listener for the Previous button
document.getElementById('prev').addEventListener('click', () => {
    // Decrement the current index and loop back if needed
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    // Update the slider
    updateSlider();
});

// Function to update the slider based on the current index
function updateSlider() {
    const offset = -currentIndex * 100; // Calculate the offset for the images
    // Apply the transform to each image
    images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
    });
}

// Optional: Automatic slideshow
setInterval(() => {
    // Increment the current index and loop back if needed
    currentIndex = (currentIndex + 1) % totalImages;
    // Update the slider
    updateSlider();
}, 3000);

// Display the first image initially
updateSlider();
