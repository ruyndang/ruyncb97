
let canvas = document.getElementById("gamezone");
let context = canvas.getContext("2d");
let scoreshow = document.getElementById("score");

let birdimg = new Image();
let hinhnenchinh = new Image();
let ongtren = new Image();
let ongduoi = new Image();
birdimg.src = "images/bird.png";
hinhnenchinh.src = "images/nenchinh.png";
ongtren.src = "images/ongtren.png";
ongduoi.src = "images/ongduoi.png";
// đầu tiên là nạp các hình vô nha các bạn :)
// bước 2 là tạo 1 số biến cần thiết

let score = 0;
let khoangcachhaiong = 140; // khoảng cách này tính từ đầu ống trên đến đầu ống dưới
let khoangcachdenongduoi; // biến này là khoảng cách từ đầu ống trên đến vị trí đầu ống dưới
// tạo ra 1 object chim với tọa độ x y là 1 nữa canvas
let bird = {
  x: 300,
  y: 250
};
let ong = []; //tạo mảng ống để chứa các ống di chuỷen
ong[0] = {
  x: canvas.width,
  y: 0, // khởi tạo ống đầu tiên nằm bên phải ngoài cùng và y=0;
};

//tạo function để chạy trò chơi
function run() {
  // load hình ảnh vào
  context.drawImage(hinhnenchinh, 0, 0);
  context.drawImage(birdimg, bird.x, bird.y);

  for (let i = 0; i < ong.length; i++) {
    khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
    context.drawImage(ongtren, ong[i].x, ong[i].y);
    // vẽ ống trên theo tọa độ của ống đó
    //  ống dưới phụ thuộc ống trên
    context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
    // mình lấy vị trí ống trên cộng khoảng cách đến
    // ống dưới vì tí nữa mình random nó lên xuống
    ong[i].x -= 1; //ống di chuyển từ phải sang trái, điều chỉnh tốc độ chạy của ống

    // lập trình thêm ống khi ống di chuyển đến giữa
    // nó sẽ tạo thêm 1 ống nữa
    if (ong[i].x == canvas.width / 2) {
      ong.push({
        x: canvas.width,
        y: Math.floor(Math.random() * ongtren.height) - ongtren.height,
        // ở đây mình sẽ làm video giải thích sau về
        // random này các bạn làm theo là được
      });
    }
    if (ong[i].x == 0) ong.splice(0, 1);
    // nếu ống đụng lề trái thì xóa nó đi để tránh mảng ống
    //  bị đầy làm chậm
    if (ong[i].x == bird.x) score++;
    // giờ làm cái khó nhất là thua
    if (
      bird.y + birdimg.height == canvas.height ||
      (bird.x + birdimg.width >= ong[i].x &&
        bird.x <= ong[i].x + ongtren.width &&
        (bird.y <= ong[i].y + ongtren.height ||
          bird.y + birdimg.height >= ong[i].y + khoangcachdenongduoi))
    ) {
      return;
    }
  }
  // ok điều kiện đầu tiên là đụng đất
  // các bạn chú ý là tính tọa độ y cộng với độ cao con chim
  //  điều kiện thứ hai là so sánh vị trí x con chim
  // với cái ống
  // và cuối cùng là so sánh vị trí y

  scoreshow.innerHTML = "score: " + score;
  // cho bird rơi xuống
  bird.y += 1;// điều chỉnh tốc rơi của chim
  requestAnimationFrame(run);
}
//thêm function cho nó bay lên khi nhấn
document.addEventListener("keydown", function () {
  bird.y -= 40; // điều chỉnh chiều cao nhảy của chim
});
// ok khá ổn
// các bạn nhớ là tọa độ trên máy tính là ở gốc trên trái đi xuống dưới
// là chiều dương nha
run();
