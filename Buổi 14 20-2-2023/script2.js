/**
 * Bài 4: Viết chương trình nhập vào một số nguyên n và in ra các số từ 1 đến n với các trường hợp ngoại lệ như sau:
- Nếu số đó chia hết cho 3 thì in "java"
- Nếu số đó chia hết cho 7 thì in "script"
- Nếu số đó chia hết cho cả 3 và 7 thì in "javascript"

Ví dụ: n = 25
1
2
java
4
5
java
script
8
java
10
11
java
13
script
java
16
17
java
19
20
javascript
22
23
java
25
 */
let n = parseInt(prompt("Nhập vào số n: "));
let i = 1;
while (i <= n) {
    // if (i % 3 == 0) {
    //     document.write("java" + "<br>");
    // }
    //  else if (i % 7 == 0) {
    //     document.write("script" + "<br>");
    // }
    if (i % 3 == 0 && i % 7 == 0) {
        document.write("Javascript" + "<br>")
    }
    else if (i % 3 == 0) {
        document.write("java" + "<br>");
    }
    else if (i % 7 == 0) {
        document.write("script" + "<br>");
    }
    else 
    document.write(i + "<br>");
    i ++;


}