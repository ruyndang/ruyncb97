// Bài 4: Cho 2 array có cùng số phần tử với nhau. 
let array1 = [10, 20, 30, 40];
let array2 = [100, 200, 300, 400];
let array3 = array2.reverse();
console.log(array3);
for (let i in array1){
    console.log(array3.push(array1[i] + array2[i]));
}


// Hãy in các thành phần trong 2 array theo format dưới đây (document.write)
/**
 * 10 400
 * 20 300
 * 30 200
 * 40 100
 */
