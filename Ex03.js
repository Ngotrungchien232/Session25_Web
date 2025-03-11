// Hàm tìm ra các số chắn có trong mảng
let count = 0;
function countEvenNumbers(arr) {
  if (arr.length === 0) {
    return "Mảng rỗng, không có giá trị";
  }

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

// Nhập mảng và cho phép nhập cả ký tự
let n = +prompt("Nhập vào số phần tử của mảng: ", "");
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = prompt("Nhập vào phần tử thứ " + (i + 1));
}

// Gọi hàm đếm số lượng số chẵn
count = countEvenNumbers(arr);

//hiển thị xem trong mảng có bao nhiêu số là số chẵn
alert("Số các số chẵn trong mảng là: " + count);
console.log("Số các số chẵn trong mảng là: ", count);
