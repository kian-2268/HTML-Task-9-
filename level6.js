function chooseDoor(doorNumber) {

    const resultBox = document.getElementById("resultBox");

    if (doorNumber === 2) {

        resultBox.className = "alert alert-success mb-3";
        resultBox.innerHTML = `
            <i class="bi bi-check-circle-fill me-1"></i>
            Congratulations! You picked the correct door!
        `;

    } else {

        resultBox.className = "alert alert-danger mb-3";
        resultBox.innerHTML = `
            <i class="bi bi-x-circle-fill me-1"></i>
            Wrong door! Try again.
        `;
    }
}