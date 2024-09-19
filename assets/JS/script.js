// document.getElementById('mobile-menu').addEventListener('click', function() {
//     var navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// });
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
// ... existing commented out scroll code ...
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookie = document.getElementById('acceptCookie');
    const modal = document.getElementById('modal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');

    // Check if the user has already accepted cookies
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    console.log('Cookie accepted status:', cookieAccepted); // Debugging line

    if (cookieAccepted !== 'true') {
        console.log('Showing cookie banner.'); // Debugging line
        cookieBanner.style.display = 'block';
    } else {
        console.log('Cookie already accepted, hiding banner.'); // Debugging line
        cookieBanner.style.display = 'none';
    }

    // Close Cookie Banner and store acceptance in localStorage
    acceptCookie.addEventListener('click', function () {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.style.display = 'none';
        console.log('Cookie acceptance saved in localStorage.'); // Debugging line
    });

    // Open Modal
    openModal.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close Modal
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close Modal by clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// Keep the mobile menu toggle outside DOMContentLoaded if it's in the header
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
