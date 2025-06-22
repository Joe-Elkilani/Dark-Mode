document.documentElement.classList.toggle(
    "dark",
    condition()
);

if (condition()) {
    document.getElementById("toggle").checked = true
}

document.getElementById("toggle").addEventListener("change", () => {
    if (document.getElementById("toggle").checked) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }

    document.documentElement.classList.toggle(
        "dark",
        condition()
    );
})

function condition() {
    return localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
}