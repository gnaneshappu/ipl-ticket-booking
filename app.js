
// Reusable Toast Notification
function showToast(message) {
    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Booking Form Submit Event
const bookingForm = document.querySelector("form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        showToast("Your IPL ticket booking details are submitted!");
    });
}

// Smooth Scrolling for Book Buttons

document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const bookingForm = document.querySelector("#booking");

        if (bookingForm) {

            bookingForm.scrollIntoView({
                behavior: "smooth"
            });

            showToast("Redirecting to booking form!");

        }

    });

});
