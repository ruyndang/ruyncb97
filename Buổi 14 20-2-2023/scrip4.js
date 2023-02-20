// Viết chương trình nhập vào một số nguyên n và kiểm tra n có phải là số nguyên tố hay không
// Note: Số nguyên tố là số chỉ chia hết cho 1 và chính nó
let n = parseInt(prompt("Nhập vào số n: "));
let i = 2;
let dem = 0;
while (i < n) {
  if (n % i == 0) {
    dem += 1;
    
    break;
  }
  i++;
}
if (dem == 0) {
  document.write(`số ${n} là số nguyên tố`);
} else document.write(`số ${n} khônglà số nguyên tố`);
