"use strict";
function parseInput(type) {
    if (type === null) {
        console.log("null");
    }
    else {
        console.log(typeof type);
    }
}
parseInput(1);
parseInput("1");
parseInput(undefined);
parseInput(null);
parseInput(true);
