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


const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(card => {
    observer.observe(card);
});


// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navLinks.classList.toggle("show");
// });



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

