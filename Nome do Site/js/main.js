const titleElement = document.getElementById('title');
const textElement = document.getElementById('text');

document.getElementById('button1').addEventListener('click', () => {
    titleElement.textContent = 'IP';
    textElement.textContent = 'Texto IP';
});

document.getElementById('button2').addEventListener('click', () => {
    titleElement.textContent = 'Ping';
    textElement.textContent = 'Texto Ping';
});

document.getElementById('button3').addEventListener('click', () => {
    titleElement.textContent = 'Traceroute';
    textElement.textContent = 'Texto Traceroute';
});

document.getElementById('button4').addEventListener('click', () => {
    titleElement.textContent = 'DNS';
    textElement.textContent = 'Texto DNS';
});

document.getElementById('button5').addEventListener('click', () => {
    titleElement.textContent = 'Hubs';
    textElement.textContent = 'Texto Hubs';
});

document.getElementById('button6').addEventListener('click', () => {
    titleElement.textContent = 'Switches';
    textElement.textContent = 'Texto Switches';
});
