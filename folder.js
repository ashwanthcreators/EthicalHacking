var authenticated = sessionStorage.getItem("authenticated");

if (!authenticated) {
 
    window.location.href = "login.html";
    alert("Please Login ")
}


   