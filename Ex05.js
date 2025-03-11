// tạo hàm kiểm tra số nguyên dương trong mảng
let count = 0;
function demsonguyenduong(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
}

// cho người dùng nhập vào một mảng bất kì
let n = +prompt("Nhập vào số phần tử của mảng: ", "");
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = prompt("Nhập vào phần tử thứ " + (i + 1));
}
// chuyển dữ liệu nhập vào thành số
for (let i = 0; i < n; i++) {
  arr[i] = +arr[i];
}
// gọi hàm kiểm tra số nguyên dương trong mảng
demsonguyenduong(arr);

// hiển thị kết quả ra màn hình
alert("Số các số nguyên dương trong mảng là: " + count);
console.log("Số các số nguyên dương trong mảng là: ", count);
