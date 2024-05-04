let products = [
    {
        name: 'Ручка',
        price: 30,
    },
    {
        name: 'Олівець',
        price: 20,
    },
    {
        name: 'Папір',
        price: 15,
    },
]

console.log(getProductDetails(1, successCallback, errorCallback))


function getProductDetails(id, success, error) {
    return products.length - 1 >= id
        ? success(id, products[id].name, products[id].price)
        : error(id)
}

function successCallback(id, name, price) {
    return (`Деталі для продукта з productId: ${id}\n Назва товару: ${name};\n Ціна товару: ${price};`)
}

function errorCallback(id) {
    return (`Виникла помилка!!!\n Продукт з productId: "${id}", не знайдено`)
}



