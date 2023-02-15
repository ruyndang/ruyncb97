// Bài 1

let btnAction1 = document.getElementById("btn-action-1")
btnAction1.addEventListener("click", () => {
    let length = parseInt(document.getElementById("length").value);
    let width = parseInt(document.getElementById("width").value);
    if (length == width) {
        alert("Đây là hình vuông");
    }
else {
    alert("Đây là hình chữ nhật");
}
});

// Bài 2
let btnAction2 = document.getElementById("btn-action-2")
btnAction2.addEventListener("click", () => {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    if (a > b) {
        alert("a là số lớn nhất");
    }
else {
    alert("b là số lớn nhất");
}
});

// Bài 3
let btnAction3 = document.getElementById("btn-action-3")
btnAction3.addEventListener("click", () => {
    let n = parseInt(document.getElementById("n").value);
    
    if (n >= 0) {
        alert(`Giá trị tuyệt đối của ${n} bằng ${n}`);
    }
else {
    alert(`Giá trị tuyệt đối của ${n} bằng ${-n}`);
}
});

// Bài 4
let btnAction4 = document.getElementById("btn-action-4")
btnAction4.addEventListener("click", () => {
    let day = parseInt(document.getElementById("day").value);
    
    if (day == 2) alert("Monday");
    else if (day == 3) alert("Tuesday");
    else if (day == 4) alert("Wednesday");
    else if (day == 5) alert("Thursday");
    else if (day == 6) alert("Friday");
    else if (day == 7) alert("Saturday");
    else alert("Sunday");
    
});
// Bài 5
let btnAction5 = document.getElementById("btn-action-5")
btnAction5.addEventListener("click", () => {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    
    if (n1 > n2) {
        if (n1 > n3) 
            alert("n1 là số lớn nhất");
            else
            alert("n3 là số lớn nhất");
        }

    else if (n2 > n3)
    alert("n2 là số lớn nhất");
    else alert("n3 là số lớn nhất");

    
});