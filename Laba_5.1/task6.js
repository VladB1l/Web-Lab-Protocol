// Напишіть функцію, яка приймає массив об'єктів і повертає новий массив об'єктів,у якому є знижка на 30 % 
// на всі медикаменти ціна, яких перевищує 300 грн у масиві Надайте ід для кожного медикамента

const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];


for (let i = 0; i < medicines.length; i++) {
    medicines[i].id = i
    if (medicines[i].price > 300) {
        medicines[i].price = medicines[i].price - medicines[i].price * 30 / 100
    }
}

console.log(medicines)