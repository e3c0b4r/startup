// This event listener waits for the HTML document to be completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function() {

    // Selects the first element within the document that matches the specified selector, in this case, the login form.
    const loginForm = document.querySelector(".login-form");

    // Selects the first element within the document that matches the specified selector, in this case, the error message element.
    const errorElement = document.querySelector(".error-message");

    // This event listener waits for the submit event on the login form.
    loginForm.addEventListener("submit", async function(event) {

        // Prevents the browser's default action of submitting the form.
        event.preventDefault();

        // Creates a FormData object which builds a set of key/value pairs representing form fields and their values.
        const formData = new FormData(this);

        // Retrieves the 'email' and 'password' values from the form data.
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            // Sends a request to the server-side login endpoint with the form data.
            const response = await fetch('/path_to_server_login', {
                method: 'POST',
                body: formData
            });

            // If the response is not ok (status is not within the range 200-299), throws an error.
            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            // Logs a message to the console indicating that the user has logged in successfully.
            console.log("User logged in successfully!");

            // Redirects the user to the dashboard page after successful login.
            window.location.href = '/dashboard.html';
        } catch (error) {
            // If an error is caught, logs the error to the console and displays the error message to the user.
            console.error(error);
            errorElement.textContent = error.message;
        }
    });
});