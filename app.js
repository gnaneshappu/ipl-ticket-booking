
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

// Activity 8: Responsive Navigation, Team Filter and View Toggle

// 1. Mobile Navigation
const activity8MenuToggle = document.getElementById("menuToggle");
const activity8MainNav = document.getElementById("mainNav");

if (activity8MenuToggle && activity8MainNav) {

    activity8MenuToggle.addEventListener("click", function () {
        activity8MainNav.classList.toggle("active");

        const isOpen = activity8MainNav.classList.contains("active");
        activity8MenuToggle.setAttribute("aria-expanded", isOpen);
    });

    activity8MainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            activity8MainNav.classList.remove("active");
            activity8MenuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// 2. Filter Matches by Team
const activity8TeamFilter = document.getElementById("teamFilter");
const activity8MatchCards = document.querySelectorAll(".match-card");

if (activity8TeamFilter) {

    activity8TeamFilter.addEventListener("change", function () {

        const selectedTeam = activity8TeamFilter.value;

        activity8MatchCards.forEach(function (card) {

            const teams = card.dataset.teams.split(" ");

            if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}


// 3. Grid View and List View
const activity8MatchContainer = document.getElementById("matchContainer");
const activity8GridButton = document.getElementById("gridView");
const activity8ListButton = document.getElementById("listView");

if (activity8MatchContainer && activity8GridButton && activity8ListButton) {

    activity8GridButton.addEventListener("click", function () {
        activity8MatchContainer.classList.remove("list-view");
    });

    activity8ListButton.addEventListener("click", function () {
        activity8MatchContainer.classList.add("list-view");
    });

}
// Activity 8: Mobile Navigation

const activity8MenuToggle = document.getElementById("menuToggle");
const activity8MainNav = document.getElementById("mainNav");

if (activity8MenuToggle && activity8MainNav) {

    activity8MenuToggle.addEventListener("click", function () {
        activity8MainNav.classList.toggle("active");

        const isOpen = activity8MainNav.classList.contains("active");
        activity8MenuToggle.setAttribute("aria-expanded", isOpen);
    });

    activity8MainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            activity8MainNav.classList.remove("active");
            activity8MenuToggle.setAttribute("aria-expanded", "false");
        });
    });
}