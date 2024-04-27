document.querySelector("button").onclick = clickFunction;
console.clear();

function clickFunction() {
    console.clear();
    let arr = [];
    let value = document.querySelector("#input").value;

    randomFunction(arr, value);
    document.querySelector("#output5").innerHTML = `Вхідний масив:<br/> [ ${arr} ];`;
    document.querySelector("#output1").innerHTML = `Кількість елементів у масиві: ${value}; `;
    console.table(arr);

    evenSum(arr, value);
    maxFunction(arr, value);
    minFunction(arr, value);
    sortFunction(arr, value)

}



function randomFunction(arr, value) {
    for (let i = 0; i < value; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
}

function evenSum(arr, value) {
    let evenSum = 0;
    for (let i = 0; i < value; i = i + 2) {
        evenSum = evenSum + arr[i];
    }
    console.log(`Сумма елементів з парними індексами: ${evenSum}`);
    document.querySelector("#output2").innerHTML = `Сумма елементів з парними індексами: ${evenSum};`;
}

function maxFunction(arr, value) {
    let max = arr[0];
    let counter = [];

    for (let i = 0; i < value; i++) {
        if (max < arr[i]) {
            max = arr[i];
            for (let j = 0; j <= counter.length; j++) {
                counter.pop();
            }
            counter[0] = i;
        } else if (max == arr[i]) {
            counter.push(i);
        }
    }
    console.log(`Максимальний елемент в масиві та його індекс: \n  Макс. елемент: ${max},  Індекс: ${counter} ;`)
    document.querySelector("#output3").innerHTML = `Максимальний елемент в масиві та його індекс: <br/>  Макс. елемент: ${max};  Індекс: ${counter} ;`;
}

function minFunction(arr, value) {
    let min = arr[1];
    let counter = [];

    for (let i = 1; i < value; i = i + 2) {
        if (min > arr[i]) {
            min = arr[i];
            for (let j = 0; j <= counter.length; j++) {
                counter.pop();
            }
            counter[0] = i;
        } else if (min == arr[i]) {
            counter.push(i);
        }
    }
    console.log(`Мінімальний елемент в масиві та його індекс серед непарних індексів: \n  Мін. елемент: ${min},  Індекс: ${counter} ;`)
    document.querySelector("#output4").innerHTML = `Мінімальний елемент в масиві та його індекс серед непарних індексів: <br/>  Мін. елемент: ${min};  Індекс: ${counter} ;`;
}

function sortFunction(arr, value) {
    for (let i = 0, tmp; i < value - 1; i++) {
        for (let j = 0; j < value - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    console.log(`Упорядкований масив:\n [ ${arr} ];`);
    document.querySelector("#output6").innerHTML = `Упорядкований масив:<br/> [ ${arr} ];`;
}