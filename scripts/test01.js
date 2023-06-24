const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

let aspectRatio = canvas.width / canvas.height;

function canvasResize() {
    // Get the dimensions of the container element
    const containerWidth = canvas.parentNode.clientWidth;
    const containerHeight = canvas.parentNode.clientHeight;

    // Calculate the new width and height based on the aspect ratio
    let newWidth, newHeight;
    if (containerWidth / containerHeight > aspectRatio) {
        newHeight = containerHeight;
        newWidth = newHeight * aspectRatio;
    } else {
        newWidth = containerWidth;
        newHeight = newWidth / aspectRatio;
    }

    // Set the new dimensions
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Redraw the canvas content
    draw();
}

function draw() {
    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Draw your canvas content here
    // ...

    // Example: Draw a rectangle in the center of the canvas
    const rectWidth = 200;
    const rectHeight = 100;
    const rectX = (canvas.width - rectWidth) / 2;
    const rectY = (canvas.height - rectHeight) / 2;

    c.fillStyle = "#ff0000";
    c.fillRect(rectX, rectY, rectWidth, rectHeight);
}

canvasResize();

window.addEventListener("resize", canvasResize);

