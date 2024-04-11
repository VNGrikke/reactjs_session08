function printToTheScreen(inp:string|Array<string|number>) {
    if (typeof inp === "string") {
        console.log(inp);
    } else {
        for (let i = 0; i < inp.length; i++) {
            console.log(inp[i]);
        }
    }
}

printToTheScreen("mai nghỉ học")
printToTheScreen(["mai","nghỉ",1,"buổi","học"])