"use strict";
function combine(x1, x2) {
    return Object.assign(Object.assign({}, x1), x2);
}
console.log(combine({ name: "Vương" }, { address: "HD", id: 1 }));
