"use strict";
let std = {
    name: "Vũ",
    age: 18,
    address: {
        town: "hiệp hòa",
        district: "kinh môn",
        cityProvince: "hải dương"
    }
};
function parseInput2(inp) {
    if (Array.isArray(inp.address)) {
        return false;
    }
    else if (inp.hasOwnProperty("name") && typeof inp.name === "string"
        && inp.hasOwnProperty("age") && typeof inp.age === "number"
        && inp.hasOwnProperty("address") && typeof inp.address === "object") {
        return true;
    }
    return false;
}
console.log(parseInput2(std));
