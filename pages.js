function isAuthenticated() {
    return localStorage.getItem("authenticated") === "true";
}

if (!isAuthenticated()) {
    var currentPage = window.location.pathname;
    if (currentPage !== "/login.html") {
        sessionStorage.setItem('intendedPage', currentPage);
    }
    window.location.href = "login.html";
} else {
    var url = new URL(window.location.href);
    url.searchParams.set("authenticated", "true");
    window.history.replaceState({}, '', url);
}

function setAuthenticated() {
    localStorage.setItem("authenticated", "true");
}

setAuthenticated();







function copyCommandsToClipboard() {
    const commandElements = document.querySelectorAll('.command');
    const commandsText = Array.from(commandElements).map(element => element.innerText).join('\n');

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = commandsText;

    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(tempTextArea);

    alert('Commands copied to clipboard!');
}
