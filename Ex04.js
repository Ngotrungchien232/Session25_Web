// xây dựng chương trình nhập vào một số nguyên dương bất kì
// sau đó kiểm tra xem có phải là số nguyên tố hay không
// và hiển thị kết quả ra màn hình

function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// bước 1: cho người dùng nhập vào một số nguyên bất kì
let number = +prompt("Nhập vào một số nguyên bất kì: ", "");
// điều kiện của số nguyên tố, số nguyên tố phải lớn hơn 1, không cho người dùng nhập vào kí tự chữ cái , số thập phân, số âm
if (number <= 1 || isNaN(number) || number % 1 !== 0) {
  alert(" dữ liệu không hợp lệ ");
} else {
  // bước 2: gọi hàm kiểm tra số nguyên tố
  let result = isPrimeNumber(number);
  // hiển thị kết quả ra màn hình
  if (result) {
    alert("Số bạn vừa nhập vào là số nguyên tố");
  } else {
    alert("Số bạn vừa nhập vào không phải là số nguyên tố");
  }
}
