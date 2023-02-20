let btnAction = document.getElementById("btn-action")
btnAction.addEventListener("click", () => {
    let n = parseInt(document.getElementById("n").value);
    let total = 0;
    for(let i = 1; i <=n; i++) {
        total += i;}
        alert(`Tổng các số từ 1 đến ${n} là ${total}`);
    });

    
    