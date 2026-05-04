console.log("Lab 02")


const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

//2.Tạo hàm xepLoai(diemTB)
const xeploai = (diemTB) => {
    if (diemTB >= 9) {
        return "Xuat sac";
    }
    else if (diemTB >= 8 && diemTB < 9) {
        return "Gioi";
    }
    else if (diemTB >= 6.5 && diemTB < 8) {
        return "Kha";
    }
    else {
        return "TB";
    }
}

// Output:
// Cho trước 3 biến:
const diemToan = 6;
const diemVan = 7;
const diemAnh = 7;
const myTB = tinhTrungBinh(diemToan, diemVan, diemAnh)
console.log(`
    Diem Trung Binh:${myTB}
    Xep loai:${xeploai(myTB)}
    `
)

// Gọi các hàm trên để tính điểm trung bình và in ra kết quả sau:
// Điểm trung bình: 8.0
// Xếp loại: Giỏi
