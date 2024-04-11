type A1 = {
    name:string
}
type B1 = {
    address:string,
    id:number
}

type C1 = A1&B1 

function combine(x1:A1,x2:B1):C1 {
    return {...x1,...x2};
}
console.log(combine({name:"Vương"},{address:"HD",id:1}));