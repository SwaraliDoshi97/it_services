window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        // navbar.style.boxShadow =
        //     "0 5px 20px rgba(0,0,0,0.1)";
    }
    else {
        navbar.classList.remove("scrolled")
        // navbar.style.boxShadow =
        //     "0 2px 10px rgba(0,0,0,0.05)";
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






