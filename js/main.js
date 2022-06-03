//BÀI TẬP 1
//người dùng click vào nút tính lương sau khi đã nhập các giá trị
document.getElementById('tinhLuong').onclick = function () {
    //input 
    //nhập vào lương một ngày
    var luongMotNgay = document.getElementById('luongMotNgay').value;
    //nhập vào số ngày làm
    var soNgayLam = document.getElementById('soNgayLam').value;
    //xử lí
    //tổng lương = lương một ngày * số ngày làm
    tongLuong = luongMotNgay * soNgayLam;
    //output: tổng lương
    //in output ra giao diện
    //truy xuất vào thẻ input để thay đổi value đã hiển thị
    document.getElementById('tongTien').value = tongLuong;
}

//BÀI TẬP 2
//người dùng click vào nút button sau khi đã nhập các giá trị
document.getElementById('tinhTrungBinh').onclick = function () {
    //input
    //người dùng nhập vào lần lượt 5 giá trị số
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);
    var num3 = Number(document.getElementById('number3').value);
    var num4 = Number(document.getElementById('number4').value);
    var num5 = Number(document.getElementById('number5').value);
    //xử lí
    //giá trị TB = tổng giá trị của các số thực nhập vào / số lượng số đã nhập
    var giaTriTrungBinh = 0;
    giaTriTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
    //output: giá trị trung bình
    //in output ra giao diện
    //truy xuất vào thẻ input để thay đổi value đã hiển thị
    document.getElementById('trungBinh').value = giaTriTrungBinh;
}

//Bài tập 3
//người dùng click vào nút button sau khi nhập giá trị vào
document.getElementById('btnDoiTien').onclick = function () {
    //input : 1 USD = 23.500
    //người dùng nhập vào số tiền usd để quy đổi
    var uSd = document.getElementById('soTienUsD').value;
    //xử lí
    //số tiền quy đổi = số tiền usd người dùng nhập vào * 23.500
    soTienQuyDoi = uSd * 23500;
    //output: số tiền quy đổi
    //in output ra giao diện
    //truy xuất vào thẻ input để thay đổi value đã hiển thị
    document.getElementById('tienQuyDoi').value = new Intl.NumberFormat('vn-VN').format(soTienQuyDoi);
}

//Bài tập 4
//người dùng click vào nút button sau khi nhập giá trị vào
document.getElementById('btnTinhToan').onclick = function () {
    //input : chiều dài, chiều rộng
    //người dùng nhập vào giá trị chiều dài, giá trị chiều rộng
    var chieuDai = Number(document.getElementById('nhapChieuDai').value);
    var chieuRong = Number(document.getElementById('nhapChieuRong').value);
    //Xử lí
    //Diện tích HCN = dài * rộng , Chu Vi HCN = (dài + rộng) * 2
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    //output: chu vi, diện tích
    //in output ra giao diện
    //truy xuất vào thẻ input để thay đổi value đã hiển thị
   document.getElementById('ketQua').value = ("Diện tích: " + (document.getElementById('ketQua').value = dienTich) + ';' + "Chu vi: " + (document.getElementById('ketQua').value = chuVi));
}

//BÀI TẬP 5
//người dùng click vào nút button sau khi nhập giá trị vào
document.getElementById('tinhTong').onclick = function () {
    //input: số có 2 chữ số
    //người dùng nhập vào số có 2 chữ số
    var num = document.getElementById('nhapSo').value;
    //Xử lí
    // + tách lấy hàng chục => num / 10=> làm tròn số Math.floor(num / 10)
    hangChuc = Math.floor(num / 10);
    // + tách lấy hàng đơn vị => n % 10
    hangDonVi = num % 10;
    // + tổng = hàng chục + hàng đơn vị
    tong = hangChuc + hangDonVi;
    //output : tổng 2 ký số
    //in output ra giao diện
    document.getElementById('tong2KySo').value = tong;
}