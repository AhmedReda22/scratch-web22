let canvas = document.getElementById("scratch-card1");
let context = canvas.getContext("2d");

const init = () => {
    let img = new Image();
    img.onload = function() {
        canvas.width = window.innerWidth; // Adjust canvas width to match window width
        canvas.height = window.innerHeight; // Adjust canvas height to match window height
        let x = (canvas.width - img.width) / 2; // Calculate x position to center the image
        let y = (canvas.height - img.height) / 2; // Calculate y position to center the image
        context.drawImage(img, x, y); // Draw image at calculated position
    };
    img.src = './images/layer1.jpg'; 
}

let isDragging = false;

const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 48, 0, 2 * Math.PI); // Increase the radius to make the brush bigger
    context.fill();
};

canvas.addEventListener("mouseenter", (event) => {
    isDragging = true;
    scratch(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", (event) => {
    if (isDragging) {
        scratch(event.offsetX, event.offsetY);
    }
});

canvas.addEventListener("mouseup", () => {
    isDragging = false;
});

canvas.addEventListener("mouseleave", () => {
    isDragging = false;
});

window.addEventListener("resize", () => {
    init();
});

init();





document.getElementById("altTabButton").addEventListener("click", function() {
    triggerAltTab();
});

function triggerAltTab() {
    var event = new KeyboardEvent("keydown", {
        key: "Tab",
        code: "Tab",
        altKey: true
    });
    document.dispatchEvent(event);
}