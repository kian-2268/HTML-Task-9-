const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const coinDisplay = document.getElementById("coinDisplay");

let coins = 0;

// Increase
plusBtn.addEventListener("click", function () {
    coins++;
    coinDisplay.textContent = `Coins: ${coins}`;

    // Add gold effect
    coinDisplay.classList.add("text-warning", "fw-bold");
    coinDisplay.style.transform = "scale(1.2)";
    coinDisplay.style.transition = "0.2s";

    // Remove effect
    setTimeout(() => {
        coinDisplay.classList.remove("text-warning");
        coinDisplay.style.transform = "scale(1)";
    }, 200);
});

// Decrease
minusBtn.addEventListener("click", function () {
    if (coins > 0) {
        coins--;
        coinDisplay.textContent = `Coins: ${coins}`;
    }
});
