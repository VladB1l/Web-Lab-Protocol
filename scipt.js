const nav = document.querySelector("nav");
const iframe = document.getElementById("iframe")
let navList = [];

for (let i = 1; i <= 8; i++) {
    navList.push(`Лабораторна робота №${i}`);
}

const exercises = {
    exercise1: ['Опис предметного середовища', 'Тема Мета Місце розташування лаби №1', 'Структура документа', 'Висновки'],
    exercise2: ['Тема мета ЛР №2, місце розташування сайту', 'Способи підключення стилів', 'Селектори', 'Шрифти Текст таблиці фон контур списки', 'Висновки'],
    exercise3: ['тема мета Лр №3 місце розташування', 'Завдання №1', 'Завдання №2', 'Завдання №3', 'Висновки'],
}



function ToggleExercise(clicked_id, exercise_id) {
    let source = `./Exercise/${exercise_id}/exercise${clicked_id}.html`;
    iframe.src = source;
}


createExerciseList(document.getElementById('exercise1'), exercises.exercise1);
createExerciseList(document.getElementById('exercise2'), exercises.exercise2);
createExerciseList(document.getElementById('exercise3'), exercises.exercise3);

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