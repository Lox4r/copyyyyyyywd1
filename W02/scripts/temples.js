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


const lastModifiedDate = new Date(document.lastModified);

const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
};
const formattedDate = lastModifiedDate.toLocaleDateString('en-US', options).replace(',', '');

document.getElementById('lastModified').textContent = formattedDate;
