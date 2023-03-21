// Mô tả một lớp PhanSo, lớp này gồm có 2 thuộc tính: tuSo, mauSo
// Hai thuộc tính này được khởi tạo constructor
class PhanSo {
    constructor (tuSo, mauSo) {
        this.tuSo = tuSo;
        this.mauSo = mauSo;
    }
    add(other){ 
        // phân số 1: this
        // phân số 2: other
       let tuSoCong = this.tuSo * other.mauSo + other.tuSo * this.mauSo;
       let mauSoCong = this.mauSo * other.mauSo;
       console.log(` Kết quả của phép cộng: ${tuSoCong} / ${mauSoCong}`);
    }

    sub(other){ 
        
       let tuSoTru = this.tuSo * other.mauSo - other.tuSo * this.mauSo;
       let mauSoTru = this.mauSo * other.mauSo;
       console.log(` Kết quả của phép trừ: ${tuSoTru} / ${mauSoTru}`);
    }

    multi(other){ 
        
        let tuSoNhan = this.tuSo *  other.tuSo ;
        let mauSoNhan = this.mauSo * other.mauSo;
        console.log(` Kết quả của phép nhân: ${tuSoNhan} / ${mauSoNhan}`);
     }
     div(other){ 
        
        let tuSoChia = this.tuSo * other.mauSo ;
        let mauSoChia = this.mauSo * other.tuSo;
        console.log(` Kết quả của phép chia: ${tuSoChia} / ${mauSoChia}`);
     }

}
// tạo ra obj từ class PhanSo đã mô tả
let ps1 = new PhanSo(3, 5);
console.log(ps1.tuSo);
let ps2 = new PhanSo(4, 5);

ps1.add(ps2);
ps1.sub(ps2);
ps1.multi(ps2);
ps1.div(ps2);