// viết chương trình chia hết cho 5 và 7 trong khoảng 1500 đến 2700
let i = 1500;
while (i <= 2700) {
    if (i % 5 == 0 && i % 7 == 0) {
        document.write(i + "<br>");
    }
    i ++;
}