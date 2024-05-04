const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

console.log(CounterFunc(tweets))


function CounterFunc(array) {
    let counterObj = {}
    for (const obj of array) {
        for (const tag of obj.tags) {
            if (!(`${tag}` in counterObj)) {
                counterObj[tag] = 1;
            }
            else {
                counterObj[tag]++;
            }
        }
    }

    return counterObj
}

// {js: 3, nodejs: 3, html: 2, css: 2, react: 2}