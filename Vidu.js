// // ví dụ về cách sử dụng hàm trong js
// // có hai bước để sử dụng hàm
// // bước 1: khai báo hàm
// // bước 2: gọi hàm

// //khái báo hàm thông thường
// function calculateSum(a, b) {
//   // đây có thể coi đó là input
//   // sau đó thực thi hàm
//   return a + b;
// }

// // gọi hàm
// calculateSum();

// // sử dụng hàm
// calculateSum(10, 20);
// // muốn in ra kết quả của hai con số trên
// console.log(calculateSum(10, 20));

// cách thứ hai để khai báo hàm
// hàm không tên
// let result = (function (a, b) {
//   return a * b;
// })(11, 22);
// // // gọi hàm
// console.log(result);

// let calculateResult = function (a, b) {
//   return a / b;
// };
// calculateResult(10, 5);

// tại sao có thể sử dụng hàm trước khi khai báo
// calculateSum(10, 20);
// function calculateSum(a, b) {
//   //   // đây có thể coi đó là input
//   //   // sau đó thực thi hàm
//   return a + b;
// }

sum(10, 20);

let sum = function (a, b) {
  return a + b;
};
