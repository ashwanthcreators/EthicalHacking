    var authenticated = sessionStorage.getItem("authenticated");

    if (!authenticated) {
        // Redirect back to login.html if not authenticated
       // window.location.href = "login.html";
    }

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
