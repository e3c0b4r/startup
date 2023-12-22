const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Database logic ( it need to be replaced with the actual database logic)
const DB = require('./database.js'); // For future database.js The name can change.

// Serving Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To handle JSON data from the client

// Session Middleware for user sessions
app.use(session({
  secret: 'your_secret_key', // This needs to be changed with a real secret key
  resave: false,
  saveUninitialized: true,
}));

// Login Endpoint
app.post('/path_to_server_login', async (req, res) => {
  const { email, password } = req.body;
  // implement login logic.
  // Check credentials with the database, set session details, etc.
  // Respond with an appropriate message or redirect
  if (/* login successful */) {
    req.session.user = { email };
    res.redirect('/dashboard.html'); // in case of another appropriate route
  } else {
    res.status(401).send('Invalid email or password');
  }
});

// Endpoint for user registration
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    // Implement registration logic here
    // ex, save user to DB
    // Respond with appropriate message
    res.status(201).send('User registered successfully');
});

// Endpoint for fetching product information
app.get('/products', async (req, res) => {
    // Implement logic to fetch products
    // ex, query from DB
    // Respond with products data
    res.json({ products: /* products data */ });
});

// 404 Handler for Unmatched Routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});