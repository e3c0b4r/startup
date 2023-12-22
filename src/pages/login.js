document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const errorElement = document.querySelector(".error-message");

    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            const response = await fetch('/path_to_server_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            console.log("User logged in successfully!");
            window.location.href = '/dashboard.html';
        } catch (error) {
            console.error(error);
            errorElement.textContent = error.message;
        }
    });
});