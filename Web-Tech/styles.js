// styles.js

// Function to change the background color of the header
function changeHeaderColor() {
    document.querySelector('header').style.backgroundColor = '#007bff';
}

// Function to change the font size of the page
function changeFontSize() {
    document.querySelectorAll('p').forEach(function(para) {
        para.style.fontSize = '16px';
    });
}

// Function to add a border to images
function addBorderToImages() {
    document.querySelectorAll('img').forEach(function(image) {
        image.style.border = '2px solid #007bff';
    });
}

// Call the functions when the page loads
window.onload = function() {
    changeHeaderColor();
    changeFontSize();
    addBorderToImages();
};
