// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation for non-empty fields
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;
    }

    // Clear any previous error message
    errorMessage.textContent = "";

    // You can add further validation logic here (e.g., regex for password strength)

    return true;
}
