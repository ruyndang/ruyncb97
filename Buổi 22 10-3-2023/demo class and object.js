class Hocvien {
    // Hàm tạo (Constructor)
    constructor(sHoTen, sDienthoai, sEmail, dDiem, bGioitinh) {
        this.Hoten = sHoTen;
        this.Dienthoai = sDienthoai;
        this.Email = sEmail;
        this.Diem = dDiem;
        this.Gioitinh = bGioitinh;
    }
}
let hv1 = new Hocvien('Hoài', '0905626647', 'Hoai@gmail.com', 9.1, true);
console.log(hv1);