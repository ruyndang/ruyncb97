// Kiểm tra số nguyên tố
let n = parseInt(prompt("Please enter number"));
        let dem = 0;
function primenumber() {
            for( let i = 2; i < n; i++) {
            if (n % i == 0) {
                dem += 1;  
            }
        }
        return;
}
if (dem == 0) {
    document.write(`${n} là số nguyên tố`);
} 
else{
    document.write(`${n} không phải là số nguyên tố`);
}

    
