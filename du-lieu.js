/* =====================================================================
   DỮ LIỆU CỦA HỆ THỐNG — đây là file DUY NHẤT cần sửa khi cập nhật.
   Chỉ ghi thông tin công khai của đơn vị, không ghi thông tin cá nhân.
   Diện tích, dân số: KHÔNG đưa vào hệ thống (do UBND xã tự công bố khi cần).
   ===================================================================== */
window.DU_LIEU = {
  phienBan: "5.7",
  capNhat: "07/11/2026",
  tenHeThong: "Smart Navigation",
  donVi: "Trường TH&THCS Vĩnh Gia 2",
  xa: "Xã Vĩnh Gia, tỉnh An Giang",
  website: "http://thvathcsvg2.edu.vn",
  email: "c2vinhgia2.vinhgia@angiang.gov.vn",
  ngayHoc: [1, 2, 3, 4, 5],
  hienDuLieuMau: true,                 // true = hiện cả điểm "mau: true"; false = chỉ hiện điểm đã xác minh
  /* Dấu tác giả hiện ở cuối các trang. Để trống ten và email thì dòng này tự ẩn. */
  tacGia: { ten: "", email: "", nam: "2026" },
  hotlineTreEm: "111",                 // chỉ hiện khi chọn địa điểm thuộc nhóm Trường học
  // trangMacDinh: "tong-quan",        // bỏ dấu // để mở trang Tổng quan đầu tiên (mặc định mở Bản đồ)

  xaInfo: {
    ten: "Xã Vĩnh Gia", tinh: "Tỉnh An Giang",
    maDinhDanh: "30568", maBuuChinh: "90811", loaiDonVi: "Xã",
    hopNhatTu: ["Xã Vĩnh Phước", "Xã Lương An Trà", "Xã Vĩnh Gia"],
    hieuLuc: "01/07/2025", truSoUBND: "Đường Tỉnh 958, ấp Giồng Cát",
    tamBan: [10.4311, 104.86],
    web: "http://vinhgia.angiang.gov.vn", webTinh: "https://angiang.gov.vn",
    cong: [
      { icon: "🌐", ten: "Cổng thông tin xã", url: "http://vinhgia.angiang.gov.vn" },
      { icon: "🏛️", ten: "Cổng tỉnh An Giang", url: "https://angiang.gov.vn" },
      { icon: "🧾", ten: "Dịch vụ công Quốc gia", url: "https://dichvucong.gov.vn/dvc-dich-vu-cong-truc-tuyen" }
    ]
  },

  /* ====== BÁO CÁO ĐIỂM ĐEN MÔI TRƯỜNG ======
     Đoàn Thanh niên xã điền nơi nhận báo cáo (để trống thì ẩn nút tương ứng):
       email   : địa chỉ email tiếp nhận (hộp thư chung của Đoàn)
       sdt     : số điện thoại tiếp nhận (của Đoàn, không phải số cá nhân)
       zalo    : số Zalo của Đoàn (dạng 0xxxxxxxxx)
       bieuMau : đường dẫn Google Form của Đoàn, dạng https://docs.google.com/forms/d/e/.../viewform
                 (KHÔNG dùng link rút gọn forms.gle). Báo cáo tự lưu vào Google Sheets và gửi email thông báo.
       bieuMauEntry : mã ô "Nội dung báo cáo" trong biểu mẫu, dạng entry.1234567890 — để hệ thống điền sẵn nội dung,
                 người dân chỉ cần bấm Gửi. Cách lấy mã: xem hướng dẫn. */
  baoCao: {
    donViNhan: "Đoàn Thanh niên xã Vĩnh Gia",
    email: "", sdt: "", zalo: "", bieuMau: "", bieuMauEntry: "",
    loai: ["Rác thải tồn đọng, bãi rác tự phát", "Đốt rác, đốt rơm rạ gây khói bụi", "Nước thải, ô nhiễm nguồn nước", "Mùi hôi từ chăn nuôi, nhà máy, cơ sở sản xuất", "Xả thải trái phép ra kênh, rạch", "Chai lọ, bao bì thuốc bảo vệ thực vật bỏ bừa bãi", "Xác động vật, dịch bệnh", "Vấn đề khác"],
    mucDo: ["Nhẹ", "Trung bình", "Nghiêm trọng"]
  },

  /* ====== CÁC ẤP — lat, lng (toạ độ ghim), anh (tên file), maps (liên kết vị trí). gannDung: true = ghim chỉ gần đúng.
     datDen: [vĩ độ, kinh độ] = toạ độ dùng cho nút Dẫn đường (nếu khác vị trí ghim) ====== */
  ap: [
    { ten: "Cà Na", anh: "ap-ca-na.jpg", maps: "https://maps.app.goo.gl/jvwFJr3KE18D6SnS7", lat: 10.415917, lng: 104.908444, mota: "" },
    { ten: "Cây Gòn", anh: "ap-cay-gon.jpg", maps: "https://maps.app.goo.gl/AzmfPcqdN6VYz3UT9", lat: 10.356441, lng: 104.864725, mota: "" },
    { ten: "Giồng Cát", anh: "ap-giong-cat.jpg", maps: "https://maps.apple/p/z6Rf9aWgNy-1uG", lat: 10.477603, lng: 104.903846, mota: "" },
    { ten: "Ninh Phước", anh: "ap-ninh-phuoc.jpg", maps: "https://maps.app.goo.gl/UNct7PHu7mY8k5nF6", lat: 10.377330, lng: 104.881258, mota: "Văn phòng ấp đặt tại Tỉnh lộ 958." },
    { ten: "Phú Lâm", anh: "ap-phu-lam.jpg", maps: "https://maps.app.goo.gl/ZnE7PefUYDT2mJLG9", lat: 10.352496, lng: 104.942773, mota: "" },
    { ten: "Vĩnh An", anh: "ap-vinh-an.jpg", maps: "https://maps.app.goo.gl/Jp7q8kzFf7Ec6q4h8", lat: 10.463449, lng: 104.876793, mota: "" },
    { ten: "Vĩnh Cầu", anh: "ap-vinh-cau.jpg", maps: "https://maps.app.goo.gl/5axZCsNciQWg8hkRA", lat: 10.506869, lng: 104.814621, mota: "" },
    { ten: "Vĩnh Hiệp", anh: "ap-vinh-hiep.jpg", maps: "https://maps.apple.com/place?coordinate=10.505613,104.794684", lat: 10.507400, lng: 104.817000, gannDung: true, datDen: [10.505613, 104.794684], mota: "Điểm sinh hoạt văn hóa cộng đồng ấp." },
    { ten: "Vĩnh Hòa", anh: "ap-vinh-hoa.jpg", maps: "https://maps.app.goo.gl/dv1gDgxRW6y44X1j9?g_st=ic", lat: 10.507051, lng: 104.788868, mota: "" },
    { ten: "Vĩnh Lạc", anh: "ap-vinh-lac.jpg", maps: "https://maps.app.goo.gl/R6JNGcoZjGMUSySq9?g_st=ic", lat: 10.507882, lng: 104.839909, mota: "" },
    { ten: "Vĩnh Thành", anh: "ap-vinh-thanh.jpg", maps: "https://maps.app.goo.gl/J5ST455hxFWBfbqYA?g_st=ic", lat: 10.457366, lng: 104.836857, mota: "" }
  ],

  /* "Cần làm gì? Đến đâu?" — mục Dịch vụ. act: "grp:<nhóm>" | "id:<mã điểm>" | "page:<trang>" */
  huongDan: [
    { ic: "🏛️", cau: "Làm thủ tục hành chính, gặp chính quyền xã", goiY: "UBND xã tại Đường Tỉnh 958, ấp Giồng Cát. Nhiều thủ tục làm được trực tuyến.", act: "id:ubnd-xa", nut: "Xem UBND xã" },
    { ic: "🩺", cau: "Khám bệnh, tiêm chủng, chăm sóc sức khỏe", goiY: "Đến Trạm y tế xã (có 2 cơ sở).", act: "grp:yte", nut: "Xem trạm y tế" },
    { ic: "👮", cau: "Làm việc với Công an xã, tiếp công dân", goiY: "Công an xã tiếp công dân vào thứ ba hằng tuần, 7h–11h và 13h–17h.", act: "id:cong-an-xa", nut: "Xem Công an xã" },
    { ic: "🎓", cau: "Tìm trường cho con, xem trụ sở và điểm trường", goiY: "Xem 4 trụ sở của Trường TH&THCS Vĩnh Gia 2 và các trường khác.", act: "grp:giaoduc", nut: "Xem trường học" },
    { ic: "🏘️", cau: "Tìm văn phòng ấp, hỏi việc tại ấp", goiY: "Mỗi ấp đều có văn phòng ấp, chạm vào ấp để xem ảnh và dẫn đường.", act: "page:cac-ap", nut: "Xem các ấp" },
    { ic: "🚨", cau: "Phản ánh rác thải, nước thải, khói bụi, mùi hôi", goiY: "Gửi báo cáo điểm đen môi trường tới Đoàn Thanh niên xã.", act: "page:bao-cao", nut: "Báo cáo ngay" }
  ],

  dvcLink: "https://dichvucong.gov.vn/dvc-dich-vu-cong-truc-tuyen",
  dvcGhiChu: "Cần tài khoản định danh điện tử VNeID mức độ 2.",
  dvc: [
    { icon: "🏠", ten: "Đăng ký cư trú", mota: "Đăng ký tạm trú, thường trú và khai báo lưu trú trực tuyến." },
    { icon: "⚖️", ten: "Lý lịch tư pháp", mota: "Nộp hồ sơ cấp Phiếu lý lịch tư pháp, nhận kết quả điện tử qua VNeID." },
    { icon: "🪪", ten: "Cấp đổi giấy tờ", mota: "Giấy phép lái xe, hộ chiếu, căn cước công dân." },
    { icon: "💳", ten: "Nộp thuế & phí", mota: "Lệ phí trước bạ xe, nghĩa vụ tài chính đất đai, nộp phạt giao thông." }
  ],

  gio: {
    thcs: { ten: "Cấp THCS",     sang: ["07:00", "11:15"], chieu: ["13:10", "17:20"], nghi: "Sáng 08h30–09h00 · Chiều 14h40–15h05" },
    th:   { ten: "Cấp Tiểu học", sang: ["07:15", "10:45"], chieu: ["13:30", "16:50"], nghi: "Sáng 08h30–09h00 · Chiều 14h40–15h05" }
  },

  nhom: {
    giaoduc:  { ten: "Trường học", icon: "🎓", mau: "#c8921a" },
    hanhchinh:{ ten: "Cơ quan hành chính", icon: "🏛️", mau: "#5b4bb7" },
    yte:      { ten: "Y tế", icon: "🏥", mau: "#c62839" },
    anninh:   { ten: "An ninh – Quốc phòng", icon: "🛡️", mau: "#3d6b2e" },
    diemden:  { ten: "Điểm đen môi trường", icon: "⚠️", mau: "#b3261e" },
    anuong:   { ten: "Ăn uống", icon: "🍜", mau: "#d1451f" },
    giaitri:  { ten: "Giải trí", icon: "🎡", mau: "#9b3fb8" },
    danhthang:{ ten: "Danh thắng & di tích", icon: "🌅", mau: "#d9631e" },
    cho:      { ten: "Chợ & siêu thị", icon: "🛒", mau: "#1c8a68" },
    buudien:  { ten: "Bưu điện", icon: "📮", mau: "#1f6fb2" },
    cayxang:  { ten: "Cây xăng", icon: "⛽", mau: "#d9a21b" },
    ap:       { ten: "Các ấp", icon: "🏘️", mau: "#51627d" }
  },
  loai: {
    chinh:      { ten: "Trụ sở chính", mau: "#c8921a", icon: "🎓", nhom: "giaoduc" },
    phanhieu:   { ten: "Phân hiệu",    mau: "#1f6fb2", icon: "🏫", nhom: "giaoduc" },
    diemtruong: { ten: "Điểm trường",  mau: "#1c8a68", icon: "📚", nhom: "giaoduc" },
    truong:     { ten: "Trường học",   mau: "#b5781c", icon: "🏫", nhom: "giaoduc" },
    hanhchinh:  { ten: "Cơ quan",      mau: "#5b4bb7", icon: "🏛️", nhom: "hanhchinh" },
    yte:        { ten: "Y tế",         mau: "#c62839", icon: "🏥", nhom: "yte" },
    anninh:     { ten: "Công an – Biên phòng", mau: "#3d6b2e", icon: "🛡️", nhom: "anninh" },
    quansu:     { ten: "Quân sự",       mau: "#556b2f", icon: "🎖️", nhom: "anninh" },
    diemden:    { ten: "Điểm đen",     mau: "#b3261e", icon: "⚠️", nhom: "diemden" },
    danhthang:  { ten: "Danh thắng",   mau: "#d9631e", icon: "🌅", nhom: "danhthang" },
    anuong:     { ten: "Quán ăn",      mau: "#d1451f", icon: "🍜", nhom: "anuong" },
    giaitri:    { ten: "Giải trí",     mau: "#9b3fb8", icon: "🎡", nhom: "giaitri" },
    ap:         { ten: "Ấp",           mau: "#51627d", icon: "🏘️", nhom: "ap" },
    cho:        { ten: "Chợ",          mau: "#1c8a68", icon: "🛒", nhom: "cho" },
    dinh:       { ten: "Đình thần",    mau: "#b3261e", icon: "🏮", nhom: "danhthang" }
  },

  /* mau: true = thông tin/vị trí còn là mẫu hoặc gần đúng, cần xác minh.
     truong: "vg2" = thuộc Trường TH & THCS Vĩnh Gia 2 (dùng website/email/dịch vụ của trường này).
     Điểm chưa có lat/lng vẫn hiện trong danh sách; nút dẫn đường sẽ mở liên kết maps. */
  diem: [
    { id: "truong-chinh", truong: "vg2", loai: "chinh", ten: "Trường TH&THCS Vĩnh Gia 2 – Trụ sở chính", ngan: "Trường TH&THCS Vĩnh Gia 2 – Trụ sở chính", nhan: "Trụ sở chính",
      ap: "Vĩnh An", lat: 10.464404, lng: 104.876773, anh: "truong-chinh.jpg",
      maps: "https://maps.app.goo.gl/r1rM5LTdB6aQ973t7", khung: ["thcs", "th"], truc: null,
      capHoc: "Lớp 1 đến Lớp 9", quyMo: "khoảng 189 học sinh",
      chucNang: [
        "Trung tâm quản trị, điều hành thống nhất toàn bộ hoạt động của nhà trường.",
        "Nơi làm việc của Lãnh đạo trường (Hiệu trưởng, Phó Hiệu trưởng phụ trách).",
        "Đầu mối duy nhất quản lý con dấu pháp nhân, tài khoản ngân sách, kế toán và hồ sơ gốc.",
        "Có các phòng chức năng: Thư viện, phòng Tin học, phòng Thiết bị, phòng quản trị hành chính."
      ], luuY: "" },
    { id: "diem-vinh-thanh", truong: "vg2", loai: "diemtruong", ten: "Trường TH&THCS Vĩnh Gia 2 – Điểm trường Vĩnh Thành", ngan: "Trường TH&THCS Vĩnh Gia 2 – Điểm trường Vĩnh Thành", nhan: "Vĩnh Thành",
      ap: "Vĩnh Thành", lat: 10.457341, lng: 104.839393, anh: "vinh-thanh.jpg",
      maps: "https://maps.app.goo.gl/P9JFvfozLazL7AMZ6", khung: ["th"], truc: "truong-chinh",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 87 học sinh",
      chucNang: ["Địa điểm tổ chức lớp học Tiểu học khu vực ấp Vĩnh Thành.", "Do Trụ sở chính trực tiếp điều phối và quản lý."], luuY: "" },
    { id: "phan-hieu", truong: "vg2", loai: "phanhieu", ten: "Trường TH&THCS Vĩnh Gia 2 – Phân hiệu", ngan: "Trường TH&THCS Vĩnh Gia 2 – Phân hiệu", nhan: "Phân hiệu",
      ap: "Ninh Phước", lat: 10.381456, lng: 104.884095, anh: "phan-hieu.jpg",
      maps: "https://maps.app.goo.gl/cy1N2mNbtEbkCmAg8", khung: ["th"], truc: "truong-chinh",
      capHoc: "Cấp Tiểu học (Lớp 1 đến Lớp 5)", quyMo: "khoảng 216 – 343 học sinh", khoangCach: "Cách Trụ sở chính hơn 15 km",
      chucNang: [
        "Dạy học và giáo dục cấp Tiểu học theo kế hoạch chung của nhà trường.",
        "Có 01 Phó Hiệu trưởng trực tiếp phụ trách, điều hành tại chỗ theo phân công của Hiệu trưởng.",
        "Trực tiếp quản lý học sinh, giáo viên, cơ sở vật chất và thiết bị dạy học tại phân hiệu.",
        "Có thư viện, phòng Tiếng Anh, phòng Tin học và các phòng học tiểu học."
      ], luuY: "Phân hiệu không có tư cách pháp nhân độc lập, không có con dấu hay tài khoản ngân hàng riêng. Việc cần con dấu, hồ sơ gốc xử lý tại Trụ sở chính." },
    { id: "diem-ninh-phuoc", truong: "vg2", loai: "diemtruong", ten: "Trường TH&THCS Vĩnh Gia 2 – Điểm trường Ninh Phước", ngan: "Trường TH&THCS Vĩnh Gia 2 – Điểm trường Ninh Phước", nhan: "Ninh Phước",
      ap: "Ninh Phước", lat: 10.3646, lng: 104.870738, anh: "ninh-phuoc.jpg",
      maps: "https://maps.app.goo.gl/Cb5PaBJBbFT3pwJA6", khung: ["th"], truc: "phan-hieu",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 107 học sinh",
      chucNang: ["Tổ chức các lớp học Tiểu học, giúp rút ngắn khoảng cách đi lại cho học sinh.", "Do Phân hiệu trực tiếp quản lý, không có bộ máy quản lý riêng."], luuY: "" },

    { id: "truong-vg1", loai: "truong", ten: "Trường Tiểu học và Trung học cơ sở Vĩnh Gia 1", ngan: "Trường Vĩnh Gia 1",
      ap: "", lat: 10.506456, lng: 104.798614, anh: "truong-vg1.jpg", maps: "https://maps.app.goo.gl/QBM5sv1JCqF5CNHX9", truc: null,
      capHoc: "Tiểu học và Trung học cơ sở",
      lienHe: { web: "http://thcsvinhgia.pgdtriton.edu.vn" },
      chucNang: ["Trường Tiểu học và Trung học cơ sở trên địa bàn xã Vĩnh Gia.", "Thông tin chi tiết cập nhật theo trang web của nhà trường."], luuY: "" },
    { id: "truong-ptnt", loai: "truong", ten: "Trường PTNT (tên đầy đủ đang cập nhật)", ngan: "Trường PTNT",
      ap: "", anh: "", maps: "https://maps.app.goo.gl/PYFs7ssURq8uTFTR7?g_st=ic", truc: null,
      chucNang: ["Cơ sở giáo dục trên địa bàn xã Vĩnh Gia.", "Thông tin chi tiết đang được cập nhật."], luuY: "" },

    { id: "cong-an-xa", loai: "anninh", ten: "Công an xã Vĩnh Gia", ngan: "Công an xã",
      ap: "Vĩnh An", lat: 10.463449, lng: 104.876793, anh: "cong-an-xa.jpg", maps: "https://maps.app.goo.gl/Jp7q8kzFf7Ec6q4h8", truc: null,
      nhanh: [["Tiếp công dân", "Thứ ba hằng tuần · 7h–11h, 13h–17h"]],
      chucNang: [
        "Giữ gìn an ninh, trật tự trên địa bàn xã.",
        "Có Bộ phận tiếp nhận và trả kết quả tập trung (ra mắt ngày 08/10/2026).",
        "Điểm tiếp công dân tại ấp Vĩnh An; có hòm thư góp ý."
      ], luuY: "" },
    { id: "tram-y-te-vg", loai: "yte", ten: "Trạm y tế xã Vĩnh Gia (cơ sở 1)", ngan: "Trạm y tế 1",
      ap: "", lat: 10.506323, lng: 104.796684, anh: "tram-y-te-vg.jpg", maps: "https://maps.app.goo.gl/UNgwbYFqWw6nHqna8", truc: null,
      lienHe: { sdt: "02963893010" }, gioText: "Cần xác nhận giờ khám",
      chucNang: ["Khám, chữa bệnh ban đầu và chăm sóc sức khỏe cho người dân.", "Tiêm chủng, tuyên truyền phòng bệnh."], luuY: "" },
    { id: "tram-y-te-xa", loai: "yte", ten: "Trạm y tế xã Vĩnh Gia (cơ sở 2)", ngan: "Trạm y tế 2",
      ap: "", lat: 10.405346, lng: 104.899922, anh: "tram-y-te-xa.jpg", maps: "https://maps.apple/p/gkekoYvm-L8g37", truc: null,
      lienHe: { sdt: "02963500058" }, gioText: "Cần xác nhận giờ khám",
      chucNang: ["Khám, chữa bệnh ban đầu và chăm sóc sức khỏe cho người dân.", "Phục vụ khu vực lân cận cơ sở."], luuY: "" },

    /* ----- Điểm còn là dữ liệu mẫu / gần đúng (cần xác minh, thay bằng dữ liệu thật) ----- */
    { id: "ubnd-xa", loai: "hanhchinh", ten: "UBND xã Vĩnh Gia (Đảng ủy – HĐND – UBND – UBMTTQVN)", ngan: "UBND xã Vĩnh Gia", nhan: "UBND xã",
      ap: "Giồng Cát", lat: 10.405346, lng: 104.899922, anh: "ubnd-xa.jpg", maps: "https://maps.app.goo.gl/HhxGf9DzL6Ybhj8N9", truc: null,
      lienHe: { web: "http://vinhgia.angiang.gov.vn" }, gioText: "Giờ hành chính (cần xác nhận)",
      nhanh: [["Địa chỉ", "Đường Tỉnh 958, ấp Giồng Cát"]],
      chucNang: ["Tiếp nhận và giải quyết thủ tục hành chính cho người dân.", "Nơi làm việc của Đảng ủy, HĐND, UBND và Ủy ban MTTQ Việt Nam xã.", "Nhiều thủ tục có thể thực hiện trực tuyến qua Cổng Dịch vụ công."], luuY: "" },
    { id: "quan-su-xa", loai: "quansu", ten: "Ban Chỉ huy Quân sự xã Vĩnh Gia", ngan: "Ban Chỉ huy Quân sự xã Vĩnh Gia", nhan: "Quân sự xã",
      ap: "", lat: 10.506043, lng: 104.799202, anh: "quan-su-xa.jpg", maps: "https://maps.app.goo.gl/o1hC4QPBCLysbf7CA", truc: null, gioText: "Giờ hành chính (cần xác nhận)",
      chucNang: ["Cơ quan quân sự cấp xã, trực thuộc Bộ Chỉ huy Quân sự tỉnh An Giang.", "Thực hiện nhiệm vụ quốc phòng, quân sự địa phương trên địa bàn xã."], luuY: "Khu vực quân sự: không vào những nơi có biển “Khu quân sự cấm vào”." },
    { id: "don-bien-phong", loai: "anninh", ten: "Đồn Biên phòng Vĩnh Gia", ngan: "Đồn Biên phòng", mau: true,
      ap: "", lat: 10.4420, lng: 104.8930, anh: "", maps: "", truc: null, gioText: "Trực 24/24",
      chucNang: ["Bảo vệ chủ quyền, an ninh biên giới khu vực.", "Phối hợp cùng chính quyền và nhân dân giữ gìn trật tự địa bàn."], luuY: "" },
    { id: "kenh-vinh-te", loai: "danhthang", ten: "Kênh Vĩnh Tế", ngan: "Kênh Vĩnh Tế", mau: true,
      ap: "", lat: 10.4850, lng: 104.8300, anh: "", maps: "", truc: null, gioText: "Tham quan tự do",
      ke: "Công trình thủy lợi, giao thông và biên giới nổi tiếng của vùng Tây Nam Bộ, được đào từ năm 1819 đến 1824 dưới sự chỉ huy của Thoại Ngọc Hầu.",
      chucNang: ["Điểm tìm hiểu lịch sử khai phá vùng biên giới.", "Cảnh quan sông nước, thích hợp ngắm hoàng hôn."], luuY: "" },
    { id: "mau-an-uong", loai: "anuong", ten: "Quán ăn địa phương (mẫu – thay bằng thông tin thật)", ngan: "Quán ăn (mẫu)", mau: true, mauText: "Dữ liệu mẫu",
      ap: "", lat: 10.4475, lng: 104.8665, anh: "", maps: "", truc: null,
      gioText: "Giờ mở cửa: đang cập nhật", nhanh: [["Món nổi bật", "Đang cập nhật"], ["Mức giá", "Đang cập nhật"]],
      chucNang: ["Nhóm Ăn uống gồm quán ăn, quán cà phê, chợ ẩm thực.", "Khi có dữ liệu thật, thay tên, toạ độ, ảnh, món nổi bật và giá."], luuY: "" },
    { id: "mau-giai-tri", loai: "giaitri", ten: "Điểm vui chơi giải trí (mẫu – thay bằng thông tin thật)", ngan: "Giải trí (mẫu)", mau: true, mauText: "Dữ liệu mẫu",
      ap: "", lat: 10.4390, lng: 104.8540, anh: "", maps: "", truc: null,
      gioText: "Giờ hoạt động: đang cập nhật", nhanh: [["Hoạt động", "Đang cập nhật"], ["Vé vào cổng", "Đang cập nhật"]],
      chucNang: ["Nhóm Giải trí gồm sân bóng, công viên, khu vui chơi, điểm check-in.", "Khi có dữ liệu thật, thay tên, toạ độ, ảnh và thông tin chi tiết."], luuY: "" },
    /* ----- Điểm mới (v5.7): ảnh đã có, CHƯA có toạ độ — điền lat, lng và maps khi có ----- */
    { id: "cho-vinh-gia", loai: "cho", ten: "Chợ Vĩnh Gia", ngan: "Chợ Vĩnh Gia", nhan: "Chợ",
      ap: "", anh: "cho-vinh-gia.jpg", maps: "", truc: null, gioText: "Cần xác nhận giờ họp chợ",
      chucNang: ["Nơi mua bán thực phẩm, hàng hóa hằng ngày của người dân trong xã."], luuY: "" },
    { id: "dinh-than-cau-dai", loai: "dinh", ten: "Đình thần Cầu Dài", ngan: "Đình thần Cầu Dài", nhan: "Đình Cầu Dài",
      ap: "", anh: "dinh-than-cau-dai.jpg", maps: "", truc: null, gioText: "Tham quan tự do",
      chucNang: ["Đình thần trên địa bàn xã Vĩnh Gia, nơi sinh hoạt tín ngưỡng của cộng đồng."], luuY: "Giữ trang nghiêm khi vào tham quan." },
    { id: "dinh-than-vinh-gia", loai: "dinh", ten: "Đình thần Vĩnh Gia", ngan: "Đình thần Vĩnh Gia", nhan: "Đình Vĩnh Gia",
      ap: "", anh: "dinh-than-vinh-gia.jpg", maps: "", truc: null, gioText: "Tham quan tự do",
      chucNang: ["Đình thần trên địa bàn xã Vĩnh Gia, nơi sinh hoạt tín ngưỡng của cộng đồng."], luuY: "Giữ trang nghiêm khi vào tham quan." },
    { id: "mam-non-giong-cat", loai: "truong", ten: "Trường Mầm non Vĩnh Gia – ấp Giồng Cát", ngan: "Mầm non Giồng Cát", nhan: "Mầm non",
      ap: "Giồng Cát", anh: "mam-non-giong-cat.jpg", maps: "", truc: null, capHoc: "Mầm non",
      chucNang: ["Trường Mầm non do UBND xã Vĩnh Gia quản lý, cơ sở tại ấp Giồng Cát."], luuY: "" },
    { id: "mam-non-vinh-cau", loai: "truong", ten: "Trường Mầm non Vĩnh Gia – Phân hiệu 1 (ấp Vĩnh Cầu)", ngan: "Mầm non Vĩnh Cầu", nhan: "Mầm non PH1",
      ap: "Vĩnh Cầu", anh: "mam-non-vinh-cau.jpg", maps: "", truc: null, capHoc: "Mầm non", lienHe: { sdt: "02963787269" },
      chucNang: ["Phân hiệu 1 của Trường Mầm non Vĩnh Gia, đặt tại ấp Vĩnh Cầu."], luuY: "" }

    /* Điểm đen môi trường UBND xã đã tiếp nhận (công khai tiến độ xử lý) — ví dụ:
    , { id: "dd-01", loai: "diemden", ten: "Bãi rác tự phát tại ...", ngan: "Bãi rác ...", ap: "Vĩnh An",
        lat: 10.46, lng: 104.87, anh: "", maps: "", truc: null,
        nhanh: [["Tình trạng", "Đang xử lý"], ["Tiếp nhận", "03/11/2026"]], chucNang: ["Mô tả ngắn"], luuY: "" } */
  ],

  dichVu: [
    { ten: "Tuyển sinh đầu cấp (Lớp 1, Lớp 6)", mota: "Đăng ký trực tuyến toàn phần qua Cổng dịch vụ công hoặc ứng dụng VNeID.", online: true, tai: "all" },
    { ten: "Chuyển trường, cấp sao văn bằng/chứng chỉ, tra cứu Học bạ số", mota: "Thủ tục học đường thực hiện trực tuyến.", online: true, tai: "all" },
    { ten: "Tư vấn & hỗ trợ", mota: "Hỗ trợ tâm lý học đường; tư vấn chính sách hỗ trợ học sinh vùng biên giới, hoàn cảnh khó khăn.", online: false, tai: "all" },
    { ten: "Việc cần con dấu, hồ sơ gốc, kế toán", mota: "Làm việc trực tiếp với Ban Giám hiệu và bộ phận hành chính.", online: false, tai: ["truong-chinh"] }
  ]
};
