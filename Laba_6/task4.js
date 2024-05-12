square = document.getElementById("square")
button1 = document.getElementById("task4_btn1")
button2 = document.getElementById("task4_btn2")

button1.addEventListener('click', () => squareResize(button1))
button2.addEventListener('click', () => squareResize(button2))

function squareResize(button) {
    let value = button === button1 ? 15 : -15;
    let currentWidth = parseInt(getComputedStyle(square).width);
    let currentHeight = parseInt(getComputedStyle(square).height);
    square.style.width = `${currentWidth + value}px`;
    square.style.height = `${currentHeight + value}px`;
}