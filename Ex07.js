// tạo hàm biến đổi chữ cái in hoa
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

let text = prompt("Nhập chuỗi:");
if (text) {
  alert(capitalizeWords(text));
} else {
  alert("Chưa nhập gì!");
}
