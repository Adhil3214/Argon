document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Stop the default form submission

    // Get input values
    let username = document.querySelector("input[type='text']").value;
    let password = document.querySelector("input[type='password']").value;

    // Check if both fields are filled
    if (username && password) {
        // Save user info (Optional)
        localStorage.setItem("user", username);
        
        // Redirect to another page
        window.location.href = "dashboard.html";  // Change this to your target page
    } else {
        alert("Please enter both username and password.");
    }
});
