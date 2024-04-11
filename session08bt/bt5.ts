// union type
let v1:string|number;
v1 = 1;
v1 = "x";
// v1 = undefined;
// Union Types cho phép một biến có thể chứa giá trị của nhiều kiểu dữ liệu khác nhau.
// Khi sử dụng Union Types, một biến có thể nhận giá trị từ bất kỳ kiểu nào trong danh
// sách các kiểu được chỉ định.

// Intersection Type

type X = {
    name:string,
    age:number
}
type Y = {
    address:string
}

let Z: X&Y = {
    name:"Vũ",
    age:18,
    address:"hải dương"
}
// let L: X&Y = {
//     name:"Vũ",
//     age:"18",
//     address:"hải dương"
// }
// Intersection Types kết hợp các kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới 
// có tất cả các thuộc tính của các kiểu dữ liệu gốc. Khi sử dụng Intersection Types, một biến 
// phải thỏa mãn tất cả các kiểu dữ liệu được kết hợp.

