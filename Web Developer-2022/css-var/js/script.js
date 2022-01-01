const root = document.querySelector(":root"),
      rootStyles = getComputedStyle(root);

document.querySelector("button").addEventListener("click", () => {
    root.style.setProperty("--text-color", "red");
});