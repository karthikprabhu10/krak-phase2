function loadHTML(id, file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById(id).innerHTML = this.responseText;
        } else {
            console.error('Error loading ' + file);
        }
    };
    xhr.send();
}

// Load navbar and footer
loadHTML('navbar', '/components/navbar.html');
loadHTML('footer', '/components/footer.html');


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
// ..