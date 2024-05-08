let button_2 = document.querySelector(".inputs button")
let input1 = document.getElementById("task2_input1")
let input2 = document.getElementById("task2_input2")


button_2.addEventListener('click', () => {
    let tmp = input1.value
    input1.value = input2.value
    input2.value = tmp
})