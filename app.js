function switchToNight() {
    document.body.classList.add("night-mode");
    document.getElementById("navbar").classList.add("night-mode")
    document.getElementById("dayBtn").style.display = "none";
    document.getElementById("nightBtn").style.display = "inline";

    const nightModeElements = document.querySelectorAll("#mainDiv, #navbar, #pageTwo, .card");

    nightModeElements.forEach((el) => {
        el.classList.add("night-mode");
        console.log("added")
    });
}

function switchToDay() {
    document.getElementById("navbar").classList.remove("night-mode")
    document.body.classList.remove("night-mode");
    document.getElementById("dayBtn").style.display = "inline";
    document.getElementById("nightBtn").style.display = "none";

    const nightModeElements = document.querySelectorAll(".whiteBox");

    nightModeElements.forEach((el) => {
        el.classList.remove("night-mode");
    });
}