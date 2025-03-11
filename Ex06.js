function kiemtradoixung(str) {
  str = str.toLowerCase().split(" ").join("");
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
let text = prompt("Nhập chuỗi để kiểm tra:");
if (text) {
  if (kiemtradoixung(text)) {
    alert(text + " là chuỗi đối xứng!");
  } else {
    alert(text + " không phải chuỗi đối xứng!");
  }
} else {
  alert("Bạn chưa nhập gì cả!");
}
