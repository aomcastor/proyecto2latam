const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = 'black';
c.beginPath();
c.fillRect(50, 100, 400, 400);