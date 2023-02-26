// thuộc tính và phương thức của mảng
let nameList = ["Anthony", "Bella", "Chris"];
document.write(` Mảng ban đầu: ${nameList}<br>`);
// Độ dài của mảng
document.write(`độ dài của mảng là: ${nameList.length}<br>`);
// thêm phần tử mới vào bên trong mảng
nameList.push("David");
document.write(` Mảng sau khi thêm 'david': ${nameList}<br>`);
nameList[nameList.length] = "Emily";
document.write(`độ dài của mảng là: ${nameList.length}<br>`);
document.write(` Mảng sau khi thêm 'Emily': ${nameList}<br>`);
// Xóa phần tử ra khỏi mảng
// Cách 1 shift
let removedItem = nameList.shift(); 
document.write(` Phần tử đã bị xóa: ${removedItem}<br>`);
document.write(` Mảng sau khi shift(): ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

removedItem = nameList.shift(); 
document.write(` Phần tử đã bị xóa: ${removedItem}<br>`);
document.write(` Mảng sau khi shift(): ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);


// Cách 2 dùng pop
// Xóa phần tử cuối mảng
 removedItem = nameList.pop();  
document.write(` Phần tử đã bị xóa: ${removedItem}<br>`);
document.write(` Mảng sau khi shift(): ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

removedItem = nameList.pop(); 
document.write(` Phần tử đã bị xóa: ${removedItem}<br>`);
document.write(` Mảng sau khi shift(): ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

