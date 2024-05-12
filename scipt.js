const nav = document.querySelector("nav");
const iframe = document.getElementById("iframe")
let navList = [];

for (let i = 1; i <= 9; i++) {
    index = i === 6 ? 5.1 : (i < 6 ? i : i - 1);
    navList.push(`Лабораторна робота №${index}`);
}

const exercises = {
    exercise1: ['Опис предметного середовища', 'Тема Мета Місце розташування лаби №1', 'Структура документа', 'Висновки'],
    exercise2: ['Тема мета ЛР №2, місце розташування сайту', 'Способи підключення стилів', 'Селектори', 'Шрифти Текст таблиці фон  списки', 'Висновки'],
    exercise3: ['Тема мета Лр №3 місце розташування', 'Завдання №1', 'Завдання №2', 'Завдання №3', 'Висновки'],
    exercise4: ['Тема мета Лр №4 місце розташування', 'Завдання', 'Висновки'],
    exercise5: ['Тема мета Лр №5 місце розташування', 'Масиви (4 пункт)', 'Виконання 6 пункту', 'Висновки'],
    exercise6: ['Тема мета Лр №5.1 місце розташування', 'Завдання', 'Висновки'],
    exercise7: ['Тема мета Лр №5.1 місце розташування', 'Завдання', 'Висновки'],
}

for (let i = 1; i <= Object.keys(exercises).length; i++) {
    createExerciseList(document.getElementById(`exercise${i}`), exercises[`exercise${i}`])
}

function ToggleExercise(clicked_id, exercise_id) {
    let source = `./Exercise/${exercise_id}/exercise${clicked_id}.html`;
    iframe.src = source;
}

navList.forEach((navListItem, index) => {
    let newElement = document.createElement('div');
    newElement.textContent = navListItem;
    newElement.classList.add('styledButton');
    newElement.dataset.index = index + 1;
    newElement.addEventListener('click', function () {
        ToggleNavItem(this.dataset.index, newElement, document.getElementById(`exercise${index + 1}`));
    });
    nav.appendChild(newElement);
});

function createExerciseList(container, elements) {
    container.classList.add('hidden')
    elements.forEach((element, index) => {
        let newElement = document.createElement('li');
        newElement.textContent = element;
        newElement.classList.add('styledButton');
        newElement.dataset.index = index + 1;
        newElement.addEventListener('click', function () {
            ToggleExercise(this.dataset.index, container.id);
        });
        container.appendChild(newElement);
    });
}

function ToggleNavItem(index, navListItem, elem) {
    for (let i = 0; i < elem.parentElement.childElementCount; i++) {
        if (index != i + 1) {
            elem.parentElement.children[i].classList.add('hidden')
        }
    }
    for (let i = 0; i < navListItem.parentElement.childElementCount; i++) {
        if (index != i + 1) {
            navListItem.parentElement.children[i].classList.remove('current');
        }
    }
    navListItem.classList.toggle('current')
    elem.classList.toggle('hidden')
}