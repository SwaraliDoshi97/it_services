window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.1)";
    }

    else {

        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.05)";
    }

});

// Contact Form
const form =
    document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

});

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const buttons = document.querySelectorAll(".show-more-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const hiddenCard = card.querySelector(".hidden_card");

        hiddenCard.classList.toggle("show");

        if (hiddenCard.clasList.contains("show")) {
            button.textContent = "show Less";
        }
        else {
            button.textContent = "show More";
        }
    });

});




