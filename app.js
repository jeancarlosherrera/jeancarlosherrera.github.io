
document.addEventListener("DOMContentLoaded", () => {

    // Initial version to add functionality, must refactor final version

    const themeStyleSheet = document.getElementById("theme");
    const toggleButton = document.getElementById("toggle-btn");
    const togglePhoto = document.getElementById("photo");
    const toggleIcon = document.getElementById("toggle-icon");
    const about = document.getElementById("about");

    const storedTheme = localStorage.getItem("preferredTheme");
    const storedPhoto = localStorage.getItem("preferredPhoto");
    const storedIcon = localStorage.getItem("preferredIcon");
    const storedAbout = localStorage.getItem("about");


    if (storedTheme && storedPhoto && storedIcon && storedAbout) {
        themeStyleSheet.href = storedTheme;
        togglePhoto.src = storedPhoto;
        toggleIcon.innerText = storedIcon;
        about.href = storedAbout;
    }

    toggleButton.addEventListener("click", () => {
        if (themeStyleSheet.href.includes("dark")) {
            themeStyleSheet.href = "light-theme.css";
            togglePhoto.src = "img/color.jpg";
            toggleIcon.innerText = "mode_night";
            about.href = "about-light.html";

        } else {
            themeStyleSheet.href = "dark-theme.css";
            togglePhoto.src = "img/black_and_white.jpg";
            toggleIcon.innerText = "wb_sunny";
            about.href = "about-dark.html";
        }

        localStorage.setItem("preferredTheme", themeStyleSheet.href);
        localStorage.setItem("preferredPhoto", togglePhoto.src);
        localStorage.setItem("preferredIcon", toggleIcon.innerText);
        localStorage.setItem("about", about.href);
    })
})
