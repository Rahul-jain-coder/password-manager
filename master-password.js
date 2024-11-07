// master-password.js
document.addEventListener('DOMContentLoaded', function () {
    // Functionality to toggle password visibility
    const passwordInput = document.getElementById('masterPassword');
    const toggleButton = document.getElementById('togglePassword');

    toggleButton.addEventListener('click', function () {
        // Toggle the type of the password input
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'; // Show password
            toggleButton.innerText = 'Hide'; // Change button text to 'Hide'
        } else {
            passwordInput.type = 'password'; // Hide password
            toggleButton.innerText = 'Show'; // Change button text to 'Show'
        }
    });

    // Back button functionality
    const backLink = document.querySelector('.back-link');

    backLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        window.history.back(); // Navigate to the previous page
    });

    // Handle form submission
    const masterPasswordForm = document.getElementById('masterPasswordForm');

    masterPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const enteredPassword = passwordInput.value;

        // Simulate password validation (replace with actual validation)
        if (enteredPassword === 'yourMasterPassword') { // Replace with your validation logic
            alert('Access granted!'); // Placeholder for successful access
            // Redirect or perform further actions as needed
        } else {
            document.getElementById('errorMessage').style.display = 'block'; // Show error message
        }
    });
    
});
