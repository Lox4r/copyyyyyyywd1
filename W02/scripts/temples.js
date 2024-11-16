// Dynamically load CSS based on screen width
function applyCSS() {
    const themeStyle = document.getElementById('theme-style');
    if (window.innerWidth <= 768) {
        themeStyle.setAttribute('href', 'mobile.css'); // Load mobile CSS
    } else {
        themeStyle.setAttribute('href', 'desktop.css'); // Load desktop CSS
    }
}

// Run on page load
applyCSS();

// Adjust on window resize
window.addEventListener('resize', applyCSS);

// Filtering images (same function as before)
function filterImages(category) {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
