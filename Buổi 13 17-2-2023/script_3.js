// Nhập vào số hạng đầu tiên và công sai của cấp số cộng
// In ra 10 số đầu tiên của cấp số cộng đó
// Ví dụ số hạng đầu tiên = 3, công sai = 5
// Output: 3 8 13 18 23 28 33 38 43 48
let n = parseInt(prompt("Nhập sô hạng đầu tiên: "));
let x = parseInt(prompt("Nhập công sai của cấp số cộng: "));
let z = 0;


 for(let i = 0; i <= 9;  i ++) {

    z = n + (i*x);
    document.write(z + '<br>');
 }
 

 