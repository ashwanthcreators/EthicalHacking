var loginAttempts = 0;
var loginTimeout;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username === "user" && password === "pass") || (username === "ash" && password === "ash")) {
        sessionStorage.setItem("authenticated", "true");
        // Set cookie to expire in one hour
        var expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + (1 * 60 * 60 * 1000)); // One hour in milliseconds
        document.cookie = "authenticated=true; expires=" + expiryDate.toUTCString() + "; path=/";
        window.location.href = "home.html";
    } else {
        loginAttempts++;
        if (loginAttempts === 4) {
            alert("You have one more attempt left before being blocked for 10 minutes.");
        }
        if (loginAttempts >= 5 && loginAttempts < 8) {
            disableForm();
            alert("You have been blocked for 10 minutes.");
            sessionStorage.setItem("blockedUntil", Date.now() + 600000); // Store block expiration time
            loginTimeout = setTimeout(enableForm, 600000); // 10 minutes in milliseconds
        } else if (loginAttempts >= 8 && loginAttempts < 11) {
            disableForm();
            alert("You have been blocked for 1 hour.");
            sessionStorage.setItem("blockedUntil", Date.now() + 3600000); // Store block expiration time
            loginTimeout = setTimeout(enableForm, 3600000); // 1 hour in milliseconds
        } else if (loginAttempts >= 11) {
            alert("You have exceeded the maximum number of login attempts. Your account has been permanently disabled.");
            disableForm();
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
}

function checkBlockedStatus() {
    var blockedUntil = sessionStorage.getItem("blockedUntil");
    if (blockedUntil && Date.now() < parseInt(blockedUntil)) {
        disableForm();
        var remainingTime = Math.ceil((parseInt(blockedUntil) - Date.now()) / 60000); // Convert milliseconds to minutes
        alert("You are currently blocked. Please try again after " + remainingTime + " minutes.");
        setTimeout(enableForm, parseInt(blockedUntil) - Date.now());
    }
}

// Call checkBlockedStatus function when the page loads to check if the user is currently blocked
checkBlockedStatus();

// Check if the user has an existing login cookie
function checkLoginCookie() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] === "authenticated" && cookie[1] === "true") {
            // Validate the login if the cookie is still valid
            var expiryDate = new Date(cookie[1]);
            if (expiryDate > new Date()) {
                sessionStorage.setItem("authenticated", "true");
                window.location.href = "home.html";
            } else {
                // Remove expired cookie
                document.cookie = "authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        }
    }
}

// Call checkLoginCookie function when the page loads to check for existing login cookies
checkLoginCookie();

function disableForm() {
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("loginButton").disabled = true;
}

function enableForm() {
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("loginButton").disabled = false;
    loginAttempts = 0;
    clearTimeout(loginTimeout);
}

function validateForm() {
    login();
    return false; // Prevent form submission
}

function checkEnter(event) {
    if (event.key === "Enter") {
        login();
    }
}

function moveToPassword(event) {
    if (event.key === "Enter") {
        document.getElementById("password").focus();
    }
}

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode == 123) { // F12 key code
        event.preventDefault();
    }
});

window.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}