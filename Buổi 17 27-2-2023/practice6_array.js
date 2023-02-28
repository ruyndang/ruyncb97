// Bài 6: Hãy tìm và thay thế tất cả số 20 trong array thành 200
let array1 = [5, 10, 15, 20, 25, 50, 20];

for (let i in array1)
{
    if (array1[i] == 20) 
    array1[i] = 200;
}
    
        document.write(array1);
    