/**
 * Nhập vào một số nguyên dương n. Tính giai thừa của n 
 * n! = n*(n - 1)*(n - 2)...
 *Ví dụ: 5! = 5*4*3*2*1
 *  */
 let n = parseInt(prompt("Please input n: "));
 let total = 1;
 
 for(let i = 1; i <= n;  i += 1) {
     total *= i;
 }
 alert(` giai thừa của ${n} là ${total}`);