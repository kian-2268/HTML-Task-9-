const submitBtn = document.getElementById("submitBtn");
const heroName = document.getElementById("heroName");
const message = document.getElementById("message");

submitBtn.addEventListener("click", function () {

    const name = heroName.value.trim();

    if (name === "") {
        // ERROR
        message.innerHTML = `
            <span class="text-danger">
                <i class="bi bi-x-circle-fill me-1"></i>
                Name cannot be empty!
            </span>
        `;
        heroName.classList.add("is-invalid");
        heroName.classList.remove("is-valid");

    } else {
        message.innerHTML = `
            <span class="text-success">
                Welcome, ${name}! 
                <i class="bi bi-check-square-fill ms-1"></i>
            </span>
        `;
        heroName.classList.remove("is-invalid");
        heroName.classList.add("is-valid");
    }
});
