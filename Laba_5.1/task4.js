const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

let GetTowns = (allTowns, allDates) => {
    let newArr = []
    const now = new Date();
    for (let i = 0; i < allTowns.length; i++) {
        if (now < allDates[i]) {
            newArr.push(allTowns[i])
        }
    }
    return SortTowns(newArr);
};

let SortTowns = (towns) => {
    for (let i = 0; i < towns.length; i++) {
        let tmp = towns[i];
        if (concerts[towns[i]] > concerts[towns[i + 1]]) {
            towns[i] = towns[i + 1]
            towns[i + 1] = tmp
        }
    }
    return towns;
}


console.log(GetTowns(Object.keys(concerts), Object.values(concerts)))