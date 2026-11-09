// DARK AND LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☀";
        localStorage.setItem("theme", "dark");
    }

});

// SAVE USER THEME

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "🌙";
} else {
    themeBtn.textContent = "☀";
}

// WELCOME MESSAGE

console.log("Welcome to CodeWorld!");
console.log("Created by Maria Al Basyouni");

// SMOOTH NAVIGATION

document.querySelectorAll('.navbar a').forEach(link => {

    link.addEventListener('click', function() {
        console.log("Navigation:", this.textContent);
    });

});
