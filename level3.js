// Get elements
const badge = document.getElementById("badge");
const button = document.getElementById("levelUpBtn");

// Starting level
let level = 3;

button.addEventListener("click", function () {
    level++; // increase level
    
    // Update badge text
    badge.innerHTML = `
        <i class="bi bi-bar-chart-steps me-1"></i>
        Level ${level}
    `;
});