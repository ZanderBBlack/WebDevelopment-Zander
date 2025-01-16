document.getElementById("signup-tab").addEventListener("click", () => {
    document.getElementById("signup-tab").classList.add("active");
    document.getElementById("signin-tab").classList.remove("active");
    document.getElementById("signup-form").classList.add("active");
    document.getElementById("signin-form").classList.remove("active");
});

document.getElementById("signin-tab").addEventListener("click", () => {
    document.getElementById("signin-tab").classList.add("active");
    document.getElementById("signup-tab").classList.remove("active");
    document.getElementById("signin-form").classList.add("active");
    document.getElementById("signup-form").classList.remove("active");
});