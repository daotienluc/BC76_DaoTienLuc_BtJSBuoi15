document.getElementById("kqBai1").onclick = function () {
  const diemChuan =
    document.querySelector("input[placeholder='Điểm chuẩn']").value * 1;
  const khuVuc = document.querySelector("select[name='khuvuc']").value;
  const doiTuong = document.querySelector("select[name='doituong']").value;
  const diemMon1 =
    document.querySelector("input[placeholder='Điểm môn thứ 1']").value * 1;
  const diemMon2 =
    document.querySelector("input[placeholder='Điểm môn thứ 2']").value * 1;
  const diemMon3 =
    document.querySelector("input[placeholder='Điểm môn thứ 3']").value * 1;

  // Tạo bảng điểm ưu tiên cho khu vực và đối tượng
  const diemUuTienKhuVuc = {
    A: 2,
    B: 1,
    C: 0.5,
  };

  const diemUuTienDoiTuong = {
    1: 2.5,
    2: 1.5,
    3: 1,
  };

  // Tính điểm ưu tiên cho thí sinh
  const diemUuTien =
    (diemUuTienKhuVuc[khuVuc] || 0) + (diemUuTienDoiTuong[doiTuong] || 0);

  // Tính tổng điểm đạt được
  const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  // Kiểm tra điều kiện đậu hay rớt
  let ketQua = "";
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    ketQua = "Thí sinh rớt do có môn điểm 0.";
  } else if (tongDiem >= diemChuan) {
    ketQua = `Thí sinh đậu với tổng điểm là ${tongDiem}`;
  } else {
    ketQua = `Thí sinh rớt với tổng điểm là ${tongDiem}`;
  }

  // Hiển thị kết quả
  document.getElementById("noidung1").innerHTML = ketQua;
};

// bài tập 2
document.getElementById("btnTinhTienDien").onclick = function tinhTienDien() {
  const hoTen = document.getElementById("hoTen").value;
  const soKW = document.getElementById("soKw").value * 1;
  let tienDien = 0;

  if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW <= 100) {
    tienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  }
  const tienDienFormatted = tienDien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  document.getElementById("noidung2").innerHTML =
    "Tiền điện là:" + tienDienFormatted;
  document.getElementById("tenNguoi").innerHTML = "Họ tên:" + hoTen;
};

// bài 3
document.getElementById("btnTinhTienThue").onclick = function () {
  // Lấy giá trị từ các thẻ input
  const nhapHoVaTen = document.getElementById("nhapHoVaTen").value;
  const tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  // Sử dụng số dạng khoa học
  const giamTruCaNhan = 4e6;
  const giamTruPhuThuoc = soNguoiPhuThuoc * 1.6e6;

  // Tính thu nhập chịu thuế
  const thuNhapChiuThue = tongThuNhapNam - giamTruCaNhan - giamTruPhuThuoc;
  let thueThuNhapCaNhan = 0;

  // Tính thuế theo từng đoạn thu nhập
  if (thuNhapChiuThue > 0) {
    if (thuNhapChiuThue <= 60e6) {
      thueThuNhapCaNhan = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120e6) {
      thueThuNhapCaNhan = 60e6 * 0.05 + (thuNhapChiuThue - 60e6) * 0.1;
    } else if (thuNhapChiuThue <= 210e6) {
      thueThuNhapCaNhan =
        60e6 * 0.05 + 60e6 * 0.1 + (thuNhapChiuThue - 120e6) * 0.15;
    } else if (thuNhapChiuThue <= 384e6) {
      thueThuNhapCaNhan =
        60e6 * 0.05 +
        60e6 * 0.1 +
        90e6 * 0.15 +
        (thuNhapChiuThue - 210e6) * 0.2;
    } else if (thuNhapChiuThue <= 624e6) {
      thueThuNhapCaNhan =
        60e6 * 0.05 +
        60e6 * 0.1 +
        90e6 * 0.15 +
        174e6 * 0.2 +
        (thuNhapChiuThue - 384e6) * 0.25;
    } else if (thuNhapChiuThue <= 960e6) {
      thueThuNhapCaNhan =
        60e6 * 0.05 +
        60e6 * 0.1 +
        90e6 * 0.15 +
        174e6 * 0.2 +
        240e6 * 0.25 +
        (thuNhapChiuThue - 624e6) * 0.3;
    } else {
      thueThuNhapCaNhan =
        60e6 * 0.05 +
        60e6 * 0.1 +
        90e6 * 0.15 +
        174e6 * 0.2 +
        240e6 * 0.25 +
        336e6 * 0.3 +
        (thuNhapChiuThue - 960e6) * 0.35;
    }
  }

  // Sử dụng NumberFormat để định dạng kết quả
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // Hiển thị kết quả
  console.log(`Họ tên: ${nhapHoVaTen}`);
  console.log(`Tổng thu nhập: ${formatter.format(tongThuNhapNam)}`);
  console.log(`Số người phụ thuộc: ${soNguoiPhuThuoc}`);
  console.log(`Thu nhập chịu thuế: ${formatter.format(thuNhapChiuThue)}`);
  console.log(
    `Thuế thu nhập cá nhân phải trả: ${formatter.format(thueThuNhapCaNhan)}`
  );

  // Hiển thị kết quả trên giao diện
  document.getElementById(
    "kqBai3"
  ).innerText = `Họ tên: ${nhapHoVaTen}; Thuế thu nhập cá nhân: ${formatter.format(
    thueThuNhapCaNhan
  )}`;
};

// bài 4
document.getElementById("customerType").addEventListener("change", function () {
  const customerType = this.value;
  const connectionField = document.getElementById("connectionField");
  if (customerType === "business") {
    connectionField.classList.remove("hidden");
  } else {
    connectionField.classList.add("hidden");
  }
});

document.getElementById("btnTinhHoaDon").onclick = function calculateBill() {
  const customerType = document.getElementById("customerType").value;
  const customerId = document.getElementById("customerId").value;
  const premiumChannels =
    parseInt(document.getElementById("premiumChannels").value) || 0;
  let totalBill = 0;

  if (customerType === "residential") {
    totalBill = 4.5 + 20.5 + 7.5 * premiumChannels;
  } else if (customerType === "business") {
    const connections =
      parseInt(document.getElementById("connections").value) || 0;
    const basicServiceFee =
      75 + (connections > 10 ? (connections - 10) * 5 : 0);
    totalBill = 15 + basicServiceFee + 50 * premiumChannels;
  }

  document.getElementById(
    "result"
  ).innerText = `Mã khách hàng là ${customerId}, Tiền cáp là: $${totalBill.toFixed(
    2
  )}`;
};
