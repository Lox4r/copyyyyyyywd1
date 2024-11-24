
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1); 
}

function displayWindChill() {
    const temperature = 15; 
    const windSpeed = 10;
    const windChillElement = document.getElementById("wind-chill");
    const windChillNote = document.getElementById("wind-chill-note");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
        windChillNote.style.display = "none"; 
    } else {
        windChillElement.textContent = "N/A";
        windChillNote.style.display = "block"; 
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setFooterInfo(); 
    displayWindChill();  
});

const temperature = 5;  
const windSpeed = 15; 


document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedDate = new Date(document.lastModified);

    const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0');
    const day = String(lastModifiedDate.getDate()).padStart(2, '0');
    const year = lastModifiedDate.getFullYear();
    const hours = String(lastModifiedDate.getHours()).padStart(2, '0');
    const minutes = String(lastModifiedDate.getMinutes()).padStart(2, '0');
    const seconds = String(lastModifiedDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = formattedDate;
    }
});
