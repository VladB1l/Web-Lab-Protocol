// Напиши функцію конструктор Storage який створює об'єкти Для управління складом товарів. При виклику отримуватиме один агрумент - початковий масив товарів,
//  і записувати їх у властивість items. Додай методи класу: getItems() - повертайте масив товарів addItems(item) - отримує новий товар 
//  та додає його до поточних removeItem(item) - отримує товар і,
//  якщо він є, видаляє його з поточних const arr = ["apple", "banana", "mango"]

function FuncStorage(arr) {
    return {
        items: arr,
        getItems() {
            return this.items;
        },
        addItems(item) {
            this.items.push(item);
        },
        removeItem(item) {
            index = this.items.indexOf(item)
            index !== -1
                ? this.items.splice(index, 1)
                : console.log("Такого елемента немає у складі!!!")
        }
    }
}
const arr = ["apple", "banana", "mango"];
let storage = FuncStorage(arr);
console.log(storage.getItems())
storage.addItems("cherry")
storage.removeItem("appleу")
console.log(storage.getItems())
