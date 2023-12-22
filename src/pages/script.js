// This is the entry point for the application
// This file is responsible for importing all the other files

// JS Section for the index.html page

document.addEventListener("DOMContentLoaded", function() {
    // Display a welcome message if user is logged in
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
        document.getElementById("username_placeholder").textContent = userEmail;
    } else {
        document.getElementById("username_placeholder").textContent = "Guest";
    }

    // Fetch products from your backend
    fetch('/products')
        .then(response => response.json())
        .then(data => {
            // Populate products to the page
            const displayProducts = () => {
                const productsDiv = document.createElement("div");
                productsDiv.classList.add("products");

                data.forEach(product => {
                    const productDiv = document.createElement("div");
                    productDiv.classList.add("product");

                    const productName = document.createElement("h2");
                    productName.textContent = product.name;

                    const productDesc = document.createElement("p");
                    productDesc.textContent = product.description;

                    productDiv.appendChild(productName);
                    productDiv.appendChild(productDesc);

                    productsDiv.appendChild(productDiv);
                });

                // Append the productsDiv to a specific section in your HTML
                // Replace "products_section" with the actual id of the section where you want to display the products
                document.getElementById("products_section").appendChild(productsDiv);
            };

            displayProducts();
        })
        .catch(error => console.error('Error fetching products:', error));

    // Fetch data from a third-party API and display
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            // Handle and display the data from the API
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});