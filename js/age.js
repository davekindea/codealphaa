document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
    console.log("hhh")

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const nameValue = nameInput.value;
        const dateValue = dateInput.value;

        console.log("Name:", nameValue);
        console.log("Date of Birth:", dateValue);
        localStorage.setItem("name",nameValue)
        localStorage.setItem("dataof",dateValue)

        window.location.href="calcu.html"
    });
});
