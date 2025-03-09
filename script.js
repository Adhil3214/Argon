document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username input value
    let username = document.getElementById("username").value;

    // Show profile section
    document.getElementById("profileContainer").style.display = "block";
    document.getElementById("userNameDisplay").innerText = username;

    // Hide login form
    document.querySelector(".login-container").style.display = "none";
});
