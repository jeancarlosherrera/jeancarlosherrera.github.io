
document.addEventListener("DOMContentLoaded", () => {
    const themeStyleSheet = document.getElementById("theme");
    const toggleButton = document.getElementById("toggle-btn");
    const togglePhoto = document.getElementById("photo");
    const toggleIcon = document.getElementById("toggle-icon");
    toggleButton.addEventListener("click", () => {
        if (themeStyleSheet.href.includes("dark")) {
            themeStyleSheet.href = "light-theme.css";
            togglePhoto.src = "img/color.jpg";
            toggleIcon.innerText = "mode_night"

        } else {
            themeStyleSheet.href = "dark-theme.css";
            togglePhoto.src = "img/black_and_white.jpg";
            toggleIcon.innerText = "wb_sunny"
        }
    })
})
