const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
const additionalFeedbackEl = document.getElementById("additionalFeedback");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        const additionalFeedback = additionalFeedbackEl.value.trim();
        containerEl.innerHTML = `
            <strong>Thank you!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            ${additionalFeedback ? `<p>Additional Comments: ${additionalFeedback}</p>` : ''}
            <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}
