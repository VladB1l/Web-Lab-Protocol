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
