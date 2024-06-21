const pages = [
    { title: "Url Attacks", url: "attacks with urls.html" },
    { title: "Instagram Copyright Attacks", url: "humererror.html" },
    { title: "Wifi Deauther", url: "wifi_deauther.html" },
    { title: "Sherlock", url: "sherlock.html" },
    { title: "Profil3r", url: "profil3r.html" },
    { title: "Phoneinfoga", url: "phoneinfoga.html" },
    { title: "OSINT", url: "OSINT.html" },
    { title: "Adb", url: "adbdevices.html" },
    { title: "Little Brother", url: "littlebrother.html" },
    { title: "Social Mapper", url: "socia_mapper.html" },
    { title: "Canary", url: "canary.html" },
    { title: "OPRecon", url: "OPRecon.html" },
    { title: "Ghunt", url: "ghunt.html" },
    { title: "Trape", url: "trape.html" },
    { title: "HTA", url: "hta.html" },
    { title: "Camphish", url: "camhack.html" },
    { title: "Seeker", url: "locate.html" },
    { title: "Linux in windows", url: "linuxinstallation.html" },
    { title: "Theharvester", url: "theharvester.html" },
    { title: "Spiderfoot", url: "spiderfoot.html" },
    { title: "Steganography", url: "stepnography.html" },
    { title: "Fbi", url: "fbi.html" },
    { title: "Anonymous", url: "anonymous.html" },
    { title: "Cmsmap", url: "cmsmap.html" },
    { title: "Ct-exposer", url: "ct-exposer.html" },
    { title: "Cmseek", url: "cmseek.html" },
    { title: "Pastejacker", url: "pastejacker.html" },
    { title: "Pdf Cracking", url: "pdf.html" },
    { title: "Knock", url: "knock.html" },
    { title: "Maryam Osint", url: "maryam.html" },
    { title: "OSRipper", url: "osripper.html" },
    { title: "QrlJacking", url: "qrljacking.html" },
    { title: "WhatsApp hack", url: "callToIP.html" },
    { title: "Dos Attack", url: "dos_attack.html" },
    { title: "Cupp the password generator", url: "cupp.html" },
];

function searchPage() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = "";

    if (!query) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Type anything to search";
        searchResultsDiv.appendChild(emptyMessage);
        return;
    }

    const results = pages.filter(page => page.title.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(page => {
            const resultItem = document.createElement("a");
            resultItem.href = page.url;
            resultItem.textContent = page.title;
            searchResultsDiv.appendChild(resultItem);
        });
    } else {
        const noResults = document.createElement("p");
        noResults.textContent = "No Results found.";
        searchResultsDiv.appendChild(noResults);
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        searchPage();
    }
}

function focusSearchBox() {
    document.getElementById("searchBox").focus();
}

var authenticated = sessionStorage.getItem("authenticated");

if (!authenticated) {
    window.location.href = "login.html";
    alert("Please Login");
}
