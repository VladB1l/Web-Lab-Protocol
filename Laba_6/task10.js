function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

let input = document.querySelector('#controls input')

let boxes = document.getElementById('boxes')
let buttons = document.querySelectorAll('#controls button')
let create = buttons[0]
let destroy = buttons[1]

create.addEventListener('click', () => {
    createBoxes(input.value)
})

destroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
    if (amount < 1 || amount > 100) {
        alert("Значення в input повинні бути від 1 до 100 включно!!!")
        return
    }
    destroyBoxes()
    for (let i = 0; i < amount; i++) {
        let new_elem = document.createElement('div')
        let randomColor = getRandomHexColor();
        new_elem.innerHTML = ` №${i + 1}`
        new_elem.style.width = `${30 + (10 * i)}px`
        new_elem.style.height = `${30 + (10 * i)}px`
        new_elem.style.backgroundColor = `${randomColor}`
        boxes.append(new_elem)
    }
}

function destroyBoxes() {
    while (boxes.hasChildNodes()) {
        boxes.removeChild(boxes.firstChild)
    }
}