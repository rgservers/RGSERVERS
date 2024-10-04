// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');

    // Select the sun and moon icons
    const sunIcon = this.querySelector('.fa-sun');
    const moonIcon = this.querySelector('.fa-moon');

    // Toggle the display of icons
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none'; // Hide sun icon in dark mode
        moonIcon.style.display = 'inline'; // Show moon icon in dark mode
    } else {
        sunIcon.style.display = 'inline'; // Show sun icon in light mode
        moonIcon.style.display = 'none'; // Hide moon icon in light mode
    }
});
