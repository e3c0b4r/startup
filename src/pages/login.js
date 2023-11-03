

// Mock database user data (just testing for now)
const mockDBUsers = [
    {
        email: "test@example.com",
        password: "password123" //  passwords should never be stored in plain text in a real application
    }
];

// Future WebSocket support
// Placeholder for setting up a WebSocket connection
const socket = new WebSocket('ws://your-websocket-endpoint');

socket.addEventListener('open', function (event) {
    console.log('WebSocket connection opened:', event);
});

socket.addEventListener('message', function (event) {
    console.log('Message received from server:', event.data);
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailInput = document.querySelector("#email").value;
        const passwordInput = document.querySelector("#password").value;

        // Simplified login logic using mock data
        const user = mockDBUsers.find(user => user.email === emailInput && user.password === passwordInput);

        if (user) {
            // Log the user in (this would typically redirect or change UI state)
            console.log("User logged in successfully!");
            // Placeholder for sending a message via WebSocket after successful login
            socket.send('User logged in successfully');
        } else {
            console.error("Invalid email or password");
        }
    });
});