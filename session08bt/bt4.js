"use strict";
function square(inp) {
    let result;
    if (typeof inp === "number") {
        return inp ** 2;
    }
    else {
        result = inp.map((item) => {
            return item ** 2;
        });
    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(square(2));
console.log(square(arr));
