function createBox() {
    const button = document.createElement("button");
    button.innerText = "Click me";
    button.onclick = () => {
        alert("Button clicked!");
    };
    box.appendChild(button);

    document.body.appendChild(box);
}
document.addEventListener("DOMContentLoaded", function () {
    createBox();
});

// Get the current URL of the active tab
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;

    // Check if the current URL contains "/imports"
    if (currentUrl.includes("/imports")) {
        // Add a "Show Unused" button to the menu
        var showUnusedButton = document.createElement("button");
        showUnusedButton.innerText = "Show Unused";
        showUnusedButton.addEventListener("click", function () {
            // Code to show unused imports goes here
        });
        document.getElementById("menu").appendChild(showUnusedButton);

        // Add a "Delete Unused" button to the menu
        var deleteUnusedButton = document.createElement("button");
        deleteUnusedButton.innerText = "Delete Unused";
        deleteUnusedButton.addEventListener("click", function () {
            // Code to delete unused imports goes here
        });
        document.getElementById("menu").appendChild(deleteUnusedButton);

        // Change the text of Action 1 to "Go to Imports Page"
        document.getElementById("action1").innerText = "Go to Imports Page";
        document.getElementById("action1").addEventListener("click", function () {
            chrome.tabs.update({ url: "https://eu.integrator.io/imports" });
        });
    }
});

// Add event listeners for the other action buttons
document.getElementById("action2").addEventListener("click", function () {
    // Code for Action 2 goes here
});

document.getElementById("action3").addEventListener("click", function () {
    // Code for Action 3 goes here
});

document.getElementById("showlog").addEventListener("click", function () {
    // Code to show the log goes here
});
