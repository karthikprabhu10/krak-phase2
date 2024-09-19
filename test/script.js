// There's no specific JavaScript for the newsletter section in the provided code.
// However, you might want to add form submission handling. Here's a basic example:

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailField = this.querySelector('.email-field');
        const email = emailField.value;
        
        // Here you would typically send the email to your server or newsletter service
        console.log('Subscribing email:', email);
        
        // Clear the input field after submission
        emailField.value = '';
        
        // Optionally, show a success message
        alert('Thank you for subscribing!');
      });
    }
  });