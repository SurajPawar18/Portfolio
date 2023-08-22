// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Section Active Link and Header Sticky
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
const sr = new ScrollReveal({
    distance: '80px',
    duration: 1500, // Decreased duration for a quicker reveal
    delay: 100 // Decreased delay for faster start
});

sr.reveal('.home-content , .heading', { origin: 'top' });
sr.reveal('.home-img , .services-container, .portfolio-box,.contact form', { origin: 'bottom' });
sr.reveal('.home-content h1,.about-img', { origin: 'left' });
sr.reveal('.home-content p,.about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Final Year Student', 'Frontend Developer', 'Software Engineer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


// SMTP Email Sending
function sendEmail() {
    Email.send({
        SecureToken: "your_secure_token_here", // Get this from SMTP provider
        To: "suraj.mpawar18@gmail.com", // Your email address
        From: document.getElementById("email").value,
        Subject: document.getElementById("subject").value,
        Body: document.getElementById("msg").value
    }).then(
        message => {
            alert("Message sent successfully!");
            resetForm();
        }
    );
}

// Reset form fields after submission
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("msg").value = "";
}

