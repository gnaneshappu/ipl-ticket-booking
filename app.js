
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
// Activity 7: Live Booking Summary

function updateBookingSummary() {

    // Get selected values
    const match = document.getElementById("match").value;
    const stand = document.getElementById("stand").value;
    const quantity = Number(document.getElementById("quantity").value) || 1;

    // Ticket prices
    const prices = {
        "RCB vs CSK": {
            "General": 1000,
            "Premium": 2500,
            "VIP": 5000
        },
        "MI vs KKR": {
            "General": 1200,
            "Premium": 3000,
            "VIP": 6000
        }
    };

    // Calculate price
    const ticketPrice = prices[match][stand];
    const total = ticketPrice * quantity;

    // Update Booking Summary
    document.getElementById("summaryMatch").textContent = match;
    document.getElementById("summaryStand").textContent = stand;
    document.getElementById("summaryPrice").textContent = "₹" + ticketPrice;
    document.getElementById("summaryQuantity").textContent = quantity;
    document.getElementById("summaryTotal").textContent = "₹" + total;

    // Show confirmation
    showToast("Booking summary updated!");
}

// Listen for user selections
document.getElementById("match").addEventListener("change", updateBookingSummary);
document.getElementById("stand").addEventListener("change", updateBookingSummary);
document.getElementById("quantity").addEventListener("input", updateBookingSummary);

// Show initial summary
updateBookingSummary();