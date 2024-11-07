document.addEventListener("DOMContentLoaded", () => {
    const createPasswordBox = document.getElementById("create-password-box");
    const closeCreatePasswordBox = document.getElementById("closeCreatePasswordBox");
    const expandedContent = createPasswordBox.querySelector(".expanded-content");

    let expandedBox = null; // Track the currently expanded box

    // Expand the Create Password box on click
    createPasswordBox.addEventListener("click", (event) => {
        if (!createPasswordBox.classList.contains("expanded")) {
            createPasswordBox.classList.add("expanded");
            expandedContent.style.display = "block";
            closeCreatePasswordBox.style.display = "block";
            expandedBox = createPasswordBox; // Set the expanded box
        }
    });

    // Collapse the Create Password box when the close button is clicked
    closeCreatePasswordBox.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent close button click from re-triggering expansion
        createPasswordBox.classList.remove("expanded");
        expandedContent.style.display = "none";
        closeCreatePasswordBox.style.display = "none";
        expandedBox = null; // Reset expanded box
    });

    // Password Generation Function
    function generateStrongPassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Update the password length and generate new password
    document.getElementById('passwordLength').addEventListener('input', () => {
        const length = document.getElementById('passwordLength').value;
        const generatedPassword = document.getElementById('generatedPassword');
        generatedPassword.textContent = generateStrongPassword(length);
    });

    // Copy generated password to clipboard
    const copyPasswordBtn = document.getElementById('copyPasswordBtn');
    copyPasswordBtn.addEventListener('click', () => {
        const passwordText = document.getElementById('generatedPassword').textContent;
        if (passwordText) {
            navigator.clipboard.writeText(passwordText);
            alert("Password copied to clipboard!");
        }
    });

    // Set up click event for Generate Password button
    const generatePasswordBtn = document.getElementById('generatePasswordBtn');
    generatePasswordBtn.addEventListener('click', () => {
        const length = document.getElementById('passwordLength').value;
        const generatedPassword = document.getElementById('generatedPassword');
        generatedPassword.textContent = generateStrongPassword(length);
        copyPasswordBtn.style.display = "inline-block"; // Show Copy button after password is generated
    });
});
