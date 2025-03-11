function Sum(number1, number2) {
  return number1 + number2;
}

let number1 = +prompt("Nhập số thứ nhất: ", "");
let number2 = +prompt("Nhập số thứ hai: ", "");

if (isNaN(number1) || isNaN(number2)) {
  alert("Vui lòng nhập số!");
} else {
  let sum = Sum(number1, number2);
  alert("Tổng hai số là: " + sum);
}
