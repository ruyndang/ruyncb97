// let nStart = parseInt(prompt("Nhập vào số bắt đầu"));
// let nEnd = parseInt(prompt("Nhập vào số kết thúc"));
function findPrimes(nStart, nEnd) {
    for ( let i = nStart; i <= nEnd; i++) {
        if (primeNumber(i)){
            document.write(i + " ");
        }
    }
    
}
    
findPrimes(2, 24);
