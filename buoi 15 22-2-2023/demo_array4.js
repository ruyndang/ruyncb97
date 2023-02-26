let nameList = ["Anthony", "Bella", "Chris", "Luis", "Jake", "Zenny"];
document.write(` Mảng ban đầu trước khi reverse: ${nameList}<br>`);

// Đảo ngược thứ tự ban đầu của mảng
nameList.reverse(); 


document.write(` Mảng ban đầu sau khi reverse: ${nameList}<br>`);
// Sắp xếp lại các phần tử trong mảng
document.write(` Mảng ban đầu trước khi sort: ${nameList}<br>`);
// Sắp xếp lại các phần tử trong mảng
nameList.sort(); 
document.write(` Mảng ban đầu sau khi sort: ${nameList}<br>`);

// Nối các phần tử trong mảng thành một chuỗi
console.log(nameList.join());
document.write(nameList.join("---"));




