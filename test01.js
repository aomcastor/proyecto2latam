const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

context.fillStyle = 'black';
context.beginPath();
context.fillRect(100, 100, 400, 400);