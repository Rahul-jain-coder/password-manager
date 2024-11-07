// registration.js
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Retrieve form values
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const masterPassword = document.getElementById('master-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Basic validation
        if (masterPassword !== confirmPassword) {
            alert('Master passwords do not match. Please try again.');
            return;
        }

        // Simulate registration success
        alert('Registration successful! Redirecting to the master password page...');
        
        // Redirect to the master-password page
        window.location.href = 'master-password.html';
    });

    const backLink = document.querySelector('.back-link');

    backLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        window.history.back(); // Navigate to the previous page
    });
});
