// Viết một hàm isStrongPassword(password) kiểm tra mật khẩu có đáp ứng tiêu chí sau không:

// Ít nhất 8 ký tự
// Có ít nhất một chữ hoa
// Có ít nhất một chữ thường
// Có ít nhất một số

// bước 1: tạo hàm kiểm tra mật khẩu
function isStrongPassword(password) {
  // điều kiện của mật khẩu mạnh
  if (password.length < 8) {
    return false;
  }
  let countUpperCase = 0;
  let countLowerCase = 0;
  let countNumber = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      countUpperCase++;
    } else if (password[i] >= "a" && password[i] <= "z") {
      countLowerCase++;
    } else if (!isNaN(password[i])) {
      countNumber++;
    }
  }
  if (countUpperCase === 0 || countLowerCase === 0 || countNumber === 0) {
    return false;
  }
  return true;
}

// bước 2: cho người dùng nhập vào mật khẩu
let password = prompt("Nhập vào mật khẩu: ", "");

// bước 3: gọi hàm kiểm tra mật khẩu
console.log(isStrongPassword(password));
if (isStrongPassword(password)) {
  alert("true");
} else {
    alert("false");
}
