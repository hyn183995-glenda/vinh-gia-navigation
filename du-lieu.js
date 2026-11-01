/* =====================================================================
   DỮ LIỆU CỦA HỆ THỐNG — đây là file DUY NHẤT cần sửa khi cập nhật.
   Chỉ ghi thông tin công khai của đơn vị, không ghi thông tin cá nhân.
   ===================================================================== */
window.DU_LIEU = {
  phienBan: "4.0",
  capNhat: "01/11/2026",
  tenHeThong: "Smart Navigation",
  donVi: "Trường TH & THCS Vĩnh Gia 2",
  xa: "Xã Vĩnh Gia, tỉnh An Giang",
  website: "http://thvathcsvg2.edu.vn",
  email: "c2vinhgia2.vinhgia@angiang.gov.vn",
  ngayHoc: [1, 2, 3, 4, 5],            // 1 = Thứ 2 ... 5 = Thứ 6
  hienDuLieuMau: true,                  // true = hiện cả điểm "mau: true"; false = chỉ hiện điểm đã xác minh

  /* ====== THÔNG TIN XÃ (tham khảo từ tinhthanhvn.com, cập nhật 26/08/2026 — hãy đối chiếu số liệu chính thức) ====== */
  xaInfo: {
    ten: "Xã Vĩnh Gia", tinh: "Tỉnh An Giang",
    dienTich: "180,37", danSo: "20.902", namDanSo: "2025", matDo: "116",
    maDinhDanh: "30568", maBuuChinh: "90811", loaiDonVi: "Xã",
    hopNhatTu: ["Xã Vĩnh Phước", "Xã Lương An Trà", "Xã Vĩnh Gia"],
    hieuLuc: "01/07/2025", truSoUBND: "UBND xã Lương An Trà (cũ)",
    tamBan: [10.4311, 104.86],
    web: "http://vinhgia.angiang.gov.vn", webTinh: "https://angiang.gov.vn",
    cong: [
      { icon: "🌐", ten: "Cổng thông tin xã Vĩnh Gia", url: "http://vinhgia.angiang.gov.vn" },
      { icon: "🏛️", ten: "Cổng thông tin tỉnh An Giang", url: "https://angiang.gov.vn" },
      { icon: "🧾", ten: "Dịch vụ công Quốc gia", url: "https://dichvucong.gov.vn/dvc-dich-vu-cong-truc-tuyen" }
    ]
  },
  hotlineTreEm: "111",      // chỉ hiện khi chọn địa điểm thuộc nhóm Trường học

  /* ====== CÁC ẤP — điền lat, lng (toạ độ), anh (tên file ảnh), dienTich (vd "12,5 km²"), danSo (vd "1.850 người") khi có ====== */
  ap: [
    { ten: "Cà Na",      lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Cây Gòn",    lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Giồng Cát",  lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Ninh Phước", lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Phú Lâm",    lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Vĩnh An",    lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Vĩnh Cầu",   lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Vĩnh Hiệp",  lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Vĩnh Hòa",   lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Vĩnh Lạc",   lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" },
    { ten: "Vĩnh Thành", lat: null, lng: null, anh: "", mota: "", dienTich: "", danSo: "" }
  ],

  /* ====== DỊCH VỤ CÔNG TRỰC TUYẾN ====== */
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

  /* Danh mục sổ xuống */
  nhom: {
    giaoduc:  { ten: "Trường học", icon: "🎓", mau: "#c8921a" },
    hanhchinh:{ ten: "Cơ quan hành chính", icon: "🏛️", mau: "#5b4bb7" },
    yte:      { ten: "Y tế", icon: "➕", mau: "#c62839" },
    anuong:   { ten: "Ăn uống", icon: "🍜", mau: "#d1451f" },
    giaitri:  { ten: "Giải trí", icon: "🎡", mau: "#9b3fb8" },
    danhthang:{ ten: "Danh thắng & di tích", icon: "🌅", mau: "#d9631e" },
    anninh:   { ten: "Biên phòng – An ninh", icon: "🛡️", mau: "#3d6b2e" },
    cho:      { ten: "Chợ & siêu thị", icon: "🛒", mau: "#1c8a68" },
    buudien:  { ten: "Bưu điện", icon: "📮", mau: "#1f6fb2" },
    cayxang:  { ten: "Cây xăng", icon: "⛽", mau: "#d9a21b" },
    ap:       { ten: "Các ấp", icon: "🏘️", mau: "#51627d" }
  },
  /* Loại đơn vị (màu và biểu tượng ghim) — mỗi loại thuộc 1 nhóm */
  loai: {
    chinh:      { ten: "Trụ sở chính", mau: "#c8921a", icon: "★", nhom: "giaoduc" },
    phanhieu:   { ten: "Phân hiệu",    mau: "#1f6fb2", icon: "◆", nhom: "giaoduc" },
    diemtruong: { ten: "Điểm trường",  mau: "#1c8a68", icon: "●", nhom: "giaoduc" },
    hanhchinh:  { ten: "Cơ quan",      mau: "#5b4bb7", icon: "▲", nhom: "hanhchinh" },
    yte:        { ten: "Y tế",         mau: "#c62839", icon: "✚", nhom: "yte" },
    anninh:     { ten: "Biên phòng",   mau: "#3d6b2e", icon: "⚑", nhom: "anninh" },
    danhthang:  { ten: "Danh thắng",   mau: "#d9631e", icon: "❖", nhom: "danhthang" },
    anuong:     { ten: "Quán ăn",      mau: "#d1451f", icon: "♨", nhom: "anuong" },
    giaitri:    { ten: "Giải trí",     mau: "#9b3fb8", icon: "♪", nhom: "giaitri" },
    ap:         { ten: "Ấp",           mau: "#51627d", icon: "⌂", nhom: "ap" }
  },

  /* mau: true  = thông tin/vị trí còn là mẫu hoặc gần đúng, cần xác minh */
  diem: [
    { id: "truong-chinh", loai: "chinh", ten: "Trường TH & THCS Vĩnh Gia 2 – Trụ sở chính", ngan: "Trụ sở chính",
      ap: "Vĩnh An", lat: 10.464404, lng: 104.876773, anh: "truong-chinh.jpg",
      maps: "https://maps.app.goo.gl/r1rM5LTdB6aQ973t7", khung: ["thcs", "th"], truc: null,
      capHoc: "Lớp 1 đến Lớp 9", quyMo: "khoảng 189 học sinh",
      chucNang: [
        "Trung tâm quản trị, điều hành thống nhất toàn bộ hoạt động của nhà trường.",
        "Nơi làm việc của Lãnh đạo trường (Hiệu trưởng, Phó Hiệu trưởng phụ trách).",
        "Đầu mối duy nhất quản lý con dấu pháp nhân, tài khoản ngân sách, kế toán và hồ sơ gốc.",
        "Có các phòng chức năng: Thư viện, phòng Tin học, phòng Thiết bị, phòng quản trị hành chính."
      ], luuY: "" },
    { id: "diem-vinh-thanh", loai: "diemtruong", ten: "Điểm trường Vĩnh Thành", ngan: "Vĩnh Thành",
      ap: "Vĩnh Thành", lat: 10.457341, lng: 104.839393, anh: "vinh-thanh.jpg",
      maps: "https://maps.app.goo.gl/P9JFvfozLazL7AMZ6", khung: ["th"], truc: "truong-chinh",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 87 học sinh",
      chucNang: ["Địa điểm tổ chức lớp học Tiểu học khu vực ấp Vĩnh Thành.", "Do Trụ sở chính trực tiếp điều phối và quản lý."], luuY: "" },
    { id: "phan-hieu", loai: "phanhieu", ten: "Trường TH & THCS Vĩnh Gia 2 – Phân hiệu", ngan: "Phân hiệu",
      ap: "Ninh Phước", lat: 10.381456, lng: 104.884095, anh: "phan-hieu.jpg",
      maps: "https://maps.app.goo.gl/cy1N2mNbtEbkCmAg8", khung: ["th"], truc: "truong-chinh",
      capHoc: "Cấp Tiểu học (Lớp 1 đến Lớp 5)", quyMo: "khoảng 216 – 343 học sinh", khoangCach: "Cách Trụ sở chính hơn 15 km",
      chucNang: [
        "Dạy học và giáo dục cấp Tiểu học theo kế hoạch chung của nhà trường.",
        "Có 01 Phó Hiệu trưởng trực tiếp phụ trách, điều hành tại chỗ theo phân công của Hiệu trưởng.",
        "Trực tiếp quản lý học sinh, giáo viên, cơ sở vật chất và thiết bị dạy học tại phân hiệu.",
        "Có thư viện, phòng Tiếng Anh, phòng Tin học và các phòng học tiểu học."
      ], luuY: "Phân hiệu không có tư cách pháp nhân độc lập, không có con dấu hay tài khoản ngân hàng riêng. Việc cần con dấu, hồ sơ gốc xử lý tại Trụ sở chính." },
    { id: "diem-ninh-phuoc", loai: "diemtruong", ten: "Điểm trường Ninh Phước", ngan: "Ninh Phước",
      ap: "Ninh Phước", lat: 10.3646, lng: 104.870738, anh: "ninh-phuoc.jpg",
      maps: "https://maps.app.goo.gl/Cb5PaBJBbFT3pwJA6", khung: ["th"], truc: "phan-hieu",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 107 học sinh",
      chucNang: ["Tổ chức các lớp học Tiểu học, giúp rút ngắn khoảng cách đi lại cho học sinh.", "Do Phân hiệu trực tiếp quản lý, không có bộ máy quản lý riêng."], luuY: "" },

    /* ----- Các địa điểm khác của xã (VỊ TRÍ GẦN ĐÚNG – cần xác minh và thay toạ độ thật) ----- */
    { id: "ubnd-xa", loai: "hanhchinh", ten: "Ủy ban nhân dân xã Vĩnh Gia (đặt tại trụ sở UBND xã Lương An Trà cũ)", ngan: "UBND xã", mau: true,
      ap: "", lienHe: { web: "http://vinhgia.angiang.gov.vn" }, lat: 10.4690, lng: 104.8580, anh: "", maps: "", truc: null,
      gioText: "Giờ hành chính (cần xác nhận)",
      chucNang: ["Tiếp nhận và giải quyết thủ tục hành chính cho người dân.", "Quản lý nhà nước trên địa bàn xã."], luuY: "" },
    { id: "tram-xa-qdy", loai: "yte", ten: "Trạm xá quân dân y Vĩnh Gia", ngan: "Trạm xá quân dân y", mau: true,
      ap: "", lat: 10.4560, lng: 104.8480, anh: "", maps: "", truc: null,
      gioText: "Cần xác nhận giờ khám",
      chucNang: ["Khám, chữa bệnh ban đầu cho người dân vùng biên giới.", "Kết hợp lực lượng quân y và y tế địa phương."], luuY: "" },
    { id: "don-bien-phong", loai: "anninh", ten: "Đồn Biên phòng Vĩnh Gia", ngan: "Đồn Biên phòng", mau: true,
      ap: "", lat: 10.4420, lng: 104.8930, anh: "", maps: "", truc: null,
      gioText: "Trực 24/24",
      chucNang: ["Bảo vệ chủ quyền, an ninh biên giới khu vực.", "Phối hợp cùng chính quyền và nhân dân giữ gìn trật tự địa bàn."], luuY: "" },
    { id: "mau-an-uong", loai: "anuong", ten: "Quán ăn địa phương (mẫu – thay bằng thông tin thật)", ngan: "Quán ăn (mẫu)", mau: true, mauText: "Dữ liệu mẫu",
      ap: "", lat: 10.4475, lng: 104.8665, anh: "", maps: "", truc: null,
      gioText: "Giờ mở cửa: đang cập nhật", nhanh: [["Món nổi bật", "Đang cập nhật"], ["Mức giá", "Đang cập nhật"]],
      lienHe: { sdt: "" },
      chucNang: ["Nhóm Ăn uống gồm quán ăn, quán cà phê, chợ ẩm thực.", "Khi có dữ liệu thật, thay tên, toạ độ, ảnh, món nổi bật và giá."], luuY: "" },
    { id: "mau-giai-tri", loai: "giaitri", ten: "Điểm vui chơi giải trí (mẫu – thay bằng thông tin thật)", ngan: "Giải trí (mẫu)", mau: true, mauText: "Dữ liệu mẫu",
      ap: "", lat: 10.4390, lng: 104.8540, anh: "", maps: "", truc: null,
      gioText: "Giờ hoạt động: đang cập nhật", nhanh: [["Hoạt động", "Đang cập nhật"], ["Vé vào cổng", "Đang cập nhật"]],
      chucNang: ["Nhóm Giải trí gồm sân bóng, công viên, khu vui chơi, điểm check-in.", "Khi có dữ liệu thật, thay tên, toạ độ, ảnh và thông tin chi tiết."], luuY: "" },
    { id: "kenh-vinh-te", loai: "danhthang", ten: "Kênh Vĩnh Tế", ngan: "Kênh Vĩnh Tế", mau: true,
      ap: "", lat: 10.4850, lng: 104.8300, anh: "", maps: "", truc: null,
      gioText: "Tham quan tự do",
      ke: "Công trình thủy lợi, giao thông và biên giới nổi tiếng của vùng Tây Nam Bộ, được đào từ năm 1819 đến 1824 dưới sự chỉ huy của Thoại Ngọc Hầu.",
      chucNang: ["Điểm tìm hiểu lịch sử khai phá vùng biên giới.", "Cảnh quan sông nước, thích hợp ngắm hoàng hôn."], luuY: "" }
  ],

  dichVu: [
    { ten: "Tuyển sinh đầu cấp (Lớp 1, Lớp 6)", mota: "Đăng ký trực tuyến toàn phần qua Cổng dịch vụ công hoặc ứng dụng VNeID.", online: true, tai: "all" },
    { ten: "Chuyển trường, cấp sao văn bằng/chứng chỉ, tra cứu Học bạ số", mota: "Thủ tục học đường thực hiện trực tuyến.", online: true, tai: "all" },
    { ten: "Tư vấn & hỗ trợ", mota: "Hỗ trợ tâm lý học đường; tư vấn chính sách hỗ trợ học sinh vùng biên giới, hoàn cảnh khó khăn.", online: false, tai: "all" },
    { ten: "Việc cần con dấu, hồ sơ gốc, kế toán", mota: "Làm việc trực tiếp với Ban Giám hiệu và bộ phận hành chính.", online: false, tai: ["truong-chinh"] }
  ]
};
