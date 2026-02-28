// verify javascript
console.log("Hello World!");

/// variables
const name = "Jonathan Chaplin";
let hasDownloadedResume = false;

// greeting function
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

// display greeting when page loads
window.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting-message");
    greetingElement.textContent = showGreeting(name);
});

// resume download alert (only once)
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".download-btn");

    downloadBtn.addEventListener("click", function () {
        if (!hasDownloadedResume) {
            alert("Your resume is downloaded successfully!");
            hasDownloadedResume = true;
        }
    });
});

// days until deadline function
function daysUntilDeadline(deadlineDate) {
    const today = new Date();
    const deadline = new Date(deadlineDate);

    const difference = deadline - today;

    const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}

const projectDeadline = "2026-05-01";
const remainingDays = daysUntilDeadline(projectDeadline);

console.log("Days until project deadline:", remainingDays);


document.addEventListener("DOMContentLoaded", function () {
    const deadlineDisplay = document.getElementById("deadline-info");
    if (deadlineDisplay) {
        deadlineDisplay.textContent =
            "Deadline: May 1, 2026 (" + remainingDays + " days remaining)";
    }
});