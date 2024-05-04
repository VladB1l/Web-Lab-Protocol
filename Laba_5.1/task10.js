// Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn) і перевіряє правильність закриття дужок () {} [] Якщо рядок містить коректний код функція повертає true.
//  В іншому випадку повертає false

strings = ['[]', '{]', '{}', '[[]]', '{[]}[()]({})', '{{[]]}']
strings.forEach(string => {
    console.log(checkBrackets(string))
});

function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const topOfStack = stack.pop();
            if (topOfStack !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return true;
}
