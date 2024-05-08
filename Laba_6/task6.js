let btn_6 = document.getElementById("task6_btn")
let listItems = document.querySelectorAll("#list li")

for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = 2 * (i + 1)
}

btn_6.addEventListener("click", () => {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = listItems[i].innerHTML ** 2
    }
})
