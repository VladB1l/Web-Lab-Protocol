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

    return stack.length === 0;
}
