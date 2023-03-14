let popUpEl = document.querySelector(`.popup`);
let overlayEl = document.querySelector(`.overlay`);

function showPopup() {
    setTimeout(() => {
        popUpEl.style.visibility = "visible";
        overlayEl.classList.remove(`hidden`);
    }, 1500);
}

function closePopup() {
    popUpEl.style.visibility = "hidden";
    overlayEl.classList.add(`hidden`);
}
