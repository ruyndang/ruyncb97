/**
 * Bài 2: Viết hàm transformStr() nhận vào tham số string và 
 * in ra string ở dạng uppercase và lowercase. Ví dụ: 
 * 
 * transformStr('Function Is Magic!')
 * 
 * Output:
 * Lowercase: function is magic!
 * Uppercase: FUNCTION IS MAGIC!
 */

function transformStr(string) {
    let result1 = string.toUpperCase(); 
    let result2 = string.toLowerCase(); 
    console.log(result1);
    console.log(result2);
    
}
transformStr('Function Is Magic!');


