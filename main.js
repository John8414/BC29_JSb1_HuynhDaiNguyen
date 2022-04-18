// Bài tập 1:
/**
 * - Đầu vào :
 *   + lương 1 ngày làm : 100.000vnđ;
 *
 * - Xử lý :
 *   + Nhập số ngày làm ; giả sủ 22 ngày công
 *   + Lương nhân viên = lương 1 ngày * số ngày làm
 *
 * - Đầu ra :
 *   + Tiền lương nhân viên
 */

var soNgayLam = 22;
var luongNgay = 100000;
var luongNv = soNgayLam * luongNgay;

var currentFormat = new Intl.NumberFormat("vn-VN");
var ketQua =
  "Tiền lương nhân viên nhận được là : " + currentFormat.format(luongNv);
console.log(ketQua);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 2:
/**
 * - Đầu vào :
 *   + Nhập 5 số thực : (a, b, c, d, e) ;
 *
 * - Xử lý :
 *   + Tính trung bình của 5 số = (a + b + c + d + e) / 5 ;
 *
 * - Đầu ra :
 *   + giaTri_TB
 */

var a = 2;
var b = 3;
var c = 4;
var d = 5;
var e = 6;
var TBT = (a + b + c + d + e) / 5;

console.log("Giá trị trung bình của 5 số là : " + TBT);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 3:
/**
 * - Đầu vào :
 *   + Giá USD sang VNĐ : 23.500vnđ ;
 *   + Nhập số tiền USD ; giả sử $10
 *
 * - Xử lý :
 *   + Quy đổi số tiền USD sang VNĐ = Giá USD * 23.500 ;
 *
 * - Đầu ra :
 *   + Giá quy đổi từ USD sang VNĐ ;
 */

var giaUsd = 10;
var giaVnd = 23500;
var giaQuyDoi = giaUsd * giaVnd;

var currentFormat = new Intl.NumberFormat("vn-VN");
var raTien = "Giá quy đổi từ USD sang VNĐ : " + currentFormat.format(giaQuyDoi);
console.log(raTien);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 4:
/**
 * - Đầu vào :
 *   + Nhập vô số chiều dài ; giả sử 15
 *   + Nhập vô số chiều rộng ; giả sử 20
 *
 * - Xử lý :
 *   + Diện tích = chiều Dài * chiều Rộng ;
 *   + Chu vi = (chiều Dài + chiều Rộng) * 2 ;
 *
 * - Đầu ra :
 *   + Tính & xuất ra diện tích, chu vi của hình chữ nhật ;
 *
 */

var chieuDai = 15;
var chieuRong = 10;
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật là : " + dienTich);
console.log("Chu vi hình chữ nhật là : " + chuVi);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 5:
/**
 * - Đầu vào :
 *   + Nhập một số có 2 chữ số bất kỳ ;
 *
 * - Xử lý :
 *   + tách hàng đơn vị và hàng chục cả số ;
 *   + lấy 2 số tách được cộng lại ;
 *
 * - Đầu ra :
 *   + Tính tổng ;
 */

var n = 23;

var hangChuc = n / 10;
hangChuc = parseInt(hangChuc);

var hangDonVi = n % 10;
hangDonVi = parseInt(hangDonVi);

var tong = hangChuc + hangDonVi;

console.log("Tổng 2 ký số là : " + tong);
