buttonElements.forEach((btn) => {
    btn.addEventListener("click", () => {
        value = btn.dataset.value
        inputHandler(value)
    });
});

document.addEventListener("keyup", (e) => {
    const btnPressed = [... buttonElements].find(btn =>
        e.key.toLowerCase() === btn.dataset.value);
    if (btnPressed) {
        btnPressed.click()
        btnPressed.classList.add("active")
        setTimeout(() => {
            btnPressed.classList.remove("active")
        }, 200)
    }
});

