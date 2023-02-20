// Viết chương trình nhập vào số n, cho biết n có bnhieu chữ số và tính tổng các chữ số của n
let n = parseInt(prompt("Nhập vào số n: "));
let totalValue = 0;
let totaldigit = 0;

while (n > 0) {
    totalValue += n % 10;

   n = Math.floor(n / 10); 
    totaldigit ++;
    // Math.floor chia lấy phần nguyên
    // % chia lấy phần dư
}
document.write('Tổng các chữ số của n')