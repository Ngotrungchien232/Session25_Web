// Hàm tìm giá trị nhỏ nhất trong mảng
function findMinValue(arr) {
  if (arr.length === 0) {
    return "Mảng rỗng, không có giá trị nhỏ nhất";
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Nhập mảng và cho phép nhập cả ký tự
let n = +prompt("Nhập vào số phần tử của mảng: ", "");
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = prompt("Nhập vào phần tử thứ " + (i + 1));
}

// Tính tổng các ký tự số trong mảng
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i]) && arr[i].trim() !== "") {
    sum += parseInt(arr[i]);
  }
}

alert("Tổng các ký tự số trong mảng là: " + sum);
console.log("Tổng các ký tự số trong mảng là: ", sum);

// Tìm giá trị nhỏ nhất trong các số đã nhập
let numericArr = arr
  .filter((item) => !isNaN(item) && item.trim() !== "")
  .map(Number);
let minValue = findMinValue(numericArr);
alert("Giá trị nhỏ nhất trong các số đã nhập là: " + minValue);
console.log("Giá trị nhỏ nhất trong các số đã nhập là: ", minValue);
