console.log('Завдання №7\n')
let categorieItems = document.getElementById('categories')
console.log(`Кількість категорій: ${categorieItems.children.length}\n`)

Array.from(categorieItems.children).forEach(item => {
    let name = item.firstElementChild.innerHTML
    console.log(`Категорія: ${name}\n`)
    console.log(`Кількість елементів в категорії ${name}: ${item.lastElementChild.children.length}\n`)
});
