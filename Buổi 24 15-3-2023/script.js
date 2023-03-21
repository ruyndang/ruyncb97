// Viết một trang wed để quản lý sách trong một cửa hàng
// Mỗi quyển sách sẽ gồm cso các thông tin: tên, thê loại, giá tiền, số lượng
// Trang wed sẽ có các chức năng chính như sau:
// Thêm sách vào cửa hàng
// Tìm kiếm thông tin theo tên sách
// Điều chỉnh số lượng sách (cho phép tăng/giảm số lượng)
// Xóa một loại sách khỏi cửa hàng
class Book {
  constructor(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}
let bookList = [];
// Add new book
let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", () => {
  let bookName = document.getElementById("book-name").value;
  let bookCategory = document.getElementById("book-category").value;
  let bookPrice = parseInt(document.getElementById("book-price").value);
  let bookQuantity = parseInt(document.getElementById("book-quantity").value);
  let newBook = new Book(bookName, bookCategory, bookPrice, bookQuantity);
  bookList.push(newBook);
  console.log(bookList);

  alert(`New book "${bookName}" added successfully!`);
});
// Search book
function searchBook() {
  let searchName = document.getElementById("search-name").value;
  let check = false;


  // loop throught each item in bookList
  for (let i in bookList) {
    if (bookList[i].name.includes(searchName)) {
        check = true;
      document.getElementById("book-name").value = bookList[i].name;
      document.getElementById("book-category").value = bookList[i].category;
      document.getElementById("book-price").value = bookList[i].price;
      document.getElementById("book-quantity").value = bookList[i].quantity;

      console.log(bookList);

      console.log(bookList[i]);
      break;
    }
  }

  if (check == false){
    alert("No book found!");
  }

}
// Delete book

function deleteBook() {
    let deleteName = document.getElementById("delete-name").value;
    // let check = false;
  
  
    // loop throught each item in bookList
    for (let i in bookList) {
      if (bookList[i].name.includes(deleteName)) {
        //   check = true;
        // document.getElementById("book-name").value = bookList[i].name;
        // document.getElementById("book-category").value = bookList[i].category;
        // document.getElementById("book-price").value = bookList[i].price;
        // document.getElementById("book-quantity").value = bookList[i].quantity;
  
        delete bookList[i];
  
        console.log(bookList);
        break;
      }
    }
  
}

// update book
function updateBook(){
    let bookName = document.getElementById("book-name").value;
    let bookCategory = document.getElementById("book-category").value;
    let bookPrice = parseInt(document.getElementById("book-price").value);
    let bookQuantity = parseInt(document.getElementById("book-quantity").value);
    let check = false;
    for (let i in bookList) {
        if (bookList[i].name.includes(bookName)) {
            check = true;
          document.getElementById("book-name").value = bookList[i].name;
          document.getElementById("book-category").value = bookList[i].category;
          document.getElementById("book-price").value = bookList[i].price;
          document.getElementById("book-quantity").value = bookList[i].quantity;
    
          console.log(bookList);
    
          console.log(bookList[i]);
          break;
        }
      }
    
      if (check == false){
        alert("No book found!");
      }
    
    }
    
}

  
  bookList.push(newBook);
  console.log(bookList);