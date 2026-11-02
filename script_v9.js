/**
 * ==========================================================================
 * "Cô Chang nè" Website - Chinese Interactive Learning Platform
 * Core Features: SPA Router, 3D Flashcards + Speech, Chữ Hán Breakdown, 20-Question Quiz Generator
 * ==========================================================================
 */

// Vocabulary Datasets
const GIAO_TIEP_1_VOCAB = [
    { char: "你", pinyin: "nǐ", hanViet: "Nhĩ", meaning: "Bạn, anh, chị", pos: "Đại từ" },
    { char: "我", pinyin: "wǒ", hanViet: "Ngã", meaning: "Tôi, tớ, mình", pos: "Đại từ" },
    { char: "他", pinyin: "tā", hanViet: "Tha", meaning: "Anh ấy", pos: "Đại từ" },
    { char: "她", pinyin: "tā", hanViet: "Tha", meaning: "Cô ấy, chị ấy", pos: "Đại từ" },
    { char: "你们", pinyin: "nǐmen", hanViet: "Nhĩ môn", meaning: "Các bạn", pos: "Đại từ" },
    { char: "您", pinyin: "nín", hanViet: "Nín", meaning: "Ngài, ông, bà (thể hiện sự tôn trọng, kính trọng)", pos: "Đại từ" },
    { char: "老师", pinyin: "lǎoshī", hanViet: "Lão sư", meaning: "Giáo viên, thầy cô giáo", pos: "Danh từ" },
    { char: "同学", pinyin: "tóngxué", hanViet: "Đồng học", meaning: "Bạn học", pos: "Danh từ" },
    { char: "同学们", pinyin: "tóngxuémen", hanViet: "Đồng học môn", meaning: "Các bạn học sinh, các bạn học", pos: "Danh từ" },
    { char: "什么", pinyin: "shénme", hanViet: "Thập ma", meaning: "Cái gì", pos: "Đại từ" },
    { char: "叫", pinyin: "jiào", hanViet: "Khiếu", meaning: "Gọi, tên là, kêu là", pos: "Động từ" },
    { char: "名字", pinyin: "míngzi", hanViet: "Danh tự", meaning: "Tên", pos: "Danh từ" },
    { char: "再见", pinyin: "zài jiàn", hanViet: "Tái kiến", meaning: "Tạm biệt, hẹn gặp lại", pos: "Động từ" },
    { char: "请问", pinyin: "qǐngwèn", hanViet: "Thỉnh vấn", meaning: "Xin hỏi", pos: "Động từ" },
    { char: "姓", pinyin: "xìng", hanViet: "Tính", meaning: "Họ, mang họ", pos: "Động từ" },
    { char: "贵", pinyin: "guì", hanViet: "Quý", meaning: "Quý (họ, quý tính hoặc đắt)", pos: "Tính từ" },
    { char: "怎么", pinyin: "zěnme", hanViet: "Chẩm ma", meaning: "Thế nào", pos: "Đại từ" },
    { char: "称呼", pinyin: "chēnghu", hanViet: "Xưng hô", meaning: "Xưng hô, gọi là", pos: "Động từ" },
    { char: "法国", pinyin: "fǎguó", hanViet: "Pháp Quốc", meaning: "Pháp, nước Pháp", pos: "Danh từ" },
    { char: "日本", pinyin: "rìběn", hanViet: "Nhật Bản", meaning: "Nhật Bản", pos: "Danh từ" },
    { char: "德国", pinyin: "déguó", hanViet: "Đức Quốc", meaning: "Đức, nước Đức", pos: "Danh từ" },
    { char: "西班牙", pinyin: "xībānyá", hanViet: "Tây Ban Nha", meaning: "Tây Ban Nha", pos: "Danh từ" },
    { char: "谢谢", pinyin: "xièxie", hanViet: "Tạ tạ", meaning: "Cảm ơn", pos: "Động từ" },
    { char: "不客气", pinyin: "bú kèqi", hanViet: "Bất khách khí", meaning: "Đừng khách sáo, không có gì", pos: "Động từ" },
    { char: "对不起", pinyin: "duìbuqǐ", hanViet: "Đối bất khởi", meaning: "Xin lỗi", pos: "Động từ" },
    { char: "没关系", pinyin: "méi guānxi", hanViet: "Một quan hệ", meaning: "Không sao đâu, không có gì", pos: "Động từ" },
    { char: "越南", pinyin: "yuènán", hanViet: "Việt Nam", meaning: "Việt Nam", pos: "Danh từ" },
    { char: "中国", pinyin: "zhōngguó", hanViet: "Trung Quốc", meaning: "Trung Quốc", pos: "Danh từ" },
    { char: "美国", pinyin: "měiguó", hanViet: "Mỹ Quốc", meaning: "Mỹ, nước Mỹ", pos: "Danh từ" },
    { char: "英国", pinyin: "yīngguó", hanViet: "Anh Quốc", meaning: "Anh, nước Anh", pos: "Danh từ" },
    { char: "意大利", pinyin: "yìdàlì", hanViet: "Ý Đại Lợi", meaning: "Ý, nước Ý", pos: "Danh từ" },
    { char: "韩国", pinyin: "hánguó", hanViet: "Hàn Quốc", meaning: "Hàn Quốc", pos: "Danh từ" },
    { char: "泰国", pinyin: "tàiguó", hanViet: "Thái Quốc", meaning: "Thái Lan", pos: "Danh từ" },
    { char: "国家", pinyin: "guójiā", hanViet: "Quốc gia", meaning: "Quốc gia, đất nước", pos: "Danh từ" },
    { char: "哪", pinyin: "nǎ", hanViet: "Nả", meaning: "Nào", pos: "Đại từ" },
    { char: "人", pinyin: "rén", hanViet: "Nhân", meaning: "Người", pos: "Danh từ" },
    { char: "是", pinyin: "shì", hanViet: "Thị", meaning: "Là, vâng, đúng", pos: "Động từ" },
    { char: "手机", pinyin: "shǒujī", hanViet: "Thủ cơ", meaning: "Điện thoại di động", pos: "Danh từ" },
    { char: "号码", pinyin: "hàomǎ", hanViet: "Hiệu mã", meaning: "Số, số điện thoại", pos: "Danh từ" },
    { char: "多少", pinyin: "duōshǎo", hanViet: "Đa thiểu", meaning: "Bao nhiêu", pos: "Đại từ" },
    { char: "的", pinyin: "de", hanViet: "Đích", meaning: "Của / trợ từ sở hữu", pos: "Trợ từ" },
    { char: "一", pinyin: "yī", hanViet: "Nhất", meaning: "Một", pos: "Số từ" },
    { char: "二", pinyin: "èr", hanViet: "Nhị", meaning: "Hai", pos: "Số từ" },
    { char: "三", pinyin: "sān", hanViet: "Tam", meaning: "Ba", pos: "Số từ" },
    { char: "四", pinyin: "sì", hanViet: "Tứ", meaning: "Bốn", pos: "Số từ" },
    { char: "五", pinyin: "wǔ", hanViet: "Ngũ", meaning: "Năm", pos: "Số từ" },
    { char: "六", pinyin: "liù", hanViet: "Lục", meaning: "Sáu", pos: "Số từ" },
    { char: "七", pinyin: "qī", hanViet: "Thất", meaning: "Bảy", pos: "Số từ" },
    { char: "八", pinyin: "bā", hanViet: "Bát", meaning: "Tám", pos: "Số từ" },
    { char: "九", pinyin: "jiǔ", hanViet: "Cửu", meaning: "Chín", pos: "Số từ" },
    { char: "十", pinyin: "shí", hanViet: "Thập", meaning: "Mười", pos: "Số từ" }
];

const GIAO_TIEP_1_B2_VOCAB = [
    { char: "现在", pinyin: "xiànzài", hanViet: "Hiện tại", meaning: "Bây giờ, hiện tại", pos: "Danh từ" },
    { char: "几", pinyin: "jǐ", hanViet: "Kỷ", meaning: "Mấy", pos: "Đại từ" },
    { char: "点", pinyin: "diǎn", hanViet: "Điểm", meaning: "Giờ", pos: "Danh từ" },
    { char: "分", pinyin: "fēn", hanViet: "Phân", meaning: "Phút", pos: "Danh từ" },
    { char: "刻", pinyin: "kè", hanViet: "Khắc", meaning: "Khắc (15 phút)", pos: "Danh từ" },
    { char: "半", pinyin: "bàn", hanViet: "Bán", meaning: "Rưỡi, nửa (30 phút)", pos: "Số từ" },
    { char: "差", pinyin: "chà", hanViet: "Sai/Sái", meaning: "Kém, thiếu (giờ kém)", pos: "Động từ" },
    { char: "早上", pinyin: "zǎoshang", hanViet: "Tảo thượng", meaning: "Buổi sáng sớm", pos: "Danh từ" },
    { char: "上午", pinyin: "shàngwǔ", hanViet: "Thượng ngọ", meaning: "Buổi sáng", pos: "Danh từ" },
    { char: "中午", pinyin: "zhōngwǔ", hanViet: "Trung ngọ", meaning: "Buổi trưa", pos: "Danh từ" },
    { char: "下午", pinyin: "xiàwǔ", hanViet: "Hạ ngọ", meaning: "Buổi chiều", pos: "Danh từ" },
    { char: "晚上", pinyin: "wǎnshang", hanViet: "Vãn thượng", meaning: "Buổi tối", pos: "Danh từ" },
    { char: "睡觉", pinyin: "shuì jiào", hanViet: "Thụy giác", meaning: "Ngủ, đi ngủ", pos: "Động từ" },
    { char: "吃早饭", pinyin: "chī zǎofàn", hanViet: "Ngật tảo phạn", meaning: "Ăn sáng", pos: "Động từ" },
    { char: "午饭", pinyin: "wǔfàn", hanViet: "Ngọ phạn", meaning: "Cơm trưa, bữa trưa", pos: "Danh từ" },
    { char: "吃晚饭", pinyin: "chī wǎnfàn", hanViet: "Ngật vãn phạn", meaning: "Ăn tối", pos: "Động từ" },
    { char: "吃饭", pinyin: "chī fàn", hanViet: "Ngật phạn", meaning: "Ăn cơm", pos: "Động từ" },
    { char: "起床", pinyin: "qǐ chuáng", hanViet: "Khởi sàng", meaning: "Thức dậy, ngủ dậy", pos: "Động từ" },
    { char: "洗脸", pinyin: "xǐ liǎn", hanViet: "Tẩy liễn", meaning: "Rửa mặt", pos: "Động từ" },
    { char: "刷牙", pinyin: "shuā yá", hanViet: "Sát nha", meaning: "Đánh răng", pos: "Động từ" },
    { char: "上班", pinyin: "shàngbān", hanViet: "Thượng ban", meaning: "Đi làm", pos: "Động từ" },
    { char: "下班", pinyin: "xiàbān", hanViet: "Hạ ban", meaning: "Tan làm", pos: "Động từ" },
    { char: "回家", pinyin: "huí jiā", hanViet: "Hồi gia", meaning: "Về nhà", pos: "Động từ" },
    { char: "上课", pinyin: "shàngkè", hanViet: "Thượng khóa", meaning: "Lên lớp, vào lớp", pos: "Động từ" },
    { char: "下课", pinyin: "xiàkè", hanViet: "Hạ khóa", meaning: "Tan lớp, tan học", pos: "Động từ" },
    { char: "每天", pinyin: "měitiān", hanViet: "Mỗi thiên", meaning: "Mỗi ngày, hàng ngày", pos: "Phó từ" },
    { char: "看电视", pinyin: "kàn diànshì", hanViet: "Khán điện thị", meaning: "Xem tivi", pos: "Động từ" },
    { char: "做作业", pinyin: "zuò zuòyè", hanViet: "Tác tác nghiệp", meaning: "Làm bài tập", pos: "Động từ" },
    { char: "洗澡", pinyin: "xǐ zǎo", hanViet: "Tẩy tảo", meaning: "Tắm, đi tắm", pos: "Động từ" },
    { char: "上网", pinyin: "shàng wǎng", hanViet: "Thượng võng", meaning: "Lên mạng, lướt web", pos: "Động từ" },
    { char: "去運動" , pinyin: "qù yùndòng", hanViet: "Khứ vận động", meaning: "Đi tập thể dục, thể thao", pos: "Động từ" }, // wait, user wrote 去运动, let's keep simplified 去运动
    { char: "去运动", pinyin: "qù yùndòng", hanViet: "Khứ vận động", meaning: "Đi tập thể dục, thể thao", pos: "Động từ" },
    { char: "跟朋友见面", pinyin: "gēn péngyou jiànmiàn", hanViet: "Cân bằng hữu kiến diện", meaning: "Gặp gỡ bạn bè", pos: "Động từ" },
    { char: "玩儿", pinyin: "wánr", hanViet: "Ngoạn nhi", meaning: "Chơi, chơi bời", pos: "Động từ" },
    { char: "年", pinyin: "nián", hanViet: "Niên", meaning: "Năm", pos: "Danh từ" },
    { char: "月", pinyin: "yuè", hanViet: "Nguyệt", meaning: "Tháng", pos: "Danh từ" },
    { char: "日", pinyin: "rì", hanViet: "Nhật", meaning: "Ngày", pos: "Danh từ" },
    { char: "号", pinyin: "hào", hanViet: "Hiệu", meaning: "Ngày (nói), số", pos: "Danh từ" },
    { char: "星期", pinyin: "xīngqī", hanViet: "Tinh kỳ", meaning: "Tuần, thứ", pos: "Danh từ" },
    { char: "生日", pinyin: "shēngrì", hanViet: "Sinh nhật", meaning: "Sinh nhật", pos: "Danh từ" },
    { char: "哪年", pinyin: "nǎ nián", hanViet: "Nả niên", meaning: "Năm nào", pos: "Đại từ" },
    { char: "出生", pinyin: "chūshēng", hanViet: "Xuất sinh", meaning: "Sinh ra, ra đời", pos: "Động từ" },
    { char: "周", pinyin: "zhōu", hanViet: "Chu", meaning: "Tuần", pos: "Danh từ" },
    { char: "周末", pinyin: "zhōumò", hanViet: "Chu mạt", meaning: "Cuối tuần", pos: "Danh từ" },
    { char: "前天", pinyin: "qiántiān", hanViet: "Tiền thiên", meaning: "Hôm kia", pos: "Danh từ" },
    { char: "昨天", pinyin: "zuótiān", hanViet: "Tạc thiên", meaning: "Hôm qua", pos: "Danh từ" },
    { char: "今天", pinyin: "jīntiān", hanViet: "Kim thiên", meaning: "Hôm nay", pos: "Danh từ" },
    { char: "明天", pinyin: "míngtiān", hanViet: "Minh thiên", meaning: "Ngày mai", pos: "Danh từ" },
    { char: "后天", pinyin: "hòutiān", hanViet: "Hậu thiên", meaning: "Ngày kia", pos: "Danh từ" },
    { char: "前年", pinyin: "qiánnián", hanViet: "Tiền niên", meaning: "Năm kia", pos: "Danh từ" },
    { char: "去年", pinyin: "qùnián", hanViet: "Khứ niên", meaning: "Năm ngoái", pos: "Danh từ" },
    { char: "今年", pinyin: "jīnnián", hanViet: "Kim niên", meaning: "Năm nay", pos: "Danh từ" },
    { char: "明年", pinyin: "míngnián", hanViet: "Minh niên", meaning: "Sang năm, năm sau", pos: "Danh từ" },
    { char: "后年", pinyin: "hòunián", hanViet: "Hậu niên", meaning: "Năm kia (nữa)", pos: "Danh từ" },
    { char: "每年", pinyin: "měinián", hanViet: "Mỗi niên", meaning: "Hàng năm, mỗi năm", pos: "Phó từ" },
    { char: "上星期", pinyin: "shàng xīngqī", hanViet: "Thượng tinh kỳ", meaning: "Tuần trước", pos: "Danh từ" },
    { char: "这星期", pinyin: "zhè xīngqī", hanViet: "Giá tinh kỳ", meaning: "Tuần này", pos: "Danh từ" },
    { char: "下星期", pinyin: "xià xīngqī", hanViet: "Hạ tinh kỳ", meaning: "Tuần sau", pos: "Danh từ" },
    { char: "上个月", pinyin: "shàng ge yuè", hanViet: "Thượng cá nguyệt", meaning: "Tháng trước", pos: "Danh từ" },
    { char: "这个月", pinyin: "zhè ge yuè", hanViet: "Giá cá nguyệt", meaning: "Tháng này", pos: "Danh từ" },
    { char: "下个月", pinyin: "xià ge yuè", hanViet: "Hạ cá nguyệt", meaning: "Tháng sau", pos: "Danh từ" }
];


const GIAO_TIEP_1_B3_VOCAB = [
    { char: "水果", pinyin: "shuǐguǒ", hanViet: "Thủy quả", meaning: "Hoa quả, trái cây", pos: "Danh từ" },
    { char: "苹果", pinyin: "píngguǒ", hanViet: "Bình quả", meaning: "Quả táo", pos: "Danh từ" },
    { char: "草莓", pinyin: "cǎoméi", hanViet: "Thảo mai", meaning: "Quả dâu tây", pos: "Danh từ" },
    { char: "橙子", pinyin: "chéngzi", hanViet: "Trành tử", meaning: "Quả cam", pos: "Danh từ" },
    { char: "橘子", pinyin: "júzi", hanViet: "Quất tử", meaning: "Quả quýt", pos: "Danh từ" },
    { char: "荔枝", pinyin: "lìzhī", hanViet: "Lệ chi", meaning: "Quả vải", pos: "Danh từ" },
    { char: "葡萄", pinyin: "pútáo", hanViet: "Bồ đào", meaning: "Quả nho", pos: "Danh từ" },
    { char: "西瓜", pinyin: "xīguā", hanViet: "Tây qua", meaning: "Quả dưa hấu", pos: "Danh từ" },
    { char: "芒果", pinyin: "mángguǒ", hanViet: "Mang quả", meaning: "Quả xoài", pos: "Danh từ" },
    { char: "香蕉", pinyin: "xiāngjiāo", hanViet: "Hương tiêu", meaning: "Quả chuối", pos: "Danh từ" },
    { char: "榴莲", pinyin: "liúlián", hanViet: "Lưu liên", meaning: "Quả sầu riêng", pos: "Danh từ" },
    { char: "桃", pinyin: "táo", hanViet: "Đào", meaning: "Quả đào", pos: "Danh từ" },
    { char: "梨", pinyin: "lí", hanViet: "Lê", meaning: "Quả lê", pos: "Danh từ" },
    { char: "喜欢", pinyin: "xǐhuan", hanViet: "Hỉ hoan", meaning: "Thích, yêu thích", pos: "Động từ" },
    { char: "百", pinyin: "bǎi", hanViet: "Bách", meaning: "Trăm (100)", pos: "Số từ" },
    { char: "元", pinyin: "yuán", hanViet: "Nguyên", meaning: "Nhân dân tệ (đơn vị tiền tệ chính thức)", pos: "Lượng từ" },
    { char: "块", pinyin: "kuài", hanViet: "Khối", meaning: "Đồng (= 元, khẩu ngữ)", pos: "Lượng từ" },
    { char: "角", pinyin: "jiǎo", hanViet: "Giác", meaning: "Giác, hào (0,1 元, trang trọng)", pos: "Lượng từ" },
    { char: "毛", pinyin: "máo", hanViet: "Mao", meaning: "Hào (0,1 元, khẩu ngữ)", pos: "Lượng từ" },
    { char: "分", pinyin: "fēn", hanViet: "Phân", meaning: "Xu (0,01 元)", pos: "Lượng từ" },
    { char: "钱", pinyin: "qián", hanViet: "Tiền", meaning: "Tiền", pos: "Danh từ" },
    { char: "买", pinyin: "mǎi", hanViet: "Mãi", meaning: "Mua", pos: "Động từ" },
    { char: "卖", pinyin: "mài", hanViet: "Mại", meaning: "Bán", pos: "Động từ" },
    { char: "怎么", pinyin: "zěnme", hanViet: "Chẩm ma", meaning: "Thế nào, như thế nào", pos: "Đại từ" },
    { char: "颜色", pinyin: "yánsè", hanViet: "Nhan sắc", meaning: "Màu sắc", pos: "Danh từ" },
    { char: "红色", pinyin: "hóngsè", hanViet: "Hồng sắc", meaning: "Màu đỏ", pos: "Danh từ" },
    { char: "蓝色", pinyin: "lánsè", hanViet: "Lam sắc", meaning: "Màu xanh dương", pos: "Danh từ" },
    { char: "黄色", pinyin: "huángsè", hanViet: "Hoàng sắc", meaning: "Màu vàng", pos: "Danh từ" },
    { char: "白色", pinyin: "báisè", hanViet: "Bạch sắc", meaning: "Màu trắng", pos: "Danh từ" },
    { char: "黑色", pinyin: "hēisè", hanViet: "Hắc sắc", meaning: "Màu đen", pos: "Danh từ" },
    { char: "灰色", pinyin: "huīsè", hanViet: "Hôi sắc", meaning: "Màu xám", pos: "Danh từ" },
    { char: "绿色", pinyin: "lǜsè", hanViet: "Lục sắc", meaning: "Màu xanh lá", pos: "Danh từ" },
    { char: "粉红色", pinyin: "fěnhóngsè", hanViet: "Phấn hồng sắc", meaning: "Màu hồng", pos: "Danh từ" },
    { char: "紫色", pinyin: "zǐsè", hanViet: "Tử sắc", meaning: "Màu tím", pos: "Danh từ" },
    { char: "橙色", pinyin: "chéngsè", hanViet: "Trành sắc", meaning: "Màu cam", pos: "Danh từ" },
    { char: "棕色", pinyin: "zōngsè", hanViet: "Tông sắc", meaning: "Màu nâu", pos: "Danh từ" },
    { char: "件", pinyin: "jiàn", hanViet: "Kiện", meaning: "Lượng từ chỉ quần áo trên (áo, váy...)", pos: "Lượng từ" },
    { char: "毛衣", pinyin: "máoyī", hanViet: "Mao y", meaning: "Áo len", pos: "Danh từ" },
    { char: "T恤", pinyin: "T xù", hanViet: "T-shirt", meaning: "Áo phông, áo thun", pos: "Danh từ" },
    { char: "衬衫", pinyin: "chènshān", hanViet: "Sấn sam", meaning: "Áo sơ mi", pos: "Danh từ" },
    { char: "夹克", pinyin: "jiākè", hanViet: "Giáp khắc", meaning: "Áo khoác, jacket", pos: "Danh từ" },
    { char: "套", pinyin: "tào", hanViet: "Tào", meaning: "Lượng từ chỉ bộ (bộ vest, bộ váy...)", pos: "Lượng từ" },
    { char: "西服", pinyin: "xīfú", hanViet: "Tây phục", meaning: "Bộ vest, comple", pos: "Danh từ" },
    { char: "套裙", pinyin: "tàoqún", hanViet: "Tào quần", meaning: "Bộ váy liền", pos: "Danh từ" },
    { char: "条", pinyin: "tiáo", hanViet: "Điều", meaning: "Lượng từ chỉ quần, váy, giày dép dài", pos: "Lượng từ" },
    { char: "裤子", pinyin: "kùzi", hanViet: "Khố tử", meaning: "Quần dài", pos: "Danh từ" },
    { char: "牛仔裤", pinyin: "niúzǎikù", hanViet: "Ngưu tể khố", meaning: "Quần jeans", pos: "Danh từ" },
    { char: "裙子", pinyin: "qúnzi", hanViet: "Quần tử", meaning: "Váy", pos: "Danh từ" },
    { char: "连衣裙", pinyin: "liányīqún", hanViet: "Liên y quần", meaning: "Váy liền", pos: "Danh từ" },
    { char: "双", pinyin: "shuāng", hanViet: "Song", meaning: "Đôi (lượng từ chỉ giày, dép, tất...)", pos: "Lượng từ" },
    { char: "皮鞋", pinyin: "píxié", hanViet: "Bì hài", meaning: "Giày da", pos: "Danh từ" },
    { char: "运动鞋", pinyin: "yùndòngxié", hanViet: "Vận động hài", meaning: "Giày thể thao", pos: "Danh từ" },
    { char: "衣服", pinyin: "yīfu", hanViet: "Y phục", meaning: "Quần áo, trang phục", pos: "Danh từ" },
    { char: "穿", pinyin: "chuān", hanViet: "Xuyên", meaning: "Mặc, đi (giày dép)", pos: "Động từ" }
];

const GIAO_TIEP_1_B4_VOCAB = [
    { char: "米饭", pinyin: "mǐfàn", hanViet: "Mễ phạn", meaning: "Cơm, cơm trắng", pos: "Danh từ" },
    { char: "花茶", pinyin: "huāchá", hanViet: "Hoa trà", meaning: "Trà hoa", pos: "Danh từ" },
    { char: "橙汁", pinyin: "chéngzhī", hanViet: "Trành trấp", meaning: "Nước cam", pos: "Danh từ" },
    { char: "啤酒", pinyin: "píjiǔ", hanViet: "Tỳ tửu", meaning: "Bia", pos: "Danh từ" },
    { char: "可口可乐", pinyin: "kěkǒukělè", hanViet: "Khả khẩu khả lạc", meaning: "Coca-Cola", pos: "Danh từ" },
    { char: "百事可乐", pinyin: "bǎishìkělè", hanViet: "Bách sự khả lạc", meaning: "Pepsi", pos: "Danh từ" },
    { char: "肯德基", pinyin: "kěndéjī", hanViet: "Khẳng đức cơ", meaning: "KFC", pos: "Danh từ" },
    { char: "麦当劳", pinyin: "màidāngláo", hanViet: "Mạch đương lao", meaning: "McDonald's", pos: "Danh từ" },
    { char: "汉堡包", pinyin: "hànbǎobāo", hanViet: "Hán bảo bao", meaning: "Bánh hamburger", pos: "Danh từ" },
    { char: "比萨饼", pinyin: "bǐsàbǐng", hanViet: "Tỷ tát bính", meaning: "Bánh pizza", pos: "Danh từ" },
    { char: "炸鸡", pinyin: "zhájī", hanViet: "Tạc kê", meaning: "Gà rán", pos: "Danh từ" },
    { char: "薯条", pinyin: "shǔtiáo", hanViet: "Thự điều", meaning: "Khoai tây chiên", pos: "Danh từ" },
    { char: "套餐", pinyin: "tàocān", hanViet: "Tào xan", meaning: "Suất ăn, combo, set menu", pos: "Danh từ" },
    { char: "冰淇淋", pinyin: "bīngqílín", hanViet: "Băng kỳ lâm", meaning: "Kem", pos: "Danh từ" },
    { char: "火锅", pinyin: "huǒguō", hanViet: "Hỏa oa", meaning: "Lẩu", pos: "Danh từ" },
    { char: "肉", pinyin: "ròu", hanViet: "Nhục", meaning: "Thịt", pos: "Danh từ" },
    { char: "鸡", pinyin: "jī", hanViet: "Kê", meaning: "Gà, thịt gà", pos: "Danh từ" },
    { char: "鸭", pinyin: "yā", hanViet: "Áp", meaning: "Vịt, thịt vịt", pos: "Danh từ" },
    { char: "鱼", pinyin: "yú", hanViet: "Ngư", meaning: "Cá", pos: "Danh từ" },
    { char: "茄子", pinyin: "qiézi", hanViet: "Gia tử", meaning: "Cà tím", pos: "Danh từ" },
    { char: "鸡蛋", pinyin: "jīdàn", hanViet: "Kê đản", meaning: "Trứng gà", pos: "Danh từ" },
    { char: "豆腐", pinyin: "dòufu", hanViet: "Đậu hũ", meaning: "Đậu phụ, đậu hũ", pos: "Danh từ" },
    { char: "猪", pinyin: "zhū", hanViet: "Trư", meaning: "Con lợn, con heo", pos: "Danh từ" },
    { char: "牛", pinyin: "niú", hanViet: "Ngưu", meaning: "Con bò", pos: "Danh từ" },
    { char: "羊", pinyin: "yáng", hanViet: "Dương", meaning: "Con dê, con cừu", pos: "Danh từ" },
    { char: "海鲜", pinyin: "hǎixiān", hanViet: "Hải tiên", meaning: "Hải sản", pos: "Danh từ" },
    { char: "虾", pinyin: "xiā", hanViet: "Hà", meaning: "Tôm", pos: "Danh từ" },
    { char: "螃蟹", pinyin: "pángxiè", hanViet: "Bàng giải", meaning: "Cua", pos: "Danh từ" },
    { char: "章鱼", pinyin: "zhāngyú", hanViet: "Chương ngư", meaning: "Bạch tuộc", pos: "Danh từ" },
    { char: "鱿鱼", pinyin: "yóuyú", hanViet: "Vưu ngư", meaning: "Mực ống, con mực", pos: "Danh từ" },
    { char: "蔬菜", pinyin: "shūcài", hanViet: "Sơ thái", meaning: "Rau, rau xanh", pos: "Danh từ" },
    { char: "蘑菇", pinyin: "mógū", hanViet: "Ma cô", meaning: "Nấm", pos: "Danh từ" },
    { char: "盘子", pinyin: "pánzi", hanViet: "Bàn tử", meaning: "Đĩa, cái đĩa", pos: "Danh từ" },
    { char: "叉子", pinyin: "chāzi", hanViet: "Xoa tử", meaning: "Dĩa (ăn), cái nĩa", pos: "Danh từ" },
    { char: "勺子", pinyin: "sháozi", hanViet: "Chước tử", meaning: "Thìa, muỗng", pos: "Danh từ" },
    { char: "刀子", pinyin: "dāozi", hanViet: "Đao tử", meaning: "Dao, cái dao", pos: "Danh từ" },
    { char: "碗", pinyin: "wǎn", hanViet: "Oản", meaning: "Bát, chén", pos: "Danh từ" },
    { char: "筷子", pinyin: "kuàizi", hanViet: "Khoái tử", meaning: "Đũa, đôi đũa", pos: "Danh từ" },
    { char: "餐巾纸", pinyin: "cānjīnzhǐ", hanViet: "Xan cân chỉ", meaning: "Khăn giấy, khăn ăn", pos: "Danh từ" },
    { char: "牙签", pinyin: "yáqiān", hanViet: "Nha tiêm", meaning: "Tăm, tăm xỉa răng", pos: "Danh từ" },
    { char: "买单", pinyin: "mǎidān", hanViet: "Mãi đơn", meaning: "Thanh toán, tính tiền", pos: "Động từ" },
    { char: "打包", pinyin: "dǎbāo", hanViet: "Đả bao", meaning: "Gói mang về, đóng gói mang về", pos: "Động từ" },
    { char: "结账", pinyin: "jiézhàng", hanViet: "Kết chướng", meaning: "Thanh toán, thanh toán hóa đơn", pos: "Động từ" },
    { char: "付", pinyin: "fù", hanViet: "Phó", meaning: "Trả (tiền), thanh toán", pos: "Động từ" },
    { char: "刷卡", pinyin: "shuā kǎ", hanViet: "Sát tạp", meaning: "Quẹt thẻ", pos: "Động từ" },
    { char: "现金", pinyin: "xiànjīn", hanViet: "Hiện kim", meaning: "Tiền mặt", pos: "Danh từ" },
    { char: "支付宝", pinyin: "zhīfùbǎo", hanViet: "Chi phó bảo", meaning: "Alipay", pos: "Danh từ" },
    { char: "微信", pinyin: "wēixìn", hanViet: "Vi tín", meaning: "WeChat", pos: "Danh từ" },
    { char: "扫码", pinyin: "sǎo mǎ", hanViet: "Tảo mã", meaning: "Quét mã, quét mã QR", pos: "Động từ" },
    { char: "转账", pinyin: "zhuǎnzhàng", hanViet: "Chuyển chướng", meaning: "Chuyển khoản", pos: "Động từ" },
    { char: "酸", pinyin: "suān", hanViet: "Toan", meaning: "Chua", pos: "Tính từ" },
    { char: "甜", pinyin: "tián", hanViet: "Điềm", meaning: "Ngọt", pos: "Tính từ" },
    { char: "苦", pinyin: "kǔ", hanViet: "Khổ", meaning: "Đắng", pos: "Tính từ" },
    { char: "辣", pinyin: "là", hanViet: "Lạt", meaning: "Cay", pos: "Tính từ" },
    { char: "咸", pinyin: "xián", hanViet: "Hàm", meaning: "Mặn", pos: "Tính từ" },
    { char: "麻", pinyin: "má", hanViet: "Tê", meaning: "Tê, tê cay", pos: "Tính từ" },
    { char: "味精", pinyin: "wèijīng", hanViet: "Vị tinh", meaning: "Mì chính, bột ngọt", pos: "Danh từ" },
    { char: "糖", pinyin: "táng", hanViet: "Đường", meaning: "Đường", pos: "Danh từ" },
    { char: "盐", pinyin: "yán", hanViet: "Diêm", meaning: "Muối", pos: "Danh từ" },
    { char: "酱油", pinyin: "jiàngyóu", hanViet: "Tương du", meaning: "Nước tương, xì dầu", pos: "Danh từ" },
    { char: "鱼露", pinyin: "yúlù", hanViet: "Ngư lộ", meaning: "Nước mắm", pos: "Danh từ" },
    { char: "辣酱", pinyin: "làjiàng", hanViet: "Lạt tương", meaning: "Tương ớt", pos: "Danh từ" },
    { char: "番茄酱", pinyin: "fānqiéjiàng", hanViet: "Phiên già tương", meaning: "Tương cà", pos: "Danh từ" },
    { char: "辣椒", pinyin: "làjiāo", hanViet: "Lạt tiêu", meaning: "Ớt", pos: "Danh từ" },
    { char: "胡椒", pinyin: "hújiāo", hanViet: "Hồ tiêu", meaning: "Tiêu, hạt tiêu", pos: "Danh từ" },
    { char: "香菜", pinyin: "xiāngcài", hanViet: "Hương thái", meaning: "Rau mùi, ngò rí", pos: "Danh từ" },
    { char: "葱", pinyin: "cōng", hanViet: "Thông", meaning: "Hành, hành lá", pos: "Danh từ" },
    { char: "姜", pinyin: "jiāng", hanViet: "Khương", meaning: "Gừng", pos: "Danh từ" },
    { char: "蒜", pinyin: "suàn", hanViet: "Toán", meaning: "Tỏi", pos: "Danh từ" },
    { char: "忌口", pinyin: "jìkǒu", hanViet: "Kỵ khẩu", meaning: "Kiêng ăn, đồ ăn cần kiêng kỵ", pos: "Động từ" },
    { char: "别放", pinyin: "bié fàng", hanViet: "Biệt phóng", meaning: "Đừng cho vào, đừng bỏ vào", pos: "Động từ" },
    { char: "服务员", pinyin: "fúwùyuán", hanViet: "Phục vụ viên", meaning: "Phục vụ, nhân viên phục vụ", pos: "Danh từ" },
    { char: "上菜", pinyin: "shàng cài", hanViet: "Thượng thái", meaning: "Lên món, dọn thức ăn ra", pos: "Động từ" },
    { char: "能", pinyin: "néng", hanViet: "Năng", meaning: "Có thể", pos: "Động từ" },
    { char: "快", pinyin: "kuài", hanViet: "Khoái", meaning: "Nhanh, mau", pos: "Tính từ" },
    { char: "看", pinyin: "kàn", hanViet: "Khán", meaning: "Xem, nhìn, đọc", pos: "Động từ" }
];

const GIAO_TIEP_1_B5_VOCAB = [
    { char: "家", pinyin: "jiā", hanViet: "Gia", meaning: "Nhà, gia đình", pos: "Danh từ" },
    { char: "口", pinyin: "kǒu", hanViet: "Khẩu", meaning: "Miệng (lượng từ chỉ số thành viên trong gia đình)", pos: "Lượng từ" },
    { char: "个", pinyin: "gè", hanViet: "Cá", meaning: "Cái, chiếc (lượng từ phổ biến nhất)", pos: "Lượng từ" },
    { char: "爸爸", pinyin: "bàba", hanViet: "Bả ba", meaning: "Bố, ba, cha", pos: "Danh từ" },
    { char: "妈妈", pinyin: "māma", hanViet: "Ma ma", meaning: "Mẹ, má", pos: "Danh từ" },
    { char: "哥哥", pinyin: "gēge", hanViet: "Ca ca", meaning: "Anh trai", pos: "Danh từ" },
    { char: "弟弟", pinyin: "dìdi", hanViet: "Đệ đệ", meaning: "Em trai", pos: "Danh từ" },
    { char: "姐姐", pinyin: "jiějie", hanViet: "Tỷ tỷ", meaning: "Chị gái", pos: "Danh từ" },
    { char: "妹妹", pinyin: "mèimei", hanViet: "Muội muội", meaning: "Em gái", pos: "Danh từ" },
    { char: "爷爷", pinyin: "yéye", hanViet: "Gia gia", meaning: "Ông nội", pos: "Danh từ" },
    { char: "奶奶", pinyin: "nǎinai", hanViet: "Nãi nãi", meaning: "Bà nội", pos: "Danh từ" },
    { char: "外公", pinyin: "wàigōng", hanViet: "Ngoại công", meaning: "Ông ngoại", pos: "Danh từ" },
    { char: "外婆", pinyin: "wàipó", hanViet: "Ngoại bà", meaning: "Bà ngoại", pos: "Danh từ" },
    { char: "兄弟姐妹", pinyin: "xiōngdì jiěmèi", hanViet: "Huynh đệ tỷ muội", meaning: "Anh chị em", pos: "Danh từ" },
    { char: "和", pinyin: "hé", hanViet: "Hòa", meaning: "Và, với", pos: "Liên từ" },
    { char: "有", pinyin: "yǒu", hanViet: "Hữu", meaning: "Có", pos: "Động từ" },
    { char: "没有", pinyin: "méiyǒu", hanViet: "Một hữu", meaning: "Không có", pos: "Động từ" },
    { char: "做", pinyin: "zuò", hanViet: "Tác", meaning: "Làm, làm việc", pos: "Động từ" },
    { char: "工作", pinyin: "gōngzuò", hanViet: "Công tác", meaning: "Làm việc, công việc", pos: "Động từ / Danh từ" },
    { char: "哪儿", pinyin: "nǎr", hanViet: "Nả nhi", meaning: "Ở đâu (khẩu ngữ Bắc Kinh)", pos: "Đại từ" },
    { char: "职业", pinyin: "zhíyè", hanViet: "Chức nghiệp", meaning: "Nghề nghiệp", pos: "Danh từ" },
    { char: "医生", pinyin: "yīshēng", hanViet: "Y sinh", meaning: "Bác sĩ", pos: "Danh từ" },
    { char: "护士", pinyin: "hùshi", hanViet: "Hộ sĩ", meaning: "Y tá, điều dưỡng", pos: "Danh từ" },
    { char: "会计", pinyin: "kuàijì", hanViet: "Kế toán", meaning: "Kế toán", pos: "Danh từ" },
    { char: "公务员", pinyin: "gōngwùyuán", hanViet: "Công vụ viên", meaning: "Công chức nhà nước", pos: "Danh từ" },
    { char: "职员", pinyin: "zhíyuán", hanViet: "Chức viên", meaning: "Nhân viên văn phòng", pos: "Danh từ" },
    { char: "司机", pinyin: "sījī", hanViet: "Tư cơ", meaning: "Tài xế, lái xe", pos: "Danh từ" },
    { char: "秘书", pinyin: "mìshū", hanViet: "Bí thư", meaning: "Thư ký", pos: "Danh từ" },
    { char: "厨师", pinyin: "chúshī", hanViet: "Trù sư", meaning: "Đầu bếp", pos: "Danh từ" },
    { char: "保安", pinyin: "bǎo'ān", hanViet: "Bảo an", meaning: "Bảo vệ", pos: "Danh từ" },
    { char: "老师", pinyin: "lǎoshī", hanViet: "Lão sư", meaning: "Giáo viên, thầy cô", pos: "Danh từ" },
    { char: "经理", pinyin: "jīnglǐ", hanViet: "Kinh lý", meaning: "Giám đốc, quản lý", pos: "Danh từ" },
    { char: "大学生", pinyin: "dàxuéshēng", hanViet: "Đại học sinh", meaning: "Sinh viên đại học", pos: "Danh từ" },
    { char: "毕业生", pinyin: "bìyèshēng", hanViet: "Tốt nghiệp sinh", meaning: "Sinh viên tốt nghiệp", pos: "Danh từ" },
    { char: "家庭主妇", pinyin: "jiātíng zhǔfù", hanViet: "Gia đình chủ phụ", meaning: "Nội trợ", pos: "Danh từ" },
    { char: "丈夫", pinyin: "zhàngfu", hanViet: "Trượng phu", meaning: "Chồng", pos: "Danh từ" },
    { char: "妻子", pinyin: "qīzi", hanViet: "Thê tử", meaning: "Vợ", pos: "Danh từ" },
    { char: "母亲", pinyin: "mǔqīn", hanViet: "Mẫu thân", meaning: "Mẹ (trang trọng)", pos: "Danh từ" },
    { char: "父亲", pinyin: "fùqīn", hanViet: "Phụ thân", meaning: "Cha (trang trọng)", pos: "Danh từ" },
    { char: "大使馆", pinyin: "dàshǐguǎn", hanViet: "Đại sứ quán", meaning: "Đại sứ quán", pos: "Danh từ" },
    { char: "医院", pinyin: "yīyuàn", hanViet: "Y viện", meaning: "Bệnh viện", pos: "Danh từ" },
    { char: "饭店", pinyin: "fàndiàn", hanViet: "Phạn điếm", meaning: "Nhà hàng, khách sạn", pos: "Danh từ" },
    { char: "银行", pinyin: "yínháng", hanViet: "Ngân hàng", meaning: "Ngân hàng", pos: "Danh từ" },
    { char: "学校", pinyin: "xuéxiào", hanViet: "Học hiệu", meaning: "Trường học", pos: "Danh từ" },
    { char: "在", pinyin: "zài", hanViet: "Tại", meaning: "Ở, tại (chỉ nơi chốn)", pos: "Giới từ / Động từ" },
    { char: "老公", pinyin: "lǎogōng", hanViet: "Lão công", meaning: "Chồng (khẩu ngữ)", pos: "Danh từ" },
    { char: "老婆", pinyin: "lǎopo", hanViet: "Lão bà", meaning: "Vợ (khẩu ngữ)", pos: "Danh từ" },
    { char: "孩子", pinyin: "háizi", hanViet: "Hài tử", meaning: "Con cái, trẻ em", pos: "Danh từ" },
    { char: "儿子", pinyin: "érzi", hanViet: "Nhi tử", meaning: "Con trai", pos: "Danh từ" },
    { char: "女儿", pinyin: "nǚ'ér", hanViet: "Nữ nhi", meaning: "Con gái", pos: "Danh từ" },
    { char: "公司", pinyin: "gōngsī", hanViet: "Công ty", meaning: "Công ty", pos: "Danh từ" },
    { char: "多大", pinyin: "duō dà", hanViet: "Đa đại", meaning: "Bao nhiêu tuổi (hỏi tuổi)", pos: "Đại từ" },
    { char: "岁", pinyin: "suì", hanViet: "Tuế", meaning: "Tuổi", pos: "Danh từ" },
    { char: "年纪", pinyin: "niánjì", hanViet: "Niên ký", meaning: "Tuổi tác", pos: "Danh từ" },
    { char: "出生", pinyin: "chūshēng", hanViet: "Xuất sinh", meaning: "Sinh ra, ra đời", pos: "Động từ" },
    { char: "谁", pinyin: "shéi / shuí", hanViet: "Thùy", meaning: "Ai", pos: "Đại từ" },
    { char: "这", pinyin: "zhè", hanViet: "Giá", meaning: "Này, cái này", pos: "Đại từ" },
    { char: "那", pinyin: "nà", hanViet: "Na", meaning: "Kia, cái kia", pos: "Đại từ" },
    { char: "聪明", pinyin: "cōngming", hanViet: "Thông minh", meaning: "Thông minh", pos: "Tính từ" },
    { char: "可爱", pinyin: "kě'ài", hanViet: "Khả ái", meaning: "Đáng yêu, dễ thương", pos: "Tính từ" },
    { char: "漂亮", pinyin: "piàoliang", hanViet: "Phiêu lượng", meaning: "Đẹp, xinh đẹp (dùng cho nữ)", pos: "Tính từ" },
    { char: "帅", pinyin: "shuài", hanViet: "Suất", meaning: "Đẹp trai, điển trai (dùng cho nam)", pos: "Tính từ" },
    { char: "高", pinyin: "gāo", hanViet: "Cao", meaning: "Cao", pos: "Tính từ" },
    { char: "矮", pinyin: "ǎi", hanViet: "Áo", meaning: "Lùn, thấp", pos: "Tính từ" },
    { char: "胖", pinyin: "pàng", hanViet: "Bàng", meaning: "Béo, mập", pos: "Tính từ" },
    { char: "瘦", pinyin: "shòu", hanViet: "Sấu", meaning: "Gầy, ốm", pos: "Tính từ" }
];

const GIAO_TIEP_1_B6_VOCAB = [
    { char: "给", pinyin: "gěi", hanViet: "Cấp", meaning: "Cho, đưa cho, gọi điện (cho ai)", pos: "Giới từ / Động từ" },
    { char: "打电话", pinyin: "dǎ diànhuà", hanViet: "Đả điện thoại", meaning: "Gọi điện thoại", pos: "Động từ" },
    { char: "喂", pinyin: "wèi", hanViet: "Úy / Uy", meaning: "Alo (khi nghe điện thoại)", pos: "Thán từ" },
    { char: "请问", pinyin: "qǐngwèn", hanViet: "Thỉnh vấn", meaning: "Xin hỏi", pos: "Động từ" },
    { char: "找", pinyin: "zhǎo", hanViet: "Tìm", meaning: "Tìm, gặp (ai)", pos: "Động từ" },
    { char: "稍等", pinyin: "shāoděng", hanViet: "Sảo đẳng", meaning: "Chờ một chút, đợi một lát", pos: "Động từ" },
    { char: "打错", pinyin: "dǎcuò", hanViet: "Đả thác", meaning: "Gọi nhầm số, gọi lộn số", pos: "Động từ" },
    { char: "想", pinyin: "xiǎng", hanViet: "Tưởng", meaning: "Muốn, nghĩ, nhớ", pos: "Động từ" },
    { char: "接电话", pinyin: "jiē diànhuà", hanViet: "Tiếp điện thoại", meaning: "Nghe điện thoại, nhận cuộc gọi", pos: "Động từ" },
    { char: "位", pinyin: "wèi", hanViet: "Vị", meaning: "Vị (lượng từ lịch sự chỉ người)", pos: "Lượng từ" },
    { char: "回电话", pinyin: "huí diànhuà", hanViet: "Hồi điện thoại", meaning: "Gọi điện thoại lại, gọi lại", pos: "Động từ" },
    { char: "商店", pinyin: "shāngdiàn", hanViet: "Thương điếm", meaning: "Cửa hàng, cửa tiệm", pos: "Danh từ" },
    { char: "咖啡店", pinyin: "kāfēidiàn", hanViet: "Kha phi điếm", meaning: "Quán cà phê", pos: "Danh từ" },
    { char: "奶茶店", pinyin: "nǎichádiàn", hanViet: "Nải trà điếm", meaning: "Quán trà sữa", pos: "Danh từ" },
    { char: "飞机场", pinyin: "fēijīchǎng", hanViet: "Phi cơ trường", meaning: "Sân bay, phi trường", pos: "Danh từ" },
    { char: "公园", pinyin: "gōngyuán", hanViet: "Công viên", meaning: "Công viên", pos: "Danh từ" },
    { char: "发短信", pinyin: "fā duǎnxìn", hanViet: "Phát đoản tín", meaning: "Gửi tin nhắn", pos: "Động từ" },
    { char: "电子邮件", pinyin: "diànzǐ yóujiàn", hanViet: "Điện tử bưu kiện", meaning: "Thư điện tử, email", pos: "Danh từ" },
    { char: "发邮件", pinyin: "fā yóujiàn", hanViet: "Phát bưu kiện", meaning: "Gửi email", pos: "Động từ" },
    { char: "发", pinyin: "fā", hanViet: "Phát", meaning: "Gửi, phát", pos: "Động từ" },
    { char: "扫", pinyin: "sǎo", hanViet: "Tảo", meaning: "Quét (mã QR)", pos: "Động từ" },
    { char: "加（微信）", pinyin: "jiā (wēixìn)", hanViet: "Gia (Vi tín)", meaning: "Kết bạn WeChat, thêm WeChat", pos: "Động từ" }
];

const GIAO_TIEP_2_B7_VOCAB = [
    { char: "左边", pinyin: "zuǒbiān", hanViet: "Tả biên", meaning: "Bên trái", pos: "Danh từ" },
    { char: "右边", pinyin: "yòubiān", hanViet: "Hữu biên", meaning: "Bên phải", pos: "Danh từ" },
    { char: "东边", pinyin: "dōngbiān", hanViet: "Đông biên", meaning: "Phía đông", pos: "Danh từ" },
    { char: "西边", pinyin: "xībiān", hanViet: "Tây biên", meaning: "Phía tây", pos: "Danh từ" },
    { char: "南边", pinyin: "nánbiān", hanViet: "Nam biên", meaning: "Phía nam", pos: "Danh từ" },
    { char: "北边", pinyin: "běibiān", hanViet: "Bắc biên", meaning: "Phía bắc", pos: "Danh từ" },
    { char: "往", pinyin: "wǎng", hanViet: "Vãng", meaning: "Hướng về, đi về phía", pos: "Giới từ / Động từ" },
    { char: "拐", pinyin: "guǎi", hanViet: "Quải", meaning: "Rẽ, ngoặt", pos: "Động từ" },
    { char: "到", pinyin: "dào", hanViet: "Đáo", meaning: "Đến, tới", pos: "Động từ" },
    { char: "红绿灯", pinyin: "hónglǜdēng", hanViet: "Hồng lục đăng", meaning: "Đèn giao thông (xanh đỏ)", pos: "Danh từ" },
    { char: "十字路口", pinyin: "shízìlùkǒu", hanViet: "Thập tự lộ khẩu", meaning: "Ngã tư", pos: "Danh từ" },
    { char: "丁字路口", pinyin: "dīngzìlùkǒu", hanViet: "Đinh tự lộ khẩu", meaning: "Ngã ba", pos: "Danh từ" },
    { char: "从", pinyin: "cóng", hanViet: "Tùng", meaning: "Từ (địa điểm, thời gian)", pos: "Giới từ" },
    { char: "一直走", pinyin: "yìzhí zǒu", hanViet: "Nhất trực tẩu", meaning: "Đi thẳng", pos: "Cụm động từ" },
    { char: "怎么走", pinyin: "zěnme zǒu", hanViet: "Chẩm ma tẩu", meaning: "Đi như thế nào", pos: "Cụm từ" },
    { char: "环岛", pinyin: "huándǎo", hanViet: "Hoàn đảo", meaning: "Vòng xuyến, bùng binh", pos: "Danh từ" },
    { char: "自行车", pinyin: "zìxíngchē", hanViet: "Tự hành xa", meaning: "Xe đạp", pos: "Danh từ" },
    { char: "出租车", pinyin: "chūzūchē", hanViet: "Xuất tô xa", meaning: "Xe taxi", pos: "Danh từ" },
    { char: "地铁", pinyin: "dìtiě", hanViet: "Địa thiết", meaning: "Tàu điện ngầm", pos: "Danh từ" },
    { char: "骑", pinyin: "qí", hanViet: "Kỵ", meaning: "Cưỡi, đi (xe đạp, xe máy)", pos: "Động từ" },
    { char: "坐", pinyin: "zuò", hanViet: "Tọa", meaning: "Ngồi, đi (tàu, xe, máy bay...)", pos: "Động từ" },
    { char: "开车", pinyin: "kāichē", hanViet: "Khai xa", meaning: "Lái xe ô tô", pos: "Động từ" },
    { char: "摩托车", pinyin: "mótuōchē", hanViet: "Ma thác xa", meaning: "Xe máy", pos: "Danh từ" },
    { char: "汽车", pinyin: "qìchē", hanViet: "Khí xa", meaning: "Xe ô tô", pos: "Danh từ" },
    { char: "公共汽车", pinyin: "gōnggòng qìchē", hanViet: "Công cộng khí xa", meaning: "Xe buýt", pos: "Danh từ" },
    { char: "火车", pinyin: "huǒchē", hanViet: "Hỏa xa", meaning: "Tàu hỏa", pos: "Danh từ" },
    { char: "高铁", pinyin: "gāotiě", hanViet: "Cao thiết", meaning: "Tàu cao tốc", pos: "Danh từ" },
    { char: "飞机", pinyin: "fēijī", hanViet: "Phi cơ", meaning: "Máy bay", pos: "Danh từ" },
    { char: "船", pinyin: "chuán", hanViet: "Thuyền", meaning: "Thuyền, tàu thủy", pos: "Danh từ" },
    { char: "网约车", pinyin: "wǎngyuēchē", hanViet: "Võng ước xa", meaning: "Xe công nghệ (Grab, Be, Didi...)", pos: "Danh từ" },
    { char: "离", pinyin: "lí", hanViet: "Ly", meaning: "Cách (khoảng cách)", pos: "Giới từ / Động từ" },
    { char: "近", pinyin: "jìn", hanViet: "Cận", meaning: "Gần", pos: "Tính từ" },
    { char: "远", pinyin: "yuǎn", hanViet: "Viễn", meaning: "Xa", pos: "Tính từ" },
    { char: "分钟", pinyin: "fēnzhōng", hanViet: "Phân chung", meaning: "Phút", pos: "Danh từ" },
    { char: "多远", pinyin: "duō yuǎn", hanViet: "Đa viễn", meaning: "Bao xa", pos: "Cụm đại từ" },
    { char: "小时", pinyin: "xiǎoshí", hanViet: "Tiểu thời", meaning: "Giờ, tiếng đồng hồ", pos: "Danh từ" },
    { char: "多长时间", pinyin: "duō cháng shíjiān", hanViet: "Đa trường thời gian", meaning: "Bao lâu, thời gian bao lâu", pos: "Cụm đại từ" },
    { char: "米", pinyin: "mǐ", hanViet: "Mễ", meaning: "Mét (đơn vị)", pos: "Lượng từ / Danh từ" },
    { char: "左右", pinyin: "zuǒyòu", hanViet: "Tả hữu", meaning: "Khoảng, xấp xỉ", pos: "Phó từ / Danh từ" },
    { char: "怕", pinyin: "pà", hanViet: "Phạ", meaning: "Sợ, e rằng", pos: "Động từ" },
    { char: "堵车", pinyin: "dǔchē", hanViet: "Đổ xa", meaning: "Tắc đường, kẹt xe", pos: "Động từ / Danh từ" },
    { char: "晕车", pinyin: "yùnchē", hanViet: "Vận xa", meaning: "Say xe", pos: "Động từ" },
    { char: "晕船", pinyin: "yùnchuán", hanViet: "Vận thuyền", meaning: "Say tàu, say thuyền", pos: "Động từ" },
    { char: "晕飞机", pinyin: "yùnfēijī", hanViet: "Vận phi cơ", meaning: "Say máy bay", pos: "Động từ" },
    { char: "迟到", pinyin: "chídào", hanViet: "Trì đáo", meaning: "Đến muộn, trễ", pos: "Động từ" },
    { char: "累", pinyin: "lèi", hanViet: "Lụy", meaning: "Mệt, mệt mỏi", pos: "Tính từ" },
    { char: "的时候", pinyin: "de shíhou", hanViet: "Đích thời hậu", meaning: "Lúc..., khi...", pos: "Cụm từ" },
    { char: "为什么", pinyin: "wèi shénme", hanViet: "Vị thập ma", meaning: "Tại sao, vì sao", pos: "Đại từ" },
    { char: "因为", pinyin: "yīnwèi", hanViet: "Nhân vị", meaning: "Bởi vì", pos: "Liên từ" },
    { char: "经常", pinyin: "jīngcháng", hanViet: "Kinh thường", meaning: "Thường xuyên, hay", pos: "Phó từ" }
];



const GIAO_TIEP_2_B8_VOCAB = [
    { char: "上边", pinyin: "shàngbian", hanViet: "Thượng biên", meaning: "Bên trên / Phía trên", pos: "Phương vị từ / Danh từ" },
    { char: "下边", pinyin: "xiàbian", hanViet: "Hạ biên", meaning: "Bên dưới / Phía dưới", pos: "Phương vị từ / Danh từ" },
    { char: "里边", pinyin: "lǐbian", hanViet: "Lý biên", meaning: "Bên trong", pos: "Phương vị từ / Danh từ" },
    { char: "外边", pinyin: "wàibian", hanViet: "Ngoại biên", meaning: "Bên ngoài", pos: "Phương vị từ / Danh từ" },
    { char: "前边", pinyin: "qiánbian", hanViet: "Tiền biên", meaning: "Phía trước / Đằng trước", pos: "Phương vị từ / Danh từ" },
    { char: "旁边", pinyin: "pángbiān", hanViet: "Bàng biên", meaning: "Bên cạnh", pos: "Phương vị từ / Danh từ" },
    { char: "后边", pinyin: "hòubian", hanViet: "Hậu biên", meaning: "Phía sau / Đằng sau", pos: "Phương vị từ / Danh từ" },
    { char: "本", pinyin: "běn", hanViet: "Bản", meaning: "Cuốn, quyển (lượng từ sách, vở, tạp chí...)", pos: "Lượng từ" },
    { char: "杂志", pinyin: "zázhì", hanViet: "Tạp chí", meaning: "Tạp chí", pos: "Danh từ" },
    { char: "份", pinyin: "fèn", hanViet: "Phần", meaning: "Bản, tờ, phần (lượng từ báo chí, hợp đồng, phần ăn...)", pos: "Lượng từ" },
    { char: "报纸", pinyin: "bàozhǐ", hanViet: "Báo chỉ", meaning: "Tờ báo, báo chí", pos: "Danh từ" },
    { char: "张", pinyin: "zhāng", hanViet: "Trương", meaning: "Tấm, tờ, chiếc (lượng từ bàn, giường, giấy, ảnh...)", pos: "Lượng từ" },
    { char: "桌子", pinyin: "zhuōzi", hanViet: "Trác tử", meaning: "Cái bàn", pos: "Danh từ" },
    { char: "椅子", pinyin: "yǐzi", hanViet: "Y tử", meaning: "Cái ghế", pos: "Danh từ" },
    { char: "把", pinyin: "bǎ", hanViet: "Bả", meaning: "Chiếc, cái, chùm (lượng từ ghế, chìa khóa, dao, ô...)", pos: "Lượng từ" },
    { char: "钥匙", pinyin: "yàoshi", hanViet: "Diược thì", meaning: "Chìa khóa", pos: "Danh từ" },
    { char: "笔", pinyin: "bǐ", hanViet: "Bút", meaning: "Cây bút, viết", pos: "Danh từ" },
    { char: "笔袋", pinyin: "bǐdài", hanViet: "Bút đại", meaning: "Hộp bút, bóp viết, túi đựng bút", pos: "Danh từ" },
    { char: "书包", pinyin: "shūbāo", hanViet: "Thư bao", meaning: "Cặp sách, ba lô", pos: "Danh từ" },
    { char: "找", pinyin: "zhǎo", hanViet: "Trảo", meaning: "Tìm, tìm kiếm", pos: "Động từ" },
    { char: "柜子", pinyin: "guìzi", hanViet: "Quỹ tử", meaning: "Cái tủ", pos: "Danh từ" },
    { char: "鞋柜", pinyin: "xiéguì", hanViet: "Hài quỹ", meaning: "Tủ giày", pos: "Danh từ" },
    { char: "书柜", pinyin: "shūguì", hanViet: "Thư quỹ", meaning: "Tủ sách", pos: "Danh từ" },
    { char: "衣柜", pinyin: "yīguì", hanViet: "Y quỹ", meaning: "Tủ quần áo", pos: "Danh từ" },
    { char: "冰箱", pinyin: "bīngxiāng", hanViet: "Băng sương", meaning: "Tủ lạnh", pos: "Danh từ" },
    { char: "台", pinyin: "tái", hanViet: "Đài", meaning: "Chiếc, cái (lượng từ máy móc, tivi, tủ lạnh...)", pos: "Lượng từ" },
    { char: "电视", pinyin: "diànshì", hanViet: "Điện thị", meaning: "Ti vi, truyền hình", pos: "Danh từ" },
    { char: "部", pinyin: "bù", hanViet: "Bộ", meaning: "Chiếc, cái, bộ (lượng từ điện thoại, phim, xe...)", pos: "Lượng từ" },
    { char: "电话", pinyin: "diànhuà", hanViet: "Điện thoại", meaning: "Điện thoại, điện thoại bàn", pos: "Danh từ" },
    { char: "床", pinyin: "chuáng", hanViet: "Sàng", meaning: "Cái giường", pos: "Danh từ" },
    { char: "对面", pinyin: "duìmiàn", hanViet: "Đối diện", meaning: "Đối diện", pos: "Phương vị từ / Danh từ" },
    { char: "附近", pinyin: "fùjìn", hanViet: "Phụ cận", meaning: "Gần đây, lân cận, xung quanh", pos: "Danh từ" },
    { char: "中间", pinyin: "zhōngjiān", hanViet: "Trung gian", meaning: "Ở giữa, trung gian", pos: "Phương vị từ / Danh từ" },
    { char: "马路", pinyin: "mǎlù", hanViet: "Mã lộ", meaning: "Đường cái, đường lớn xe chạy", pos: "Danh từ" },
    { char: "车站", pinyin: "chēzhàn", hanViet: "Xa trạm", meaning: "Bến xe, trạm xe", pos: "Danh từ" },
    { char: "还有", pinyin: "hái yǒu", hanViet: "Hoàn hữu", meaning: "Còn có, ngoài ra còn", pos: "Cụm từ / Liên từ" },
    { char: "汉语中心", pinyin: "hànyǔ zhōngxīn", hanViet: "Hán ngữ trung tâm", meaning: "Trung tâm tiếng Trung", pos: "Danh từ" },
    { char: "公寓", pinyin: "gōngyù", hanViet: "Công ngự", meaning: "Căn hộ, chung cư", pos: "Danh từ" },
    { char: "房子", pinyin: "fángzi", hanViet: "Phòng tử", meaning: "Căn nhà, ngôi nhà", pos: "Danh từ" },
    { char: "体育馆", pinyin: "tǐyùguǎn", hanViet: "Thể dục quán", meaning: "Nhà thi đấu, nhà thể thao", pos: "Danh từ" },
    { char: "运动场", pinyin: "yùndòngchǎng", hanViet: "Vận động trường", meaning: "Sân vận động, sân thể thao", pos: "Danh từ" },
    { char: "图书馆", pinyin: "túshūguǎn", hanViet: "Đồ thư quán", meaning: "Thư viện", pos: "Danh từ" },
    { char: "地址", pinyin: "dìzhǐ", hanViet: "Địa chỉ", meaning: "Địa chỉ", pos: "Danh từ" },
    { char: "第", pinyin: "dì", hanViet: "Đệ", meaning: "Thứ (tiền tố chỉ số thứ tự: 第一, 第二...)", pos: "Tiền tố" },
    { char: "郡", pinyin: "jùn", hanViet: "Quận", meaning: "Quận (đơn vị hành chính)", pos: "Danh từ" },
    { char: "坊", pinyin: "fāng", hanViet: "Phường", meaning: "Phường (đơn vị hành chính)", pos: "Danh từ" },
    { char: "路", pinyin: "lù", hanViet: "Lộ", meaning: "Tuyến đường, đường", pos: "Danh từ" },
    { char: "之", pinyin: "zhī", hanViet: "Chi", meaning: "Của, thuộc về / Trong", pos: "Trợ từ" },
    { char: "听说", pinyin: "tīngshuō", hanViet: "Thính thuyết", meaning: "Nghe nói", pos: "Động từ" },
    { char: "搬", pinyin: "bān", hanViet: "Bàn", meaning: "Chuyển, dọn (nhà, đồ đạc)", pos: "Động từ" },
    { char: "原来", pinyin: "yuánlái", hanViet: "Nguyên lai", meaning: "Vốn dĩ, ban đầu, hóa ra", pos: "Phó từ / Tính từ" },
    { char: "新", pinyin: "xīn", hanViet: "Tân", meaning: "Mới", pos: "Tính từ" },
    { char: "怎么样", pinyin: "zěnmeyàng", hanViet: "Chẩm ma dạng", meaning: "Thế nào, ra sao", pos: "Đại từ" },
    { char: "小", pinyin: "xiǎo", hanViet: "Tiểu", meaning: "Nhỏ, bé", pos: "Tính từ" },
    { char: "大", pinyin: "dà", hanViet: "Đại", meaning: "Lớn, to", pos: "Tính từ" },
    { char: "安静", pinyin: "ānjìng", hanViet: "An tĩnh", meaning: "Yên tĩnh, thanh bình", pos: "Tính từ" },
    { char: "方便", pinyin: "fāngbiàn", hanViet: "Phương tiện", meaning: "Thuận tiện, tiện lợi", pos: "Tính từ" },
    { char: "安全", pinyin: "ānquán", hanViet: "An toàn", meaning: "An toàn", pos: "Tính từ" },
    { char: "危险", pinyin: "wēixiǎn", hanViet: "Nguy hiểm", meaning: "Nguy hiểm", pos: "Tính từ" },
    { char: "环境", pinyin: "huánjìng", hanViet: "Hoàn cảnh", meaning: "Môi trường, cảnh quan", pos: "Danh từ" }
];


const GIAO_TIEP_2_B9_VOCAB = [
    { char: "头", pinyin: "tóu", hanViet: "Đầu", meaning: "Đầu", pos: "Danh từ" },
    { char: "眼睛", pinyin: "yǎnjing", hanViet: "Nhãn tình", meaning: "Mắt, đôi mắt", pos: "Danh từ" },
    { char: "脸", pinyin: "liǎn", hanViet: "Kiểm", meaning: "Mặt, khuôn mặt", pos: "Danh từ" },
    { char: "鼻子", pinyin: "bízi", hanViet: "Tị tử", meaning: "Mũi", pos: "Danh từ" },
    { char: "耳朵", pinyin: "ěrduo", hanViet: "Nhĩ đóa", meaning: "Tai, lỗ tai", pos: "Danh từ" },
    { char: "牙", pinyin: "yá", hanViet: "Nha", meaning: "Răng", pos: "Danh từ" },
    { char: "嘴", pinyin: "zuǐ", hanViet: "Chủy", meaning: "Miệng, mồm", pos: "Danh từ" },
    { char: "胳膊", pinyin: "gēbo", hanViet: "Cánh bác", meaning: "Cánh tay", pos: "Danh từ" },
    { char: "手", pinyin: "shǒu", hanViet: "Thủ", meaning: "Bàn tay, tay", pos: "Danh từ" },
    { char: "肚子", pinyin: "dùzi", hanViet: "Đỗ tử", meaning: "Bụng", pos: "Danh từ" },
    { char: "腿", pinyin: "tuǐ", hanViet: "Thoái", meaning: "Chân, cẳng chân", pos: "Danh từ" },
    { char: "脚", pinyin: "jiǎo", hanViet: "Cước", meaning: "Bàn chân", pos: "Danh từ" },
    { char: "有一点儿", pinyin: "yǒu yìdiǎnr", hanViet: "Hữu nhất điểm nhi", meaning: "Hơi hơi, có một chút (cảm giác khó chịu)", pos: "Phó từ" },
    { char: "疼", pinyin: "téng", hanViet: "Đống", meaning: "Đau, nhức", pos: "Tính từ / Động từ" },
    { char: "吃药", pinyin: "chī yào", hanViet: "Ngật dược", meaning: "Uống thuốc", pos: "Động từ" },
    { char: "药店", pinyin: "yàodiàn", hanViet: "Dược điếm", meaning: "Tiệm thuốc, nhà thuốc", pos: "Danh từ" },
    { char: "西药", pinyin: "xīyào", hanViet: "Tây dược", meaning: "Thuốc tây", pos: "Danh từ" },
    { char: "发烧", pinyin: "fāshāo", hanViet: "Phát thiêu", meaning: "Phát sốt, bị sốt", pos: "Động từ" },
    { char: "咳嗽", pinyin: "késou", hanViet: "Khái thấu", meaning: "Ho, bị ho", pos: "Động từ / Danh từ" },
    { char: "累", pinyin: "lèi", hanViet: "Lụy", meaning: "Mệt mỏi, mệt", pos: "Tính từ" },
    { char: "感冒", pinyin: "gǎnmào", hanViet: "Cảm mạo", meaning: "Cảm cúm, bị cảm", pos: "Động từ / Danh từ" },
    { char: "不舒服", pinyin: "bù shūfu", hanViet: "Bất thư phục", meaning: "Khó chịu, không khỏe, người ê ẩm", pos: "Tính từ" },
    { char: "生病", pinyin: "shēngbìng", hanViet: "Sinh bệnh", meaning: "Bị bệnh, ốm đau", pos: "Động từ" },
    { char: "呕吐", pinyin: "ǒutù", hanViet: "Ẩu thổ", meaning: "Nôn mửa, ói mửa", pos: "Động từ" },
    { char: "体温", pinyin: "tǐwēn", hanViet: "Thể ôn", meaning: "Thân nhiệt, nhiệt độ cơ thể", pos: "Danh từ" },
    { char: "量", pinyin: "liáng", hanViet: "Lượng", meaning: "Đo, đo đạc (量体温: đo nhiệt độ)", pos: "Động từ" },
    { char: "度", pinyin: "dù", hanViet: "Độ", meaning: "Độ (độ C nhiệt độ)", pos: "Lượng từ / Danh từ" },
    { char: "打针", pinyin: "dǎzhēn", hanViet: "Đả châm", meaning: "Tiêm thuốc, chích thuốc", pos: "Động từ" },
    { char: "次", pinyin: "cì", hanViet: "Thứ", meaning: "Lần (lượng từ số lần)", pos: "Lượng từ" },
    { char: "每次", pinyin: "měi cì", hanViet: "Mỗi thứ", meaning: "Mỗi lần", pos: "Cụm từ" },
    { char: "饭前吃", pinyin: "fàn qián chī", hanViet: "Phạn tiền ngật", meaning: "Uống trước bữa ăn", pos: "Cụm từ" },
    { char: "饭后吃", pinyin: "fàn hòu chī", hanViet: "Phạn hậu ngật", meaning: "Uống sau bữa ăn", pos: "Cụm từ" },
    { char: "片", pinyin: "piàn", hanViet: "Phiến", meaning: "Viên, vỉ, lát (lượng từ thuốc: 一片药)", pos: "Lượng từ" },
    { char: "看病", pinyin: "kàn bìng", hanViet: "Khán bệnh", meaning: "Khám bệnh, đi khám", pos: "Động từ" },
    { char: "复诊", pinyin: "fùzhěn", hanViet: "Phục chẩn", meaning: "Tái khám", pos: "Động từ" },
    { char: "得", pinyin: "děi", hanViet: "Đắc", meaning: "Phải, cần phải", pos: "Trợ động từ" },
    { char: "多", pinyin: "duō", hanViet: "Đa", meaning: "Nhiều, làm nhiều hơn (多休息, 多喝水)", pos: "Phó từ / Tính từ" },
    { char: "休息", pinyin: "xiūxi", hanViet: "Hưu tức", meaning: "Nghỉ ngơi", pos: "Động từ" },
    { char: "喝水", pinyin: "hē shuǐ", hanViet: "Hát thủy", meaning: "Uống nước", pos: "Cụm động từ" },
    { char: "会", pinyin: "huì", hanViet: "Hội", meaning: "Sẽ / biết", pos: "Trợ động từ" },
    { char: "告诉", pinyin: "gàosu", hanViet: "Cáo tố", meaning: "Nói với, bảo cho, thông báo", pos: "Động từ" },
    { char: "老板", pinyin: "lǎobǎn", hanViet: "Lão bản", meaning: "Ông chủ, sếp", pos: "Danh từ" },
    { char: "说", pinyin: "shuō", hanViet: "Thuyết", meaning: "Nói", pos: "Động từ" },
    { char: "一起", pinyin: "yìqǐ", hanViet: "Nhất khởi", meaning: "Cùng nhau", pos: "Phó từ" },
    { char: "舌头", pinyin: "shétou", hanViet: "Thiệt đầu", meaning: "Lưỡi", pos: "Danh từ" },
    { char: "中药", pinyin: "zhōngyào", hanViet: "Trung dược", meaning: "Thuốc bắc, thuốc đông y", pos: "Danh từ" },
    { char: "痛经", pinyin: "tòngjīng", hanViet: "Thống kinh", meaning: "Đau bụng kinh", pos: "Danh từ / Động từ" },
    { char: "熬夜", pinyin: "áoyè", hanViet: "Ngao dạ", meaning: "Thức khuya, thức đêm", pos: "Động từ" },
    { char: "请病假", pinyin: "qǐng bìngjià", hanViet: "Thỉnh bệnh giả", meaning: "Xin nghỉ ốm", pos: "Cụm động từ" },
    { char: "请假", pinyin: "qǐngjià", hanViet: "Thỉnh giả", meaning: "Xin nghỉ phép", pos: "Động từ" },
    { char: "嗓子疼", pinyin: "sǎngzi téng", hanViet: "Tảng tử đống", meaning: "Đau họng, rát cổ họng", pos: "Cụm từ" },
    { char: "拉肚子", pinyin: "lā dùzi", hanViet: "Lạp đỗ tử", meaning: "Đau bụng đi ngoài, tiêu chảy", pos: "Cụm động từ" },
    { char: "胃疼", pinyin: "wèi téng", hanViet: "Vị đống", meaning: "Đau dạ dày, đau bao tử", pos: "Cụm từ" },
    { char: "食物中毒", pinyin: "shíwù zhòngdú", hanViet: "Thực vật trúng độc", meaning: "Ngộ độc thực phẩm", pos: "Cụm danh từ" }
];


const GIAO_TIEP_2_B10_VOCAB = [
    { char: "加拿大", pinyin: "Jiānádà", hanViet: "Gia Nã Đại", meaning: "Canada", pos: "Danh từ" },
    { char: "新加坡", pinyin: "Xīnjiāpō", hanViet: "Tân Gia Ba", meaning: "Singapore", pos: "Danh từ" },
    { char: "俄语", pinyin: "Éyǔ", hanViet: "Nga ngữ", meaning: "Tiếng Nga", pos: "Danh từ" },
    { char: "意大利语", pinyin: "Yìdàlìyǔ", hanViet: "Ý Đại Lợi ngữ", meaning: "Tiếng Ý", pos: "Danh từ" },
    { char: "印地语", pinyin: "Yìndìyǔ", hanViet: "Ấn Địa ngữ", meaning: "Tiếng Hindi (Ấn Độ)", pos: "Danh từ" },
    { char: "泰语", pinyin: "Tàiyǔ", hanViet: "Thái ngữ", meaning: "Tiếng Thái", pos: "Danh từ" },
    { char: "混血", pinyin: "hùnxuè", hanViet: "Hỗn huyết", meaning: "Con lai, mang hai dòng máu", pos: "Danh từ / Tính từ" },
    { char: "语言", pinyin: "yǔyán", hanViet: "Ngữ ngôn", meaning: "Ngôn ngữ, tiếng", pos: "Danh từ" },
    { char: "英语", pinyin: "Yīngyǔ", hanViet: "Anh ngữ", meaning: "Tiếng Anh", pos: "Danh từ" },
    { char: "韩语", pinyin: "Hányǔ", hanViet: "Hàn ngữ", meaning: "Tiếng Hàn", pos: "Danh từ" },
    { char: "越南语", pinyin: "Yuènányǔ", hanViet: "Việt Nam ngữ", meaning: "Tiếng Việt", pos: "Danh từ" },
    { char: "汉语", pinyin: "Hànyǔ", hanViet: "Hán ngữ", meaning: "Tiếng Trung, tiếng Hán", pos: "Danh từ" },
    { char: "中文", pinyin: "Zhōngwén", hanViet: "Trung văn", meaning: "Tiếng Trung, chữ Hán", pos: "Danh từ" },
    { char: "日语", pinyin: "Rìyǔ", hanViet: "Nhật ngữ", meaning: "Tiếng Nhật", pos: "Danh từ" },
    { char: "法语", pinyin: "Fǎyǔ", hanViet: "Pháp ngữ", meaning: "Tiếng Pháp", pos: "Danh từ" },
    { char: "德语", pinyin: "Déyǔ", hanViet: "Đức ngữ", meaning: "Tiếng Đức", pos: "Danh từ" },
    { char: "西班牙语", pinyin: "Xībānyáyǔ", hanViet: "Tây Ban Nha ngữ", meaning: "Tiếng Tây Ban Nha", pos: "Danh từ" },
    { char: "说", pinyin: "shuō", hanViet: "Thuyết", meaning: "Nói", pos: "Động từ" },
    { char: "会", pinyin: "huì", hanViet: "Hội", meaning: "Biết, có thể (kỹ năng học được)", pos: "Trợ động từ" },
    { char: "会一点儿", pinyin: "huì yìdiǎnr", hanViet: "Hội nhất điểm nhi", meaning: "Biết một chút", pos: "Cụm từ" },
    { char: "不太会", pinyin: "bú tài huì", hanViet: "Bất thái hội", meaning: "Không biết lắm, không thạo", pos: "Cụm từ" },
    { char: "得", pinyin: "de", hanViet: "Đắc", meaning: "Trợ từ kết cấu (nói được thế nào)", pos: "Trợ từ" },
    { char: "电脑", pinyin: "diànnǎo", hanViet: "Điện não", meaning: "Máy vi tính, máy tính", pos: "Danh từ" },
    { char: "坏", pinyin: "huài", hanViet: "Hoại", meaning: "Hỏng, hư hỏng, xấu", pos: "Tính từ / Động từ" },
    { char: "修", pinyin: "xiū", hanViet: "Tu", meaning: "Sửa, sửa chữa", pos: "Động từ" },
    { char: "不能", pinyin: "bù néng", hanViet: "Bất năng", meaning: "Không thể", pos: "Trợ động từ" },
    { char: "可能", pinyin: "kěnéng", hanViet: "Khả năng", meaning: "Có thể, có lẽ, khả năng", pos: "Phó từ / Danh từ" },
    { char: "病毒", pinyin: "bìngdú", hanViet: "Bệnh độc", meaning: "Virus (máy tính hoặc dịch bệnh)", pos: "Danh từ" },
    { char: "差", pinyin: "chà", hanViet: "Sai", meaning: "Kém, dở, yếu", pos: "Tính từ" },
    { char: "还可以", pinyin: "hái kěyǐ", hanViet: "Hoàn khả dĩ", meaning: "Cũng được, tàm tạm, tạm ổn", pos: "Cụm từ" },
    { char: "不错", pinyin: "búcuò", hanViet: "Bất thác", meaning: "Tốt, khá tốt, không tệ", pos: "Tính từ" },
    { char: "极了", pinyin: "jíle", hanViet: "Cực liễu", meaning: "Cực kỳ, vô cùng", pos: "Phó từ" },
    { char: "非常", pinyin: "fēicháng", hanViet: "Phi thường", meaning: "Rất, vô cùng", pos: "Phó từ" },
    { char: "平板电脑", pinyin: "píngbǎn diànnǎo", hanViet: "Bình bản điện não", meaning: "Máy tính bảng (iPad, tablet)", pos: "Danh từ" },
    { char: "手提电脑", pinyin: "shǒutí diànnǎo", hanViet: "Thủ đề điện não", meaning: "Máy tính xách tay, laptop", pos: "Danh từ" },
    { char: "台灯", pinyin: "táidēng", hanViet: "Đài đăng", meaning: "Đèn bàn, đèn học", pos: "Danh từ" },
    { char: "游泳", pinyin: "yóuyǒng", hanViet: "Du vịnh", meaning: "Bơi, bơi lội", pos: "Động từ" },
    { char: "滑冰", pinyin: "huábīng", hanViet: "Hoạt băng", meaning: "Trượt băng", pos: "Động từ" },
    { char: "打网球", pinyin: "dǎ wǎngqiú", hanViet: "Đả võng cầu", meaning: "Chơi tennis, đánh quần vợt", pos: "Cụm động từ" },
    { char: "爬山", pinyin: "páshān", hanViet: "Ba sơn", meaning: "Leo núi", pos: "Động từ" },
    { char: "健身", pinyin: "jiànshēn", hanViet: "Kiện thân", meaning: "Tập gym, tập thể hình", pos: "Động từ" },
    { char: "散步", pinyin: "sànbù", hanViet: "Tản bộ", meaning: "Đi dạo, tản bộ", pos: "Động từ" },
    { char: "健身房", pinyin: "jiànshēnfáng", hanViet: "Kiện thân phòng", meaning: "Phòng tập gym, phòng thể hình", pos: "Danh từ" },
    { char: "运动", pinyin: "yùndòng", hanViet: "Vận động", meaning: "Vận động, thể thao", pos: "Danh từ / Động từ" },
    { char: "跑步", pinyin: "pǎobù", hanViet: "Bào bộ", meaning: "Chạy bộ", pos: "Động từ" },
    { char: "打羽毛球", pinyin: "dǎ yǔmáoqiú", hanViet: "Đả vũ mao cầu", meaning: "Đánh cầu lông", pos: "Cụm động từ" },
    { char: "打篮球", pinyin: "dǎ lánqiú", hanViet: "Đả lam cầu", meaning: "Chơi bóng rổ", pos: "Cụm động từ" },
    { char: "踢足球", pinyin: "tī zúqiú", hanViet: "Thích túc cầu", meaning: "Đá bóng, đá banh", pos: "Cụm động từ" },
    { char: "踢毽子", pinyin: "tī jiànzi", hanViet: "Thích kiện tử", meaning: "Đá cầu", pos: "Cụm động từ" },
    { char: "练瑜伽", pinyin: "liàn yújiā", hanViet: "Luyện du già", meaning: "Tập yoga", pos: "Cụm động từ" },
    { char: "开车", pinyin: "kāichē", hanViet: "Khai xa", meaning: "Lái xe ô tô", pos: "Động từ" },
    { char: "做饭", pinyin: "zuòfàn", hanViet: "Tác phạn", meaning: "Nấu cơm, nấu ăn", pos: "Động từ" },
    { char: "画画儿", pinyin: "huà huàr", hanViet: "Họa họa nhi", meaning: "Vẽ tranh", pos: "Động từ" },
    { char: "买东西", pinyin: "mǎi dōngxi", hanViet: "Mãi đông tây", meaning: "Mua sắm, mua đồ đạc", pos: "Cụm động từ" },
    { char: "看书", pinyin: "kànshū", hanViet: "Khán thư", meaning: "Đọc sách", pos: "Cụm động từ" },
    { char: "旅游", pinyin: "lǚyóu", hanViet: "Lữ du", meaning: "Đi du lịch, du lịch", pos: "Động từ" },
    { char: "玩电子游戏", pinyin: "wán diànzǐ yóuxì", hanViet: "Ngoạn điện tử du hí", meaning: "Chơi trò chơi điện tử, chơi game", pos: "Cụm động từ" },
    { char: "逛街", pinyin: "guàngjiē", hanViet: "Cuống nhai", meaning: "Dạo phố, lượn phố, shopping", pos: "Động từ" },
    { char: "看电影", pinyin: "kàn diànyǐng", hanViet: "Khán điện ảnh", meaning: "Xem phim", pos: "Cụm động từ" },
    { char: "看电视", pinyin: "kàn diànshì", hanViet: "Khán điện thị", meaning: "Xem ti vi", pos: "Cụm động từ" },
    { char: "听音乐", pinyin: "tīng yīnyuè", hanViet: "Thính âm nhạc", meaning: "Nghe nhạc", pos: "Cụm động từ" },
    { char: "聊天", pinyin: "liáotiān", hanViet: "Liêu thiên", meaning: "Tán gẫu, trò chuyện", pos: "Động từ" },
    { char: "学习汉语", pinyin: "xuéxí hànyǔ", hanViet: "Học tập Hán ngữ", meaning: "Học tiếng Trung", pos: "Cụm động từ" },
    { char: "空儿", pinyin: "kòngr", hanViet: "Không nhi", meaning: "Thời gian rảnh rỗi, rảnh", pos: "Danh từ" },
    { char: "常常", pinyin: "chángcháng", hanViet: "Thường thường", meaning: "Thường xuyên, hay", pos: "Phó từ" },
    { char: "有时候", pinyin: "yǒu shíhou", hanViet: "Hữu thời hậu", meaning: "Thỉnh thoảng, đôi khi", pos: "Cụm từ" },
    { char: "总是", pinyin: "zǒngshì", hanViet: "Tổng thị", meaning: "Luôn luôn, toàn là", pos: "Phó từ" },
    { char: "以后", pinyin: "yǐhòu", hanViet: "Dĩ hậu", meaning: "Sau này, sau khi", pos: "Danh từ / Liên từ" },
    { char: "游泳馆", pinyin: "yóuyǒngguǎn", hanViet: "Du vịnh quán", meaning: "Cung thể thao dưới nước, bể bơi", pos: "Danh từ" },
    { char: "语言学校", pinyin: "yǔyán xuéxiào", hanViet: "Ngữ ngôn học hiệu", meaning: "Trường dạy ngoại ngữ, trường ngôn ngữ", pos: "Danh từ" }
];


const GIAO_TIEP_2_B11_VOCAB = [
    { char: "晴", pinyin: "qíng", hanViet: "Tình", meaning: "Trời nắng, quang đãng", pos: "Tính từ" },
    { char: "阴", pinyin: "yīn", hanViet: "Âm", meaning: "Trời âm u, râm mát", pos: "Tính từ" },
    { char: "多云", pinyin: "duōyún", hanViet: "Đa vân", meaning: "Trời nhiều mây", pos: "Tính từ" },
    { char: "下雨", pinyin: "xiàyǔ", hanViet: "Hạ vũ", meaning: "Mưa, trời mưa", pos: "Động từ" },
    { char: "小雨", pinyin: "xiǎoyǔ", hanViet: "Tiểu vũ", meaning: "Mưa nhỏ", pos: "Danh từ" },
    { char: "毛毛雨", pinyin: "máomaoyǔ", hanViet: "Mao mao vũ", meaning: "Mưa phùn, mưa bay", pos: "Danh từ" },
    { char: "大雨", pinyin: "dàyǔ", hanViet: "Đại vũ", meaning: "Mưa to, mưa lớn", pos: "Danh từ" },
    { char: "下雪", pinyin: "xiàxuě", hanViet: "Hạ tuyết", meaning: "Tuyết rơi, có tuyết", pos: "Động từ" },
    { char: "刮风", pinyin: "guāfēng", hanViet: "Quát phong", meaning: "Nổi gió, có gió", pos: "Động từ" },
    { char: "大风", pinyin: "dàfēng", hanViet: "Đại phong", meaning: "Gió to, gió lớn", pos: "Danh từ" },
    { char: "有雾", pinyin: "yǒu wù", hanViet: "Hữu vụ", meaning: "Có sương mù", pos: "Cụm từ" },
    { char: "大雾", pinyin: "dàwù", hanViet: "Đại vụ", meaning: "Sương mù dày đặc", pos: "Danh từ" },
    { char: "暴雨", pinyin: "bàoyǔ", hanViet: "Bạo vũ", meaning: "Mưa to như trút nước, bão mưa", pos: "Danh từ" },
    { char: "打雷", pinyin: "dǎléi", hanViet: "Đả lôi", meaning: "Sấm sét, đánh sấm", pos: "Động từ" },
    { char: "雷雨", pinyin: "léiyǔ", hanViet: "Lôi vũ", meaning: "Mưa giông, mưa sấm sét", pos: "Danh từ" },
    { char: "转", pinyin: "zhuǎn", hanViet: "Chuyển", meaning: "Chuyển (chuyển biến thời tiết: 多云转晴)", pos: "Động từ" },
    { char: "气温", pinyin: "qìwēn", hanViet: "Khí ôn", meaning: "Nhiệt độ không khí, nhiệt độ", pos: "Danh từ" },
    { char: "度", pinyin: "dù", hanViet: "Độ", meaning: "Độ (độ C nhiệt độ)", pos: "Lượng từ / Danh từ" },
    { char: "最高", pinyin: "zuìgāo", hanViet: "Tối cao", meaning: "Cao nhất", pos: "Tính từ" },
    { char: "最低", pinyin: "zuìdī", hanViet: "Tối đê", meaning: "Thấp nhất", pos: "Tính từ" },
    { char: "左右", pinyin: "zuǒyòu", hanViet: "Tả hữu", meaning: "Khoảng, xấp xỉ", pos: "Phó từ / Danh từ" },
    { char: "比", pinyin: "bǐ", hanViet: "Tỉ", meaning: "So với, hơn (cấu trúc so sánh)", pos: "Giới từ" },
    { char: "哈尔滨", pinyin: "Hā'ěrbīn", hanViet: "Cáp Nhĩ Tân", meaning: "Cáp Nhĩ Tân (thành phố băng tuyết)", pos: "Danh từ riêng" },
    { char: "旅行", pinyin: "lǚxíng", hanViet: "Lữ hành", meaning: "Đi du lịch, du hành", pos: "Động từ" },
    { char: "冰灯", pinyin: "bīngdēng", hanViet: "Băng đăng", meaning: "Đèn lồng băng (Lễ hội băng đăng)", pos: "Danh từ" },
    { char: "可是", pinyin: "kěshì", hanViet: "Khả thị", meaning: "Nhưng, thế nhưng", pos: "Liên từ" },
    { char: "非常", pinyin: "fēicháng", hanViet: "Phi thường", meaning: "Rất, vô cùng", pos: "Phó từ" },
    { char: "风景", pinyin: "fēngjǐng", hanViet: "Phong cảnh", meaning: "Phong cảnh, cảnh sắc", pos: "Danh từ" },
    { char: "好看", pinyin: "hǎokàn", hanViet: "Hảo khán", meaning: "Đẹp, bắt mắt, ưa nhìn", pos: "Tính từ" },
    { char: "但是", pinyin: "dànshì", hanViet: "Đãn thị", meaning: "Nhưng, nhưng mà", pos: "Liên từ" },
    { char: "冷", pinyin: "lěng", hanViet: "Lãnh", meaning: "Lạnh", pos: "Tính từ" },
    { char: "热", pinyin: "rè", hanViet: "Nhiệt", meaning: "Nóng", pos: "Tính từ" },
    { char: "高", pinyin: "gāo", hanViet: "Cao", meaning: "Cao", pos: "Tính từ" },
    { char: "低", pinyin: "dī", hanViet: "Đê", meaning: "Thấp", pos: "Tính từ" },
    { char: "季节", pinyin: "jìjié", hanViet: "Quý tiết", meaning: "Mùa, mùa màng", pos: "Danh từ" },
    { char: "春天", pinyin: "chūntiān", hanViet: "Xuân thiên", meaning: "Mùa xuân", pos: "Danh từ" },
    { char: "夏天", pinyin: "xiàtiān", hanViet: "Hạ thiên", meaning: "Mùa hè", pos: "Danh từ" },
    { char: "秋天", pinyin: "qiūtiān", hanViet: "Thu thiên", meaning: "Mùa thu", pos: "Danh từ" },
    { char: "冬天", pinyin: "dōngtiān", hanViet: "Đông thiên", meaning: "Mùa đông", pos: "Danh từ" },
    { char: "暖和", pinyin: "nuǎnhuo", hanViet: "Noãn hòa", meaning: "Ấm áp", pos: "Tính từ" },
    { char: "凉快", pinyin: "liángkuai", hanViet: "Lương khoái", meaning: "Mát mẻ, dễ chịu", pos: "Tính từ" },
    { char: "干燥", pinyin: "gānzào", hanViet: "Can táo", meaning: "Hanh khô, khô ráo", pos: "Tính từ" },
    { char: "潮湿", pinyin: "cháoshī", hanViet: "Triều thấp", meaning: "Ẩm ướt, nồm ẩm", pos: "Tính từ" },
    { char: "舒服", pinyin: "shūfu", hanViet: "Thư phục", meaning: "Thoải mái, dễ chịu", pos: "Tính từ" },
    { char: "旱季", pinyin: "hànjì", hanViet: "Hãn quý", meaning: "Mùa khô", pos: "Danh từ" },
    { char: "雨季", pinyin: "yǔjì", hanViet: "Vũ quý", meaning: "Mùa mưa", pos: "Danh từ" },
    { char: "介绍", pinyin: "jièshào", hanViet: "Giới thiệu", meaning: "Giới thiệu", pos: "Động từ" },
    { char: "可以", pinyin: "kěyǐ", hanViet: "Khả dĩ", meaning: "Có thể, được", pos: "Trợ động từ" },
    { char: "北部", pinyin: "běibù", hanViet: "Bắc bộ", meaning: "Miền bắc, phía bắc", pos: "Danh từ" },
    { char: "南部", pinyin: "nánbù", hanViet: "Nam bộ", meaning: "Miền nam, phía nam", pos: "Danh từ" },
    { char: "带", pinyin: "dài", hanViet: "Đới", meaning: "Mang theo, đem theo", pos: "Động từ" },
    { char: "雨伞", pinyin: "yǔsǎn", hanViet: "Vũ tản", meaning: "Chiếc ô, cây dù che mưa", pos: "Danh từ" },
    { char: "雨衣", pinyin: "yǔyī", hanViet: "Vũ y", meaning: "Áo mưa", pos: "Danh từ" },
    { char: "天气预报", pinyin: "tiānqì yùbào", hanViet: "Thiên khí dự báo", meaning: "Dự báo thời tiết", pos: "Danh từ" },
    { char: "会", pinyin: "huì", hanViet: "Hội", meaning: "Sẽ (khả năng xảy ra thời tiết)", pos: "Trợ động từ" },
    { char: "白天", pinyin: "báitiān", hanViet: "Bạch thiên", meaning: "Ban ngày", pos: "Danh từ" },
    { char: "夜间", pinyin: "yèjiān", hanViet: "Dạ gian", meaning: "Ban đêm", pos: "Danh từ" },
    { char: "打算", pinyin: "dǎsuàn", hanViet: "Đả toán", meaning: "Dự định, có ý định", pos: "Động từ / Danh từ" },
    { char: "苏州", pinyin: "Sūzhōu", hanViet: "Tô Châu", meaning: "Tô Châu", pos: "Danh từ riêng" },
    { char: "杭州", pinyin: "Hángzhōu", hanViet: "Hàng Châu", meaning: "Hàng Châu", pos: "Danh từ riêng" },
    { char: "桂林", pinyin: "Guìlín", hanViet: "Quế Lâm", meaning: "Quế Lâm", pos: "Danh từ riêng" },
    { char: "云南", pinyin: "Yúnnán", hanViet: "Vân Nam", meaning: "Vân Nam", pos: "Danh từ riêng" },
    { char: "丽江", pinyin: "Lìjiāng", hanViet: "Lệ Giang", meaning: "Lệ Giang", pos: "Danh từ riêng" },
    { char: "凤凰古镇", pinyin: "Fènghuáng Gǔzhèn", hanViet: "Phượng Hoàng cổ trấn", meaning: "Phượng Hoàng Cổ Trấn", pos: "Danh từ riêng" },
    { char: "张家界", pinyin: "Zhāngjiājiè", hanViet: "Trương Gia Giới", meaning: "Trương Gia Giới", pos: "Danh từ riêng" },
    { char: "长城", pinyin: "Chángchéng", hanViet: "Trường Thành", meaning: "Vạn Lý Trường Thành", pos: "Danh từ riêng" }
];


const GIAO_TIEP_2_B12_VOCAB = [
    { char: "房间", pinyin: "fángjiān", hanViet: "Phòng gian", meaning: "Căn phòng, phòng", pos: "Danh từ" },
    { char: "客厅", pinyin: "kètīng", hanViet: "Khách thính", meaning: "Phòng khách", pos: "Danh từ" },
    { char: "卧室", pinyin: "wòshì", hanViet: "Ngọa thất", meaning: "Phòng ngủ", pos: "Danh từ" },
    { char: "厨房", pinyin: "chúfáng", hanViet: "Trù phòng", meaning: "Phòng bếp, nhà bếp", pos: "Danh từ" },
    { char: "卫生间", pinyin: "wèishēngjiān", hanViet: "Vệ sinh gian", meaning: "Phòng vệ sinh, nhà tắm", pos: "Danh từ" },
    { char: "书房", pinyin: "shūfáng", hanViet: "Thư phòng", meaning: "Phòng đọc sách, phòng làm việc", pos: "Danh từ" },
    { char: "沙发", pinyin: "shāfā", hanViet: "Sa phát", meaning: "Ghế sofa", pos: "Danh từ" },
    { char: "茶几", pinyin: "chájī", hanViet: "Trà kỷ", meaning: "Bàn trà", pos: "Danh từ" },
    { char: "窗户", pinyin: "chuānghu", hanViet: "Song hộ", meaning: "Cửa sổ", pos: "Danh từ" },
    { char: "窗帘", pinyin: "chuānglián", hanViet: "Song liêm", meaning: "Rèm cửa sổ", pos: "Danh từ" },
    { char: "窗台", pinyin: "chuāngtái", hanViet: "Song đài", meaning: "Bậu cửa sổ", pos: "Danh từ" },
    { char: "门", pinyin: "mén", hanViet: "Môn", meaning: "Cửa, cánh cửa", pos: "Danh từ" },
    { char: "楼梯", pinyin: "lóutī", hanViet: "Lâu thê", meaning: "Cầu thang", pos: "Danh từ" },
    { char: "化妆台", pinyin: "huàzhuāngtái", hanViet: "Hóa trang đài", meaning: "Bàn trang điểm", pos: "Danh từ" },
    { char: "橱柜", pinyin: "chúguì", hanViet: "Trù quỹ", meaning: "Tủ bếp, tủ chạn", pos: "Danh từ" },
    { char: "电炉", pinyin: "diànlú", hanViet: "Điện lô", meaning: "Bếp điện", pos: "Danh từ" },
    { char: "锅台", pinyin: "guōtái", hanViet: "Oa đài", meaning: "Bàn bếp, bệ bếp", pos: "Danh từ" },
    { char: "洗衣机", pinyin: "xǐyījī", hanViet: "Tẩy y cơ", meaning: "Máy giặt", pos: "Danh từ" },
    { char: "擦", pinyin: "cā", hanViet: "Sát", meaning: "Lau, chùi", pos: "Động từ" },
    { char: "洗", pinyin: "xǐ", hanViet: "Tẩy", meaning: "Rửa, giặt", pos: "Động từ" },
    { char: "熨", pinyin: "yùn", hanViet: "Uất", meaning: "Là, ủi (quần áo)", pos: "Động từ" },
    { char: "打扫", pinyin: "dǎsǎo", hanViet: "Đả tảo", meaning: "Quét dọn, dọn dẹp", pos: "Động từ" },
    { char: "收拾", pinyin: "shōushi", hanViet: "Thu thập", meaning: "Thu dọn, dọn dẹp, sắp xếp", pos: "Động từ" },
    { char: "一下儿", pinyin: "yíxiàr", hanViet: "Nhất hạ nhi", meaning: "Một chút, một lát", pos: "Cụm từ" },
    { char: "这些衣服", pinyin: "zhèxiē yīfu", hanViet: "Giá ta y phục", meaning: "Những bộ quần áo này", pos: "Cụm danh từ" },
    { char: "没问题", pinyin: "méi wèntí", hanViet: "Một vấn đề", meaning: "Không vấn đề gì", pos: "Cụm từ" },
    { char: "深", pinyin: "shēn", hanViet: "Thâm", meaning: "Đậm, thẫm (màu sắc)", pos: "Tính từ" },
    { char: "浅", pinyin: "qiǎn", hanViet: "Thiển", meaning: "Nhạt, sáng (màu sắc)", pos: "Tính từ" },
    { char: "分开", pinyin: "fēnkāi", hanViet: "Phân khai", meaning: "Tách ra, riêng ra", pos: "Động từ" },
    { char: "阿姨", pinyin: "āyí", hanViet: "A di", meaning: "Dì, cô giúp việc", pos: "Danh từ" },
    { char: "另外", pinyin: "lìngwài", hanViet: "Lánh ngoại", meaning: "Ngoài ra, thêm vào đó", pos: "Liên từ / Phó từ" },
    { char: "来", pinyin: "lái", hanViet: "Lai", meaning: "Đến, lại, để (làm gì)", pos: "Động từ" },
    { char: "晚点儿", pinyin: "wǎndiǎnr", hanViet: "Vãn điểm nhi", meaning: "Muộn một chút, lát nữa", pos: "Phó từ / Cụm từ" },
    { char: "把", pinyin: "bǎ", hanViet: "Bả", meaning: "Giới từ câu chữ 把", pos: "Giới từ" },
    { char: "花儿", pinyin: "huār", hanViet: "Hoa nhi", meaning: "Bông hoa, hoa", pos: "Danh từ" },
    { char: "插", pinyin: "chā", hanViet: "Sáp", meaning: "Cắm, cắm vào (hoa)", pos: "Động từ" },
    { char: "花瓶", pinyin: "huāpíng", hanViet: "Hoa bình", meaning: "Bình hoa, lọ hoa", pos: "Danh từ" },
    { char: "杯子", pinyin: "bēizi", hanViet: "Bôi tử", meaning: "Cái cốc, ly", pos: "Danh từ" },
    { char: "挂", pinyin: "guà", hanViet: "Quải", meaning: "Treo, mắc lên", pos: "Động từ" },
    { char: "放", pinyin: "fàng", hanViet: "Phóng", meaning: "Đặt, để", pos: "Động từ" },
    { char: "到", pinyin: "dào", hanViet: "Đáo", meaning: "Đến, tới, vào (vị trí)", pos: "Giới từ / Động từ" },
    { char: "空调", pinyin: "kōngtiáo", hanViet: "Không điều", meaning: "Điều hòa, máy lạnh", pos: "Danh từ" },
    { char: "风扇", pinyin: "fēngshàn", hanViet: "Phong phiến", meaning: "Quạt máy, quạt điện", pos: "Danh từ" },
    { char: "墙", pinyin: "qiáng", hanViet: "Tường", meaning: "Bức tường", pos: "Danh từ" },
    { char: "接", pinyin: "jiē", hanViet: "Tiếp", meaning: "Đón, tiếp đón", pos: "Động từ" },
    { char: "准备", pinyin: "zhǔnbèi", hanViet: "Chuẩn bị", meaning: "Chuẩn bị", pos: "Động từ" },
    { char: "办", pinyin: "bàn", hanViet: "Biện", meaning: "Tổ chức, làm", pos: "Động từ" },
    { char: "生日晚会", pinyin: "shēngrì wǎnhuì", hanViet: "Sinh nhật vãn hội", meaning: "Tiệc sinh nhật, dạ tiệc sinh nhật", pos: "Danh từ" }
];

const VOCAB_GUOJIA = [
    { char: "国家", pinyin: "guójiā", hanViet: "Quốc gia", meaning: "Quốc gia, đất nước", pos: "Danh từ" },
    { char: "越南", pinyin: "Yuènán", hanViet: "Việt Nam", meaning: "Việt Nam", pos: "Danh từ" },
    { char: "中国", pinyin: "Zhōngguó", hanViet: "Trung Quốc", meaning: "Trung Quốc", pos: "Danh từ" },
    { char: "英国", pinyin: "Yīngguó", hanViet: "Anh Quốc", meaning: "Anh, nước Anh", pos: "Danh từ" },
    { char: "美国", pinyin: "Měiguó", hanViet: "Mỹ Quốc", meaning: "Mỹ, nước Mỹ", pos: "Danh từ" },
    { char: "日本", pinyin: "Rìběn", hanViet: "Nhật Bản", meaning: "Nhật Bản", pos: "Danh từ" },
    { char: "德国", pinyin: "Déguó", hanViet: "Đức Quốc", meaning: "Đức, nước Đức", pos: "Danh từ" },
    { char: "法国", pinyin: "Fǎguó", hanViet: "Pháp Quốc", meaning: "Pháp, nước Pháp", pos: "Danh từ" },
    { char: "西班牙", pinyin: "Xībānyá", hanViet: "Tây Ban Nha", meaning: "Tây Ban Nha", pos: "Danh từ" },
    { char: "韩国", pinyin: "Hánguó", hanViet: "Hàn Quốc", meaning: "Hàn Quốc", pos: "Danh từ" },
    { char: "意大利", pinyin: "Yìdàlì", hanViet: "Ý Đại Lợi", meaning: "Ý, nước Ý", pos: "Danh từ" },
    { char: "泰国", pinyin: "Tàiguó", hanViet: "Thái Quốc", meaning: "Thái Lan", pos: "Danh từ" },
    { char: "印度", pinyin: "Yìndù", hanViet: "Ấn Độ", meaning: "Ấn Độ", pos: "Danh từ" },
    { char: "哪", pinyin: "nǎ", hanViet: "Nả", meaning: "Nào (trong nước nào, cái nào)", pos: "Đại từ" },
    { char: "国", pinyin: "guó", hanViet: "Quốc", meaning: "Nước, quốc gia", pos: "Danh từ" },
    { char: "人", pinyin: "rén", hanViet: "Nhân", meaning: "Người", pos: "Danh từ" }
];

const LESSON_DIALOGUES = {
    "Giao tiếp 1": {
        1: [
            { speaker: "Học sinh A", role: "a", zh: "你好！", pinyin: "Nǐ hǎo!", vi: "Chào bạn!" },
            { speaker: "Học sinh B", role: "b", zh: "你好！", pinyin: "Nǐ hǎo!", vi: "Chào bạn!" },
            { speaker: "Học sinh A", role: "a", zh: "请问，您贵姓？", pinyin: "Qǐngwèn, nín guìxìng?", vi: "Xin hỏi, ngài họ gì ạ?" },
            { speaker: "Học sinh B", role: "b", zh: "我姓张。你叫什么名字？", pinyin: "Wǒ xìng Zhāng. Nǐ jiào shénme míngzi?", vi: "Tôi họ Trương. Bạn tên là gì?" },
            { speaker: "Học sinh A", role: "a", zh: "我叫李明。她是谁？", pinyin: "Wǒ jiào Lǐ Míng. Tā  shì shéi?", vi: "Tôi tên là Lý Minh. Cô ấy là ai?" },
            { speaker: "Học sinh B", role: "b", zh: "她是我们的老师。老师好！", pinyin: "Tā  shì wǒmen de lǎoshī. Lǎoshī hǎo!", vi: "Cô ấy là cô giáo của chúng ta. Em chào cô ạ!" },
            { speaker: "Cô giáo", role: "teacher", zh: "你们好！同学们好！", pinyin: "Nǐmen hǎo! Tóngxuémen hǎo!", vi: "Chào các em! Chào các bạn học sinh!" },
            { speaker: "Học sinh", role: "a", zh: "老师再见！", pinyin: "Lǎoshī zàijiàn!", vi: "Chào tạm biệt cô ạ!" },
            { speaker: "Cô giáo", role: "teacher", zh: "再见！", pinyin: "Zàijiàn!", vi: "Tạm biệt!" }
        ],
        2: [
            { speaker: "Học sinh A", role: "a", zh: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", vi: "Bây giờ là mấy giờ?" },
            { speaker: "Học sinh B", role: "b", zh: "现在早上七点半。你几点起床？", pinyin: "Xiànzài zǎoshang qī diǎn bàn. Nǐ jǐ diǎn qǐchuáng?", vi: "Bây giờ là 7 giờ rưỡi sáng. Bạn dậy lúc mấy giờ?" },
            { speaker: "Học sinh A", role: "a", zh: "我每天七点起床，洗脸、刷牙，然后吃早饭。你呢？", pinyin: "Wǒ měitiān qī diǎn qǐchuáng, xǐliǎn, shuāyá, ránhòu chī zǎofàn. Nǐ ne?", vi: "Mỗi ngày mình dậy lúc 7 giờ, rửa mặt, đánh răng, rồi ăn sáng. Còn bạn?" },
            { speaker: "Học sinh B", role: "b", zh: "我八点上班，所以我每天六点半起床。", pinyin: "Wǒ bā diǎn shàngbān, suǒyǐ wǒ měitiān liù diǎn bàn qǐchuáng.", vi: "Mình đi làm lúc 8 giờ, nên mỗi ngày mình thức dậy từ 6 giờ rưỡi." },
            { speaker: "Học sinh A", role: "a", zh: "今天星期几？", pinyin: "Jīntiān xīngqī jǐ?", vi: "Hôm nay là thứ mấy?" },
            { speaker: "Học sinh B", role: "b", zh: "今天是星期六，周末。下午你做什么？", pinyin: "Jīntiān  shì xīngqīliù, zhōumò. Xiàwǔ nǐ zuò shénme?", vi: "Hôm nay là thứ bảy, cuối tuần. Chiều nay bạn làm gì?" },
            { speaker: "Học sinh A", role: "a", zh: "下午我去运动，晚上跟朋友见面。明天是我的生日！", pinyin: "Xiàwǔ wǒ qù yùndòng, wǎnshang gēn péngyou jiànmiàn. Míngtiān  shì wǒ de shēngrì!", vi: "Chiều nay mình đi tập thể thao, tối gặp gỡ bạn bè. Ngày mai là sinh nhật của mình!" },
            { speaker: "Học sinh B", role: "b", zh: "真的吗？祝你生日快乐！", pinyin: "Zhēnde ma? Zhù nǐ shēngrì kuàilè!", vi: "Thật sao? Chúc bạn sinh nhật vui vẻ nhé!" }
        ],
        3: [
            { speaker: "Học sinh A", role: "a", zh: "你好！请问这件毛衣怎么卖？", pinyin: "Nǐ hǎo! Qǐngwèn zhè jiàn máoyī zěnme mài?", vi: "Xin chào! Xin hỏi chiếc áo len này bán thế nào?" },
            { speaker: "Học sinh B", role: "b", zh: "这件毛衣三百块钱。你喜欢什么颜色？", pinyin: "Zhè jiàn máoyī sānbǎi kuài qián. Nǐ xǐhuan shénme yánsè?", vi: "Chiếc áo len này ba trăm tệ. Bạn thích màu gì?" },
            { speaker: "Học sinh A", role: "a", zh: "我想买红色的。有没有白色的？", pinyin: "Wǒ xiǎng mǎi hóngsè de. Yǒu méiyǒu báisè de?", vi: "Tôi muốn mua màu đỏ. Có màu trắng không?" },
            { speaker: "Học sinh B", role: "b", zh: "有，白色的两百五十块。还有蓝色、黑色和粉红色的。", pinyin: "Yǒu, báisè de liǎngbǎi wǔshí kuài. Hái yǒu lánsè, hēisè hé fěnhóngsè de.", vi: "Có, màu trắng hai trăm năm mươi tệ. Còn có màu xanh dương, đen và hồng nữa." },
            { speaker: "Học sinh A", role: "a", zh: "那条牛仔裤多少钱？", pinyin: "Nà tiáo niúzǎikù duōshao qián?", vi: "Chiếc quần jeans kia bao nhiêu tiền?" },
            { speaker: "Học sinh B", role: "b", zh: "那条牛仔裤一百八十块。", pinyin: "Nà tiáo niúzǎikù yìbǎi bāshí kuài.", vi: "Chiếc quần jeans đó một trăm tám mươi tệ." },
            { speaker: "Học sinh A", role: "a", zh: "我要买这件白色毛衣和那条牛仔裤。", pinyin: "Wǒ yào mǎi zhè jiàn báisè máoyī hé nà tiáo niúzǎikù.", vi: "Tôi muốn mua chiếc áo len trắng và chiếc quần jeans đó." },
            { speaker: "Học sinh B", role: "b", zh: "好的，一共四百三十块钱。", pinyin: "Hǎo de, yīgòng sìbǎi sānshí kuài qián.", vi: "Vâng, tổng cộng bốn trăm ba mươi tệ." }
        ],
        4: [
            { speaker: "Phục vụ", role: "a", zh: "你好！这是菜单，你们想吃什么？", pinyin: "Nǐ hǎo! Zhè shì càidān, nǐmen xiǎng chī shénme?", vi: "Xin chào! Đây là thực đơn, các bạn muốn ăn gì?" },
            { speaker: "Học sinh A", role: "b", zh: "我要一个宫保鸡丁，一个家常豆腐，还要两碗米饭。", pinyin: "Wǒ yào yí gè gōngbǎojīdīng, yí gè jiācháng dòufu, hái yào liǎng wǎn mǐfàn.", vi: "Tôi muốn một phần gà cung bảo, một phần đậu phụ gia đình, và hai bát cơm." },
            { speaker: "Phục vụ", role: "a", zh: "好的。你们喝点儿什么？", pinyin: "Hǎo de. Nǐmen hē diǎnr shénme?", vi: "Vâng. Các bạn uống chút gì không?" },
            { speaker: "Học sinh B", role: "b", zh: "我要一杯橙汁，他要一瓶啤酒。能快一点儿上菜吗？", pinyin: "Wǒ yào yì bēi chéngzhī, tā yào yì píng píjiǔ. Néng kuài yìdiǎnr shàng cài ma?", vi: "Tôi muốn một cốc nước cam, anh ấy muốn một chai bia. Có thể lên món nhanh một chút không?" },
            { speaker: "Phục vụ", role: "a", zh: "好的，请稍等，很快就上菜。", pinyin: "Hǎo de, qǐng shāoděng, hěn kuài jiù shàng cài.", vi: "Vâng, xin chờ một lát, món ăn sẽ lên rất nhanh." },
            { speaker: "Học sinh A", role: "b", zh: "服务员，买单！打包这两个菜。", pinyin: "Fúwùyuán, mǎidān! Dǎbāo zhè liǎng gè cài.", vi: "Phục vụ ơi, thanh toán! Đóng gói mang về hai món này." },
            { speaker: "Phục vụ", role: "a", zh: "一共两百块钱。请问怎么付？", pinyin: "Yígòng liǎngbǎi kuài qián. Qǐngwèn zěnme fù?", vi: "Tổng cộng hai trăm tệ. Xin hỏi thanh toán thế nào?" },
            { speaker: "Học sinh B", role: "b", zh: "微信扫码付，可以吗？", pinyin: "Wēixìn sǎo mǎ fù, kěyǐ ma?", vi: "Thanh toán quét mã WeChat được không?" },
            { speaker: "Phục vụ", role: "a", zh: "当然可以，请扫这里。", pinyin: "Dāngrán kěyǐ, qǐng sǎo zhèlǐ.", vi: "Đương nhiên có thể, xin mời quét ở đây." }
        ],
        5: [
            { speaker: "Học sinh A", role: "a", zh: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", vi: "Nhà bạn có mấy người?" },
            { speaker: "Học sinh B", role: "b", zh: "我家有五口人：爸爸、妈妈、哥哥、妹妹和我。你呢？", pinyin: "Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, gēge, mèimei hé wǒ. Nǐ ne?", vi: "Nhà tôi có 5 người: bố, mẹ, anh trai, em gái và tôi. Còn bạn?" },
            { speaker: "Học sinh A", role: "a", zh: "我没有哥哥和妹妹，我有一个弟弟。", pinyin: "Wǒ méiyǒu gēge hé mèimei, wǒ yǒu yí gè dìdi.", vi: "Tôi không có anh trai và em gái, tôi có một em trai." },
            { speaker: "Học sinh B", role: "b", zh: "你哥哥在哪儿工作？", pinyin: "Nǐ gēge zài nǎr gōngzuò?", vi: "Anh trai bạn làm việc ở đâu?" },
            { speaker: "Học sinh A", role: "a", zh: "他在学校工作，他是老师。", pinyin: "Tā zài xuéxiào gōngzuò, tā shì lǎoshī.", vi: "Anh ấy làm việc ở trường học, anh ấy là giáo viên." },
            { speaker: "Học sinh B", role: "b", zh: "你有爷爷、奶奶吗？", pinyin: "Nǐ yǒu yéye, nǎinai ma?", vi: "Bạn có ông bà nội không?" },
            { speaker: "Học sinh A", role: "a", zh: "有，我也有外公和外婆。", pinyin: "Yǒu, wǒ yě yǒu wàigōng hé wàipó.", vi: "Có, tôi cũng có ông ngoại và bà ngoại." }
        ],
        6: [
            { speaker: "Học sinh A", role: "a", zh: "喂，请问是王老师吗？", pinyin: "Wèi, qǐngwèn shì Wáng lǎoshī ma?", vi: "Alo, xin hỏi có phải là thầy Vương không ạ?" },
            { speaker: "Học sinh B", role: "b", zh: "对不起，你打错电话了。我这里没有姓王的。", pinyin: "Duìbuqǐ, nǐ dǎcuò diànhuà le. Wǒ zhèlǐ méiyǒu xìng Wáng de.", vi: "Xin lỗi, bạn gọi nhầm số rồi. Ở đây tôi không có ai họ Vương." },
            { speaker: "Học sinh A", role: "a", zh: "啊，对不起！我想找张老师，这是她的电话吗？", pinyin: "À, duìbuqǐ! Wǒ xiǎng zhǎo Zhāng lǎoshī, zhè shì tā de diànhuà ma?", vi: "A, xin lỗi! Tôi muốn tìm cô giáo Trương, đây có phải là điện thoại của cô ấy không?" },
            { speaker: "Học sinh B", role: "b", zh: "是的，我是她弟弟。请稍等，我看看她能不能接……对不起，她在忙，现在不能接电话。请问您是哪位？", pinyin: "Shì de, wǒ shì tā dìdi. Qǐng shāoděng, wǒ kànkan tā néng bu néng jiē... Duìbuqǐ, tā zài máng, xiànzài bùnéng jiē diànhuà. Qǐngwèn nín shì nǎ wèi?", vi: "Đúng vậy, tôi là em trai cô ấy. Xin chờ một lát, tôi xem cô ấy có nghe được không... Xin lỗi, cô ấy đang bận, bây giờ không thể nghe điện thoại. Xin hỏi ngài là vị nào ạ?" },
            { speaker: "Học sinh A", role: "a", zh: "我是她的学生李明。请问她什么时候能给我回电话？", pinyin: "Wǒ shì tā de xuéshēng Lǐ Míng. Qǐngwèn tā shénme shíhou néng gěi wǒ huí diànhuà?", vi: "Tôi là học sinh của cô ấy, Lý Minh. Xin hỏi khi nào cô ấy có thể gọi lại cho tôi?" },
            { speaker: "Học sinh B", role: "b", zh: "她今天很忙，在商店、咖啡店和奶茶店买东西，下午还要去飞机场和公园。要不你给她发短信或者发邮件吧？", pinyin: "Tā jīntiān hěn máng, zài shāngdiàn, kāfēidiàn hé nǎichádiàn mǎi dōngxi, xiàwǔ hái yào qù fēijīchǎng hé gōngyuán. Yàobù nǐ gěi tā fā duǎnxìn huòzhě fā yóujiàn ba?", vi: "Hôm nay cô ấy rất bận, đang mua đồ ở cửa hàng, quán cà phê và quán trà sữa, chiều còn phải đi sân bay và công viên. Hay là bạn gửi tin nhắn hoặc gửi email cho cô ấy đi?" },
            { speaker: "Học sinh A", role: "a", zh: "好的，谢谢。我可以加她的微信，扫码发消息吗？", pinyin: "Hǎo de, xièxie. Wǒ kěyǐ jiā tā de Wēixìn, sǎo mǎ fā xiāoxi ma?", vi: "Dạ vâng, cảm ơn anh. Tôi có thể kết bạn WeChat của cô ấy, quét mã gửi tin nhắn không?" },
            { speaker: "Học sinh B", role: "b", zh: "当然可以，扫微信最方便。", pinyin: "Dāngrán kěyǐ, sǎo Wēixìn zuì fāngbiàn.", vi: "Đương nhiên có thể, quét WeChat là tiện nhất." }
        ]
    },
    "Giao tiếp 2": {
        7: [
            { speaker: "Học sinh A", role: "a", zh: "请问，去机场怎么走？", pinyin: "Qǐngwèn, qù jīchǎng zěnme zǒu?", vi: "Xin hỏi, đi đến sân bay đi như thế nào?" },
            { speaker: "Học sinh B", role: "b", zh: "从这里一直走，到红绿灯往左拐，再走两百米就到了。", pinyin: "Cóng zhèlǐ yìzhí zǒu, dào hónglǜdēng wǎng zuǒ guǎi, zài zǒu liǎngbǎi mǐ jiù dào le.", vi: "Từ đây đi thẳng, đến đèn giao thông rẽ trái, đi thêm 200m nữa là đến." },
            { speaker: "Học sinh A", role: "a", zh: "离这里多远？走路要多长时间？", pinyin: "Lí zhèlǐ duō yuǎn? Zǒulù yào duō cháng shíjiān?", vi: "Cách đây bao xa? Đi bộ mất bao lâu?" },
            { speaker: "Học sinh B", role: "b", zh: "不远，很近，走路十分钟左右。", pinyin: "Bù yuǎn, hěn jìn, zǒulù shí fēnzhōng zuǒyòu.", vi: "Không xa, rất gần, đi bộ khoảng 10 phút." },
            { speaker: "Học sinh A", role: "a", zh: "如果坐出租车或者打网约车呢？", pinyin: "Rúguǒ zuò chūzūchē huòzhě dǎ wǎngyuēchē ne?", vi: "Nếu đi taxi hoặc đặt xe công nghệ thì sao?" },
            { speaker: "Học sinh B", role: "b", zh: "开车只要三分钟，但是现在是下班时间，可能会堵车。", pinyin: "Kāichē zhǐ yào sān fēnzhōng, dànshì xiànzài shì xiàbān shíjiān, kěnéng huì dǔchē.", vi: "Lái xe chỉ mất 3 phút, nhưng bây giờ là giờ tan tầm, có thể sẽ tắc đường." },
            { speaker: "Học sinh A", role: "a", zh: "我怕堵车，而且我晕车，那我还是骑自行车吧！", pinyin: "Wǒ pà dǔchē, érqiě wǒ yùnchē, nà wǒ hái shì qí zìxíngchē ba!", vi: "Tôi sợ tắc đường, hơn nữa tôi lại say xe, vậy tôi thà đi xe đạp thôi!" },
            { speaker: "Học sinh B", role: "b", zh: "没问题！", pinyin: "Méi wèntí!", vi: "Không vấn đề gì!" }
        ],
        8: [
            { speaker: "Học sinh A", role: "a", zh: "听说你搬新家了，你的新家在哪儿？", pinyin: "Tīngshuō nǐ bān xīn jiā le, nǐ de xīn jiā zài nǎr?", vi: "Nghe nói bạn dọn sang nhà mới rồi, nhà mới của bạn ở đâu thế?" },
            { speaker: "Học sinh B", role: "b", zh: "我的新家在第一郡第三坊阮惠路，是一套新公寓。", pinyin: "Wǒ de xīn jiā zài dì-yī jùn dì-sān fāng Ruǎnhuì lù, shì yí tào xīn gōngyù.", vi: "Nhà mới của tớ ở đường Nguyễn Huệ, Phường 3, Quận 1, là một căn hộ chung cư mới." },
            { speaker: "Học sinh A", role: "a", zh: "那儿的环境怎么样？", pinyin: "Nàr de huánjìng zěnmeyàng?", vi: "Môi trường ở đó thế nào?" },
            { speaker: "Học sinh B", role: "b", zh: "原来住的房子太小了，新公寓很大、很安静，也非常安全。", pinyin: "Yuánlái zhù de fángzi tài xiǎo le, xīn gōngyù hěn dà, hěn ānjìng, yě fēicháng ānquán.", vi: "Căn nhà cũ tớ ở bé quá, chung cư mới rất rộng rãi, yên tĩnh và cũng vô cùng an toàn." },
            { speaker: "Học sinh A", role: "a", zh: "附近生活方便吗？", pinyin: "Fùjìn shēnghuó fāngbiàn ma?", vi: "Xung quanh sinh hoạt có thuận tiện không?" },
            { speaker: "Học sinh B", role: "b", zh: "非常方便！公寓对面有一个汉语中心，附近还有车站、图书馆和体育馆。", pinyin: "Fēicháng fāngbiàn! Gōngyù duìmiàn yǒu yí gè Hànyǔ zhōngxīn, fùjìn hái yǒu chēzhàn, túshūguǎn hé tǐyùguǎn.", vi: "Rất thuận tiện! Đối diện chung cư có một trung tâm tiếng Trung, gần đó còn có bến xe, thư viện và nhà thi đấu thể thao." },
            { speaker: "Học sinh A", role: "a", zh: "太好了！你在找什么呢？", pinyin: "Tài hǎo le! Nǐ zài zhǎo shénme ne?", vi: "Tuyệt vời quá! Bạn đang tìm gì thế?" },
            { speaker: "Học sinh B", role: "b", zh: "我在找我的钥匙。你看见了吗？", pinyin: "Wǒ zài zhǎo wǒ de yàoshi. Nǐ kànjiàn le ma?", vi: "Tớ đang tìm chìa khóa của tớ. Bạn có nhìn thấy không?" },
            { speaker: "Học sinh A", role: "a", zh: "你看，钥匙在一把椅子上边，桌子上还有一份报纸和两本杂志呢！", pinyin: "Nǐ kàn, yàoshi zài yì bǎ yǐzi shàngbian, zhuōzi shang hái yǒu yí fèn bàozhǐ hé liǎng běn zázhì ne!", vi: "Bạn xem kìa, chìa khóa ở trên một chiếc ghế, trên bàn còn có 1 tờ báo và 2 cuốn tạp chí nữa đấy!" },
            { speaker: "Học sinh B", role: "b", zh: "看到了！谢谢你！欢迎你来我的新家玩！", pinyin: "Kàndào le! Xièxie nǐ! Huānyíng nǐ lái wǒ de xīn jiā wán!", vi: "Tớ thấy rồi! Cảm ơn bạn nhé! Hoan nghênh bạn ghé thăm nhà mới của tớ chơi!" }
        ],
        9: [
            { speaker: "Học sinh A", role: "a", zh: "你怎么了？脸色看起来不太好。", pinyin: "Nǐ zěnme le? Liǎnsè kàn qǐlái bú tài hǎo.", vi: "Bạn làm sao thế? Sắc mặt trông không được tốt lắm." },
            { speaker: "Học sinh B", role: "b", zh: "我今天身体很不舒服，头疼、嗓子疼，还有一点儿发烧。", pinyin: "Wǒ jīntiān shēntǐ hěn bù shūfu, tóu téng, sǎngzi téng, hái yǒu yìdiǎnr fāshāo.", vi: "Hôm nay trong người tớ rất khó chịu, đau đầu, đau họng, lại còn hơi sốt nữa." },
            { speaker: "Học sinh A", role: "a", zh: "你量体温了吗？发烧多少度？", pinyin: "Nǐ liáng tǐwēn le ma? Fāshāo duōshao dù?", vi: "Bạn đã đo nhiệt độ chưa? Sốt bao nhiêu độ?" },
            { speaker: "Học sinh B", role: "b", zh: "我量过了，三十八度五。昨晚还咳嗽、胃疼，吐了一次。", pinyin: "Wǒ liáng guo le, sānshíbā dù wǔ. Zuówǎn hái késou, wèi téng, tù le yí cì.", vi: "Tớ đo rồi, 38 độ 5. Tối qua còn ho, đau dạ dày và bị nôn một lần." },
            { speaker: "Học sinh A", role: "a", zh: "哎呀，可能感冒或者食物中毒了！我们一起去医院看病吧！", pinyin: "Āiyā, kěnéng gǎnmào huòzhě shíwù zhòngdú le! Wǒmen yìqǐ qù yīyuàn kàn bìng ba!", vi: "Ái chà, có thể bạn bị cảm cúm hoặc ngộ độc thực phẩm rồi! Chúng mình cùng đi bệnh viện khám đi!" },
            { speaker: "Bác sĩ", role: "teacher", zh: "张开嘴，伸出舌头让我看一下。不要担心，只是普通的重感冒。", pinyin: "Zhāng kāi zuǐ, shēn chū shétou ràng wǒ kàn yíxià. Bú yào dānxīn, zhǐ shì pǔtōng de zhòng gǎnmào.", vi: "Há miệng ra, thè lưỡi ra cho tôi xem nào. Đừng lo lắng, chỉ là bị cảm cúm nặng thông thường thôi." },
            { speaker: "Học sinh B", role: "b", zh: "医生，我需要打针还是吃药？", pinyin: "Yīshēng, wǒ xūyào dǎzhēn háishì chī yào?", vi: "Bác sĩ ơi, cháu cần tiêm thuốc hay uống thuốc ạ?" },
            { speaker: "Bác sĩ", role: "teacher", zh: "不用打针。我给你开一些西药，每天吃三次，每次两片，饭后吃。", pinyin: "Bú yòng dǎzhēn. Wǒ gěi nǐ kāi yìxiē xīyào, měitiān chī sān cì, měi cì liǎng piàn, fàn hòu chī.", vi: "Không cần tiêm đâu. Tôi kê cho cháu một ít thuốc tây, mỗi ngày uống 3 lần, mỗi lần 2 viên, uống sau bữa ăn nhé." },
            { speaker: "Bác sĩ", role: "teacher", zh: "回去要多喝水，多休息，千万别熬夜。三天后记得来复诊。", pinyin: "Huíqù yào duō hē shuǐ, duō xiūxi, qiānwàn bié áoyè. Sān tiān hòu jìde lái fùzhěn.", vi: "Về nhà nhớ uống nhiều nước, nghỉ ngơi nhiều, tuyệt đối đừng thức khuya nhé. 3 ngày sau nhớ quay lại tái khám." },
            { speaker: "Học sinh B", role: "b", zh: "好的，谢谢医生！我马上告诉老板，今天请病假休息。", pinyin: "Hǎo de, xièxie yīshēng! Wǒ mǎshàng gàosu lǎobǎn, jīntiān qǐng bìngjià xiūxi.", vi: "Dạ vâng, cảm ơn bác sĩ! Cháu sẽ báo ngay cho sếp để xin nghỉ ốm hôm nay ạ." }
        ],
        10: [
            { speaker: "Học sinh A", role: "a", zh: "大卫，我的手提电脑坏了，不能开机，你会修电脑吗？", pinyin: "Dàwèi, wǒ de shǒutí diànnǎo huài le, bù néng kāijī, nǐ huì xiū diànnǎo ma?", vi: "David ơi, máy tính xách tay của tớ bị hỏng rồi, không bật lên được, bạn biết sửa máy tính không?" },
            { speaker: "Học sinh B", role: "b", zh: "我来看看。可能是中了电脑病毒，我帮你杀毒修一下吧！", pinyin: "Wǒ lái kànkan. Kěnéng shì zhòng le diànnǎo bìngdú, wǒ bāng nǐ shādú xiū yíxià ba!", vi: "Để tớ xem nào. Có thể là dính virus máy tính rồi, tớ giúp bạn diệt virus và sửa một chút nhé!" },
            { speaker: "Học sinh A", role: "a", zh: "太感谢你了！你真厉害，电脑技术这么好！", pinyin: "Tài gǎnxiè nǐ le! Nǐ zhēn lìhai, diànnǎo jìshù zhème hǎo!", vi: "Cảm ơn bạn nhiều lắm! Bạn siêu thật đấy, kỹ thuật máy tính giỏi quá!" },
            { speaker: "Học sinh B", role: "b", zh: "还可以吧。以前我在加拿大的一所语言学校学过一点儿。", pinyin: "Hái kěyǐ ba. Yǐqián wǒ zài Jiānádà de yì suǒ yǔyán xuéxiào xué guo yìdiǎnr.", vi: "Cũng tàm tạm thôi. Trước đây tớ từng học một chút ở một trường ngôn ngữ bên Canada." },
            { speaker: "Học sinh A", role: "a", zh: "听说你是混血，你还会说哪些语言？", pinyin: "Tīngshuō nǐ shì hùnxuè, nǐ hái huì shuō nǎxiē yǔyán?", vi: "Nghe nói bạn là con lai, bạn còn biết nói những thứ tiếng nào nữa?" },
            { speaker: "Học sinh B", role: "b", zh: "我会说英语、法语和汉语，韩语和泰语只会一点儿，说得不太好。", pinyin: "Wǒ huì shuō Yīngyǔ, Fǎyǔ hé Hànyǔ, Hányǔ hé Tàiyǔ zhǐ huì yìdiǎnr, shuō de bú tài hǎo.", vi: "Tớ biết nói tiếng Anh, tiếng Pháp và tiếng Trung; tiếng Hàn và tiếng Thái chỉ biết một chút, nói không tốt lắm." },
            { speaker: "Học sinh A", role: "a", zh: "哇，你说汉语说得棒极了！平时有空儿的时候你喜欢做什么运动？", pinyin: "Wā, nǐ shuō Hànyǔ shuō de bàng jíle! Píngshí yǒu kòngr de shíhou nǐ xǐhuan zuò shénme yùndòng?", vi: "Woa, bạn nói tiếng Trung đỉnh cực kỳ luôn! Bình thường lúc rảnh rỗi bạn thích chơi môn thể thao nào?" },
            { speaker: "Học sinh B", role: "b", zh: "我常常去健身房健身，有时候跟朋友打羽毛球或者去游泳馆游泳。", pinyin: "Wǒ chángcháng qù jiànshēnfáng jiànshēn, yǒu shíhou gēn péngyou dǎ yǔmáoqiú huòzhě qù yóuyǒngguǎn yóuyǒng.", vi: "Tớ thường đến phòng gym tập thể hình, thỉnh thoảng cùng bạn bè đánh cầu lông hoặc đến bể bơi để bơi lội." },
            { speaker: "Học sinh A", role: "a", zh: "我也很喜欢打羽毛球！这个周末你有空儿吗？我们一起去打羽毛球吧！", pinyin: "Wǒ yě hěn xǐhuan dǎ yǔmáoqiú! Zhè gè zhōumò nǐ yǒu kòngr ma? Wǒmen yìqǐ qù dǎ yǔmáoqiú ba!", vi: "Tớ cũng rất thích đánh cầu lông! Cuối tuần này bạn có rảnh không? Chúng mình cùng đi đánh cầu lông nhé!" },
            { speaker: "Học sinh B", role: "b", zh: "好啊！电脑修好了，打完球以后我请你喝奶茶！", pinyin: "Hǎo a! Diànnǎo xiū hǎo le, dǎ wán qiú yǐhòu wǒ qǐng nǐ hē nǎichá!", vi: "Được thôi! Máy tính sửa xong rồi này, chơi cầu lông xong tớ mời bạn uống trà sữa nhé!" }
        ],
        11: [
            { speaker: "Học sinh A", role: "a", zh: "今天外面天气怎么样？我看天气预报说会下雪。", pinyin: "Jīntiān wàimiàn tiānqì zěnmeyàng? Wǒ kàn tiānqì yùbào shuō huì xiàxuě.", vi: "Hôm nay thời tiết bên ngoài thế nào? Tớ xem dự báo thời tiết nói là trời sẽ có tuyết rơi." },
            { speaker: "Học sinh B", role: "b", zh: "外面在刮大风，下大雪，太冷了！现在的气温是零下五度左右。", pinyin: "Wàimiàn zài guā dàfēng, xià dàxuě, tài lěng le! Xiànzài de qìwēn shì língxià wǔ dù zuǒyòu.", vi: "Bên ngoài đang có gió to, tuyết rơi dày đặc, lạnh quá! Nhiệt độ bây giờ khoảng âm 5 độ." },
            { speaker: "Học sinh A", role: "a", zh: "今天最高气温和最低气温是多少度？", pinyin: "Jīntiān zuìgāo qìwēn hé zuìdī qìwēn shì duōshao dù?", vi: "Nhiệt độ cao nhất và thấp nhất hôm nay là bao nhiêu độ?" },
            { speaker: "Học sinh B", role: "b", zh: "白天最高气温零度，夜间最低气温零下十度。比昨天冷多了！", pinyin: "Báitiān zuìgāo qìwēn líng dù, yèjiān zuìdī qìwēn língxià shí dù. Bǐ zuótiān lěng duō le!", vi: "Ban ngày cao nhất 0 độ, ban đêm thấp nhất âm 10 độ. Lạnh hơn hôm qua nhiều lắm!" },
            { speaker: "Học sinh A", role: "a", zh: "那我们出门一定要穿羽绒服，记得带雨伞或者穿雨衣。", pinyin: "Nà wǒmen chūmén yídìng yào chuān yǔróngfú, jìde dài yǔsǎn huòzhě chuān yǔyī.", vi: "Thế thì chúng mình ra ngoài nhất định phải mặc áo phao, nhớ đem theo dù hoặc mặc áo mưa nhé." },
            { speaker: "Học sinh B", role: "b", zh: "你打算冬天去哪儿旅行？我打算去哈尔滨看冰灯。", pinyin: "Nǐ dǎsuàn dōngtiān qù nǎr lǚxíng? Wǒ dǎsuàn qù Hā'ěrbīn kàn bīngdēng.", vi: "Mùa đông này bạn dự định đi du lịch ở đâu? Tớ định đi Cáp Nhĩ Tân ngắm đèn lồng băng tuyết." },
            { speaker: "Học sinh A", role: "a", zh: "哈尔滨比这里更冷吧！可是听说那里的冰灯好看极了，风景非常美！", pinyin: "Hā'ěrbīn bǐ zhèlǐ gèng lěng ba! Kěshì tīngshuō nàlǐ de bīngdēng hǎokàn jíle, fēngjǐng fēicháng měi!", vi: "Cáp Nhĩ Tân còn lạnh hơn ở đây nữa đấy! Nhưng mà nghe nói đèn băng ở đó đẹp tuyệt trần, phong cảnh cực kỳ mê hồn!" },
            { speaker: "Học sinh B", role: "b", zh: "春天和秋天去南方旅行很舒服，比如苏州、杭州或者云南丽江。", pinyin: "Chūntiān hé qiūtiān qù nánfāng lǚxíng hěn shūfu, bǐrú Sūzhōu, Hángzhōu huòzhě Yúnnán Lìjiāng.", vi: "Mùa xuân và mùa thu đi du lịch phía Nam thì rất dễ chịu, ví dụ như Tô Châu, Hàng Châu hay Lệ Giang - Vân Nam." },
            { speaker: "Học sinh A", role: "a", zh: "对呀，那儿的天气暖和又凉快，没有北方这么干燥。", pinyin: "Duì ya, nàr de tiānqì nuǎnhuo yòu liángkuai, méiyǒu běifāng zhème gānzào.", vi: "Đúng thế, thời tiết ở đó vừa ấm áp vừa mát mẻ, không bị hanh khô như miền Bắc." },
            { speaker: "Học sinh B", role: "b", zh: "等天气晴了，我们一起做旅行攻略吧！", pinyin: "Děng tiānqì qíng le, wǒmen yìqǐ zuò lǚxíng gōnglüè ba!", vi: "Đợi khi nào trời nắng ráo, chúng mình cùng nhau lên lịch trình du lịch nhé!" }
        ],
        12: [
            { speaker: "Học sinh A", role: "a", zh: "今天晚上我们要办生日晚会，大家一起来打扫房间吧！", pinyin: "Jīntiān wǎnshang wǒmen yào bàn shēngrì wǎnhuì, dàjiā yìqǐ lái dǎsǎo fángjiān ba!", vi: "Tối nay chúng mình sẽ tổ chức tiệc sinh nhật, mọi người cùng nhau dọn dẹp phòng ốc nhé!" },
            { speaker: "Học sinh B", role: "b", zh: "好的！我先把客厅和书房收拾一下，请把桌子和茶几擦一下。", pinyin: "Hǎo de! Wǒ xiān bǎ kètīng hé shūfáng shōushi yíxià, qǐng bǎ zhuōzi hé chájī cā yíxià.", vi: "Được thôi! Tớ thu dọn phòng khách và phòng làm việc trước, cậu lau bàn và bàn trà giúp tớ một chút nhé." },
            { speaker: "Học sinh A", role: "a", zh: "没问题！窗台和窗户也很脏，我也把窗帘挂好、窗台擦干净。", pinyin: "Méi wèntí! Chuāngtái hé chuānghu yě hěn zāng, wǒ yě bǎ chuānglián guà hǎo, chuāngtái cā gānjìng.", vi: "Không vấn đề gì! Bậu cửa sổ và cửa sổ cũng khá bẩn, tớ cũng sẽ treo rèm đàng hoàng và lau sạch bậu cửa sổ." },
            { speaker: "Học sinh B", role: "b", zh: "阿姨，请把这些衣服放进洗衣机里洗一下，深色和浅色的衣服要分开洗。", pinyin: "Āyí, qǐng bǎ zhèxiē yīfu fàng jìn xǐyījī lǐ xǐ yíxià, shēnsè hé qiǎnsè de yīfu yào fēnkāi xǐ.", vi: "Dì ơi, nhờ dì bỏ đống quần áo này vào máy giặt giặt giúp cháu nhé, quần áo màu sẫm và màu sáng nhớ giặt riêng ạ." },
            { speaker: "Học sinh A", role: "a", zh: "另外，厨房的电炉和橱柜也需要收拾一下。我来洗水果和杯子。", pinyin: "Lìngwài, chúfáng de diànlú hé chúguì yě xūyào shōushi yíxià. Wǒ lái xǐ shuǐguǒ hé bēizi.", vi: "Ngoài ra, bếp điện và tủ kệ trong bếp cũng cần thu dọn một chút. Tớ sẽ rửa hoa quả và cốc chén." },
            { speaker: "Học sinh B", role: "b", zh: "你看，这束鲜花真漂亮！请把花儿插到花瓶里，放在客厅的茶几上吧。", pinyin: "Nǐ kàn, zhè shù xiānhuā zhēn piàoliang! Qǐng bǎ huār chā dào huāpíng lǐ, fàng zài kètīng de chájī shang ba.", vi: "Cậu xem kìa, bó hoa tươi này đẹp quá! Cậu cắm hoa vào bình hoa rồi đặt lên bàn trà trong phòng khách nhé." },
            { speaker: "Học sinh A", role: "a", zh: "太美了！天气有点儿热，把客厅的空调和风扇打开吧。", pinyin: "Tài měi le! Tiānqì yǒudiǎnr rè, bǎ kètīng de kōngtiáo hé fēngshàn dǎkāi ba.", vi: "Đẹp mê ly luôn! Trời hơi nóng, cậu bật điều hòa và quạt máy ở phòng khách lên nhé." },
            { speaker: "Học sinh B", role: "b", zh: "好，我已经把温度调到二十五度了。墙上还要挂气球吗？", pinyin: "Hǎo, wǒ yǐjīng bǎ wēndù tiáo dào èrshíwǔ dù le. Qiáng shang hái yào guà qìqiú ma?", vi: "Được, tớ đã chỉnh nhiệt độ về 25 độ rồi. Trên tường còn treo bóng bay nữa không?" },
            { speaker: "Học sinh A", role: "a", zh: "要的，我们把彩色气球挂到墙上。晚点儿朋友们就会来了。", pinyin: "Yào de, wǒmen bǎ cǎisè qìqiú guà dào qiáng shang. Wǎndiǎnr péngyoumen jiù huì lái le.", vi: "Có chứ, chúng mình treo bóng bay sắc màu lên tường nhé. Lát nữa muộn một chút là các bạn sẽ tới rồi đấy." },
            { speaker: "Học sinh B", role: "b", zh: "太棒了！一切都准备好了，六点半我去楼下接大家！", pinyin: "Tài bàng le! Yíqiè dōu zhǔnbèi hǎo le, liù diǎn bàn wǒ qù lóuxià jiē dàjiā!", vi: "Tuyệt vời ông mặt trời! Mọi thứ đã chuẩn bị xong xuôi hết rồi, 6 rưỡi tớ xuống tầng đón mọi người nhé!" }
        ]
    },
    "Từ vựng theo chủ đề": {
        1: [
            { speaker: "Học sinh A", role: "a", zh: "你好！请问你是哪国人？", pinyin: "Nǐ hǎo! Qǐngwèn nǐ shì nǎ guó rén?", vi: "Xin chào! Xin hỏi bạn là người nước nào?" },
            { speaker: "Học sinh B", role: "b", zh: "你好！我是越南人。定呢？你是美国人吗？", pinyin: "Nǐ hǎo! Wǒ  shì Yuènán rén. Nǐ ne? Nǐ  shì Měiguó rén ma?", vi: "Xin chào! Mình là người Việt Nam. Còn bạn? Bạn là người Mỹ phải không?" },
            { speaker: "Học sinh A", role: "a", zh: "不，我不是美国人，我是中国人。你去过中国吗？", pinyin: "Bù, wǒ bú  shì Měiguó rén, wǒ  shì Zhōngguó rén. Nǐ qù guo Zhōngguó ma?", vi: "Không, mình không phải người Mỹ, mình là người Trung Quốc. Bạn đã từng đi Trung Quốc chưa?" },
            { speaker: "Học sinh B", role: "b", zh: "我没去过中国。我想去中国和日本旅游。你呢？", pinyin: "Wǒ méi qù guo Zhōngguó. Wǒ xiǎng qù Zhōngguó hé Rìběn lǚyóu. Nǐ ne?", vi: "Mình chưa từng đi Trung Quốc. Mình muốn đi du lịch Trung Quốc và Nhật Bản. Còn bạn?" },
            { speaker: "Học sinh A", role: "a", zh: "我去过英国和法国。明年我想去越南！", pinyin: "Wǒ qù guo Yīngguó hé Fǎguó. Míngnián wǒ xiǎng qù Yuènán!", vi: "Mình từng đi Anh và Pháp. Sang năm mình muốn đi Việt Nam!" },
            { speaker: "Học sinh B", role: "b", zh: "欢迎你来越南！", pinyin: "Huānyíng nǐ lái Yuènán!", vi: "Chào mừng bạn đến với Việt Nam!" }
        ]
    }
};

// Active Vocabulary Database Reference (defaults to Giao tiếp 1)
let VOCAB_DATA = [...GIAO_TIEP_1_VOCAB];

// Single Character Database (Bộ thủ, Bút thuận, Hán Việt)
const CHAR_DATABASE = {
    "你": { hanViet: "Nhĩ", radical: "Nhân đứng (亻) - liên quan đến con người", strokes: 7, strokeSteps: ["1. Phẩy (撇)", "2. Sổ đứng (竖)", "3. Phẩy nằm (撇)", "4. Móc quai đứng (横钩)", "5. Nét móc nghiêng (竖钩)", "6. Phẩy trái (撇)", "7. Chấm phải (点)"] },
    "我": { hanViet: "Ngã", radical: "Qua (戈) - liên quan đến binh khí cổ", strokes: 7, strokeSteps: ["1. Phẩy xiên (撇)", "2. Ngang (横)", "3. Sổ móc (竖钩)", "4. Hất chéo (提)", "5. Nghiêng móc (斜钩)", "6. Phẩy nhỏ (撇)", "7. Chấm trên (点)"] },
    "他": { hanViet: "Tha", radical: "Nhân đứng (亻) - liên quan đến con người", strokes: 5, strokeSteps: ["1. Phẩy đứng (撇)", "2. Sổ (竖)", "3. Ngang móc (横折钩)", "4. Sổ đứng (竖)", "5. Ngang uốn móc (竖弯钩)"] },
    "她": { hanViet: "Tha", radical: "Nữ (女) - liên quan đến phụ nữ", strokes: 6, strokeSteps: ["1. Phẩy gập (撇折)", "2. Phẩy trái (撇)", "3. Ngang (横)", "4. Ngang móc (横折钩)", "5. Sổ đứng (竖)", "6. Ngang uốn móc (竖弯钩)"] },
    "们": { hanViet: "Môn", radical: "Nhân đứng (亻) - liên quan đến con người", strokes: 5, strokeSteps: ["1. Phẩy (撇)", "2. Sổ (竖)", "3. Chấm đầu (点)", "4. Sổ đứng (竖)", "5. Ngang gập móc (横折钩)"] },
    "您": { hanViet: "Nín", radical: "Tâm (心) - liên quan đến tình cảm, tấm lòng", strokes: 11, strokeSteps: ["1. Phẩy (撇)", "2. Sổ (竖)", "3. Phẩy nằm (撇)", "4. Ngang gập (横钩)", "5. Sổ móc (竖钩)", "6. Phẩy trái (撇)", "7. Chấm (点)", "8. Chấm trái (点)", "9. Ngang móc (卧钩)", "10. Chấm giữa (点)", "11. Chấm phải (点)"] },
    "老": { hanViet: "Lão", radical: "Lão (老/耂) - liên quan đến người già, tuổi tác", strokes: 6, strokeSteps: ["1. Ngang (横)", "2. Sổ (竖)", "3. Ngang (横)", "4. Phẩy dài chéo (撇)", "5. Phẩy nằm ngắn (撇)", "6. Ngang uốn móc (竖弯钩)"] },
    "师": { hanViet: "Sư", radical: "Cân (巾) - liên quan đến vải vóc, khăn", strokes: 6, strokeSteps: ["1. Sổ đứng trái (竖)", "2. Phẩy gập (撇折)", "3. Ngang gập (横折钩)", "4. Sổ (竖)", "5. Ngang (横)", "6. Sổ móc thẳng (竖钩)"] },
    "同": { hanViet: "Đồng", radical: "Quynh (冂) - liên quan đến vùng đất biên giới rộng", strokes: 6, strokeSteps: ["1. Sổ đứng trái (竖)", "2. Ngang gập móc (横折钩)", "3. Ngang (横)", "4. Khẩu (口) - Ngang gập", "5. Sổ đứng (竖)", "6. Ngang đáy (横)"] },
    "学": { hanViet: "Học", radical: "Tử (子) - liên quan đến con cái, trẻ nhỏ học hành", strokes: 8, strokeSteps: ["1. Chấm trái (点)", "2. Chấm phải (点)", "3. Phẩy nằm (撇)", "4. Móc quai đứng (横钩)", "5. Ngang uốn (横撇)", "6. Ngang gập (横折)", "7. Sổ móc quai (竖钩)", "8. Ngang đáy (横)"] },
    "什": { hanViet: "Thập", radical: "Nhân đứng (亻) - liên quan đến con người", strokes: 4, strokeSteps: ["1. Phẩy (撇)", "2. Sổ đứng (竖)", "3. Ngang (横)", "4. Sổ đứng dài (竖)"] },
    "么": { hanViet: "Ma / Mẽo", radical: "Phiệt (丿) - nét phẩy", strokes: 3, strokeSteps: ["1. Phẩy chéo (撇)", "2. Phẩy gập (撇折)", "3. Chấm nhỏ (点)"] },
    "叫": { hanViet: "Khiếu", radical: "Khẩu (口) - liên quan đến miệng, âm thanh", strokes: 5, strokeSteps: ["1. Sổ (竖)", "2. Ngang gập (横折)", "3. Ngang (横)", "4. Sổ dọc dài (竖)", "5. Ngang uốn gập (竖提)"] },
    "名": { hanViet: "Danh", radical: "Khẩu (口) - liên quan đến tên gọi bằng miệng", strokes: 6, strokeSteps: ["1. Phẩy nằm (撇)", "2. Ngang gập (横折)", "3. Chấm chéo (点)", "4. Sổ (竖)", "5. Ngang gập (横折)", "6. Ngang đáy (横)"] },
    "字": { hanViet: "Tự", radical: "Miên (宀) - mái nhà, che chở", strokes: 6, strokeSteps: ["1. Chấm đầu (点)", "2. Chấm trái (点)", "3. Ngang gập móc (横折钩)", "4. Ngang gập (横折)", "5. Sổ móc (竖钩)", "6. Ngang đáy (横)"] },
    "再": { hanViet: "Tái", radical: "Quỳnh (冂) - biên giới xa xôi", strokes: 6, strokeSteps: ["1. Ngang (横)", "2. Sổ dọc trái (竖)", "3. Ngang gập (横折)", "4. Sổ giữa (竖)", "5. Ngang ngắn (横)", "6. Ngang đáy dài (横)"] },
    "见": { hanViet: "Kiến", radical: "Kiến (见) - liên quan đến nhìn, gặp mặt", strokes: 4, strokeSteps: ["1. Sổ dọc trái (竖)", "2. Ngang gập móc (横折钩)", "3. Phẩy trái (撇)", "4. Sổ uốn móc dài (竖弯钩)"] },
    
    // Dữ liệu chữ Hán chủ đề Quốc gia (国家)
    "国": { hanViet: "Quốc", radical: "Vi (囗) - vây quanh, biên giới", strokes: 8, strokeSteps: ["1. Sổ đứng (竖)", "2. Ngang gập móc (横折钩)", "3. Ngang (横)", "4. Ngang (横)", "5. Sổ móc (竖钩)", "6. Hất (提)", "7. Chấm (点)", "8. Ngang đáy khóa khung (横)"] },
    "家": { hanViet: "Gia", radical: "Miên (宀) - mái nhà", strokes: 10, strokeSteps: ["1. Chấm đầu (点)", "2. Chấm trái (点)", "3. Ngang gập móc (横折钩)", "4. Ngang (横)", "5. Phẩy (撇)", "6. Cong móc (弯钩)", "7. Phẩy (撇)", "8. Phẩy (撇)", "9. Phẩy (撇)", "10. Mác (捺)"] },
    "越": { hanViet: "Việt", radical: "Tẩu (走) - chạy, đi", strokes: 12, strokeSteps: ["1. Ngang (横)", "2. Sổ (竖)", "3. Ngang (横)", "4. Sổ (竖)", "5. Ngang (横)", "6. Phẩy (撇)", "7. Hất (提)", "8. Ngang gập (横折)", "9. Ngang (横)", "10. Phẩy (撇)", "11. Nghiêng móc (斜钩)", "12. Chấm (点)"] },
    "南": { hanViet: "Nam", radical: "Thập (十) - mười", strokes: 9, strokeSteps: ["1. Ngang (横)", "2. Sổ (竖)", "3. Sổ dọc trái (竖)", "4. Ngang gập móc (横折钩)", "5. Ngang (横)", "6. Sổ (竖)", "7. Sổ gập (竖折)", "8. Chấm (点)", "9. Phẩy (撇)"] },
    "中": { hanViet: "Trung", radical: "Côn (丨) - nét sổ thẳng", strokes: 4, strokeSteps: ["1. Sổ đứng trái (竖)", "2. Ngang gập (横折)", "3. Ngang khép (横)", "4. Sổ dọc giữa (竖)"] },
    "美": { hanViet: "Mỹ", radical: "Dương (羊) - con dê", strokes: 9, strokeSteps: ["1. Chấm (点)", "2. Phẩy (撇)", "3. Ngang (横)", "4. Ngang (横)", "5. Sổ (竖)", "6. Ngang (横)", "7. Ngang (横)", "8. Phẩy (撇)", "9. Mác (捺)"] },
    "英": { hanViet: "Anh", radical: "Thảo (艹) - cỏ, cây cỏ", strokes: 8, strokeSteps: ["1. Ngang (横)", "2. Sổ dọc trái (竖)", "3. Sổ dọc phải (竖)", "4. Ngang (横)", "5. Sổ (竖)", "6. Ngang gập (横折)", "7. Phẩy (撇)", "8. Mác (捺)"] },
    "法": { hanViet: "Pháp", radical: "Thủy (氵) - nước", strokes: 8, strokeSteps: ["1. Chấm nước (点)", "2. Chấm nước (点)", "3. Hất nước (提)", "4. Ngang (横)", "5. Sổ (竖)", "6. Ngang khép (横)", "7. Phẩy gập (撇折)", "8. Chấm (点)"] },
    "日": { hanViet: "Nhật", radical: "Nhật (日) - mặt trời, ngày", strokes: 4, strokeSteps: ["1. Sổ đứng trái (竖)", "2. Ngang gập (横折)", "3. Ngang giữa (横)", "4. Ngang đáy khép (横)"] },
    "本": { hanViet: "Bản", radical: "Mộc (木) - cây cối", strokes: 5, strokeSteps: ["1. Ngang (横)", "2. Sổ dọc (竖)", "3. Phẩy (撇)", "4. Mác (捺)", "5. Ngang ngắn chỉ gốc rễ (横)"] },
    "韩": { hanViet: "Hàn", radical: "Vi (韦) - da thuộc", strokes: 12, strokeSteps: ["1. Ngang (横)", "2. Sổ (竖)", "3. Ngang (横)", "4. Ngang (横)", "5. Sổ (竖)", "6. Ngang (横)", "7. Ngang (横)", "8. Sổ (竖)", "9. Ngang gập (横折)", "10. Ngang (横)", "11. Ngang (横)", "12. Sổ móc (竖钩)"] },
    "新": { hanViet: "Tân", radical: "Cân (斤) - cái rìu", strokes: 13, strokeSteps: ["1. Chấm (点)", "2. Ngang (横)", "3. Sổ (竖)", "4. Chấm (点)", "5. Phẩy (撇)", "6. Ngang (横)", "7. Sổ (竖)", "8. Phẩy (撇)", "9. Mác (捺)", "10. Phẩy (撇)", "11. Ngang gập (横折)", "12. Ngang (横)", "13. Sổ (竖)"] },
    "加": { hanViet: "Gia", radical: "Khẩu (口) - miệng", strokes: 5, strokeSteps: ["1. Lực (力) - Ngang gập móc", "2. Phẩy (撇)", "3. Sổ (竖)", "4. Ngang gập (横折)", "5. Ngang (横)"] },
    "坡": { hanViet: "Pha", radical: "Thổ (土) - đất", strokes: 8, strokeSteps: ["1. Ngang (横)", "2. Sổ (竖)", "3. Hất (提)", "4. Phẩy (撇)", "5. Ngang gập móc (横折)", "6. Phẩy (撇)", "7. Sổ gập (竖折)", "8. Phẩy (撇)"] },
    "哪": { hanViet: "Nả", radical: "Khẩu (口) - miệng", strokes: 9, strokeSteps: ["1. Sổ (竖)", "2. Ngang gập (横折)", "3. Ngang (横)", "4. Ngang (横)", "5. Sổ (竖)", "6. Ngang gập (横折)", "7. Ngang khép (横)", "8. Phẩy (撇)", "9. Sổ móc (阝)"] },
    "人": { hanViet: "Nhân", radical: "Nhân (人) - người", strokes: 2, strokeSteps: ["1. Phẩy trái (撇)", "2. Mác phải (捺)"] },
    
    // Thêm các từ vựng chữ Hán bổ sung cho các Quốc gia
    "德": { hanViet: "Đức", radical: "Xích (彳) - bước chân ngắn, hành vi", strokes: 15, strokeSteps: ["1. Phẩy (撇)", "2. Phẩy (撇)", "3. Sổ (竖)", "4. Ngang (横)", "5. Sổ (竖)", "6. Ngang gập (横折)", "7. Ngang (横)", "8. Ngang (横)", "9. Ngang (横)", "10. Sổ (竖)", "11. Ngang (横)", "12. Chấm (点)", "13. Móc quai (卧钩)", "14. Chấm (点)", "15. Chấm (点)"] },
    "西": { hanViet: "Tây", radical: "Á (覀) - che đậy, hướng tây", strokes: 6, strokeSteps: ["1. Ngang (横)", "2. Sổ (竖)", "3. Ngang gập móc (横折钩)", "4. Phẩy (撇)", "5. Ngang uốn (竖弯)", "6. Ngang đáy khép (横)"] },
    "班": { hanViet: "Ban", radical: "Ngọc (王) - ngọc quý", strokes: 10, strokeSteps: ["1. Ngang (横)", "2. Ngang (横)", "3. Sổ (竖)", "4. Hất (提)", "5. Phẩy (撇)", "6. Ngang (横)", "7. Ngang (横)", "8. Sổ (竖)", "9. Ngang (横)", "10. Sổ dọc dài (竖)"] },
    "牙": { hanViet: "Nha", radical: "Nha (牙) - răng", strokes: 4, strokeSteps: ["1. Ngang (横)", "2. Sổ hất (竖折撇)", "3. Sổ móc (竖钩)", "4. Phẩy chéo (撇)"] },
    "意": { hanViet: "Ý", radical: "Tâm (心) - tấm lòng, ý nghĩ", strokes: 13, strokeSteps: ["1. Chấm (点)", "2. Ngang (横)", "3. Sổ (竖)", "4. Ngang gập (横折)", "5. Ngang khép (横)", "6. Chấm (点)", "7. Phẩy (撇)", "8. Ngang (横)", "9. Ngang khép (横)", "10. Chấm (点)", "11. Móc quai (卧钩)", "12. Chấm (点)", "13. Chấm (点)"] },
    "大": { hanViet: "Đại", radical: "Đại (大) - to lớn", strokes: 3, strokeSteps: ["1. Ngang (横)", "2. Phẩy (撇)", "3. Mác (捺)"] },
    "利": { hanViet: "Lợi", radical: "Đao (刀/刂) - con dao, sắc bén", strokes: 7, strokeSteps: ["1. Phẩy (撇)", "2. Ngang (横)", "3. Sổ (竖)", "4. Phẩy (撇)", "5. Chấm (点)", "6. Sổ đứng (竖)", "7. Sổ móc dài (竖钩)"] },
    "泰": { hanViet: "Thái", radical: "Thủy (水) - nước", strokes: 10, strokeSteps: ["1. Ngang (横)", "2. Phẩy (撇)", "3. Mác (捺)", "4. Ngang (横)", "5. Phẩy (撇)", "6. Ngang gập (横折)", "7. Sổ móc (竖钩)", "8. Phẩy (撇)", "9. Phẩy (撇)", "10. Mác (捺)"] },
    "印": { hanViet: "Ấn", radical: "Tiết (卩) - ấn tín", strokes: 5, strokeSteps: ["1. Phẩy (撇)", "2. Ngang gập (横折)", "3. Ngang (横)", "4. Sổ dọc (竖)", "5. Sổ gập móc (竖折折钩)"] },
    "度": { hanViet: "Độ", radical: "Quảng (广) - mái nhà rộng", strokes: 9, strokeSteps: ["1. Chấm (点)", "2. Ngang (横)", "3. Phẩy dài (撇)", "4. Ngang (横)", "5. Sổ (竖)", "6. Ngang gập (横折)", "7. Ngang (横)", "8. Phẩy (撇)", "9. Mác uốn (捺)"] },
    
    // Thêm các chữ Hán của từ vựng mới bài 1
    "请": { hanViet: "Thỉnh", radical: "Ngôn (讠) - liên quan đến ngôn ngữ, lời nói", strokes: 9 },
    "问": { hanViet: "Vấn", radical: "Môn (门) - liên quan đến cửa, lối vào", strokes: 6 },
    "姓": { hanViet: "Tính", radical: "Nữ (女) - liên quan đến phụ nữ, sinh nở", strokes: 8 },
    "贵": { hanViet: "Quý", radical: "Bối (贝) - liên quan đến tiền tài, của cải", strokes: 9 },
    "怎": { hanViet: "Chẩm", radical: "Tâm (心) - liên quan đến tim, tình cảm, suy nghĩ", strokes: 9 },
    "称": { hanViet: "Xưng", radical: "Hòa (禾) - liên quan đến lúa mì, đo lường", strokes: 10 },
    "呼": { hanViet: "Hô", radical: "Khẩu (口) - liên quan đến miệng, âm thanh", strokes: 8 },
    
    // Bài 2 Lớp Giao tiếp 1
    "现": { hanViet: "Hiện", radical: "Ngọc (王) - liên quan đến ngọc, quý giá", strokes: 8 },
    "在": { hanViet: "Tại", radical: "Thổ (土) - liên quan đến đất đai", strokes: 6 },
    "点": { hanViet: "Điểm", radical: "Hỏa (灬) - lửa, chấm nhỏ", strokes: 9 },
    "分": { hanViet: "Phân", radical: "Đao (刀) - con dao, sự chia cắt", strokes: 4 },
    "刻": { hanViet: "Khắc", radical: "Đao (刂) - con dao", strokes: 8 },
    "半": { hanViet: "Bán", radical: "Thập (十) - mười", strokes: 5 },
    "差": { hanViet: "Sai", radical: "Công (工) - công việc", strokes: 9 },
    "早": { hanViet: "Tảo", radical: "Nhật (日) - mặt trời, ngày", strokes: 6 },
    "上": { hanViet: "Thượng", radical: "Nhất (一) - số một", strokes: 3 },
    "午": { hanViet: "Ngọ", radical: "Thập (十) - mười", strokes: 4 },
    "晚": { hanViet: "Vãn", radical: "Nhật (日) - mặt trời, ngày", strokes: 11 },
    "睡": { hanViet: "Thụy", radical: "Mục (目) - mắt", strokes: 13 },
    "觉": { hanViet: "Giác / Giáo", radical: "Kiến (见) - nhìn thấy", strokes: 9 },
    "吃": { hanViet: "Ngật", radical: "Khẩu (口) - miệng", strokes: 6 },
    "饭": { hanViet: "Phạn", radical: "Thực (饣) - ăn uống", strokes: 7 },
    "起": { hanViet: "Khởi", radical: "Tẩu (走) - đi, chạy", strokes: 10 },
    "床": { hanViet: "Sàng", radical: "Quảng (广) - mái nhà", strokes: 7 },
    "洗": { hanViet: "Tẩy", radical: "Thủy (氵) - nước", strokes: 9 },
    "脸": { hanViet: "Liễn", radical: "Nguyệt (月) - thịt, cơ thể", strokes: 11 },
    "刷": { hanViet: "Sát / Loát", radical: "Đao (刂) - con dao, cái nạo", strokes: 8 },
    "回": { hanViet: "Hồi", radical: "Vi (囗) - vây quanh", strokes: 6 },
    "课": { hanViet: "Khóa", radical: "Ngôn (讠) - lời nói", strokes: 10 },
    "每": { hanViet: "Mỗi", radical: "Vô (毋) - chớ, đừng", strokes: 7 },
    "天": { hanViet: "Thiên", radical: "Đại (大) - to lớn", strokes: 4 },
    "看": { hanViet: "Khán", radical: "Mục (目) - mắt", strokes: 9 },
    "电": { hanViet: "Điện", radical: "Điền (田) - ruộng", strokes: 5 },
    "视": { hanViet: "Thị", radical: "Thị (礻) - thần đất, biểu thị", strokes: 4 },
    "做": { hanViet: "Tác", radical: "Nhân đứng (亻) - người", strokes: 11 },
    "作": { hanViet: "Tác", radical: "Nhân đứng (亻) - người", strokes: 7 },
    "业": { hanViet: "Nghiệp", radical: "Nhất (一) - số một", strokes: 5 },
    "澡": { hanViet: "Tảo", radical: "Thủy (氵) - nước", strokes: 16 },
    "网": { hanViet: "Võng", radical: "Mịch (冂) - cái lưới vây", strokes: 6 },
    "去": { hanViet: "Khứ", radical: "Tư (厶) - riêng tư", strokes: 5 },
    "运": { hanViet: "Vận", radical: "Sước (辶) - bước đi", strokes: 7 },
    "动": { hanViet: "Động", radical: "Lực (力) - sức mạnh", strokes: 6 },
    "跟": { hanViet: "Cân", radical: "Túc (⻊) - chân", strokes: 13 },
    "朋": { hanViet: "Bằng", radical: "Nguyệt (月) - mặt trăng", strokes: 8 },
    "友": { hanViet: "Hữu", radical: "Hựu (又) - lại, bàn tay", strokes: 4 },
    "面": { hanViet: "Diện", radical: "Diện (面) - khuôn mặt", strokes: 9 },
    "玩": { hanViet: "Ngoạn", radical: "Ngọc (王) - ngọc quý", strokes: 8 },
    "儿": { hanViet: "Nhi", radical: "Nhi (儿) - trẻ con", strokes: 2 },
    "年": { hanViet: "Niên", radical: "Can (干) - thiên can, lá chắn", strokes: 6 },
    "月": { hanViet: "Nguyệt", radical: "Nguyệt (月) - mặt trăng", strokes: 4 },
    "号": { hanViet: "Hiệu", radical: "Khẩu (口) - miệng", strokes: 5 },
    "星": { hanViet: "Tinh", radical: "Nhật (日) - mặt trời", strokes: 9 },
    "期": { hanViet: "Kỳ", radical: "Nguyệt (月) - mặt trăng", strokes: 12 },
    "生": { hanViet: "Sinh", radical: "Sinh (生) - sinh đẻ, sống", strokes: 5 },
    "出": { hanViet: "Xuất", radical: "Khảm (凵) - há miệng", strokes: 5 },
    "周": { hanViet: "Chu", radical: "Khẩu (口) - miệng", strokes: 8 },
    "末": { hanViet: "Mạt", radical: "Mộc (木) - cây cối", strokes: 5 },
    "前": { hanViet: "Tiền", radical: "Đao (刂) - con dao", strokes: 9 },
    "昨": { hanViet: "Tạc", radical: "Nhật (日) - mặt trời", strokes: 9 },
    "今": { hanViet: "Kim", radical: "Nhân (人) - người", strokes: 4 },
    "明": { hanViet: "Minh", radical: "Nhật (日) - mặt trời, ánh sáng", strokes: 8 },
    "后": { hanViet: "Hậu", radical: "Khẩu (口) - miệng", strokes: 6 },
    "这": { hanViet: "Giá", radical: "Sước (辶) - bước đi", strokes: 7 },
    "个": { hanViet: "Cá", radical: "Nhân (人) - người", strokes: 3 },
    "谢": { hanViet: "Tạ", radical: "Ngôn (讠) - liên quan đến ngôn ngữ, lời nói", strokes: 12 },
    "不": { hanViet: "Bất", radical: "Nhất (一) - một", strokes: 4 },
    "客": { hanViet: "Khách", radical: "Miên (宀) - mái nhà", strokes: 9 },
    "气": { hanViet: "Khí", radical: "Khí (气) - hơi nước, khí", strokes: 4 },
    "对": { hanViet: "Đối", radical: "Thốn (寸) - tấc, đo lường", strokes: 5 },
    "没": { hanViet: "Một / Một", radical: "Thủy (氵) - nước", strokes: 7 },
    "关": { hanViet: "Quan", radical: "Bát (八) - tám", strokes: 6 },
    "系": { hanViet: "Hệ", radical: "Tịch (糸) - sợi tơ", strokes: 7 },
    "是": { hanViet: "Thị", radical: "Nhật (日) - mặt trời, ngày", strokes: 9 },
    "手": { hanViet: "Thủ", radical: "Thủ (手) - tay", strokes: 4 },
    "机": { hanViet: "Cơ", radical: "Mộc (木) - cây cối", strokes: 6 },
    "码": { hanViet: "Mã", radical: "Thạch (石) - đá", strokes: 8 },
    "多": { hanViet: "Đa", radical: "Tịch (夕) - đêm tối", strokes: 6 },
    "少": { hanViet: "Thiểu / Thiếu", radical: "Tiểu (小) - nhỏ", strokes: 4 },
    "的": { hanViet: "Đích", radical: "Bạch (白) - màu trắng", strokes: 8 },
    "一": { hanViet: "Nhất", radical: "Nhất (一) - số một", strokes: 1 },
    "二": { hanViet: "Nhị", radical: "Nhị (二) - số hai", strokes: 2 },
    "三": { hanViet: "Tam", radical: "Nhất (一) - số một", strokes: 3 },
    "四": { hanViet: "Tứ", radical: "Vi (囗) - vây quanh", strokes: 5 },
    "五": { hanViet: "Ngũ", radical: "Nhị (二) - số hai", strokes: 4 },
    "六": { hanViet: "Lục", radical: "Bát (八) - số tám", strokes: 4 },
    "七": { hanViet: "Thất", radical: "Nhất (一) - số một", strokes: 2 },
    "八": { hanViet: "Bát", radical: "Bát (八) - số tám", strokes: 2 },
    "九": { hanViet: "Cửu", radical: "Ất (乙) - vị trí thứ hai trong thiên can", strokes: 2 },
    "十": { hanViet: "Thập", radical: "Thập (十) - số mười", strokes: 2 },
    "口": { hanViet: "Khẩu", radical: "Khẩu (口) - cái miệng", strokes: 3, strokeSteps: ["1. Sổ đứng (竖)", "2. Ngang gập (横折)", "3. Ngang đáy (横)"] },
    "爸": { hanViet: "Bả", radical: "Phụ (父) - người cha", strokes: 8, strokeSteps: ["1. Phẩy (撇)", "2. Chấm (点)", "3. Phẩy (撇)", "4. Mác (捺)", "5. Ngang gập (横折)", "6. Sổ (竖)", "7. Ngang gập uốn móc (横折弯钩)", "8. Sổ dọc (竖)"] },
    "妈": { hanViet: "Ma", radical: "Nữ (女) - phụ nữ", strokes: 6, strokeSteps: ["1. Phẩy gập (撇折)", "2. Phẩy (撇)", "3. Ngang (横)", "4. Ngang gập gập móc (横折折折钩)", "5. Sổ đứng (竖)", "6. Ngang (横)"] },
    "哥": { hanViet: "Ca", radical: "Khẩu (口) - cái miệng", strokes: 10, strokeSteps: ["1. Ngang (横)", "2. Sổ (竖)", "3. Ngang gập (横折)", "4. Ngang (横)", "5. Sổ đứng dọc (竖)", "6. Ngang (横)", "7. Sổ (竖)", "8. Ngang gập (横折)", "9. Ngang (横)", "10. Sổ dọc móc (竖钩)"] },
    "弟": { hanViet: "Đệ", radical: "Cung (弓) - cái cung", strokes: 7, strokeSteps: ["1. Chấm (点)", "2. Phẩy (撇)", "3. Ngang gập (横折)", "4. Ngang (横)", "5. Sổ dọc (竖)", "6. Ngang gập móc (横折钩)", "7. Phẩy (撇)"] },
    "姐": { hanViet: "Tỷ", radical: "Nữ (女) - phụ nữ", strokes: 8, strokeSteps: ["1. Phẩy gập (撇折)", "2. Phẩy (撇)", "3. Ngang (横)", "4. Ngang gập (横折)", "5. Ngang (横)", "6. Ngang (横)", "7. Sổ (竖)", "8. Ngang khép đáy (横)"] },
    "妹": { hanViet: "Muội", radical: "Nữ (女) - phụ nữ", strokes: 8, strokeSteps: ["1. Phẩy gập (撇折)", "2. Phẩy (撇)", "3. Ngang (横)", "4. Ngang (横)", "5. Ngang (横)", "6. Sổ (竖)", "7. Phẩy (撇)", "8. Mác (捺)"] },
    "爷": { hanViet: "Gia", radical: "Phụ (父) - người cha", strokes: 6, strokeSteps: ["1. Phẩy (撇)", "2. Chấm (点)", "3. Phẩy (撇)", "4. Mác (捺)", "5. Ngang gập uốn móc (横折弯钩)", "6. Sổ dọc thẳng (竖)"] },
    "奶": { hanViet: "Nãi", radical: "Nữ (女) - phụ nữ", strokes: 5, strokeSteps: ["1. Phẩy gập (撇折)", "2. Phẩy (撇)", "3. Ngang (横)", "4. Ngang gập uốn móc (横折折折钩)", "5. Phẩy (撇)"] },
    "外": { hanViet: "Ngoại", radical: "Tịch (夕) - đêm tối", strokes: 5, strokeSteps: ["1. Phẩy (撇)", "2. Ngang gập (横折)", "3. Chấm (点)", "4. Sổ dọc (竖)", "5. Chấm ngắn (点)"] },
    "公": { hanViet: "Công", radical: "Bát (八) - số tám", strokes: 4, strokeSteps: ["1. Phẩy (撇)", "2. Mác (捺)", "3. Ngang gập (横折)", "4. Chấm (点)"] },
    "婆": { hanViet: "Bà", radical: "Nữ (女) - phụ nữ", strokes: 11, strokeSteps: ["1. Điểm (点)", "2. Phẩy (撇)", "3. Ngang (横)", "4. Phẩy (撇)", "5. Ngang gập uốn móc (横折弯钩)", "6. Ngang (横)", "7. Sổ (竖)", "8. Ngang gập (横折)", "9. Ngang (横)", "10. Sổ dọc (竖)", "11. Nét gập nữ (女)"] },
    "兄": { hanViet: "Huynh", radical: "Nhân (儿) - người", strokes: 5, strokeSteps: ["1. Sổ đứng (竖)", "2. Ngang gập (横折)", "3. Ngang (横)", "4. Phẩy (撇)", "5. Sổ uốn móc (竖弯钩)"] },
    "和": { hanViet: "Hòa", radical: "Khẩu (口) - cái miệng", strokes: 8, strokeSteps: ["1. Phẩy (撇)", "2. Ngang (横)", "3. Sổ (竖)", "4. Phẩy (撇)", "5. Chấm (点)", "6. Sổ đứng (竖)", "7. Ngang gập (横折)", "8. Ngang đáy (横)"] },
    "有": { hanViet: "Hữu", radical: "Nguyệt (月) - mặt trăng", strokes: 6, strokeSteps: ["1. Ngang (横)", "2. Phẩy (撇)", "3. Sổ đứng (竖)", "4. Ngang gập (横折)", "5. Ngang (横)", "6. Ngang khép (横)"] },
    "买": { hanViet: "Mãi", radical: "Mịch (冖) - che phủ, trùm lên", strokes: 6 },
    "卖": { hanViet: "Mại", radical: "Thập (十) - mười", strokes: 8 },
    "钱": { hanViet: "Tiền", radical: "Kim (钅) - kim loại, tiền bạc", strokes: 10 },
    "肉": { hanViet: "Nhục", radical: "Nhục (肉) - thịt", strokes: 6 },
    "鱼": { hanViet: "Ngư", radical: "Ngư (鱼) - con cá", strokes: 8 },
    "鸡": { hanViet: "Kê", radical: "Điểu (鸟) - con chim", strokes: 7 },
    "菜": { hanViet: "Thái", radical: "Thảo (艹) - cây cỏ", strokes: 11 },
    "付": { hanViet: "Phó", radical: "Nhân đứng (亻) - con người", strokes: 5 },
    "茶": { hanViet: "Trà", radical: "Thảo (艹) - cây cỏ, trà", strokes: 9 },
    "酒": { hanViet: "Tửu", radical: "Dậu (酉) - bình rượu, chất men", strokes: 10 },
    "甜": { hanViet: "Điềm", radical: "Cam (甘) - ngọt, ngon ngọt", strokes: 11 },
    "辣": { hanViet: "Lạt", radical: "Tân (辛) - cay, vất vả", strokes: 14 },
    "酸": { hanViet: "Toan", radical: "Dậu (酉) - bình rượu, chất men, lên men chua", strokes: 14 },
    "左": { hanViet: "Tả", radical: "Công (工) - công việc, tay trái", strokes: 5 },
    "右": { hanViet: "Hữu", radical: "Khẩu (口) - miệng, tay phải", strokes: 5 },
    "东": { hanViet: "Đông", radical: "Mộc (木) - cây cối", strokes: 5 },
    "南": { hanViet: "Nam", radical: "Thập (十) - mười", strokes: 9 },
    "北": { hanViet: "Bắc", radical: "Chủy (匕) - thìa, muỗng", strokes: 5 },
    "边": { hanViet: "Biên", radical: "Sước (辶) - bước đi", strokes: 5 },
    "往": { hanViet: "Vãng", radical: "Xích (彳) - bước chân", strokes: 8 },
    "拐": { hanViet: "Quải", radical: "Thủ (扌) - bàn tay", strokes: 8 },
    "到": { hanViet: "Đáo", radical: "Đao (刂) - con dao", strokes: 8 },
    "灯": { hanViet: "Đăng", radical: "Hỏa (火) - lửa, ngọn đèn", strokes: 6 },
    "路": { hanViet: "Lộ", radical: "Túc (足) - chân, đường đi", strokes: 13 },
    "从": { hanViet: "Tùng", radical: "Nhân (人) - đi theo người khác", strokes: 4 },
    "直": { hanViet: "Trực", radical: "Mục (目) - mắt, thẳng", strokes: 8 },
    "走": { hanViet: "Tẩu", radical: "Tẩu (走) - đi, chạy", strokes: 7 },
    "骑": { hanViet: "Kỵ", radical: "Mã (马) - con ngựa", strokes: 11 },
    "坐": { hanViet: "Tọa", radical: "Thổ (土) - đất, ngồi", strokes: 7 },
    "车": { hanViet: "Xa", radical: "Xa (车) - xe cộ", strokes: 4 },
    "铁": { hanViet: "Thiết", radical: "Kim (钅) - kim loại, sắt", strokes: 10 },
    "船": { hanViet: "Thuyền", radical: "Chu (舟) - con thuyền", strokes: 11 },
    "离": { hanViet: "Ly", radical: "Ly (离) - rời xa", strokes: 10 },
    "近": { hanViet: "Cận", radical: "Sước (辶) - bước đi, khoảng cách gần", strokes: 7 },
    "远": { hanViet: "Viễn", radical: "Sước (辶) - bước đi, khoảng cách xa", strokes: 7 },
    "怕": { hanViet: "Phạ", radical: "Tâm (忄) - lòng, e sợ", strokes: 8 },
    "堵": { hanViet: "Đổ", radical: "Thổ (土) - đất, ngăn chặn", strokes: 11 },
    "晕": { hanViet: "Vận", radical: "Nhật (日) - mặt trời, hoa mắt say", strokes: 10 },
    "迟": { hanViet: "Trì", radical: "Sước (辶) - bước đi chậm, đến muộn", strokes: 7 },
    "累": { hanViet: "Lụy", radical: "Mịch (糸) - sợi tơ, mệt mỏi", strokes: 11 },
    "常": { hanViet: "Thường", radical: "Cân (巾) - vải, thường xuyên", strokes: 11 },
    "因": { hanViet: "Nhân", radical: "Vi (囗) - bao quanh, nguyên do", strokes: 6 },
    "里": { hanViet: "Lý", radical: "Lý (里) - dặm, bên trong", strokes: 7 },
    "外": { hanViet: "Ngoại", radical: "Tịch (夕) - đêm tối, bên ngoài", strokes: 5 },
    "旁": { hanViet: "Bàng", radical: "Phương (方) - phương hướng, bên cạnh", strokes: 10 },
    "桌": { hanViet: "Trác", radical: "Mộc (木) - cái bàn", strokes: 10 },
    "椅": { hanViet: "Y", radical: "Mộc (木) - ghế gỗ", strokes: 12 },
    "匙": { hanViet: "Chì", radical: "Nhật (日) - chìa khóa, thìa", strokes: 11 },
    "箱": { hanViet: "Sương", radical: "Trúc (竹) - tre trúc, hòm hộp", strokes: 15 },
    "视": { hanViet: "Thị", radical: "Thị (礻) - nhìn, trông thấy", strokes: 8 },
    "床": { hanViet: "Sàng", radical: "Quảng (广) - mái che, giường ngủ", strokes: 7 },
    "面": { hanViet: "Diện", radical: "Diện (面) - mặt, bề mặt", strokes: 9 },
    "间": { hanViet: "Gian", radical: "Môn (门) - khoảng giữa, căn phòng", strokes: 7 },
    "站": { hanViet: "Trạm", radical: "Lập (立) - đứng, bến đỗ", strokes: 10 },
    "馆": { hanViet: "Quán", radical: "Thực (饣) - quán xá, tòa nhà", strokes: 11 },
    "址": { hanViet: "Chỉ", radical: "Thổ (土) - đất cát, địa chỉ", strokes: 7 },
    "郡": { hanViet: "Quận", radical: "Ấp (阝) - vùng đất, quận huyện", strokes: 9 },
    "坊": { hanViet: "Phường", radical: "Thổ (土) - đất cát, phố phường", strokes: 7 },
    "搬": { hanViet: "Bàn", radical: "Thủ (扌) - tay bưng bê, dọn chuyển", strokes: 13 },
    "原": { hanViet: "Nguyên", radical: "Hán (厂) - sườn núi, nguồn gốc", strokes: 10 },
    "新": { hanViet: "Tân", radical: "Cân (斤) - cây rìu, mới mẻ", strokes: 13 },
    "样": { hanViet: "Dạng", radical: "Mộc (木) - hình dáng, kiểu cách", strokes: 10 },
    "静": { hanViet: "Tĩnh", radical: "Thanh (青) - màu xanh, yên tĩnh", strokes: 14 },
    "便": { hanViet: "Tiện", radical: "Nhân (亻) - người, thuận tiện", strokes: 9 },
    "全": { hanViet: "Toàn", radical: "Nhập (入) - đầy đủ, toàn vẹn, an toàn", strokes: 6 },
    "险": { hanViet: "Hiểm", radical: "Phụ (阝) - gò đất, nguy hiểm", strokes: 9 },
    "境": { hanViet: "Cảnh", radical: "Thổ (土) - đất cát, ranh giới, môi trường", strokes: 14 },
    "份": { hanViet: "Phần", radical: "Nhân (亻) - người, phần, bản", strokes: 6 },
    "报": { hanViet: "Báo", radical: "Thủ (扌) - tay, thông báo, báo chí", strokes: 7 },
    "纸": { hanViet: "Chỉ", radical: "Mịch (纟) - sợi tơ, tờ giấy", strokes: 7 },
    "柜": { hanViet: "Quỹ", radical: "Mộc (木) - cây gỗ, cái tủ", strokes: 9 },
    "鞋": { hanViet: "Hài", radical: "Cách (革) - da thuộc, đôi giày", strokes: 15 },
    "冰": { hanViet: "Băng", radical: "Băng (冫) - nước đá, lạnh", strokes: 6 },
    "台": { hanViet: "Đài", radical: "Khẩu (口) - cái bệ, cái đài", strokes: 5 },
    "部": { hanViet: "Bộ", radical: "Ấp (阝) - bộ phận, cuốn bộ", strokes: 10 },
    "话": { hanViet: "Thoại", radical: "Ngôn (讠) - lời nói, điện thoại", strokes: 8 },
    "房": { hanViet: "Phòng", radical: "Hộ (户) - cánh cửa, căn phòng", strokes: 8 },
    "体": { hanViet: "Thể", radical: "Nhân (亻) - thân thể, thể dục", strokes: 7 },
    "育": { hanViet: "Dục", radical: "Nhục (⺼) - nuôi dạy, giáo dục", strokes: 8 },
    "图": { hanViet: "Đồ", radical: "Vi (囗) - bao bọc, bản đồ, bức tranh", strokes: 8 },
    "袋": { hanViet: "Đại", radical: "Y (衣) - áo quần, túi đựng", strokes: 11 },
    "找": { hanViet: "Trảo", radical: "Thủ (扌) - bàn tay, tìm kiếm", strokes: 7 },
    "杂": { hanViet: "Tạp", radical: "Mộc (木) - phức tạp, hỗn hợp", strokes: 6 },
    "志": { hanViet: "Chí", radical: "Tâm (心) - ý chí, ghi chép", strokes: 7 },
    "包": { hanViet: "Bao", radical: "Bao (勹) - bao bọc, cái cặp", strokes: 5 },
    "之": { hanViet: "Chi", radical: "Phiệt (丿) - của, trợ từ", strokes: 3 },
    "危": { hanViet: "Nguy", radical: "Nguy (⺁) - cheo leo, nguy hiểm", strokes: 6 },
    "环": { hanViet: "Hoàn", radical: "Vương (王) - ngọc ngà, vòng quanh", strokes: 8 },
    "加": { hanViet: "Gia", radical: "Lực (力) - sức lực, thêm vào", strokes: 5 },
    "拿": { hanViet: "Nã", radical: "Thủ (手) - bàn tay, cầm nắm", strokes: 10 },
    "俄": { hanViet: "Nga", radical: "Nhân (亻) - con người, nước Nga", strokes: 9 },
    "泰": { hanViet: "Thái", radical: "Thủy (水) - nước, bình an, Thái Lan", strokes: 10 },
    "混": { hanViet: "Hỗn", radical: "Thủy (氵) - nước, hỗn hợp, hòa trộn", strokes: 11 },
    "血": { hanViet: "Huyết", radical: "Huyết (血) - máu", strokes: 6 },
    "修": { hanViet: "Tu", radical: "Nhân (亻) - người, sửa chữa, tu sửa", strokes: 9 },
    "脑": { hanViet: "Não", radical: "Nhục (⺼) - não bộ, đầu óc", strokes: 10 },
    "坏": { hanViet: "Hoại", radical: "Thổ (土) - đất, hư hỏng", strokes: 7 },
    "差": { hanViet: "Sai", radical: "Dương (羊) - con dê, sai lệch, kém", strokes: 9 },
    "极": { hanViet: "Cực", radical: "Mộc (木) - cây gỗ, cùng cực, cực độ", strokes: 7 },
    "提": { hanViet: "Đề", radical: "Thủ (扌) - tay xách, nâng lên", strokes: 12 },
    "灯": { hanViet: "Đăng", radical: "Hỏa (火) - lửa, ngọn đèn", strokes: 6 },
    "游": { hanViet: "Du", radical: "Thủy (氵) - dòng nước, bơi lội, du ngoạn", strokes: 12 },
    "泳": { hanViet: "Vịnh", radical: "Thủy (氵) - bơi trong nước", strokes: 8 },
    "滑": { hanViet: "Hoạt", radical: "Thủy (氵) - trơn trượt, lướt đi", strokes: 12 },
    "网": { hanViet: "Võng", radical: "Mịch (冂) - lưới, mạng lưới", strokes: 6 },
    "球": { hanViet: "Cầu", radical: "Ngọc (王) - hòn ngọc, quả bóng tròn", strokes: 11 },
    "爬": { hanViet: "Ba", radical: "Trảo (爪) - móng vuốt, bò, leo trèo", strokes: 8 },
    "健": { hanViet: "Kiện", radical: "Nhân (亻) - người tráng kiện, khỏe mạnh", strokes: 10 },
    "散": { hanViet: "Tản", radical: "Phộc (攵) - đánh khẽ, tản bộ, phân tán", strokes: 12 },
    "步": { hanViet: "Bộ", radical: "Chỉ (止) - bước chân, đi bộ", strokes: 7 },
    "跑": { hanViet: "Bào", radical: "Túc (足) - bàn chân, chạy bộ", strokes: 12 },
    "羽": { hanViet: "Vũ", radical: "Vũ (羽) - lông vũ, lông chim", strokes: 6 },
    "毛": { hanViet: "Mao", radical: "Mao (毛) - lông, tóc", strokes: 4 },
    "篮": { hanViet: "Lam", radical: "Trúc (竹) - cái giỏ, cái rổ", strokes: 16 },
    "踢": { hanViet: "Thích", radical: "Túc (足) - dùng chân đá", strokes: 15 },
    "足": { hanViet: "Túc", radical: "Túc (足) - bàn chân, đầy đủ", strokes: 7 },
    "毽": { hanViet: "Kiện", radical: "Mao (毛) - quả cầu lông", strokes: 13 },
    "练": { hanViet: "Luyện", radical: "Mịch (纟) - tơ lụa, rèn luyện", strokes: 8 },
    "画": { hanViet: "Họa", radical: "Điền (田) - vẽ tranh, bức tranh", strokes: 8 },
    "戏": { hanViet: "Hí", radical: "Qua (戈) - diễn trò, trò chơi", strokes: 6 },
    "逛": { hanViet: "Cuống", radical: "Sước (辶) - đi lại, dạo phố", strokes: 10 },
    "街": { hanViet: "Nhai", radical: "Hành (行) - đường phố, ngã tư", strokes: 12 },
    "聊": { hanViet: "Liêu", radical: "Nhĩ (耳) - tai, trò chuyện", strokes: 11 },
    "空": { hanViet: "Không", radical: "Huyệt (穴) - khoảng trống, thời gian rảnh", strokes: 8 },
    "总": { hanViet: "Tổng", radical: "Tâm (心) - tấm lòng, luôn luôn, tổng cộng", strokes: 9 },
    "晴": { hanViet: "Tình", radical: "Nhật (日) - mặt trời, nắng ráo", strokes: 12 },
    "阴": { hanViet: "Âm", radical: "Phụ (阝) - gò đất, bóng râm, âm u", strokes: 6 },
    "雪": { hanViet: "Tuyết", radical: "Vũ (雨) - mưa, tuyết rơi", strokes: 11 },
    "刮": { hanViet: "Quát", radical: "Đao (刂) - con dao, cạo gió, gió thổi", strokes: 8 },
    "雾": { hanViet: "Vụ", radical: "Vũ (雨) - mưa, sương mù", strokes: 18 },
    "暴": { hanViet: "Bạo", radical: "Nhật (日) - bạo lực, bão táp", strokes: 15 },
    "雷": { hanViet: "Lôi", radical: "Vũ (雨) - mưa, sấm sét", strokes: 13 },
    "季": { hanViet: "Quý", radical: "Tử (子) - con cái, mùa màng", strokes: 8 },
    "节": { hanViet: "Tiết", radical: "Trúc (艹) - cỏ cây, thời tiết, lễ tiết", strokes: 5 },
    "春": { hanViet: "Xuân", radical: "Nhật (日) - mặt trời, mùa xuân", strokes: 9 },
    "夏": { hanViet: "Hạ", radical: "Phộc (夂) - bước đi chậm, mùa hè", strokes: 10 },
    "秋": { hanViet: "Thu", radical: "Hòa (禾) - cây lúa, mùa thu", strokes: 9 },
    "冬": { hanViet: "Đông", radical: "Băng (夂/冫) - băng tuyết, mùa đông", strokes: 5 },
    "暖": { hanViet: "Noãn", radical: "Nhật (日) - mặt trời, ấm áp", strokes: 13 },
    "凉": { hanViet: "Lương", radical: "Băng (冫) - lạnh, mát mẻ", strokes: 10 },
    "燥": { hanViet: "Táo", radical: "Hỏa (火) - lửa, khô khan", strokes: 17 },
    "湿": { hanViet: "Thấp", radical: "Thủy (氵) - nước, ẩm ướt", strokes: 12 },
    "旱": { hanViet: "Hãn", radical: "Nhật (日) - mặt trời, hạn hán", strokes: 7 },
    "伞": { hanViet: "Tản", radical: "Nhân (人) - chiếc ô che", strokes: 6 },
    "景": { hanViet: "Cảnh", radical: "Nhật (日) - ánh sáng, phong cảnh", strokes: 12 },
    "厅": { hanViet: "Thính", radical: "Hán (厂) - sườn núi, phòng lớn, sảnh", strokes: 4 },
    "卧": { hanViet: "Ngọa", radical: "Thần (臣) - bề tôi, nằm ngủ", strokes: 8 },
    "室": { hanViet: "Thất", radical: "Miên (宀) - mái nhà, căn phòng", strokes: 9 },
    "厨": { hanViet: "Trù", radical: "Hán (厂) - sườn núi, bếp núc", strokes: 12 },
    "帘": { hanViet: "Liêm", radical: "Trúc (竹) - tre trúc, cái rèm", strokes: 11 },
    "梯": { hanViet: "Thê", radical: "Mộc (木) - cây gỗ, bậc thang", strokes: 11 },
    "妆": { hanViet: "Trang", radical: "Nữ (女) - phụ nữ, trang điểm", strokes: 6 },
    "橱": { hanViet: "Trù", radical: "Mộc (木) - cây gỗ, cái tủ chạn", strokes: 16 },
    "炉": { hanViet: "Lô", radical: "Hỏa (火) - ngọn lửa, cái lò bếp", strokes: 8 },
    "锅": { hanViet: "Oa", radical: "Kim (钅) - kim loại, cái nồi chảo", strokes: 12 },
    "熨": { hanViet: "Uất", radical: "Hỏa (火) - lửa, bàn là, là ủi", strokes: 15 },
    "扫": { hanViet: "Tảo", radical: "Thủ (扌) - bàn tay, quét dọn", strokes: 6 },
    "拾": { hanViet: "Thập", radical: "Thủ (扌) - bàn tay, thu nhặt, dọn dẹp", strokes: 9 },
    "深": { hanViet: "Thâm", radical: "Thủy (氵) - dòng nước, sâu sắc, đậm màu", strokes: 11 },
    "浅": { hanViet: "Thiển", radical: "Thủy (氵) - dòng nước, nông cạn, nhạt màu", strokes: 8 },
    "姨": { hanViet: "Di", radical: "Nữ (女) - người phụ nữ, dì, cô", strokes: 9 },
    "插": { hanViet: "Sáp", radical: "Thủ (扌) - bàn tay, cắm vào", strokes: 12 },
    "瓶": { hanViet: "Bình", radical: "Ngõa (瓦) - đồ gốm sứ, cái bình hoa", strokes: 10 },
    "杯": { hanViet: "Bôi", radical: "Mộc (木) - cây gỗ, cái cốc chén", strokes: 8 },
    "挂": { hanViet: "Quải", radical: "Thủ (扌) - bàn tay, treo lên", strokes: 9 },
    "扇": { hanViet: "Phiến", radical: "Hộ (户) - cánh cửa, cái quạt", strokes: 10 },
    "墙": { hanViet: "Tường", radical: "Thổ (土) - đất cát, bức tường", strokes: 14 },
    "晚": { hanViet: "Vãn", radical: "Nhật (日) - mặt trời, buổi tối", strokes: 11 },
    "为": { hanViet: "Vị", radical: "Vi (为) - vì, làm", strokes: 4 }
};

// Application State Variables
let currentCourse = "Giao tiếp 1";
let currentLesson = 1;
let fcIndex = 0;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let incorrectQuestions = [];


document.addEventListener('DOMContentLoaded', () => {
    initSPARouter();
    initMobileNav();
    initClassFilters();
    initPinyinChart();
    
    // Default load flashcard and character tab items
    loadFlashcard(fcIndex);
    loadCharacterBreakdowns();

    // Chinese character search filter input event listener
    const searchInput = document.getElementById('char-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            loadCharacterBreakdowns();
        });
    }

    // Restore course and lesson states
    const savedCourse = localStorage.getItem('currentCourse');
    if (savedCourse) currentCourse = savedCourse;
    const savedLesson = localStorage.getItem('currentLesson');
    if (savedLesson) currentLesson = parseInt(savedLesson);

    // Restore section state
    const savedSection = localStorage.getItem('currentSection') || 'home';

    // Initial SPA routing based on URL hash or saved section
    const initialHash = window.location.hash || `#${savedSection}`;
    const sectionId = initialHash.replace('#', '');
    
    if (sectionId === 'lessons-dashboard') {
        enterCourse(currentCourse);
    } else if (sectionId === 'lesson-workspace') {
        enterCourse(currentCourse);
        enterLesson(currentLesson);
    } else {
        const targetSection = document.getElementById(`${sectionId}-section`);
        if (targetSection) {
            navigateToSection(sectionId);
        } else {
            navigateToSection('home');
        }
    }
});

/**
 * --------------------------------------------------------------------------
 * SPA ROUTER & COURSE SELECT SWITCHES
 * --------------------------------------------------------------------------
 */
function initSPARouter() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const logoLink = document.getElementById('logo-link');

    window.navigateToSection = function(sectionId) {
        const targetSection = `${sectionId}-section`;
        const sections = document.querySelectorAll('.app-section');
        
        sections.forEach(sec => {
            sec.classList.remove('active');
            if (sec.id === targetSection) {
                sec.classList.add('active');
            }
        });

        if (sectionId === 'materials') {
            initPinyinChart();
        }

        // Sync active nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        // Save active section to localStorage
        localStorage.setItem('currentSection', sectionId);

        // Push state to sync browser URL hash
        if (window.location.hash !== `#${sectionId}`) {
            history.pushState(null, null, `#${sectionId}`);
        }
    };

    // Add popstate listener to support browser back/forward buttons
    window.addEventListener('popstate', () => {
        const hash = window.location.hash || '#home';
        const sectionId = hash.replace('#', '');
        
        if (sectionId === 'lessons-dashboard') {
            const savedCourse = localStorage.getItem('currentCourse') || 'Giao tiếp 1';
            enterCourse(savedCourse);
        } else if (sectionId === 'lesson-workspace') {
            const savedCourse = localStorage.getItem('currentCourse') || 'Giao tiếp 1';
            const savedLesson = parseInt(localStorage.getItem('currentLesson')) || 1;
            currentCourse = savedCourse;
            enterLesson(savedLesson);
        } else {
            const targetSection = document.getElementById(`${sectionId}-section`);
            if (targetSection) {
                navigateToSection(sectionId);
            }
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHash = link.getAttribute('href');
            navigateToSection(targetHash.replace('#', ''));
            history.pushState(null, null, targetHash);
        });
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHash = link.getAttribute('href');
            
            // Close mobile menu drawer and unlock body scroll
            if (typeof window.closeMobileDrawer === 'function') {
                window.closeMobileDrawer();
            } else {
                const drawer = document.getElementById('mobile-drawer');
                const overlay = document.getElementById('mobile-overlay');
                if (drawer) drawer.classList.remove('open');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            setTimeout(() => {
                navigateToSection(targetHash.replace('#', ''));
                history.pushState(null, null, targetHash);
            }, 300);
        });
    });

    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection('home');
            history.pushState(null, null, '#home');
        });
    }
}

/**
 * --------------------------------------------------------------------------
 * MOBILE MENU DRAWER INTERACTIVITY
 * --------------------------------------------------------------------------
 */
function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const closeBtn = document.getElementById('mobile-close');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');
    
    if (!toggleBtn || !closeBtn || !drawer || !overlay) return;
    
    toggleBtn.addEventListener('click', () => {
        drawer.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    window.closeMobileDrawer = closeDrawer;

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
}

/**
 * --------------------------------------------------------------------------
 * CLASS GRID FILTER TABS
 * --------------------------------------------------------------------------
 */
function initClassFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const classCards = document.querySelectorAll('.class-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            classCards.forEach(card => {
                card.classList.remove('show', 'hide');
                
                if (filterValue === 'all') {
                    card.classList.add('show');
                } else if (card.classList.contains(filterValue)) {
                    card.classList.add('show');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // Auto-trigger default active filter on page load
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) {
        activeBtn.click();
    }
}

/**
 * --------------------------------------------------------------------------
 * COURSE NAVIGATION LOGIC (GIAO TIEP 1 - 4 & HSK 1 - 6)
 * --------------------------------------------------------------------------
 */
window.enterCourse = function(courseName) {
    if (courseName !== "Giao tiếp 1" && courseName !== "Giao tiếp 2" && courseName !== "Từ vựng theo chủ đề") {
        alert(`Khóa học ${courseName} của cô Chang hiện đang được nâng cấp tài liệu tương tác. Bạn vui lòng chọn học lớp 'Giao tiếp 1', 'Giao tiếp 2' hoặc 'Từ vựng theo chủ đề' để khám phá trọn vẹn nhé! 💕`);
        return;
    }

    currentCourse = courseName;
    localStorage.setItem('currentCourse', courseName);
    
    // Update dashboard labels
    document.getElementById('course-badge-title').innerText = `${courseName}`;
    document.getElementById('course-dashboard-title').innerText = `Danh sách bài học của ${courseName}`;
    
    // Hide or show dashboard headers dynamic based on course
    if (courseName === "Từ vựng theo chủ đề") {
        document.getElementById('course-badge-title').style.display = 'none';
        document.getElementById('course-dashboard-title').style.display = 'none';
        document.getElementById('course-dashboard-desc').style.display = 'none';
    } else {
        document.getElementById('course-badge-title').style.display = 'inline-block';
        document.getElementById('course-dashboard-title').style.display = 'block';
        document.getElementById('course-dashboard-desc').style.display = 'block';
    }
    
    // Dynamically render lessons list based on active course
    const gridContainer = document.getElementById('lessons-grid-container');
    if (gridContainer) {
        if (courseName === "Giao tiếp 1") {
            gridContainer.innerHTML = `
                <!-- Lesson 1 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(1)">
                    <div class="lesson-num">Bài 1</div>
                    <h3><span class="chinese-char">你好</span></h3>
                    <p class="lesson-desc-text">Học cách chào hỏi cơ bản, tự giới thiệu tên, tuổi và làm quen bạn bè.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 2 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(2)">
                    <div class="lesson-num">Bài 2</div>
                    <h3><span class="chinese-char">现在几点？</span></h3>
                    <p class="lesson-desc-text">Từ vựng về giờ giấc, ngày tháng, thời gian biểu và các hoạt động thường nhật.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 3 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(3)">
                    <div class="lesson-num">Bài 3</div>
                    <h3><span class="chinese-char">这件毛衣怎么卖？</span></h3>
                    <p class="lesson-desc-text">Mua sắm trang phục, hỏi giá, màu sắc và các loại quần áo thông dụng.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 4 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(4)">
                    <div class="lesson-num">Bài 4</div>
                    <h3><span class="chinese-char">我要一个宫保鸡丁。</span></h3>
                    <p class="lesson-desc-text">Gọi món ăn, diễn đạt sở thích ăn uống và thanh toán hóa đơn bằng tiếng Trung.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 5 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(5)">
                    <div class="lesson-num">Bài 5</div>
                    <h3><span class="chinese-char">你哥哥在哪儿工作？</span></h3>
                    <p class="lesson-desc-text">Từ vựng về gia đình, nghề nghiệp, nơi làm việc và các từ hỏi liên quan.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 6 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(6)">
                    <div class="lesson-num">Bài 6</div>
                    <h3><span class="chinese-char">珍妮在吗？</span></h3>
                    <p class="lesson-desc-text">Giao tiếp qua điện thoại, nhắn tin, gửi thư điện tử và các địa điểm liên quan.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>
            `;
        } else if (courseName === "Giao tiếp 2") {
            gridContainer.innerHTML = `
                <!-- Lesson 7 (Unlocked) -->
                <div class="lesson-card unlocked border-pink cursor-pointer" onclick="enterLesson(7)">
                    <div class="lesson-num">Bài 7</div>
                    <h3><span class="chinese-char">一直走</span></h3>
                    <p class="lesson-desc-text">Từ vựng phương hướng, chỉ đường, phương tiện giao thông, khoảng cách và các tình huống đi lại.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 8 (Unlocked) -->
                <div class="lesson-card unlocked border-pink cursor-pointer" onclick="enterLesson(8)">
                    <div class="lesson-num">Bài 8</div>
                    <h3><span class="chinese-char">你的新家在哪儿？</span></h3>
                    <p class="lesson-desc-text">Hỏi vị trí, phương hướng trong nhà và ngoài phố, đồ đạc gia đình, địa chỉ và cảm nhận môi trường sống.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 9 (Unlocked) -->
                <div class="lesson-card unlocked border-pink cursor-pointer" onclick="enterLesson(9)">
                    <div class="lesson-num">Bài 9</div>
                    <h3><span class="chinese-char">你怎么了？</span></h3>
                    <p class="lesson-desc-text">Giao tiếp sức khỏe, bộ phận cơ thể, các triệu chứng đau ốm, đi khám và dặn dò uống thuốc.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 10 (Unlocked) -->
                <div class="lesson-card unlocked border-pink cursor-pointer" onclick="enterLesson(10)">
                    <div class="lesson-num">Bài 10</div>
                    <h3><span class="chinese-char">你会修电脑吗？</span></h3>
                    <p class="lesson-desc-text">Hỏi về kỹ năng máy tính, khả năng ngoại ngữ, các môn thể thao và sở thích lúc rảnh rỗi.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 11 (Unlocked) -->
                <div class="lesson-card unlocked border-pink cursor-pointer" onclick="enterLesson(11)">
                    <div class="lesson-num">Bài 11</div>
                    <h3><span class="chinese-char">太冷了！</span></h3>
                    <p class="lesson-desc-text">Hỏi đáp thời tiết, bốn mùa trong năm, so sánh nhiệt độ, khí hậu vùng miền và du lịch ngắm cảnh.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 12 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Bài 12</div>
                    <h3><span class="chinese-char">旅行与计划</span></h3>
                    <p class="lesson-desc-text">Lên kế hoạch du lịch, đặt vé, đặt phòng khách sạn và lịch trình.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>
            `;
        } else if (courseName === "Từ vựng theo chủ đề") {
            gridContainer.innerHTML = `
                <!-- Lesson 1 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(1)">
                    <div class="lesson-num">Chủ đề 1</div>
                    <h3><span class="chinese-char">国家</span></h3>
                    <p class="lesson-desc-text">Tích lũy từ vựng về các quốc gia phổ biến trên thế giới: Việt Nam, Trung Quốc, Mỹ, Anh, Pháp, Nhật Bản...</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 2 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Chủ đề 2</div>
                    <h3>Thực phẩm (食物)</h3>
                    <p class="lesson-desc-text">Học tên các món ăn ngon, đồ uống quen thuộc trong bữa ăn hàng ngày.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>

                <!-- Lesson 3 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Chủ đề 3</div>
                    <h3>Giao thông (交通)</h3>
                    <p class="lesson-desc-text">Các phương tiện di chuyển phổ biến và từ vựng thông dụng trên đường đi.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>

                <!-- Lesson 4 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Chủ đề 4</div>
                    <h3>Màu sắc (颜色)</h3>
                    <p class="lesson-desc-text">Khám phá thế giới màu sắc rực rỡ và cách kết hợp mô tả đồ vật sinh động.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>

                <!-- Lesson 5 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Chủ đề 5</div>
                    <h3>Nghề nghiệp (职业)</h3>
                    <p class="lesson-desc-text">Gọi tên các ngành nghề trong xã hội và chia sẻ ước mơ nghề nghiệp tương lai.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>

                <!-- Lesson 6 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Chủ đề 6</div>
                    <h3>Động vật (动物)</h3>
                    <p class="lesson-desc-text">Tên gọi các loài động vật dễ thương xung quanh chúng ta và thế giới tự nhiên.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>
            `;
        }
    }

    // Transition to lessons dashboard
    navigateToSection('lessons-dashboard');
};

window.enterLesson = function(lessonNum) {
    if (lessonNum !== 1 && lessonNum !== 2 && lessonNum !== 3 && lessonNum !== 4 && lessonNum !== 5 && lessonNum !== 6 && lessonNum !== 7 && lessonNum !== 8 && lessonNum !== 9 && lessonNum !== 10 && lessonNum !== 11 && lessonNum !== 12) {
        alert("Bài học này đang được Cô Chang chuẩn bị nội dung. Bạn hãy chọn học các bài đang sẵn sàng nhé! 🥰");
        return;
    }

    currentLesson = lessonNum;
    localStorage.setItem('currentLesson', lessonNum);

    // Load vocab data dynamically based on the course
    if (currentCourse === "Giao tiếp 1") {
        if (lessonNum === 1) {
            VOCAB_DATA = [...GIAO_TIEP_1_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 1 - Bài 1: <span class="chinese-char">你好</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 1 • Bài 1`;
        } else if (lessonNum === 2) {
            VOCAB_DATA = [...GIAO_TIEP_1_B2_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 1 - Bài 2: <span class="chinese-char">现在几点？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 1 • Bài 2`;
        } else if (lessonNum === 3) {
            VOCAB_DATA = [...GIAO_TIEP_1_B3_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 1 - Bài 3: <span class="chinese-char">这件毛衣怎么卖？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 1 • Bài 3`;
        } else if (lessonNum === 4) {
            VOCAB_DATA = [...GIAO_TIEP_1_B4_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 1 - Bài 4: <span class="chinese-char">我要一个宫保鸡丁。</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 1 • Bài 4`;
        } else if (lessonNum === 5) {
            VOCAB_DATA = [...GIAO_TIEP_1_B5_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 1 - Bài 5: <span class="chinese-char">你哥哥在哪儿工作？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 1 • Bài 5`;
        } else if (lessonNum === 6) {
            VOCAB_DATA = [...GIAO_TIEP_1_B6_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 1 - Bài 6: <span class="chinese-char">珍妮在吗？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 1 • Bài 6`;
        }
    } else if (currentCourse === "Giao tiếp 2") {
        if (lessonNum === 7) {
            VOCAB_DATA = [...GIAO_TIEP_2_B7_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 2 - Bài 7: <span class="chinese-char">一直走</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 2 • Bài 7`;
        } else if (lessonNum === 8) {
            VOCAB_DATA = [...GIAO_TIEP_2_B8_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 2 - Bài 8: <span class="chinese-char">你的新家在哪儿？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 2 • Bài 8`;
        } else if (lessonNum === 9) {
            VOCAB_DATA = [...GIAO_TIEP_2_B9_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 2 - Bài 9: <span class="chinese-char">你怎么了？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 2 • Bài 9`;
        } else if (lessonNum === 10) {
            VOCAB_DATA = [...GIAO_TIEP_2_B10_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 2 - Bài 10: <span class="chinese-char">你会修电脑吗？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 2 • Bài 10`;
        } else if (lessonNum === 11) {
            VOCAB_DATA = [...GIAO_TIEP_2_B11_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 2 - Bài 11: <span class="chinese-char">太冷了！</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 2 • Bài 11`;
        } else if (lessonNum === 12) {
            VOCAB_DATA = [...GIAO_TIEP_2_B12_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 2 - Bài 12: <span class="chinese-char">请把桌子擦一下</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 2 • Bài 12`;
        }
    } else if (currentCourse === "Từ vựng theo chủ đề") {
        VOCAB_DATA = [...VOCAB_GUOJIA];
        document.getElementById('workspace-badge').style.display = 'none';
        document.getElementById('workspace-lesson-title').innerHTML = `Từ vựng theo chủ đề - Chủ đề 1: <span class="chinese-char">国家</span>`;
    }
    
    // Reset workspace states
    fcIndex = 0;
    loadFlashcard(fcIndex);
    loadDialogue();
    const searchInput = document.getElementById('char-search-input');
    if (searchInput) searchInput.value = '';
    loadCharacterBreakdowns();
    // Restore saved tab or default to 'flashcard'
    const savedTab = localStorage.getItem('currentTab') || 'flashcard';
    switchLearningTab(savedTab);

    // Update quiz start screen text dynamically
    const quizDescEl = document.getElementById('quiz-intro-desc');
    if (quizDescEl) {
        let lessonName = (currentCourse === "Giao tiếp 1" || currentCourse === "Giao tiếp 2") ? `Bài ${lessonNum}` : `Chủ đề ${lessonNum}`;
        quizDescEl.innerHTML = `Hệ thống tự động thiết kế bộ đề **30 câu hỏi** trắc nghiệm & tự luận đa dạng từ ${VOCAB_DATA.length} từ vựng của ${lessonName} để kiểm tra năng lực của bạn.`;
    }
    
    // Reset quiz startup screen
    document.getElementById('quiz-start-screen').classList.add('active');
    document.getElementById('quiz-play-screen').classList.remove('active');
    document.getElementById('quiz-result-screen').classList.remove('active');

    // Transition to workspace
    navigateToSection('lesson-workspace');
};

window.exitLessonWorkspace = function() {
    navigateToSection('lessons-dashboard');
};

/**
 * --------------------------------------------------------------------------
 * INTERACTIVE WORKSPACE TABS SELECTOR
 * --------------------------------------------------------------------------
 */
window.switchLearningTab = function(tabName) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    // Save active tab to localStorage
    localStorage.setItem('currentTab', tabName);

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `btn-tab-${tabName}`) {
            btn.classList.add('active');
        }
    });

    tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `panel-${tabName}`) {
            panel.classList.add('active');
        }
    });

    if (tabName === 'stroke') {
        loadCharacterBreakdowns();
    }
};

function loadDialogue() {
    const container = document.getElementById('dialogue-content-container');
    if (!container) return;

    container.innerHTML = '';
    
    const courseDialogues = LESSON_DIALOGUES[currentCourse];
    if (!courseDialogues || !courseDialogues[currentLesson]) {
        container.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--color-text-light); font-style: italic;">Bài khóa của bài học này đang được chuẩn bị. Bạn hãy xem các bài khác nhé! 💕</p>';
        const playAllBtn = document.getElementById('btn-play-all-dialogue');
        if (playAllBtn) playAllBtn.style.display = 'none';
        return;
    }

    const playAllBtn = document.getElementById('btn-play-all-dialogue');
    if (playAllBtn) playAllBtn.style.display = 'inline-block';

    const lines = courseDialogues[currentLesson];
    lines.forEach((line, idx) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'dialogue-line';
        lineDiv.id = `dialogue-line-${idx}`;

        let roleClass = 'speaker-a';
        if (line.role === 'b') {
            roleClass = 'speaker-b';
        } else if (line.role === 'teacher') {
            roleClass = 'speaker-teacher';
        }

        lineDiv.innerHTML = `
            <div class="dialogue-speaker">
                <span class="dialogue-speaker-badge ${roleClass}">${line.speaker}</span>
            </div>
            <div class="dialogue-content">
                <span class="dialogue-text-zh">${line.zh}</span>
                <span class="dialogue-text-pinyin">${line.pinyin}</span>
                <span class="dialogue-text-vi">${line.vi}</span>
            </div>
            <button class="speaker-btn dialogue-play-btn" onclick="speakDialogueLine(${idx})" title="Nghe câu này">
                🔊
            </button>
        `;
        container.appendChild(lineDiv);
    });
}

window.speakDialogueLine = function(index) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        // Remove active speaking class from all lines
        const lines = document.querySelectorAll('.dialogue-line');
        lines.forEach(line => line.classList.remove('active-speaking'));

        const currentLineEl = document.getElementById(`dialogue-line-${index}`);
        if (currentLineEl) currentLineEl.classList.add('active-speaking');

        const courseDialogues = LESSON_DIALOGUES[currentCourse];
        const lineData = courseDialogues[currentLesson][index];

        const utterance = new SpeechSynthesisUtterance(lineData.zh);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.85;

        utterance.onend = () => {
            if (currentLineEl) currentLineEl.classList.remove('active-speaking');
        };

        window.speechSynthesis.speak(utterance);
    }
};

window.playAllDialogue = async function() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const courseDialogues = LESSON_DIALOGUES[currentCourse];
        if (!courseDialogues || !courseDialogues[currentLesson]) return;

        const lines = courseDialogues[currentLesson];
        const playBtn = document.getElementById('btn-play-all-dialogue');
        if (playBtn) {
            playBtn.disabled = true;
            playBtn.style.opacity = '0.5';
        }

        for (let i = 0; i < lines.length; i++) {
            // Remove active class from all
            const allLines = document.querySelectorAll('.dialogue-line');
            allLines.forEach(l => l.classList.remove('active-speaking'));

            const lineEl = document.getElementById(`dialogue-line-${i}`);
            if (lineEl) {
                lineEl.classList.add('active-speaking');
                lineEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            await new Promise((resolve) => {
                const utterance = new SpeechSynthesisUtterance(lines[i].zh);
                utterance.lang = 'zh-CN';
                utterance.rate = 0.85;
                utterance.onend = () => {
                    if (lineEl) lineEl.classList.remove('active-speaking');
                    resolve();
                };
                utterance.onerror = () => {
                    if (lineEl) lineEl.classList.remove('active-speaking');
                    resolve();
                };
                window.speechSynthesis.speak(utterance);
            });

            // Pause for 1 second between dialogue turns
            await new Promise(r => setTimeout(r, 1000));
        }

        if (playBtn) {
            playBtn.disabled = false;
            playBtn.style.opacity = '1';
        }
    }
};

/**
 * --------------------------------------------------------------------------
 * FLASHCARD TAB LOGIC
 * --------------------------------------------------------------------------
 */
function loadFlashcard(index) {
    const word = VOCAB_DATA[index];
    const interactiveCard = document.getElementById('interactive-flashcard');
    
    // Reset card flip to front face first
    if (interactiveCard) {
        interactiveCard.classList.remove('flipped');
    }

    // Load textual contents
    document.getElementById('fc-front-char').innerText = word.char;
    document.getElementById('fc-back-char').innerText = word.char;
    document.getElementById('fc-back-pinyin').innerText = word.pinyin;
    document.getElementById('fc-back-meaning').innerText = word.meaning;
    document.getElementById('fc-back-pos').innerText = word.pos;

    // Progress counter
    document.getElementById('fc-progress').innerText = `${index + 1} / ${VOCAB_DATA.length}`;
}

window.flipCard = function() {
    const card = document.getElementById('interactive-flashcard');
    if (card) {
        card.classList.toggle('flipped');
    }
};

window.prevCard = function() {
    fcIndex = (fcIndex - 1 + VOCAB_DATA.length) % VOCAB_DATA.length;
    loadFlashcard(fcIndex);
};

window.nextCard = function() {
    fcIndex = (fcIndex + 1) % VOCAB_DATA.length;
    loadFlashcard(fcIndex);
};

// TTS Speech synthesis for pronunciation audio
window.speakWord = function(event) {
    if (event) {
        event.stopPropagation(); // Avoid triggering card flip click!
    }

    const word = VOCAB_DATA[fcIndex].char;
    speakChineseText(word);
};

function speakChineseText(text) {
    if ('speechSynthesis' in window) {
        // Cancel any active speech first
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN'; // Set Chinese voice
        utterance.rate = 0.8;    // Slightly slower rate for clean learning
        utterance.pitch = 1.0;
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Trình duyệt của bạn hiện chưa hỗ trợ phát âm AI phát ra loa. Bạn hãy thử mở bằng Chrome/Safari để có trải nghiệm tốt nhất nha! 🌸');
    }
}

/**
 * --------------------------------------------------------------------------
 * CHỮ HÁN TAB DYNAMIC BREAKDOWN
 * --------------------------------------------------------------------------
 */
function loadCharacterBreakdowns() {
    const gridContainer = document.getElementById('characters-grid-container');
    if (!gridContainer) return;

    gridContainer.innerHTML = ''; // Reset grid container
    
    const searchInput = document.getElementById('char-search-input');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    // Parse single characters from vocabularies database
    const uniqueChars = [];
    VOCAB_DATA.forEach(word => {
        for (let i = 0; i < word.char.length; i++) {
            const char = word.char[i];
            if (!uniqueChars.includes(char) && CHAR_DATABASE[char]) {
                if (query) {
                    const data = CHAR_DATABASE[char];
                    const matchesChar = char.toLowerCase().includes(query);
                    const matchesHanViet = data.hanViet && data.hanViet.toLowerCase().includes(query);
                    const matchesRadical = data.radical && data.radical.toLowerCase().includes(query);
                    
                    if (!matchesChar && !matchesHanViet && !matchesRadical) {
                        continue;
                    }
                }
                uniqueChars.push(char);
            }
        }
    });

    // Global store for Hanzi Writer instances
    window.writersStore = {};

    window.replayStroke = function(char) {
        if (window.writersStore[char]) {
            window.writersStore[char].animateCharacter();
        }
    };

    // Populate each parsed character details
    uniqueChars.forEach(char => {
        const data = CHAR_DATABASE[char];
        
        const card = document.createElement('div');
        card.className = 'char-analysis-card';
        
        card.innerHTML = `
            <div class="char-analysis-header">
                <div class="char-box-large">${char}</div>
                <div class="char-analysis-summary">
                    <span class="char-pinyin-val" style="font-size: 1.5rem; font-weight: 800; color: var(--color-sky-deep);">${data.hanViet}</span>
                </div>
            </div>
            <div class="char-analysis-body">
                <div class="char-data-row">
                    <strong>Hán Việt:</strong>
                    <span>${data.hanViet}</span>
                </div>
                <div class="char-data-row">
                    <strong>Bộ thủ:</strong>
                    <span>${data.radical}</span>
                </div>
                <div class="char-data-row">
                    <strong>Số nét:</strong>
                    <span>${data.strokes} nét viết</span>
                </div>
                <div class="char-data-row" style="flex-direction: column; gap: 12px; align-items: center; width: 100%;">
                    <strong style="align-self: flex-start;">Bút thuận:</strong>
                    <div class="stroke-animation-wrapper">
                        <div class="stroke-anim-box" id="stroke-writer-${char}"></div>
                        <button class="btn btn-secondary btn-sm stroke-play-btn" onclick="replayStroke('${char}')" style="margin-top: 8px;">
                            🔄 Viết lại
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(card);

        // Initialize Hanzi Writer dynamic stroke drawing
        if (typeof HanziWriter !== 'undefined') {
            try {
                window.writersStore[char] = HanziWriter.create(`stroke-writer-${char}`, char, {
                    width: 110,
                    height: 110,
                    padding: 5,
                    strokeColor: '#0284c7', // Premium Sky blue stroke color
                    outlineColor: '#f1f5f9', // Soft light slate outline
                    drawingColor: '#e11d48',
                    strokeAnimationSpeed: 1.5,
                    delayBetweenStrokes: 200
                });
                
                // Trigger auto animation
                window.writersStore[char].animateCharacter();
            } catch (err) {
                console.warn("HanziWriter initialization failed for: " + char, err);
            }
        }
    });
}

/**
 * --------------------------------------------------------------------------
 * PRACTICE / LUYỆN TẬP 20-QUESTION QUIZ SYSTEM
 * --------------------------------------------------------------------------
 */
window.startQuiz = function() {
    // Generate fresh questions
    generateQuizQuestions();
    
    quizIndex = 0;
    quizScore = 0;
    incorrectQuestions = []; // Reset tracked incorrect questions
    
    // Hide screens, show play screen
    document.getElementById('quiz-start-screen').classList.remove('active');
    document.getElementById('quiz-result-screen').classList.remove('active');
    document.getElementById('quiz-play-screen').classList.add('active');
    
    // Load question 1
    loadQuizQuestion(quizIndex);
};

function generateQuizQuestions() {
    quizQuestions = [];
    
    // Special exact 30-question format for Giao tiếp 2 - Bài 7: 一直走
    if (currentCourse === "Giao tiếp 2" && currentLesson === 7) {
        // --- PART 1: 17 MC Questions (Questions 1 to 17) ---
        const part1MC = [
            { question: `1. Từ <span class="chinese-char">左边</span> có phiên âm là gì?`, ans: "zuǒbiān", opts: ["zuǒbiān", "yòubiān", "dōngbiān", "xībiān"] },
            { question: `2. Từ <span class="chinese-char">右边</span> có nghĩa là gì?`, ans: "Bên phải", opts: ["Bên phải", "Bên trái", "Phía đông", "Phía tây"] },
            { question: `3. Từ <span class="chinese-char">一直走</span> có nghĩa là gì?`, ans: "Đi thẳng", opts: ["Đi thẳng", "Rẽ trái", "Rẽ phải", "Đèn giao thông"] },
            { question: `4. Từ <span class="chinese-char">红绿灯</span> có nghĩa là gì?`, ans: "Đèn giao thông (xanh đỏ)", opts: ["Đèn giao thông (xanh đỏ)", "Ngã tư", "Ngã ba", "Tàu điện ngầm"] },
            { question: `5. Từ <span class="chinese-char">十字路口</span> có nghĩa là gì?`, ans: "Ngã tư", opts: ["Ngã tư", "Ngã ba", "Vòng xuyến", "Đèn đỏ"] },
            { question: `6. Từ <span class="chinese-char">丁字路口</span> có nghĩa là gì?`, ans: "Ngã ba", opts: ["Ngã ba", "Ngã tư", "Vòng xuyến", "Đèn xanh"] },
            { question: `7. Từ <span class="chinese-char">怎么走</span> có nghĩa là gì?`, ans: "Đi như thế nào", opts: ["Đi như thế nào", "Đi thẳng", "Bao xa", "Bao lâu"] },
            { question: `8. Từ <span class="chinese-char">地铁</span> có phiên âm là gì?`, ans: "dìtiě", opts: ["dìtiě", "chūzūchē", "zìxíngchē", "huǒchē"] },
            { question: `9. Từ <span class="chinese-char">出租车</span> có nghĩa là gì?`, ans: "Xe taxi", opts: ["Xe taxi", "Xe đạp", "Xe buýt", "Tàu hỏa"] },
            { question: `10. Từ <span class="chinese-char">骑</span> có nghĩa là gì?`, ans: "Cưỡi, đi (xe đạp, xe máy)", opts: ["Cưỡi, đi (xe đạp, xe máy)", "Ngồi, đi (tàu xe)", "Lái xe ô tô", "Đi bộ"] },
            { question: `11. Từ <span class="chinese-char">坐</span> có nghĩa là gì?`, ans: "Ngồi, đi (tàu, xe, máy bay...)", opts: ["Ngồi, đi (tàu, xe, máy bay...)", "Cưỡi xe", "Lái xe", "Tắc đường"] },
            { question: `12. Từ <span class="chinese-char">堵车</span> có nghĩa là gì?`, ans: "Tắc đường, kẹt xe", opts: ["Tắc đường, kẹt xe", "Say xe", "Đến muộn", "Mệt mỏi"] },
            { question: `13. Từ <span class="chinese-char">晕车</span> có nghĩa là gì?`, ans: "Say xe", opts: ["Say xe", "Say tàu", "Say máy bay", "Mệt mỏi"] },
            { question: `14. Từ <span class="chinese-char">多远</span> có phiên âm là gì?`, ans: "duō yuǎn", opts: ["duō yuǎn", "duō cháng shíjiān", "xiǎoshí", "fēnzhōng"] },
            { question: `15. Từ <span class="chinese-char">迟到</span> có nghĩa là gì?`, ans: "Đến muộn, trễ", opts: ["Đến muộn, trễ", "Tắc đường", "Say xe", "Mệt mỏi"] },
            { question: `16. Từ <span class="chinese-char">因为</span> có nghĩa là gì?`, ans: "Bởi vì", opts: ["Bởi vì", "Tại sao", "Khi/Lúc", "Thường xuyên"] },
            { question: `17. Từ <span class="chinese-char">经常</span> có nghĩa là gì?`, ans: "Thường xuyên, hay", opts: ["Thường xuyên, hay", "Bởi vì", "Sợ rằng", "Cho nên"] }
        ];

        part1MC.forEach(item => {
            quizQuestions.push({
                type: "mc-meaning",
                question: item.question,
                correctAnswer: item.ans,
                options: item.opts
            });
        });

        // --- PART 2: 10 Sentence Rearrangement Questions (Questions 18 to 27) ---
        const part2Rearrange = [
            {
                q: `18. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">去 / 你 / 哪儿 / ？</span>`,
                ans: ["你去哪儿？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>哪<rt>nǎ</rt></ruby><ruby>儿<rt>r</rt></ruby>？`
            },
            {
                q: `19. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">去 / 我 / 机场 / 。</span>`,
                ans: ["我去机场。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>机<rt>jī</rt></ruby><ruby>场<rt>chǎng</rt></ruby>。`
            },
            {
                q: `20. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">去 / 你 / 怎么走 / 机场 / 吗 / 知道 / ？</span>`,
                ans: ["你知道去机场怎么走吗？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>知<rt>zhī</rt></ruby><ruby>道<rt>dào</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>机<rt>jī</rt></ruby><ruby>场<rt>chǎng</rt></ruby><ruby>怎<rt>zěn</rt></ruby><ruby>么<rt>me</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>吗<rt>ma</rt></ruby>？`
            },
            {
                q: `21. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">往 / 一直走 / 拐 / 到 / 右 / 红绿灯 / ， / 。</span>`,
                ans: ["一直走，到红绿灯往右拐。"],
                rubyAns: `<ruby>一<rt>yì</rt></ruby><ruby>直<rt>zhí</rt></ruby><ruby>走<rt>zǒu</rt></ruby>，<ruby>到<rt>dào</rt></ruby><ruby>红<rt>hóng</rt></ruby><ruby>绿<rt>lǜ</rt></ruby><ruby>灯<rt>dēng</rt></ruby><ruby>往<rt>wǎng</rt></ruby><ruby>右<rt>yòu</rt></ruby><ruby>拐<rt>guǎi</rt></ruby>。`
            },
            {
                q: `22. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">这儿 / 就 / 吧 / 停 / 。</span>`,
                ans: ["就停这儿吧。"],
                rubyAns: `<ruby>就<rt>jiù</rt></ruby><ruby>停<rt>tíng</rt></ruby><ruby>这<rt>zhè</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>吧<rt>ba</rt></ruby>。`
            },
            {
                q: `23. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">怎么 / 上班 / 你 / 去 / 每天 / ？</span>`,
                ans: ["你每天怎么去上班？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>每<rt>měi</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>怎<rt>zěn</rt></ruby><ruby>么<rt>me</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>上<rt>shàng</rt></ruby><ruby>班<rt>bān</rt></ruby>？`
            },
            {
                q: `24. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">骑车 / 我 / 去 / 上班 / 每天 / 。</span>`,
                ans: ["我每天骑车去上班。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>每<rt>měi</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>骑<rt>qí</rt></ruby><ruby>车<rt>chē</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>上<rt>shàng</rt></ruby><ruby>班<rt>bān</rt></ruby>。`
            },
            {
                q: `25. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">离 / 远 / 公司 / 你家 / 吗 / ？</span>`,
                ans: ["你家离公司远吗？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>离<rt>lí</rt></ruby><ruby>公<rt>gōng</rt></ruby><ruby>司<rt>sī</rt></ruby><ruby>远<rt>yuǎn</rt></ruby><ruby>吗<rt>ma</rt></ruby>？`
            },
            {
                q: `26. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">很远 / 公司 / 我家 / 离 / 。</span>`,
                ans: ["我家离公司很远。", "我家里公司很远。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>离<rt>lí</rt></ruby><ruby>公<rt>gōng</rt></ruby><ruby>司<rt>sī</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>远<rt>yuǎn</rt></ruby>。`
            },
            {
                q: `27. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">分钟 / 要 / 40 / 走着去 / 。</span>`,
                ans: ["走着去要 40 分钟。", "走着去要四十分钟。"],
                rubyAns: `<ruby>走<rt>zǒu</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>要<rt>yào</rt></ruby> 40 <ruby>分<rt>fēn</rt></ruby><ruby>钟<rt>zhōng</rt></ruby>。`
            }
        ];

        part2Rearrange.forEach(item => {
            quizQuestions.push({
                type: "written-rearrange",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        // --- PART 3: 3 Translation Questions (Questions 28 to 30) ---
        const part3Translation = [
            {
                q: `28. Dịch sang tiếng Trung câu sau:<br><b>"Nhà tôi cách công ty không xa, mỗi ngày tôi lái xe máy (đi) khoảng 10 phút."</b>`,
                ans: ["我家里公司不远，我每天骑摩托车去要十分钟左右。", "我家离公司不远，我每天骑摩托车去要十分钟左右。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>公<rt>gōng</rt></ruby><ruby>司<rt>sī</rt></ruby><ruby>不<rt>bù</rt></ruby><ruby>远<rt>yuǎn</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>每<rt>měi</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>骑<rt>qí</rt></ruby><ruby>摩<rt>mó</rt></ruby><ruby>托<rt>tuō</rt></ruby><ruby>车<rt>chē</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>十<rt>shí</rt></ruby><ruby>分<rt>fēn</rt></ruby><ruby>钟<rt>zhōng</rt></ruby><ruby>左<rt>zuǒ</rt></ruby><ruby>右<rt>yòu</rt></ruby>。`
            },
            {
                q: `29. Dịch sang tiếng Trung câu sau:<br><b>"Bởi vì kẹt xe nên hôm nay tôi đi học trễ"</b>`,
                ans: ["因为堵车，所以我今天上课迟到。"],
                rubyAns: `<ruby>因<rt>yīn</rt></ruby><ruby>为<rt>wèi</rt></ruby><ruby>堵<rt>dǔ</rt></ruby><ruby>车<rt>chē</rt></ruby>，<ruby>所<rt>suǒ</rt></ruby><ruby>以<rt>yǐ</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>上<rt>shàng</rt></ruby><ruby>课<rt>kè</rt></ruby><ruby>迟<rt>chí</rt></ruby><ruby>到<rt>dào</rt></ruby>。`
            },
            {
                q: `30. Dịch sang tiếng Trung câu sau:<br><b>"Mỗi ngày anh trai đều lái xe đưa tôi đi học."</b>`,
                ans: ["我哥哥每天都开车送我上课。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>哥<rt>gē</rt></ruby><ruby>哥<rt>gē</rt></ruby><ruby>每<rt>měi</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>开<rt>kāi</rt></ruby><ruby>车<rt>chē</rt></ruby><ruby>送<rt>sòng</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>上<rt>shàng</rt></ruby><ruby>课<rt>kè</rt></ruby>。`
            }
        ];

        part3Translation.forEach(item => {
            quizQuestions.push({
                type: "written-translation",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        return; // Fixed sequence 1 to 30
    }
    // Special exact 30-question format for Giao tiếp 2 - Bài 8: 你的新家在哪儿？
    if (currentCourse === "Giao tiếp 2" && currentLesson === 8) {
        // --- PART 1: 16 MC Questions (Questions 1 to 16) ---
        const part1MC = [
            { question: `1. Từ <span class="chinese-char">上边</span> có phiên âm là gì?`, ans: "shàngbian", opts: ["shàngbian", "xiàbian", "lǐbian", "wàibian"] },
            { question: `2. Từ <span class="chinese-char">里边</span> có nghĩa là gì?`, ans: "Bên trong", opts: ["Bên trong", "Bên ngoài", "Phía trên", "Phía dưới"] },
            { question: `3. Từ <span class="chinese-char">旁边</span> có nghĩa là gì?`, ans: "Bên cạnh", opts: ["Bên cạnh", "Phía trước", "Phía sau", "Đối diện"] },
            { question: `4. Từ <span class="chinese-char">桌子</span> có nghĩa là gì?`, ans: "Cái bàn", opts: ["Cái bàn", "Cái ghế", "Cái tủ", "Cái giường"] },
            { question: `5. Từ <span class="chinese-char">钥匙</span> có phiên âm là gì?`, ans: "yàoshi", opts: ["yàoshi", "shǒujī", "shūbāo", "bǐdài"] },
            { question: `6. Từ <span class="chinese-char">鞋柜</span> có nghĩa là gì?`, ans: "Tủ giày", opts: ["Tủ giày", "Tủ sách", "Tủ quần áo", "Tủ lạnh"] },
            { question: `7. Từ <span class="chinese-char">冰箱</span> có nghĩa là gì?`, ans: "Tủ lạnh", opts: ["Tủ lạnh", "Ti vi", "Điện thoại", "Cái bàn"] },
            { question: `8. Từ <span class="chinese-char">电话</span> có nghĩa là gì?`, ans: "Điện thoại", opts: ["Điện thoại", "Ti vi", "Tủ lạnh", "Túi xách"] },
            { question: `9. Từ <span class="chinese-char">对面</span> có nghĩa là gì?`, ans: "Đối diện", opts: ["Đối diện", "Gần đây", "Ở giữa", "Bên cạnh"] },
            { question: `10. Từ <span class="chinese-char">附近</span> có phiên âm là gì?`, ans: "fùjìn", opts: ["fùjìn", "duìmiàn", "zhōngjiān", "mǎlù"] },
            { question: `11. Từ <span class="chinese-char">公寓</span> có nghĩa là gì?`, ans: "Căn hộ, chung cư", opts: ["Căn hộ, chung cư", "Sân vận động", "Bến xe", "Trung tâm tiếng Trung"] },
            { question: `12. Từ <span class="chinese-char">地址</span> có nghĩa là gì?`, ans: "Địa chỉ", opts: ["Địa chỉ", "Môi trường", "Căn nhà", "Quận"] },
            { question: `13. Từ <span class="chinese-char">搬</span> có nghĩa là gì?`, ans: "Chuyển, dọn (nhà)", opts: ["Chuyển, dọn (nhà)", "Nghe nói", "Tìm kiếm", "Làm ồn"] },
            { question: `14. Từ <span class="chinese-char">原来</span> có nghĩa là gì?`, ans: "Hóa ra, vốn dĩ, ban đầu", opts: ["Hóa ra, vốn dĩ, ban đầu", "Yên tĩnh", "Thuận tiện", "Nguy hiểm"] },
            { question: `15. Từ <span class="chinese-char">安静</span> có nghĩa là gì?`, ans: "Yên tĩnh, thanh bình", opts: ["Yên tĩnh, thanh bình", "Ồn ào", "An toàn", "Nguy hiểm"] },
            { question: `16. Từ <span class="chinese-char">方便</span> có nghĩa là gì?`, ans: "Thuận tiện, tiện lợi", opts: ["Thuận tiện, tiện lợi", "Ồn ào", "Mới", "Nhỏ"] }
        ];

        part1MC.forEach(item => {
            quizQuestions.push({
                type: "mc-meaning",
                question: item.question,
                correctAnswer: item.ans,
                options: item.opts
            });
        });

        // --- PART 2: 10 Sentence Rearrangement Questions (Questions 17 to 26) ---
        const part2Rearrange = [
            {
                q: `17. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">书 / 我 / 呢 / 的 / ？</span>`,
                ans: ["我的书呢？"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>书<rt>shū</rt></ruby><ruby>呢<rt>ne</rt></ruby>？`
            },
            {
                q: `18. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">桌子 / 报纸 / 上 / 在 / 你的 / 吗 / ？</span>`,
                ans: ["你的报纸在桌子上吗？", "你的报纸在桌子上边吗？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>报<rt>bào</rt></ruby><ruby>纸<rt>zhǐ</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>桌<rt>zhuō</rt></ruby><ruby>子<rt>zi</rt></ruby><ruby>上<rt>shàng</rt></ruby><ruby>吗<rt>ma</rt></ruby>？`
            },
            {
                q: `19. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">杂志 / 你的 / 在 / 下边 / 书 / 。</span>`,
                ans: ["你的书在杂志下边。", "你的书在杂志下面。"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>书<rt>shū</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>杂<rt>zá</rt></ruby><ruby>志<rt>zhì</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>边<rt>bian</rt></ruby>。`
            },
            {
                q: `20. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">找 / 什么 / 你 / 书 / ？</span>`,
                ans: ["你找什么书？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>找<rt>zhǎo</rt></ruby><ruby>什<rt>shén</rt></ruby><ruby>么<rt>me</rt></ruby><ruby>书<rt>shū</rt></ruby>？`
            },
            {
                q: `21. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">汉语书 / 我 / 绿色的 / 要 / 一本 / 。</span>`,
                ans: ["我要一本绿色的汉语书。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>本<rt>běn</rt></ruby><ruby>绿<rt>lǜ</rt></ruby><ruby>色<rt>sè</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>汉<rt>hàn</rt></ruby><ruby>语<rt>yǔ</rt></ruby><ruby>书<rt>shū</rt></ruby>。`
            },
            {
                q: `22. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">搬家 / 你 / 听说 / 了 / 。</span>`,
                ans: ["听说你搬家了。", "听说你搬家了？"],
                rubyAns: `<ruby>听<rt>tīng</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>你<rt>nǐ</rt></ruby><ruby>搬<rt>bān</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>了<rt>le</rt></ruby>。`
            },
            {
                q: `23. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">在哪儿 / 你的 / 新家 / ？</span>`,
                ans: ["你的新家在哪儿？", "你的新家在哪？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>新<rt>xīn</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>哪<rt>nǎ</rt></ruby><ruby>儿<rt>r</rt></ruby>？`
            },
            {
                q: `24. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">ACB 银行 / 在 / 我的 / 旁边 / 新家 / 。</span>`,
                ans: ["我的新家在 ACB 银行旁边。", "我的新家在ACB银行旁边。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>新<rt>xīn</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>在<rt>zài</rt></ruby> ACB <ruby>银<rt>yín</rt></ruby><ruby>行<rt>háng</rt></ruby><ruby>旁<rt>páng</rt></ruby><ruby>边<rt>biān</rt></ruby>。`
            },
            {
                q: `25. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">有一家 / 对面 / 银行 / 大超市 / 。</span>`,
                ans: ["银行对面有一家大超市。"],
                rubyAns: `<ruby>银<rt>yín</rt></ruby><ruby>行<rt>háng</rt></ruby><ruby>对<rt>duì</rt></ruby><ruby>面<rt>miàn</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>大<rt>dà</rt></ruby><ruby>超<rt>chāo</rt></ruby><ruby>市<rt>shì</rt></ruby>。`
            },
            {
                q: `26. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">怎么样 / 那儿 / 环境 / ？</span>`,
                ans: ["那儿环境怎么样？"],
                rubyAns: `<ruby>那<rt>nà</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>环<rt>huán</rt></ruby><ruby>境<rt>jìng</rt></ruby><ruby>怎<rt>zěn</rt></ruby><ruby>么<rt>me</rt></ruby><ruby>样<rt>yàng</rt></ruby>？`
            }
        ];

        part2Rearrange.forEach(item => {
            quizQuestions.push({
                type: "written-rearrange",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        // --- PART 3: 4 Translation Questions (Questions 27 to 30) ---
        const part3Translation = [
            {
                q: `27. Dịch sang tiếng Trung câu sau:<br><b>"Xung quanh nhà tôi có rất nhiều cửa hàng, còn có một siêu thị to, cuộc sống rất thuận tiện."</b>`,
                ans: ["我家周围有很多商店，还有一家大超市，生活非常方便。", "我家附近有很多商店，还有一家大超市，生活非常方便。", "我家周围有很多商店，还有一家大超市，生活很方便。", "我家附近有很多商店，还有一家大超市，生活很方便。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>周<rt>zhōu</rt></ruby><ruby>围<rt>wéi</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>多<rt>duō</rt></ruby><ruby>商<rt>shāng</rt></ruby><ruby>店<rt>diàn</rt></ruby>，<ruby>还<rt>hái</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>大<rt>dà</rt></ruby><ruby>超<rt>chāo</rt></ruby><ruby>市<rt>shì</rt></ruby>，<ruby>生<rt>shēng</rt></ruby><ruby>活<rt>huó</rt></ruby><ruby>非<rt>fēi</rt></ruby><ruby>常<rt>cháng</rt></ruby><ruby>方<rt>fāng</rt></ruby><ruby>便<rt>biàn</rt></ruby>。`
            },
            {
                q: `28. Dịch sang tiếng Trung câu sau:<br><b>"Bởi vì xung quanh nhà cũ không có trạm xe, đi lại không thuận tiện, nên tháng trước tôi đã chuyển nhà rồi."</b>`,
                ans: ["因为旧家附近没有车站，出行不方便，所以上个月我搬家了。", "因为旧家周围没有车站，出行不方便，所以上个月我搬家了。", "因为原来的家附近没有车站，出行不方便，所以上个月我搬家了。", "因为旧家附近没有车站，不方便，所以上个月我搬家了。"],
                rubyAns: `<ruby>因<rt>yīn</rt></ruby><ruby>为<rt>wèi</rt></ruby><ruby>旧<rt>jiù</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>附<rt>fù</rt></ruby><ruby>近<rt>jìn</rt></ruby><ruby>没<rt>méi</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>车<rt>chē</rt></ruby><ruby>站<rt>zhàn</rt></ruby>，<ruby>出<rt>chū</rt></ruby><ruby>行<rt>xíng</rt></ruby><ruby>不<rt>bù</rt></ruby><ruby>方<rt>fāng</rt></ruby><ruby>便<rt>biàn</rt></ruby>，<ruby>所<rt>suǒ</rt></ruby><ruby>以<rt>yǐ</rt></ruby><ruby>上<rt>shàng</rt></ruby><ruby>个<rt>gè</rt></ruby><ruby>月<rt>yuè</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>搬<rt>bān</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>了<rt>le</rt></ruby>。`
            },
            {
                q: `29. Dịch sang tiếng Trung câu sau:<br><b>"Trong ba lô của tôi có 1 cây bút, 2 quyển sách tiếng Trung và 1 quyển vở chép bài."</b>`,
                ans: ["我的书包里有一支笔、两本汉语书和一本笔记本。", "我的书包里边有一支笔、两本汉语书和一本笔记本。", "我的书包里有一支笔、两本中文书和一本笔记本。", "我的书包里边有一支笔、两本中文书和一本笔记本。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>书<rt>shū</rt></ruby><ruby>包<rt>bāo</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>支<rt>zhī</rt></ruby><ruby>笔<rt>bǐ</rt></ruby>、<ruby>两<rt>liǎng</rt></ruby><ruby>本<rt>běn</rt></ruby><ruby>汉<rt>hàn</rt></ruby><ruby>语<rt>yǔ</rt></ruby><ruby>书<rt>shū</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>本<rt>běn</rt></ruby><ruby>笔<rt>bǐ</rt></ruby><ruby>记<rt>jì</rt></ruby><ruby>本<rt>běn</rt></ruby>。`
            },
            {
                q: `30. Dịch sang tiếng Trung câu sau:<br><b>"Nhà mới của chúng tôi hiện tại chưa có tủ lạnh, giường và tủ quần áo."</b>`,
                ans: ["我们的新家现在还没有冰箱、床和衣柜。", "我们的新家现在没有冰箱、床和衣柜。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>新<rt>xīn</rt></ruby><ruby>家<rt>jiā</rt></ruby><ruby>现<rt>xiàn</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>还<rt>hái</rt></ruby><ruby>没<rt>méi</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>冰<rt>bīng</rt></ruby><ruby>箱<rt>xiāng</rt></ruby>、<ruby>床<rt>chuáng</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>衣<rt>yī</rt></ruby><ruby>柜<rt>guì</rt></ruby>。`
            }
        ];

        part3Translation.forEach(item => {
            quizQuestions.push({
                type: "written-translation",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        return; // Fixed sequence 1 to 30
    }
    // Special exact 30-question format for Giao tiếp 2 - Bài 9: 你怎么了？
    if (currentCourse === "Giao tiếp 2" && currentLesson === 9) {
        // --- PART 1: 16 MC Questions (Questions 1 to 16) ---
        const part1MC = [
            { question: `1. Từ <span class="chinese-char">眼睛</span> có phiên âm là gì?`, ans: "yǎnjing", opts: ["yǎnjing", "bízi", "ěrduo", "dùzi"] },
            { question: `2. Từ <span class="chinese-char">肚子</span> có nghĩa là gì?`, ans: "Bụng", opts: ["Bụng", "Cẳng chân", "Cánh tay", "Đôi mắt"] },
            { question: `3. Từ <span class="chinese-char">发烧</span> có nghĩa là gì?`, ans: "Phát sốt, bị sốt", opts: ["Phát sốt, bị sốt", "Bị ho", "Đau đầu", "Mệt mỏi"] },
            { question: `4. Từ <span class="chinese-char">咳嗽</span> có phiên âm là gì?`, ans: "késou", opts: ["késou", "fāshāo", "gǎnmào", "shēngbìng"] },
            { question: `5. Từ <span class="chinese-char">生病</span> có nghĩa là gì?`, ans: "Bị bệnh, ốm đau", opts: ["Bị bệnh, ốm đau", "Khỏe mạnh", "Nghỉ ngơi", "Uống thuốc"] },
            { question: `6. Từ <span class="chinese-char">药店</span> có nghĩa là gì?`, ans: "Tiệm thuốc, nhà thuốc", opts: ["Tiệm thuốc, nhà thuốc", "Bệnh viện", "Công ty", "Siêu thị"] },
            { question: `7. Từ <span class="chinese-char">体温</span> có nghĩa là gì?`, ans: "Thân nhiệt, nhiệt độ cơ thể", opts: ["Thân nhiệt, nhiệt độ cơ thể", "Huyết áp", "Chiều cao", "Cân nặng"] },
            { question: `8. Từ <span class="chinese-char">打针</span> có nghĩa là gì?`, ans: "Tiêm thuốc, chích thuốc", opts: ["Tiêm thuốc, chích thuốc", "Uống thuốc", "Tái khám", "Đo nhiệt độ"] },
            { question: `9. Lượng từ phù hợp cho <span class="chinese-char">药</span> (viên, lát) là gì?`, ans: "片", opts: ["片", "本", "张", "把"] },
            { question: `10. Từ <span class="chinese-char">熬夜</span> có phiên âm là gì?`, ans: "áoyè", opts: ["áoyè", "xiūxi", "qǐngjià", "kànbìng"] },
            { question: `11. Từ <span class="chinese-char">请病假</span> có nghĩa là gì?`, ans: "Xin nghỉ ốm", opts: ["Xin nghỉ ốm", "Xin nghỉ phép", "Xin đi làm", "Xin tăng lương"] },
            { question: `12. Từ <span class="chinese-char">嗓子疼</span> có nghĩa là gì?`, ans: "Đau họng, rát cổ họng", opts: ["Đau họng, rát cổ họng", "Đau răng", "Đau đầu", "Đau chân"] },
            { question: `13. Từ <span class="chinese-char">拉肚子</span> có nghĩa là gì?`, ans: "Tiêu chảy, đau bụng đi ngoài", opts: ["Tiêu chảy, đau bụng đi ngoài", "Đau dạ dày", "Say xe", "Cảm cúm"] },
            { question: `14. Từ <span class="chinese-char">胃疼</span> có nghĩa là gì?`, ans: "Đau dạ dày, đau bao tử", opts: ["Đau dạ dày, đau bao tử", "Đau bụng kinh", "Đau lưng", "Đau tai"] },
            { question: `15. Từ <span class="chinese-char">食物中毒</span> có nghĩa là gì?`, ans: "Ngộ độc thực phẩm", opts: ["Ngộ độc thực phẩm", "Say nắng", "Dị ứng", "Say sóng"] },
            { question: `16. Từ <span class="chinese-char">西药</span> có nghĩa là gì?`, ans: "Thuốc tây", opts: ["Thuốc tây", "Thuốc bắc, đông y", "Trà thảo mộc", "Nước khoáng"] }
        ];

        part1MC.forEach(item => {
            quizQuestions.push({
                type: "mc-meaning",
                question: item.question,
                correctAnswer: item.ans,
                options: item.opts
            });
        });

        // --- PART 2: 10 Sentence Rearrangement Questions (Questions 17 to 26) ---
        const part2Rearrange = [
            {
                q: `17. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">你 / 怎么 / 了 / ？</span>`,
                ans: ["你怎么了？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>怎<rt>zěn</rt></ruby><ruby>么<rt>me</rt></ruby><ruby>了<rt>le</rt></ruby>？`
            },
            {
                q: `18. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">身体 / 不舒服 / 很 / 我 / 。</span>`,
                ans: ["我身体很不舒服。", "我很不舒服。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>身<rt>shēn</rt></ruby><ruby>体<rt>tǐ</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>不<rt>bù</rt></ruby><ruby>舒<rt>shū</rt></ruby><ruby>服<rt>fu</rt></ruby>。`
            },
            {
                q: `19. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">有一点儿 / 头疼 / 发烧 / 和 / 我 / 。</span>`,
                ans: ["我有一点儿头疼和发烧。", "我头疼和有一点儿发烧。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>头<rt>tóu</rt></ruby><ruby>疼<rt>téng</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>发<rt>fā</rt></ruby><ruby>烧<rt>shāo</rt></ruby>。`
            },
            {
                q: `20. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">医生 / 肚子 / 疼 / 我的 / 很 / 。</span>`,
                ans: ["医生，我的肚子很疼。", "医生我的肚子很疼。"],
                rubyAns: `<ruby>医<rt>yī</rt></ruby><ruby>生<rt>shēng</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>肚<rt>dù</rt></ruby><ruby>子<rt>zi</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>疼<rt>téng</rt></ruby>。`
            },
            {
                q: `21. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">每天 / 三次 / 吃 / 要 / 药 / 你 / 。</span>`,
                ans: ["你每天要吃三次药。", "每天你要吃三次药。"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>每<rt>měi</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>三<rt>sān</rt></ruby><ruby>次<rt>cì</rt></ruby><ruby>药<rt>yào</rt></ruby>。`
            },
            {
                q: `22. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">这个药 / 饭后 / 要 / 吃 / 。</span>`,
                ans: ["这个药要饭后吃。"],
                rubyAns: `<ruby>这<rt>zhè</rt></ruby><ruby>个<rt>ge</rt></ruby><ruby>药<rt>yào</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>饭<rt>fàn</rt></ruby><ruby>后<rt>hòu</rt></ruby><ruby>吃<rt>chī</rt></ruby>。`
            },
            {
                q: `23. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">请病假 / 今天 / 我想 / 一天 / 。</span>`,
                ans: ["今天我想请病假一天。", "我想今天请病假一天。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>请<rt>qǐng</rt></ruby><ruby>病<rt>bìng</rt></ruby><ruby>假<rt>jià</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>天<rt>tiān</rt></ruby>。`
            },
            {
                q: `24. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">多 / 要 / 你 / 喝水 / 休息 / 多 / 。</span>`,
                ans: ["你要多喝水，多休息。", "你要多喝水多休息。"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>多<rt>duō</rt></ruby><ruby>喝<rt>hē</rt></ruby><ruby>水<rt>shuǐ</rt></ruby>，<ruby>多<rt>duō</rt></ruby><ruby>休<rt>xiū</rt></ruby><ruby>息<rt>xi</rt></ruby>。`
            },
            {
                q: `25. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">别 / 熬夜 / 了 / 早点儿 / 休息 / 吧 / 。</span>`,
                ans: ["别熬夜了，早点儿休息吧。", "别熬夜了早点儿休息吧。"],
                rubyAns: `<ruby>别<rt>bié</rt></ruby><ruby>熬<rt>áo</rt></ruby><ruby>夜<rt>yè</rt></ruby><ruby>了<rt>le</rt></ruby>，<ruby>早<rt>zǎo</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>休<rt>xiū</rt></ruby><ruby>息<rt>xi</rt></ruby><ruby>吧<rt>ba</rt></ruby>。`
            },
            {
                q: `26. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">去 / 我 / 一起 / 看病 / 跟你 / 医院 / 。</span>`,
                ans: ["我跟你一起去医院看病。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>跟<rt>gēn</rt></ruby><ruby>你<rt>nǐ</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>起<rt>qǐ</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>医<rt>yī</rt></ruby><ruby>院<rt>yuàn</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>病<rt>bìng</rt></ruby>。`
            }
        ];

        part2Rearrange.forEach(item => {
            quizQuestions.push({
                type: "written-rearrange",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        // --- PART 3: 4 Translation Questions (Questions 27 to 30) ---
        const part3Translation = [
            {
                q: `27. Dịch sang tiếng Trung câu sau:<br><b>"Hôm nay tôi thấy trong người hơi khó chịu, đầu vừa đau vừa phát sốt."</b>`,
                ans: ["今天我身体有点儿不舒服，头疼而且发烧。", "今天我身体有一点儿不舒服，头疼而且发烧。", "今天我身体有一点儿不舒服，又头疼又发烧。", "今天我身体有点儿不舒服，又头疼又发烧。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>身<rt>shēn</rt></ruby><ruby>体<rt>tǐ</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>不<rt>bù</rt></ruby><ruby>舒<rt>shū</rt></ruby><ruby>服<rt>fu</rt></ruby>，<ruby>头<rt>tóu</rt></ruby><ruby>疼<rt>téng</rt></ruby><ruby>而<rt>ér</rt></ruby><ruby>且<rt>qiě</rt></ruby><ruby>发<rt>fā</rt></ruby><ruby>烧<rt>shāo</rt></ruby>。`
            },
            {
                q: `28. Dịch sang tiếng Trung câu sau:<br><b>"Bác sĩ nói tôi bị cảm cúm rồi, cần phải uống thuốc đúng giờ và nghỉ ngơi nhiều."</b>`,
                ans: ["医生说我感冒了，要按时吃药，多休息。", "医生说我感冒了，得按时吃药，多休息。", "医生说我感冒了，要吃药，多休息。"],
                rubyAns: `<ruby>医<rt>yī</rt></ruby><ruby>生<rt>shēng</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>感<rt>gǎn</rt></ruby><ruby>冒<rt>mào</rt></ruby><ruby>了<rt>le</rt></ruby>，<ruby>要<rt>yào</rt></ruby><ruby>按<rt>àn</rt></ruby><ruby>时<rt>shí</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>药<rt>yào</rt></ruby>，<ruby>多<rt>duō</rt></ruby><ruby>休<rt>xiū</rt></ruby><ruby>息<rt>xi</rt></ruby>。`
            },
            {
                q: `29. Dịch sang tiếng Trung câu sau:<br><b>"Thuốc này mỗi ngày uống ba lần, mỗi lần hai viên, uống sau bữa ăn nhé."</b>`,
                ans: ["这个药每天吃三次，每次两片，饭后吃。", "这个药每天吃三次，每次两片，饭后吃吧。", "这药每天吃三次，每次两片，饭后吃。"],
                rubyAns: `<ruby>这<rt>zhè</rt></ruby><ruby>个<rt>ge</rt></ruby><ruby>药<rt>yào</rt></ruby><ruby>每<rt>měi</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>三<rt>sān</rt></ruby><ruby>次<rt>cì</rt></ruby>，<ruby>每<rt>měi</rt></ruby><ruby>次<rt>cì</rt></ruby><ruby>两<rt>liǎng</rt></ruby><ruby>片<rt>piàn</rt></ruby>，<ruby>饭<rt>fàn</rt></ruby><ruby>后<rt>hòu</rt></ruby><ruby>吃<rt>chī</rt></ruby>。`
            },
            {
                q: `30. Dịch sang tiếng Trung câu sau:<br><b>"Bởi vì hôm qua tôi bị ngộ độc thực phẩm và đau bụng, nên hôm nay tôi muốn xin sếp nghỉ ốm một ngày."</b>`,
                ans: ["因为昨天我食物中毒而且肚子疼，所以今天我想跟老板请一天病假。", "因为昨天我食物中毒肚子疼，所以今天我想跟老板请病假一天。", "因为昨天我食物中毒拉肚子，所以今天我想跟老板请一天病假。"],
                rubyAns: `<ruby>因<rt>yīn</rt></ruby><ruby>为<rt>wèi</rt></ruby><ruby>昨<rt>zuó</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>食<rt>shí</rt></ruby><ruby>物<rt>wù</rt></ruby><ruby>中<rt>zhòng</rt></ruby><ruby>毒<rt>dú</rt></ruby><ruby>而<rt>ér</rt></ruby><ruby>且<rt>qiě</rt></ruby><ruby>肚<rt>dù</rt></ruby><ruby>子<rt>zi</rt></ruby><ruby>疼<rt>téng</rt></ruby>，<ruby>所<rt>suǒ</rt></ruby><ruby>以<rt>yǐ</rt></ruby><ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>跟<rt>gēn</rt></ruby><ruby>老<rt>lǎo</rt></ruby><ruby>板<rt>bǎn</rt></ruby><ruby>请<rt>qǐng</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>病<rt>bìng</rt></ruby><ruby>假<rt>jià</rt></ruby>。`
            }
        ];

        part3Translation.forEach(item => {
            quizQuestions.push({
                type: "written-translation",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        return; // Fixed sequence 1 to 30
    }
    // Special exact 30-question format for Giao tiếp 2 - Bài 10: 你会修电脑吗？
    if (currentCourse === "Giao tiếp 2" && currentLesson === 10) {
        // --- PART 1: 16 MC Questions (Questions 1 to 16) ---
        const part1MC = [
            { question: `1. Từ <span class="chinese-char">加拿大</span> có phiên âm là gì?`, ans: "Jiānádà", opts: ["Jiānádà", "Xīnjiāpō", "Éyǔ", "Tàiyǔ"] },
            { question: `2. Từ <span class="chinese-char">新加坡</span> có nghĩa là gì?`, ans: "Singapore", opts: ["Singapore", "Canada", "Thái Lan", "Ấn Độ"] },
            { question: `3. Từ <span class="chinese-char">混血</span> có nghĩa là gì?`, ans: "Con lai, mang hai dòng máu", opts: ["Con lai, mang hai dòng máu", "Người nước ngoài", "Du học sinh", "Bạn cùng phòng"] },
            { question: `4. Từ <span class="chinese-char">修</span> có nghĩa là gì?`, ans: "Sửa, sửa chữa", opts: ["Sửa, sửa chữa", "Hỏng hóc", "Mua sắm", "Bán hàng"] },
            { question: `5. Từ <span class="chinese-char">手提电脑</span> có nghĩa là gì?`, ans: "Máy tính xách tay, laptop", opts: ["Máy tính xách tay, laptop", "Máy tính để bàn", "Máy tính bảng", "Điện thoại"] },
            { question: `6. Từ <span class="chinese-char">病毒</span> có phiên âm là gì?`, ans: "bìngdú", opts: ["bìngdú", "diànnǎo", "táidēng", "kěnéng"] },
            { question: `7. Từ <span class="chinese-char">游泳</span> có nghĩa là gì?`, ans: "Bơi, bơi lội", opts: ["Bơi, bơi lội", "Trượt băng", "Chạy bộ", "Leo núi"] },
            { question: `8. Từ <span class="chinese-char">打羽毛球</span> có nghĩa là gì?`, ans: "Đánh cầu lông", opts: ["Đánh cầu lông", "Chơi bóng rổ", "Đá bóng", "Đánh tennis"] },
            { question: `9. Từ <span class="chinese-char">踢毽子</span> có nghĩa là gì?`, ans: "Đá cầu", opts: ["Đá cầu", "Đá bóng", "Tập yoga", "Đi dạo"] },
            { question: `10. Từ <span class="chinese-char">练瑜伽</span> có phiên âm là gì?`, ans: "liàn yújiā", opts: ["liàn yújiā", "dǎ lánqiú", "tī zúqiú", "pǎobù"] },
            { question: `11. Cụm từ <span class="chinese-char">玩电子游戏</span> có nghĩa là gì?`, ans: "Chơi game, chơi trò chơi điện tử", opts: ["Chơi game, chơi trò chơi điện tử", "Xem phim", "Đọc sách", "Mua sắm"] },
            { question: `12. Từ <span class="chinese-char">空儿</span> có nghĩa là gì?`, ans: "Thời gian rảnh rỗi, rảnh", opts: ["Thời gian rảnh rỗi, rảnh", "Bận rộn", "Không gian", "Công việc"] },
            { question: `13. Từ <span class="chinese-char">语言学校</span> có nghĩa là gì?`, ans: "Trường dạy ngoại ngữ", opts: ["Trường dạy ngoại ngữ", "Bể bơi", "Phòng tập thể hình", "Bệnh viện"] },
            { question: `14. Từ <span class="chinese-char">健身房</span> có nghĩa là gì?`, ans: "Phòng tập gym, phòng thể hình", opts: ["Phòng tập gym, phòng thể hình", "Bể bơi", "Sân bóng đá", "Nhà hát"] },
            { question: `15. Từ <span class="chinese-char">逛街</span> có phiên âm là gì?`, ans: "guàngjiē", opts: ["guàngjiē", "kāichē", "zuòfàn", "liáotiān"] },
            { question: `16. Từ <span class="chinese-char">极了</span> có nghĩa là gì?`, ans: "Cực kỳ, vô cùng", opts: ["Cực kỳ, vô cùng", "Một chút", "Không tệ", "Bình thường"] }
        ];

        part1MC.forEach(item => {
            quizQuestions.push({
                type: "mc-meaning",
                question: item.question,
                correctAnswer: item.ans,
                options: item.opts
            });
        });

        // --- PART 2: 10 Sentence Rearrangement Questions (Questions 17 to 26) ---
        const part2Rearrange = [
            {
                q: `17. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">修 / 电脑 / 会 / 你 / 吗 / ？</span>`,
                ans: ["你会修电脑吗？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>修<rt>xiū</rt></ruby><ruby>电<rt>diàn</rt></ruby><ruby>脑<rt>nǎo</rt></ruby><ruby>吗<rt>ma</rt></ruby>？`
            },
            {
                q: `18. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">我的 / 坏 / 电脑 / 手提 / 了 / 。</span>`,
                ans: ["我的手提电脑坏了。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>手<rt>shǒu</rt></ruby><ruby>提<rt>tí</rt></ruby><ruby>电<rt>diàn</rt></ruby><ruby>脑<rt>nǎo</rt></ruby><ruby>坏<rt>huài</rt></ruby><ruby>了<rt>le</rt></ruby>。`
            },
            {
                q: `19. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">说 / 汉语 / 得 / 好 / 你 / 很 / 。</span>`,
                ans: ["你说汉语说得很好。", "你汉语说得很好。"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>汉<rt>hàn</rt></ruby><ruby>语<rt>yǔ</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>得<rt>de</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>好<rt>hǎo</rt></ruby>。`
            },
            {
                q: `20. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">法语 / 会 / 我 / 一点儿 / 说 / 。</span>`,
                ans: ["我会说一点儿法语。", "我说法语会一点儿。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>法<rt>fǎ</rt></ruby><ruby>语<rt>yǔ</rt></ruby>。`
            },
            {
                q: `21. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">有空儿 / 你 / 的 / 时候 / 喜欢 / 做什么 / ？</span>`,
                ans: ["你有空儿的时候喜欢做什么？"],
                rubyAns: `<ruby>你<rt>nǐ</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>空<rt>kòng</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>时<rt>shí</rt></ruby><ruby>候<rt>hou</rt></ruby><ruby>喜<rt>xǐ</rt></ruby><ruby>欢<rt>huan</rt></ruby><ruby>做<rt>zuò</rt></ruby><ruby>什<rt>shén</rt></ruby><ruby>么<rt>me</rt></ruby>？`
            },
            {
                q: `22. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">常常 / 我 / 去 / 健身 / 健身房 / 。</span>`,
                ans: ["我常常去健身房健身。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>常<rt>cháng</rt></ruby><ruby>常<rt>cháng</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>健<rt>jiàn</rt></ruby><ruby>身<rt>shēn</rt></ruby><ruby>房<rt>fáng</rt></ruby><ruby>健<rt>jiàn</rt></ruby><ruby>身<rt>shēn</rt></ruby>。`
            },
            {
                q: `23. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">周末 / 这个 / 羽毛球 / 打 / 去 / 我们 / 吧 / 一起 / ！</span>`,
                ans: ["这个周末我们一起去打羽毛球吧！", "我们这个周末一起去打羽毛球吧！"],
                rubyAns: `<ruby>这<rt>zhè</rt></ruby><ruby>个<rt>ge</rt></ruby><ruby>周<rt>zhōu</rt></ruby><ruby>末<rt>mò</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>起<rt>qǐ</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>羽<rt>yǔ</rt></ruby><ruby>毛<rt>máo</rt></ruby><ruby>球<rt>qiú</rt></ruby><ruby>吧<rt>ba</rt></ruby>！`
            },
            {
                q: `24. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">泰语 / 说 / 不太会 / 他 / 。</span>`,
                ans: ["他不太会说泰语。"],
                rubyAns: `<ruby>他<rt>tā</rt></ruby><ruby>不<rt>bú</rt></ruby><ruby>太<rt>tài</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>泰<rt>tài</rt></ruby><ruby>语<rt>yǔ</rt></ruby>。`
            },
            {
                q: `25. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">喜欢 / 玩 / 电子游戏 / 弟弟 / 总是 / 。</span>`,
                ans: ["弟弟总是喜欢玩电子游戏。"],
                rubyAns: `<ruby>弟<rt>dì</rt></ruby><ruby>弟<rt>di</rt></ruby><ruby>总<rt>zǒng</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>喜<rt>xǐ</rt></ruby><ruby>欢<rt>huan</rt></ruby><ruby>玩<rt>wán</rt></ruby><ruby>电<rt>diàn</rt></ruby><ruby>子<rt>zǐ</rt></ruby><ruby>游<rt>yóu</rt></ruby><ruby>戏<rt>xì</rt></ruby>。`
            },
            {
                q: `26. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">以后 / 下课 / 去 / 散步 / 我们 / 吧 / 。</span>`,
                ans: ["下课以后我们去散步吧。"],
                rubyAns: `<ruby>下<rt>xià</rt></ruby><ruby>课<rt>kè</rt></ruby><ruby>以<rt>yǐ</rt></ruby><ruby>后<rt>hòu</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>散<rt>sàn</rt></ruby><ruby>步<rt>bù</rt></ruby><ruby>吧<rt>ba</rt></ruby>。`
            }
        ];

        part2Rearrange.forEach(item => {
            quizQuestions.push({
                type: "written-rearrange",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        // --- PART 3: 4 Translation Questions (Questions 27 to 30) ---
        const part3Translation = [
            {
                q: `27. Dịch sang tiếng Trung câu sau:<br><b>"Máy tính xách tay của tôi bị hỏng rồi, bạn biết sửa máy tính không?"</b>`,
                ans: ["我的手提电脑坏了，你会修电脑吗？", "我的电脑坏了，你会修电脑吗？"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>手<rt>shǒu</rt></ruby><ruby>提<rt>tí</rt></ruby><ruby>电<rt>diàn</rt></ruby><ruby>脑<rt>nǎo</rt></ruby><ruby>坏<rt>huài</rt></ruby><ruby>了<rt>le</rt></ruby>，<ruby>你<rt>nǐ</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>修<rt>xiū</rt></ruby><ruby>电<rt>diàn</rt></ruby><ruby>脑<rt>nǎo</rt></ruby><ruby>吗<rt>ma</rt></ruby>？`
            },
            {
                q: `28. Dịch sang tiếng Trung câu sau:<br><b>"Anh ấy là con lai Canada, biết nói tiếng Anh, tiếng Pháp và một chút tiếng Trung."</b>`,
                ans: ["他是加拿大混血，会说英语、法语和一点儿汉语。", "他是加拿大混血，会说英语、法语和一点儿中文。"],
                rubyAns: `<ruby>他<rt>tā</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>加<rt>jiā</rt></ruby><ruby>拿<rt>ná</rt></ruby><ruby>大<rt>dà</rt></ruby><ruby>混<rt>hùn</rt></ruby><ruby>血<rt>xuè</rt></ruby>，<ruby>会<rt>huì</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>英<rt>yīng</rt></ruby><ruby>语<rt>yǔ</rt></ruby>、<ruby>法<rt>fǎ</rt></ruby><ruby>语<rt>yǔ</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>汉<rt>hàn</rt></ruby><ruby>语<rt>yǔ</rt></ruby>。`
            },
            {
                q: `29. Dịch sang tiếng Trung câu sau:<br><b>"Những lúc rảnh rỗi tôi thường đến phòng gym tập thể hình hoặc đi bơi."</b>`,
                ans: ["有空儿的时候，我常常去健身房健身或者去游泳。", "有空的时候，我常常去健身房健身或者去游泳。", "有空儿的时候我常常去健身房健身或者去游泳。"],
                rubyAns: `<ruby>有<rt>yǒu</rt></ruby><ruby>空<rt>kòng</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>时<rt>shí</rt></ruby><ruby>候<rt>hou</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>常<rt>cháng</rt></ruby><ruby>常<rt>cháng</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>健<rt>jiàn</rt></ruby><ruby>身<rt>shēn</rt></ruby><ruby>房<rt>fáng</rt></ruby><ruby>健<rt>jiàn</rt></ruby><ruby>身<rt>shēn</rt></ruby><ruby>或<rt>huò</rt></ruby><ruby>者<rt>zhě</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>游<rt>yóu</rt></ruby><ruby>泳<rt>yǒng</rt></ruby>。`
            },
            {
                q: `30. Dịch sang tiếng Trung câu sau:<br><b>"Cuối tuần này bạn có rảnh không? Chúng mình cùng đi đánh cầu lông nhé!"</b>`,
                ans: ["这个周末你有空儿吗？我们一起去打羽毛球吧！", "这个周末你有空吗？我们一起去打羽毛球吧！"],
                rubyAns: `<ruby>这<rt>zhè</rt></ruby><ruby>个<rt>ge</rt></ruby><ruby>周<rt>zhōu</rt></ruby><ruby>末<rt>mò</rt></ruby><ruby>你<rt>nǐ</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>空<rt>kòng</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>吗<rt>ma</rt></ruby>？<ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>起<rt>qǐ</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>羽<rt>yǔ</rt></ruby><ruby>毛<rt>máo</rt></ruby><ruby>球<rt>qiú</rt></ruby><ruby>吧<rt>ba</rt></ruby>！`
            }
        ];

        part3Translation.forEach(item => {
            quizQuestions.push({
                type: "written-translation",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        return; // Fixed sequence 1 to 30
    }
    // Special exact 30-question format for Giao tiếp 2 - Bài 11: 太冷了！
    if (currentCourse === "Giao tiếp 2" && currentLesson === 11) {
        // --- PART 1: 16 MC Questions (Questions 1 to 16) ---
        const part1MC = [
            { question: `1. Từ <span class="chinese-char">晴</span> có nghĩa là gì?`, ans: "Trời nắng, quang đãng", opts: ["Trời nắng, quang đãng", "Trời mưa to", "Trời âm u", "Trời nhiều sương mù"] },
            { question: `2. Từ <span class="chinese-char">多云</span> có phiên âm là gì?`, ans: "duōyún", opts: ["duōyún", "xiàyǔ", "guāfēng", "xiàxuě"] },
            { question: `3. Từ <span class="chinese-char">下雪</span> có nghĩa là gì?`, ans: "Tuyết rơi", opts: ["Tuyết rơi", "Mưa bão", "Sương mù", "Gió giật"] },
            { question: `4. Từ <span class="chinese-char">气温</span> có nghĩa là gì?`, ans: "Nhiệt độ không khí, nhiệt độ", opts: ["Nhiệt độ không khí, nhiệt độ", "Khí hậu", "Mùa màng", "Thời tiết"] },
            { question: `5. Từ <span class="chinese-char">暖和</span> có phiên âm là gì?`, ans: "nuǎnhuo", opts: ["nuǎnhuo", "liángkuai", "gānzào", "cháoshī"] },
            { question: `6. Từ <span class="chinese-char">凉快</span> có nghĩa là gì?`, ans: "Mát mẻ, dễ chịu", opts: ["Mát mẻ, dễ chịu", "Lạnh giá", "Nóng nực", "Hanh khô"] },
            { question: `7. Từ <span class="chinese-char">潮湿</span> có nghĩa là gì?`, ans: "Ẩm ướt, nồm ẩm", opts: ["Ẩm ướt, nồm ẩm", "Hanh khô", "Ấm áp", "Lạnh buốt"] },
            { question: `8. Từ <span class="chinese-char">雨季</span> có nghĩa là gì?`, ans: "Mùa mưa", opts: ["Mùa mưa", "Mùa khô", "Mùa đông", "Mùa xuân"] },
            { question: `9. Địa danh <span class="chinese-char">哈尔滨</span> là thành phố nào?`, ans: "Cáp Nhĩ Tân", opts: ["Cáp Nhĩ Tân", "Tô Châu", "Hàng Châu", "Lệ Giang"] },
            { question: `10. Từ <span class="chinese-char">冰灯</span> có phiên âm là gì?`, ans: "bīngdēng", opts: ["bīngdēng", "táidēng", "fēngjǐng", "yǔsǎn"] },
            { question: `11. Cụm từ <span class="chinese-char">天气预报</span> có nghĩa là gì?`, ans: "Dự báo thời tiết", opts: ["Dự báo thời tiết", "Bản đồ du lịch", "Lịch trình chuyến đi", "Báo giấy"] },
            { question: `12. Từ <span class="chinese-char">雨伞</span> có nghĩa là gì?`, ans: "Cây dù, ô che mưa", opts: ["Cây dù, ô che mưa", "Áo mưa", "Mũ nón", "Kính râm"] },
            { question: `13. Từ <span class="chinese-char">最高</span> có nghĩa là gì?`, ans: "Cao nhất", opts: ["Cao nhất", "Thấp nhất", "Bình thường", "Trung bình"] },
            { question: `14. Từ <span class="chinese-char">风景</span> có phiên âm là gì?`, ans: "fēngjǐng", opts: ["fēngjǐng", "lǚxíng", "hǎokàn", "dǎsuàn"] },
            { question: `15. Địa danh <span class="chinese-char">长城</span> có nghĩa là gì?`, ans: "Vạn Lý Trường Thành", opts: ["Vạn Lý Trường Thành", "Cố Cung", "Thiên An Môn", "Phượng Hoàng Cổ Trấn"] },
            { question: `16. Từ <span class="chinese-char">暴雨</span> có nghĩa là gì?`, ans: "Mưa to như trút nước, mưa bão", opts: ["Mưa to như trút nước, mưa bão", "Mưa phùn", "Mưa bay", "Mưa rào nhẹ"] }
        ];

        part1MC.forEach(item => {
            quizQuestions.push({
                type: "mc-meaning",
                question: item.question,
                correctAnswer: item.ans,
                options: item.opts
            });
        });

        // --- PART 2: 10 Sentence Rearrangement Questions (Questions 17 to 26) ---
        const part2Rearrange = [
            {
                q: `17. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">天气 / 今天 / 太冷了 / ！</span>`,
                ans: ["今天天气太冷了！"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>太<rt>tài</rt></ruby><ruby>冷<rt>lěng</rt></ruby><ruby>了<rt>le</rt></ruby>！`
            },
            {
                q: `18. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">气温 / 多少度 / 今天 / 是 / ？</span>`,
                ans: ["今天气温是多少度？"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>温<rt>wēn</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>多<rt>duō</rt></ruby><ruby>少<rt>shao</rt></ruby><ruby>度<rt>dù</rt></ruby>？`
            },
            {
                q: `19. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">比 / 今天 / 冷 / 昨天 / 多了 / 。</span>`,
                ans: ["今天比昨天冷多了。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>比<rt>bǐ</rt></ruby><ruby>昨<rt>zuó</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>冷<rt>lěng</rt></ruby><ruby>多<rt>duō</rt></ruby><ruby>了<rt>le</rt></ruby>。`
            },
            {
                q: `20. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">会 / 天气预报 / 说 / 下大雨 / 。</span>`,
                ans: ["天气预报说会下大雨。"],
                rubyAns: `<ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>预<rt>yù</rt></ruby><ruby>报<rt>bào</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>大<rt>dà</rt></ruby><ruby>雨<rt>yǔ</rt></ruby>。`
            },
            {
                q: `21. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">带 / 雨伞 / 记得 / 出门 / 一把 / 。</span>`,
                ans: ["出门记得带一把雨伞。"],
                rubyAns: `<ruby>出<rt>chū</rt></ruby><ruby>门<rt>mén</rt></ruby><ruby>记<rt>jì</rt></ruby><ruby>得<rt>de</rt></ruby><ruby>带<rt>dài</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>雨<rt>yǔ</rt></ruby><ruby>伞<rt>sǎn</rt></ruby>。`
            },
            {
                q: `22. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">去 / 我 / 哈尔滨 / 打算 / 看冰灯 / 。</span>`,
                ans: ["我打算去哈尔滨看冰灯。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>算<rt>suàn</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>哈<rt>hā</rt></ruby><ruby>尔<rt>ěr</rt></ruby><ruby>滨<rt>bīn</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>冰<rt>bīng</rt></ruby><ruby>灯<rt>dēng</rt></ruby>。`
            },
            {
                q: `23. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">风景 / 的 / 那儿 / 好看 / 极了 / ！</span>`,
                ans: ["那儿的风景好看极了！"],
                rubyAns: `<ruby>那<rt>nà</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>风<rt>fēng</rt></ruby><ruby>景<rt>jǐng</rt></ruby><ruby>好<rt>hǎo</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>极<rt>jí</rt></ruby><ruby>了<rt>le</rt></ruby>！`
            },
            {
                q: `24. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">很 / 舒服 / 天气 / 秋天 / 的 / 。</span>`,
                ans: ["秋天的天气很舒服。"],
                rubyAns: `<ruby>秋<rt>qiū</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>舒<rt>shū</rt></ruby><ruby>服<rt>fu</rt></ruby>。`
            },
            {
                q: `25. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">北部 / 干燥 / 比较 / 天气 / 。</span>`,
                ans: ["北部天气比较干燥。"],
                rubyAns: `<ruby>北<rt>běi</rt></ruby><ruby>部<rt>bù</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>比<rt>bǐ</rt></ruby><ruby>较<rt>jiào</rt></ruby><ruby>干<rt>gān</rt></ruby><ruby>燥<rt>zào</rt></ruby>。`
            },
            {
                q: `26. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">我们 / 一起 / 旅行 / 打算 / 去 / 丽江 / 。</span>`,
                ans: ["我们打算一起去丽江旅行。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>算<rt>suàn</rt></ruby><ruby>一<rt>yì</rt></ruby><ruby>起<rt>qǐ</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>丽<rt>lì</rt></ruby><ruby>江<rt>jiāng</rt></ruby><ruby>旅<rt>lǚ</rt></ruby><ruby>行<rt>xíng</rt></ruby>。`
            }
        ];

        part2Rearrange.forEach(item => {
            quizQuestions.push({
                type: "written-rearrange",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        // --- PART 3: 4 Translation Questions (Questions 27 to 30) ---
        const part3Translation = [
            {
                q: `27. Dịch sang tiếng Trung câu sau:<br><b>"Thời tiết hôm nay bên ngoài thế nào? Dự báo thời tiết nói chiều nay sẽ có mưa to."</b>`,
                ans: ["今天外面天气怎么样？天气预报说下午会下大雨。", "今天外面的天气怎么样？天气预报说下午会下大雨。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>外<rt>wài</rt></ruby><ruby>面<rt>miàn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>怎<rt>zěn</rt></ruby><ruby>么<rt>me</rt></ruby><ruby>样<rt>yàng</rt></ruby>？<ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>预<rt>yù</rt></ruby><ruby>报<rt>bào</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>午<rt>wǔ</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>大<rt>dà</rt></ruby><ruby>雨<rt>yǔ</rt></ruby>。`
            },
            {
                q: `28. Dịch sang tiếng Trung câu sau:<br><b>"Hôm nay trời lạnh hơn hôm qua nhiều, ban đêm nhiệt độ thấp nhất khoảng âm năm độ."</b>`,
                ans: ["今天比昨天冷多了，夜间最低气温零下五度左右。", "今天比昨天冷得多，夜间最低气温零下五度左右。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>比<rt>bǐ</rt></ruby><ruby>昨<rt>zuó</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>冷<rt>lěng</rt></ruby><ruby>多<rt>duō</rt></ruby><ruby>了<rt>le</rt></ruby>，<ruby>夜<rt>yè</rt></ruby><ruby>间<rt>jiān</rt></ruby><ruby>最<rt>zuì</rt></ruby><ruby>低<rt>dī</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>温<rt>wēn</rt></ruby><ruby>零<rt>líng</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>五<rt>wǔ</rt></ruby><ruby>度<rt>dù</rt></ruby><ruby>左<rt>zuǒ</rt></ruby><ruby>右<rt>yòu</rt></ruby>。`
            },
            {
                q: `29. Dịch sang tiếng Trung câu sau:<br><b>"Mùa đông bạn có dự định đi du lịch ở đâu không? Tôi dự định đi Cáp Nhĩ Tân ngắm đèn băng."</b>`,
                ans: ["冬天你打算去哪儿旅行？我打算去哈尔滨看冰灯。", "冬天你打算去哪里旅行？我打算去哈尔滨看冰灯。"],
                rubyAns: `<ruby>冬<rt>dōng</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>你<rt>nǐ</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>算<rt>suàn</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>哪<rt>nǎ</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>旅<rt>lǚ</rt></ruby><ruby>行<rt>xíng</rt></ruby>？<ruby>我<rt>wǒ</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>算<rt>suàn</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>哈<rt>hā</rt></ruby><ruby>尔<rt>ěr</rt></ruby><ruby>滨<rt>bīn</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>冰<rt>bīng</rt></ruby><ruby>灯<rt>dēng</rt></ruby>。`
            },
            {
                q: `30. Dịch sang tiếng Trung câu sau:<br><b>"Phong cảnh mùa thu ở Hàng Châu và Tô Châu đẹp cực kỳ, thời tiết vừa mát mẻ vừa dễ chịu."</b>`,
                ans: ["杭州和苏州的秋天风景好看极了，天气又凉快又舒服。", "苏州和杭州的秋天风景好看极了，天气又凉快又舒服。"],
                rubyAns: `<ruby>杭<rt>háng</rt></ruby><ruby>州<rt>zhōu</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>苏<rt>sū</rt></ruby><ruby>州<rt>zhōu</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>秋<rt>qiū</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>风<rt>fēng</rt></ruby><ruby>景<rt>jǐng</rt></ruby><ruby>好<rt>hǎo</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>极<rt>jí</rt></ruby><ruby>了<rt>le</rt></ruby>，<ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>又<rt>yòu</rt></ruby><ruby>凉<rt>liáng</rt></ruby><ruby>快<rt>kuai</rt></ruby><ruby>又<rt>yòu</rt></ruby><ruby>舒<rt>shū</rt></ruby><ruby>服<rt>fu</rt></ruby>。`
            }
        ];

        part3Translation.forEach(item => {
            quizQuestions.push({
                type: "written-translation",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        return; // Fixed sequence 1 to 30
    }
    // Special exact 30-question format for Giao tiếp 2 - Bài 12: 请把桌子擦一下
    if (currentCourse === "Giao tiếp 2" && currentLesson === 12) {
        // --- PART 1: 16 MC Questions (Questions 1 to 16) ---
        const part1MC = [
            { question: `1. Từ <span class="chinese-char">客厅</span> có nghĩa là gì?`, ans: "Phòng khách", opts: ["Phòng khách", "Phòng ngủ", "Nhà bếp", "Phòng tắm"] },
            { question: `2. Từ <span class="chinese-char">卧室</span> có phiên âm là gì?`, ans: "wòshì", opts: ["wòshì", "kètīng", "chúfáng", "shūfáng"] },
            { question: `3. Từ <span class="chinese-char">茶几</span> có nghĩa là gì?`, ans: "Bàn trà", opts: ["Bàn trà", "Ghế sofa", "Rèm cửa", "Bàn trang điểm"] },
            { question: `4. Từ <span class="chinese-char">窗帘</span> có phiên âm là gì?`, ans: "chuānglián", opts: ["chuānglián", "chuānghu", "chuāngtái", "chúguì"] },
            { question: `5. Từ <span class="chinese-char">洗衣机</span> có nghĩa là gì?`, ans: "Máy giặt", opts: ["Máy giặt", "Điều hòa", "Quạt máy", "Tủ lạnh"] },
            { question: `6. Từ <span class="chinese-char">打扫</span> có nghĩa là gì?`, ans: "Quét dọn, dọn dẹp", opts: ["Quét dọn, dọn dẹp", "Rửa bát", "Nấu ăn", "Mua sắm"] },
            { question: `7. Từ <span class="chinese-char">收拾</span> có phiên âm là gì?`, ans: "shōushi", opts: ["shōushi", "dǎsǎo", "cā", "yùn"] },
            { question: `8. Từ <span class="chinese-char">深</span> có nghĩa là gì?`, ans: "Đậm, thẫm (màu sắc)", opts: ["Đậm, thẫm (màu sắc)", "Nhạt, sáng", "Tươi sáng", "Trong suốt"] },
            { question: `9. Từ <span class="chinese-char">浅</span> có nghĩa là gì?`, ans: "Nhạt, sáng (màu sắc)", opts: ["Nhạt, sáng (màu sắc)", "Đậm, thẫm", "Tối tăm", "Đen xì"] },
            { question: `10. Từ <span class="chinese-char">分开</span> có phiên âm là gì?`, ans: "fēnkāi", opts: ["fēnkāi", "lìngwài", "shōushi", "zhǔnbèi"] },
            { question: `11. Từ <span class="chinese-char">花瓶</span> có nghĩa là gì?`, ans: "Bình hoa, lọ hoa", opts: ["Bình hoa, lọ hoa", "Cái cốc", "Cửa sổ", "Tủ bếp"] },
            { question: `12. Từ <span class="chinese-char">空调</span> có nghĩa là gì?`, ans: "Điều hòa, máy lạnh", opts: ["Điều hòa, máy lạnh", "Quạt điện", "Tủ lạnh", "Máy giặt"] },
            { question: `13. Từ <span class="chinese-char">风扇</span> có phiên âm là gì?`, ans: "fēngshàn", opts: ["fēngshàn", "kōngtiáo", "diànlú", "xǐyījī"] },
            { question: `14. Từ <span class="chinese-char">插</span> có nghĩa là gì?`, ans: "Cắm, cắm vào (hoa)", opts: ["Cắm, cắm vào (hoa)", "Treo lên", "Lau chùi", "Giặt giũ"] },
            { question: `15. Cụm từ <span class="chinese-char">生日晚会</span> có nghĩa là gì?`, ans: "Tiệc sinh nhật, dạ tiệc sinh nhật", opts: ["Tiệc sinh nhật, dạ tiệc sinh nhật", "Tiệc cuối năm", "Buổi hòa nhạc", "Hội thảo"] },
            { question: `16. Từ <span class="chinese-char">挂</span> có nghĩa là gì?`, ans: "Treo, mắc lên", opts: ["Treo, mắc lên", "Đặt xuống", "Cắm vào", "Rửa sạch"] }
        ];

        part1MC.forEach(item => {
            quizQuestions.push({
                type: "mc-meaning",
                question: item.question,
                correctAnswer: item.ans,
                options: item.opts
            });
        });

        // --- PART 2: 10 Sentence Rearrangement Questions (Questions 17 to 26) ---
        const part2Rearrange = [
            {
                q: `17. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">桌子 / 请 / 擦 / 把 / 一下 / 。</span>`,
                ans: ["请把桌子擦一下。"],
                rubyAns: `<ruby>请<rt>qǐng</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>桌<rt>zhuō</rt></ruby><ruby>子<rt>zi</rt></ruby><ruby>擦<rt>cā</rt></ruby><ruby>一<rt>yí</rt></ruby><ruby>下<rt>xià</rt></ruby>。`
            },
            {
                q: `18. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">我 / 把 / 客厅 / 先 / 收拾 / 一下 / 。</span>`,
                ans: ["我先把客厅收拾一下。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>先<rt>xiān</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>客<rt>kè</rt></ruby><ruby>厅<rt>tīng</rt></ruby><ruby>收<rt>shōu</rt></ruby><ruby>拾<rt>shi</rt></ruby><ruby>一<rt>yí</rt></ruby><ruby>下<rt>xià</rt></ruby>。`
            },
            {
                q: `19. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">衣服 / 洗衣机 / 放进 / 这些 / 把 / 里 / 。</span>`,
                ans: ["把这些衣服放进洗衣机里。"],
                rubyAns: `<ruby>把<rt>bǎ</rt></ruby><ruby>这<rt>zhè</rt></ruby><ruby>些<rt>xiē</rt></ruby><ruby>衣<rt>yī</rt></ruby><ruby>服<rt>fu</rt></ruby><ruby>放<rt>fàng</rt></ruby><ruby>进<rt>jìn</rt></ruby><ruby>洗<rt>xǐ</rt></ruby><ruby>衣<rt>yī</rt></ruby><ruby>机<rt>jī</rt></ruby><ruby>里<rt>lǐ</rt></ruby>。`
            },
            {
                q: `20. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">深色 / 衣服 / 浅色 / 和 / 要 / 分开 / 。</span>`,
                ans: ["深色和浅色的衣服要分开。", "深色和浅色衣服要分开。"],
                rubyAns: `<ruby>深<rt>shēn</rt></ruby><ruby>色<rt>sè</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>浅<rt>qiǎn</rt></ruby><ruby>色<rt>sè</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>衣<rt>yī</rt></ruby><ruby>服<rt>fu</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>分<rt>fēn</rt></ruby><ruby>开<rt>kāi</rt></ruby>。`
            },
            {
                q: `21. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">花儿 / 请 / 插到 / 花瓶 / 里 / 把 / 。</span>`,
                ans: ["请把花儿插到花瓶里。"],
                rubyAns: `<ruby>请<rt>qǐng</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>花<rt>huā</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>插<rt>chā</rt></ruby><ruby>到<rt>dào</rt></ruby><ruby>花<rt>huā</rt></ruby><ruby>瓶<rt>píng</rt></ruby><ruby>里<rt>lǐ</rt></ruby>。`
            },
            {
                q: `22. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">茶几 / 放 / 把 / 花瓶 / 在 / 上 / 。</span>`,
                ans: ["把花瓶放在茶几上。"],
                rubyAns: `<ruby>把<rt>bǎ</rt></ruby><ruby>花<rt>huā</rt></ruby><ruby>瓶<rt>píng</rt></ruby><ruby>放<rt>fàng</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>茶<rt>chá</rt></ruby><ruby>几<rt>jī</rt></ruby><ruby>上<rt>shàng</rt></ruby>。`
            },
            {
                q: `23. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">空调 / 打开 / 把 / 客厅 / 的 / 吧 / ！</span>`,
                ans: ["把客厅的空调打开吧！", "把客厅的空调打开吧。"],
                rubyAns: `<ruby>把<rt>bǎ</rt></ruby><ruby>客<rt>kè</rt></ruby><ruby>厅<rt>tīng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>空<rt>kōng</rt></ruby><ruby>调<rt>tiáo</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>开<rt>kāi</rt></ruby><ruby>吧<rt>ba</rt></ruby>！`
            },
            {
                q: `24. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">墙 / 挂 / 把 / 我们 / 到 / 气球 / 上 / 。</span>`,
                ans: ["我们把气球挂到墙上。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>球<rt>qiú</rt></ruby><ruby>挂<rt>guà</rt></ruby><ruby>到<rt>dào</rt></ruby><ruby>墙<rt>qiáng</rt></ruby><ruby>上<rt>shàng</rt></ruby>。`
            },
            {
                q: `25. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">大家 / 去 / 接 / 楼下 / 我 / 。</span>`,
                ans: ["我去楼下接大家。"],
                rubyAns: `<ruby>我<rt>wǒ</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>楼<rt>lóu</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>接<rt>jiē</rt></ruby><ruby>大<rt>dà</rt></ruby><ruby>家<rt>jiā</rt></ruby>。`
            },
            {
                q: `26. Hãy sắp xếp các từ sau thành câu hoàn chỉnh (Học sinh đánh máy đáp án):<br><span class="chinese-char">办 / 我们 / 今天 / 晚上 / 生日晚会 / 要 / 。</span>`,
                ans: ["今天晚上我们要办生日晚会。", "我们今天晚上要办生日晚会。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>晚<rt>wǎn</rt></ruby><ruby>上<rt>shang</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>办<rt>bàn</rt></ruby><ruby>生<rt>shēng</rt></ruby><ruby>日<rt>rì</rt></ruby><ruby>晚<rt>wǎn</rt></ruby><ruby>会<rt>huì</rt></ruby>。`
            }
        ];

        part2Rearrange.forEach(item => {
            quizQuestions.push({
                type: "written-rearrange",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        // --- PART 3: 4 Translation Questions (Questions 27 to 30) ---
        const part3Translation = [
            {
                q: `27. Dịch sang tiếng Trung câu sau:<br><b>"Tối nay chúng tôi sẽ tổ chức tiệc sinh nhật, phiền bạn lau bàn trà và quét dọn phòng khách một chút nhé."</b>`,
                ans: ["今天晚上我们要办生日晚会，请把茶几擦一下，把客厅打扫一下。", "今天晚上我们要办生日晚会，请把茶几擦一下，把客厅打扫一下吧。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>晚<rt>wǎn</rt></ruby><ruby>上<rt>shang</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>们<rt>men</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>办<rt>bàn</rt></ruby><ruby>生<rt>shēng</rt></ruby><ruby>日<rt>rì</rt></ruby><ruby>晚<rt>wǎn</rt></ruby><ruby>会<rt>huì</rt></ruby>，<ruby>请<rt>qǐng</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>茶<rt>chá</rt></ruby><ruby>几<rt>jī</rt></ruby><ruby>擦<rt>cā</rt></ruby><ruby>一<rt>yí</rt></ruby><ruby>下<rt>xià</rt></ruby>，<ruby>把<rt>bǎ</rt></ruby><ruby>客<rt>kè</rt></ruby><ruby>厅<rt>tīng</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>扫<rt>sǎo</rt></ruby><ruby>一<rt>yí</rt></ruby><ruby>下<rt>xià</rt></ruby>。`
            },
            {
                q: `28. Dịch sang tiếng Trung câu sau:<br><b>"Hãy bỏ những bộ quần áo này vào máy giặt, quần áo màu đậm và màu nhạt cần giặt riêng."</b>`,
                ans: ["把这些衣服放进洗衣机里，深色和浅色的衣服要分开洗。", "把这些衣服放进洗衣机里洗一下，深色和浅色的衣服要分开洗。"],
                rubyAns: `<ruby>把<rt>bǎ</rt></ruby><ruby>这<rt>zhè</rt></ruby><ruby>些<rt>xiē</rt></ruby><ruby>衣<rt>yī</rt></ruby><ruby>服<rt>fu</rt></ruby><ruby>放<rt>fàng</rt></ruby><ruby>进<rt>jìn</rt></ruby><ruby>洗<rt>xǐ</rt></ruby><ruby>衣<rt>yī</rt></ruby><ruby>机<rt>jī</rt></ruby><ruby>里<rt>lǐ</rt></ruby>，<ruby>深<rt>shēn</rt></ruby><ruby>色<rt>sè</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>浅<rt>qiǎn</rt></ruby><ruby>色<rt>sè</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>衣<rt>yī</rt></ruby><ruby>服<rt>fu</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>分<rt>fēn</rt></ruby><ruby>开<rt>kāi</rt></ruby><ruby>洗<rt>xǐ</rt></ruby>。`
            },
            {
                q: `29. Dịch sang tiếng Trung câu sau:<br><b>"Bạn cắm hoa vào bình hoa rồi đặt lên bàn trà trong phòng khách nhé."</b>`,
                ans: ["请把花儿插到花瓶里，放在客厅的茶几上。", "请把花插到花瓶里，放在客厅的茶几上。"],
                rubyAns: `<ruby>请<rt>qǐng</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>花<rt>huā</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>插<rt>chā</rt></ruby><ruby>到<rt>dào</rt></ruby><ruby>花<rt>huā</rt></ruby><ruby>瓶<rt>píng</rt></ruby><ruby>里<rt>lǐ</rt></ruby>，<ruby>放<rt>fàng</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>客<rt>kè</rt></ruby><ruby>厅<rt>tīng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>茶<rt>chá</rt></ruby><ruby>几<rt>jī</rt></ruby><ruby>上<rt>shàng</rt></ruby>。`
            },
            {
                q: `30. Dịch sang tiếng Trung câu sau:<br><b>"Thời tiết hôm nay hơi nóng, hãy bật điều hòa trong phòng khách lên đi."</b>`,
                ans: ["今天天气有点儿热，把客厅的空调打开吧。", "今天天气有一点儿热，把客厅的空调打开吧。"],
                rubyAns: `<ruby>今<rt>jīn</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>天<rt>tiān</rt></ruby><ruby>气<rt>qì</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>儿<rt>r</rt></ruby><ruby>热<rt>rè</rt></ruby>，<ruby>把<rt>bǎ</rt></ruby><ruby>客<rt>kè</rt></ruby><ruby>厅<rt>tīng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>空<rt>kōng</rt></ruby><ruby>调<rt>tiáo</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>开<rt>kāi</rt></ruby><ruby>吧<rt>ba</rt></ruby>。`
            }
        ];

        part3Translation.forEach(item => {
            quizQuestions.push({
                type: "written-translation",
                question: item.q,
                correctAnswer: item.ans,
                rubyAnswer: item.rubyAns
            });
        });

        return; // Fixed sequence 1 to 30
    }






    // Default dynamic question generator for other lessons
    // 1. Trắc nghiệm chọn Nghĩa (8 câu)
    const mcVocabList = shuffleArray([...VOCAB_DATA]);
    for (let i = 0; i < 8; i++) {
        const correctWord = mcVocabList[i];
        
        // Filter out the correct meaning and shuffle wrong options
        const distractors = shuffleArray(VOCAB_DATA.filter(w => w.meaning !== correctWord.meaning));
        const optionSet = new Set([correctWord.meaning]);
        
        // Gather exactly 4 unique options
        for (let j = 0; j < distractors.length && optionSet.size < 4; j++) {
            optionSet.add(distractors[j].meaning);
        }
        const options = shuffleArray(Array.from(optionSet));
        
        quizQuestions.push({
            type: "mc-meaning",
            question: `Ý nghĩa của từ <span class="chinese-char">${correctWord.char}</span> là gì?`,
            correctAnswer: correctWord.meaning,
            options: options
        });
    }

    // 2. Trắc nghiệm chọn Phiên âm Pinyin (8 câu)
    const pinyinVocabList = shuffleArray([...VOCAB_DATA]);
    for (let i = 0; i < 8; i++) {
        const correctWord = pinyinVocabList[i];
        
        // Filter out correct pinyin and shuffle wrong options
        const distractors = shuffleArray(VOCAB_DATA.filter(w => w.pinyin !== correctWord.pinyin));
        const optionSet = new Set([correctWord.pinyin]);
        
        // Gather exactly 4 unique options
        for (let j = 0; j < distractors.length && optionSet.size < 4; j++) {
            optionSet.add(distractors[j].pinyin);
        }
        const options = shuffleArray(Array.from(optionSet));
        
        quizQuestions.push({
            type: "mc-pinyin",
            question: `Phiên âm của từ <span class="chinese-char">${correctWord.char}</span> là gì?`,
            correctAnswer: correctWord.pinyin,
            options: options
        });
    }

    // 3. Tự luận dịch từ Việt sang Trung (6 câu)
    const transVocabList = shuffleArray([...VOCAB_DATA]);
    for (let i = 0; i < 6; i++) {
        const correctWord = transVocabList[i];
        quizQuestions.push({
            type: "written-translation",
            question: `"${correctWord.meaning.split('(')[0].trim()}" tiếng Trung là gì?`,
            correctAnswer: correctWord.char
        });
    }

    // 4. Trắc nghiệm Hội thoại / Trả lời đàm thoại (3 câu)
    let dialogues = [];
    if (currentCourse === "Giao tiếp 1") {
        if (currentLesson === 1) {
            dialogues = [
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你好！</span><br>B: <span class="chinese-char">_______！</span>', ans: "你好", opts: ["你好", "谢谢", "老师", "再见"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">您好！老师。</span><br>B: <span class="chinese-char">_______！</span>', ans: "你好", opts: ["你好", "您好", "再见", "叫什么"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">您贵姓？</span><br>B: <span class="chinese-char">我_______张。</span>', ans: "姓", opts: ["姓", "叫", "是", "的"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">谢谢你！</span><br>B: <span class="chinese-char">_______！</span>', ans: "不客气", opts: ["不客气", "没关系", "对不起", "你好"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">对不起！</span><br>B: <span class="chinese-char">_______。</span>', ans: "没关系", opts: ["没关系", "不客气", "谢谢", "再见"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你是哪国人？</span><br>B: <span class="chinese-char">我是_______人。</span> (Gợi ý: Việt Nam)', ans: "越南", opts: ["越南", "美国", "日本", "英国"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">请问，你是美国人吗？</span><br>B: <span class="chinese-char">不，我_______美国人，我是英国人。</span>', ans: "不是", opts: ["不是", "是", "叫", "姓"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你的手机号码是_______？</span><br>B: <span class="chinese-char">我的手机号码是 0912345678。</span>', ans: "多少", opts: ["多少", "什么", "怎么", "哪"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">他是哪国人？</span><br>B: <span class="chinese-char">他是_______人。</span> (Gợi ý: Nhật Bản)', ans: "日本", opts: ["日本", "韩国", "泰国", "德国"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">老师是哪国人？</span><br>B: <span class="chinese-char">老师是_______人。</span> (Gợi ý: Nước Pháp)', ans: "法国", opts: ["法国", "中国", "意大利", "西班牙"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">越南和中国是_______吗？</span><br>B: <span class="chinese-char">是的，它们是国家。</span>', ans: "国家", opts: ["国家", "名字", "同学", "号码"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">她的手机_______是多少？</span><br>B: <span class="chinese-char">是 0988888888。</span>', ans: "号码", opts: ["号码", "手机", "名字", "老师"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你是_______国人？</span><br>B: <span class="chinese-char">我是德国人。</span>', ans: "哪", opts: ["哪", "什么", "giữ", "谁"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">他是韩国人吗？</span><br>B: <span class="chinese-char">不，他是_______人。</span> (Gợi ý: Thái Lan)', ans: "泰国", opts: ["泰国", "韩国", "日本", "越南"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">_______，你是李老师吗？</span><br>B: <span class="chinese-char">是的，我姓李。</span>', ans: "请问", opts: ["请问", "谢谢", "对不起", "没关系"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你_______什么名字？</span><br>B: <span class="chinese-char">我叫玛丽。</span>', ans: "叫", opts: ["叫", "是", "姓", "的"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你的手机号码是多少？</span><br>B: <span class="chinese-char">我的号码是：一二三_______五六七八九十。</span>', ans: "sì", opts: ["sì", "sí", "shí", "shì"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">他是西班牙人吗？</span><br>B: <span class="chinese-char">是的，他是_______人。</span>', ans: "西班牙", opts: ["西班牙", "意大利", "英国", "德国"] }
            ];
        } else if (currentLesson === 2) {
            dialogues = [
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">现在几点？</span><br>B: <span class="chinese-char">现在早上七点_______。</span> (Gợi ý: 7 giờ rưỡi / 7 giờ 30 phút)', ans: "半", opts: ["半", "点", "分", "刻"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">今天是星期几？</span><br>B: <span class="chinese-char">今天是_______。</span> (Gợi ý: Cuối tuần)', ans: "周末", opts: ["周末", "号", "点", "年"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你几点上班？</span><br>B: <span class="chinese-char">我_______早上八点上班。</span> (Gợi ý: Hàng ngày/Mỗi ngày)', ans: "每天", opts: ["每天", "去年", "前天", "差"] }
            ];
        } else if (currentLesson === 4) {
            dialogues = [
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">服务员，我要一个_______。</span> (Gợi ý: Gà Cung Bảo)', ans: "宫保鸡丁", opts: ["宫保鸡丁", "汉堡包", "比萨饼", "豆腐"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">我们要两碗_______。</span> (Gợi ý: Cơm trắng)', ans: "米饭", opts: ["米饭", "啤酒", "橙汁", "花茶"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">服务员，_______！</span> (Gợi ý: Thanh toán / Tính tiền)', ans: "买单", opts: ["买单", "打包", "上菜", "忌口"] }
            ];
        } else if (currentLesson === 5) {
            dialogues = [
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你家有几_______人？</span><br>B: <span class="chinese-char">我家有五口人。</span>', ans: "口", opts: ["口", "个", "人", "家"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你家有_______人？</span><br>B: <span class="chinese-char">我家有四口人。</span>', ans: "几口", opts: ["几口", "谁", "哪", "哪儿"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你_______哥哥吗？</span><br>B: <span class="chinese-char">我没有哥哥，我有一个弟弟。</span>', ans: "有", opts: ["有", "没有", "是", "叫"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你哥哥在哪儿_______？</span><br>B: <span class="chinese-char">他在北京工作。</span>', ans: "工作", opts: ["工作", "学习", "起床", "上班"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">爸爸_______妈妈都在家吗？</span><br>B: <span class="chinese-char">是的，他们都在家。</span>', ans: "和", opts: ["和", "有", "个", "的"] }
            ];
        }
    } else if (currentCourse === "Từ vựng theo chủ đề") {
        dialogues = [
            { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你是哪国人？</span><br>B: <span class="chinese-char">我是_______人。</span> (Gợi ý: Việt Nam)', ans: "越南", opts: ["越南", "美国", "日本", "英国"] },
            { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你去过_______ ma？</span><br>B: <span class="chinese-char">我去过，那里 (Bắc Kinh) 很漂亮。</span> (Gợi ý: Trung Quốc)', ans: "中国", opts: ["中国", "德国", "泰国", "float"] },
            { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">他是西班牙人吗？</span><br>B: <span class="chinese-char">不，他是_______人。</span> (Gợi ý: Nước Ý / Italy)', ans: "意大利", opts: ["意大利", "印度", "韩国", "泰国"] }
        ];
    }
    
    dialogues.forEach(dial => {
        quizQuestions.push({
            type: "mc-dialogue",
            question: dial.q,
            correctAnswer: dial.ans,
            options: dial.opts
        });
    });

    // 5. Tự luận điền vào ô trống (2 câu)
    if (currentCourse === "Giao tiếp 1") {
        if (currentLesson === 1) {
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống: <span class="chinese-char">我 ____ 丽丽。</span>`,
                correctAnswer: "叫"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để chào kính trọng thầy cô: <span class="chinese-char">____ 老师！</span>`,
                correctAnswer: "您好"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Tôi là người Việt Nam": <span class="chinese-char">我是____人。</span>`,
                correctAnswer: "越南"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Cảm ơn bạn!": <span class="chinese-char">____你！</span>`,
                correctAnswer: "谢谢"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Không sao đâu": <span class="chinese-char">没____。</span>`,
                correctAnswer: "关系"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Xin lỗi": <span class="chinese-char">对____起。</span>`,
                correctAnswer: "不"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Điện thoại di động của tôi": <span class="chinese-char">我的手____。</span>`,
                correctAnswer: "机"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Bao nhiêu người": <span class="chinese-char">多少____？</span>`,
                correctAnswer: "人"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch "Việt Nam và Trung Quốc là quốc gia": <span class="chinese-char">越南和中国是____家。</span>`,
                correctAnswer: "国"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Anh ấy là người Mỹ": <span class="chinese-char">他____美国人。</span>`,
                correctAnswer: "是"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp: <span class="chinese-char">你的手机____码是多少？</span>`,
                correctAnswer: "号"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp: <span class="chinese-char">一、二、三、____、五。</span>`,
                correctAnswer: "四"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch "Tây Ban Nha": <span class="chinese-char">西____牙。</span>`,
                correctAnswer: "班"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp: <span class="chinese-char">他是哪____人？</span>`,
                correctAnswer: "国"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch "Tôi không phải người Anh": <span class="chinese-char">我不是英____人。</span>`,
                correctAnswer: "国"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch "Đừng khách sáo": <span class="chinese-char">不____气。</span>`,
                correctAnswer: "客"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch "Anh ấy là người Ý": <span class="chinese-char">他是意____利人。</span>`,
                correctAnswer: "大"
            });
        } else if (currentLesson === 2) {
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống: <span class="chinese-char">现在 ____ 点？</span> (jǐ - mấy)`,
                correctAnswer: "几"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Hôm nay là sinh nhật tôi": <span class="chinese-char">今天是我 ____ 日。</span> (shēng)`,
                correctAnswer: "生"
            });
        } else if (currentLesson === 4) {
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Cơm trắng": <span class="chinese-char">米____。</span>`,
                correctAnswer: "饭"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Bia": <span class="chinese-char">啤____。</span>`,
                correctAnswer: "酒"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Mì chính": <span class="chinese-char">味____。</span>`,
                correctAnswer: "精"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Nước mắm": <span class="chinese-char">鱼____。</span>`,
                correctAnswer: "露"
            });
        } else if (currentLesson === 5) {
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Nhà tôi có 4 người": <span class="chinese-char">我家有四____人。</span>`,
                correctAnswer: "口"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Bố và mẹ": <span class="chinese-char">爸爸____妈妈。</span>`,
                correctAnswer: "和"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp vào chỗ trống để dịch câu "Tôi không có em gái": <span class="chinese-char">我____有妹妹。</span>`,
                correctAnswer: "没"
            });
            quizQuestions.push({
                type: "written-fill-blank",
                question: `Điền chữ Hán thích hợp để dịch câu "Anh trai": <span class="chinese-char">哥____</span>`,
                correctAnswer: "哥"
            });
        }
    } else if (currentCourse === "Từ vựng theo chủ đề") {
        quizQuestions.push({
            type: "written-fill-blank",
            question: `Hãy điền chữ Hán thích hợp vào chỗ trống để tạo câu "Bạn là người nước nào?": <span class="chinese-char">你是哪____人？</span> (Gợi ý: <span class="chinese-char">国</span>)`,
            correctAnswer: "国"
        });
        quizQuestions.push({
            type: "written-fill-blank",
            question: `Hãy điền chữ Hán thích hợp vào chỗ trống để tạo câu "Tôi là người Việt Nam": <span class="chinese-char">我是____人。</span> (Gợi ý: <span class="chinese-char">越南</span>)`,
            correctAnswer: "越南"
        });
    }

    // 6. Trắc nghiệm Nghe chọn từ (3 câu)
    const listenVocabList = shuffleArray([...VOCAB_DATA]);
    for (let i = 0; i < 3; i++) {
        const correctWord = listenVocabList[i];
        
        // Filter out correct character and shuffle wrong options
        const distractors = shuffleArray(VOCAB_DATA.filter(w => w.char !== correctWord.char));
        const optionSet = new Set([correctWord.char]);
        
        // Gather exactly 4 unique options
        for (let j = 0; j < distractors.length && optionSet.size < 4; j++) {
            optionSet.add(distractors[j].char);
        }
        const options = shuffleArray(Array.from(optionSet));
        
        quizQuestions.push({
            type: "mc-listening",
            question: `Bạn nghe được từ nào dưới đây?`,
            correctAnswer: correctWord.char,
            options: options,
            speakTarget: correctWord.char
        });
    }

    // Shuffle the absolute questions so it generates a completely random dynamic test!
    quizQuestions = shuffleArray(quizQuestions).slice(0, 30);
}

function loadQuizQuestion(index) {
    const q = quizQuestions[index];
    const questionTextEl = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-container');
    const textBoxAnswer = document.getElementById('quiz-text-answer-box');
    const listenTriggerBox = document.getElementById('listen-quiz-box');
    const textInput = document.getElementById('quiz-text-input');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const checkBtn = document.getElementById('quiz-check-btn');
    const nextBtn = document.getElementById('quiz-next-btn');

    // Reset controls & feedback alerts
    feedbackBox.style.display = 'none';
    feedbackBox.className = 'quiz-feedback-alert';
    
    if (q.type.startsWith('mc')) {
        checkBtn.style.display = 'none';
    } else {
        checkBtn.style.display = 'block';
        checkBtn.disabled = false;
    }
    nextBtn.style.display = 'none';

    // Update progress numbers dynamically based on quiz length
    document.getElementById('quiz-progress-text').innerText = `Câu ${index + 1} / ${quizQuestions.length}`;
    document.getElementById('quiz-progress-fill').style.width = `${((index + 1) / quizQuestions.length) * 100}%`;

    // Render question prompt
    questionTextEl.innerHTML = q.question;

    // Reset components visibility
    optionsContainer.innerHTML = '';
    optionsContainer.style.display = 'none';
    textBoxAnswer.style.display = 'none';
    listenTriggerBox.style.display = 'none';
    textInput.value = '';
    textInput.className = 'cute-input text-answer-input';
    textInput.disabled = false;

    // Handle Quiz Types
    if (q.type.startsWith('mc')) {
        // Multiple choice question
        optionsContainer.style.display = 'grid';
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            // Check if option contains Chinese characters, apply KAI font if so
            if (/[\u4e00-\u9fa5]/.test(opt)) {
                btn.classList.add('chinese-char');
            }
            btn.innerText = opt;
            btn.onclick = () => selectOption(btn);
            optionsContainer.appendChild(btn);
        });

        // If listening quiz, show speaker audio trigger
        if (q.type === 'mc-listening') {
            listenTriggerBox.style.display = 'block';
            
            // Re-bind speaker trigger action
            const speakTriggerBtn = document.getElementById('listen-speak-trigger');
            speakTriggerBtn.onclick = () => speakChineseText(q.speakTarget);
            
            // Auto speak on load
            setTimeout(() => speakChineseText(q.speakTarget), 500);
        }
    } else {
        // Written short answer question
        textBoxAnswer.style.display = 'block';
    }
}

let selectedOptionBtn = null;

function selectOption(btn) {
    selectedOptionBtn = btn;
    checkQuizAnswer();
}

window.checkQuizAnswer = function() {
    const q = quizQuestions[quizIndex];
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackMessage = document.getElementById('quiz-feedback-message');
    const checkBtn = document.getElementById('quiz-check-btn');
    const nextBtn = document.getElementById('quiz-next-btn');
    const textInput = document.getElementById('quiz-text-input');
    
    let isCorrect = false;

    if (q.type.startsWith('mc')) {
        // MC quiz evaluation
        if (!selectedOptionBtn) {
            alert('Bạn vui lòng chọn một đáp án trước nhé! 🌸');
            return;
        }

        const selectedAnswer = selectedOptionBtn.innerText;
        const allOptionBtns = document.querySelectorAll('.option-btn');

        // Disable all buttons immediately after validation
        allOptionBtns.forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        });

        if (selectedAnswer === q.correctAnswer) {
            isCorrect = true;
            selectedOptionBtn.classList.add('correct-state');
            quizScore++;
        } else {
            selectedOptionBtn.classList.add('incorrect-state');
            incorrectQuestions.push({
                rawQuestion: q,
                num: quizIndex + 1,
                question: q.question,
                userAnswer: selectedAnswer,
                correctAnswer: q.correctAnswer,
                rubyAnswer: q.rubyAnswer || q.correctAnswer
            }); // Track wrong question with details
            // Highlight correct one in green
            allOptionBtns.forEach(btn => {
                if (btn.innerText === q.correctAnswer) {
                    btn.classList.add('correct-state');
                }
            });
        }
    } else {
        // Written quiz evaluation
        const userAnswer = textInput.value.trim();

        if (!userAnswer) {
            alert('Bạn vui lòng nhập câu trả lời chữ Hán của bạn nhé! 🌸');
            return;
        }

        textInput.disabled = true;

        // Helper functions for Smart AI Flexible Evaluation
        const normalizeChineseStr = (str) => {
            if (!str) return '';
            let s = str.replace(/[\s\.\?\!,\:\;\,\;\,\.\?\!，。？！、\?\'"“”‘’\(\)\（\）\-\_\—]/g, '').trim();
            return s.replace(/100/g, '一百')
                    .replace(/40/g, '四十')
                    .replace(/30/g, '三十')
                    .replace(/20/g, '二十')
                    .replace(/50/g, '五十')
                    .replace(/10/g, '十')
                    .replace(/15/g, '十五')
                    .replace(/1/g, '一')
                    .replace(/2/g, '二')
                    .replace(/3/g, '三')
                    .replace(/4/g, '四')
                    .replace(/5/g, '五')
                    .replace(/6/g, '六')
                    .replace(/7/g, '七')
                    .replace(/8/g, '八')
                    .replace(/9/g, '九')
                    .replace(/0/g, '零');
        };

        const getLCSLength = (str1, str2) => {
            const m = str1.length, n = str2.length;
            if (m === 0 || n === 0) return 0;
            const dp = Array.from({ length: m + 1 }, () => new Int32Array(n + 1));
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
                    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
            return dp[m][n];
        };

        const evaluateSmartAnswer = (userAns, targetAnsList, qType) => {
            if (!userAns) return false;
            const targets = Array.isArray(targetAnsList) ? targetAnsList : [targetAnsList];
            const userNorm = normalizeChineseStr(userAns);
            if (!userNorm) return false;

            for (const target of targets) {
                const targetNorm = normalizeChineseStr(target);
                // 1. Direct normalized match
                if (userNorm === targetNorm) return true;

                // 2. Raw punctuation/space stripped match
                const userRaw = userAns.replace(/[\s\.\?\!,\:\;\,\;\,\.\?\!，。？！、\?]/g, '').trim();
                const targetRaw = target.replace(/[\s\.\?\!,\:\;\,\;\,\.\?\!，。？！、\?]/g, '').trim();
                if (userRaw === targetRaw) return true;

                // 3. Flexible grammar & optional particles (written translations & rearrangements)
                if (qType.includes('translation') || qType.includes('rearrange') || qType.includes('written')) {
                    const simplify = (s) => s.replace(/所以|都|吧|呢|去|左右|大概|要|花|的/g, '').replace(/里/g, '离');
                    const userSimp = simplify(userNorm);
                    const targetSimp = simplify(targetNorm);

                    if (userSimp === targetSimp && userSimp.length > 0) return true;

                    // LCS Similarity ratio for longer sentences
                    if (targetNorm.length >= 4) {
                        const lcs = getLCSLength(userNorm, targetNorm);
                        const maxLen = Math.max(userNorm.length, targetNorm.length);
                        const similarity = lcs / maxLen;
                        const lenDiff = Math.abs(userNorm.length - targetNorm.length);

                        if (similarity >= 0.75 && lenDiff <= 6) return true;
                    }
                }
            }
            return false;
        };

        let isAnswerRight = evaluateSmartAnswer(userAnswer, q.correctAnswer, q.type);
        const expectedStr = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;

        if (isAnswerRight) {
            isCorrect = true;
            textInput.classList.add('correct-state');
            quizScore++;
        } else {
            textInput.classList.add('incorrect-state');
            incorrectQuestions.push({
                rawQuestion: q,
                num: quizIndex + 1,
                question: q.question,
                userAnswer: userAnswer,
                correctAnswer: expectedStr,
                rubyAnswer: q.rubyAnswer || expectedStr
            }); // Track wrong question with details
            feedbackMessage.innerText = `Chưa đúng rồi! Đáp án chuẩn là: "${expectedStr}"`;
        }
    }

    // Set feedback text & backgrounds
    feedbackBox.style.display = 'block';
    if (isCorrect) {
        feedbackBox.classList.add('correct');
        feedbackMessage.innerText = "Chính xác! Bạn siêu quá nha! 🎉🌸";
    } else {
        feedbackBox.classList.add('incorrect');
        if (q.type.startsWith('mc')) {
            feedbackMessage.innerText = `Chưa chính xác rồi! Đáp án đúng phải là: "${q.correctAnswer}" 💡`;
        } else {
            feedbackMessage.innerText = `Chưa đúng rồi! Đáp án chuẩn là: "${Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer}"`;
        }
    }

    // Transition controls
    checkBtn.disabled = true;
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    selectedOptionBtn = null;
};

window.nextQuizQuestion = function() {
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
        loadQuizQuestion(quizIndex);
    } else {
        showQuizResults();
    }
};

function showQuizResults() {
    // Hide play screen, show result screen
    document.getElementById('quiz-play-screen').classList.remove('active');
    document.getElementById('quiz-result-screen').classList.add('active');

    // Render scores dynamically
    document.getElementById('result-badge-score').innerText = `${quizScore} / ${quizQuestions.length}`;
    
    const accuracy = Math.round((quizScore / quizQuestions.length) * 100);
    document.getElementById('result-accuracy-pct').innerText = `${accuracy}%`;

    // Manage Retry Failed Questions button visibility
    const retryFailedBtn = document.getElementById('btn-retry-failed');
    if (retryFailedBtn) {
        if (incorrectQuestions.length > 0) {
            retryFailedBtn.style.display = 'inline-block';
            retryFailedBtn.innerText = `Làm lại ${incorrectQuestions.length} câu sai 🔄`;
        } else {
            retryFailedBtn.style.display = 'none';
        }
    }

    // Render Detailed Error Statistics
    let errorContainer = document.getElementById('quiz-error-stats-container');
    if (!errorContainer) {
        const resultCard = document.querySelector('#quiz-result-screen .quiz-result-card');
        if (resultCard) {
            errorContainer = document.createElement('div');
            errorContainer.id = 'quiz-error-stats-container';
            errorContainer.style.marginTop = '30px';
            errorContainer.style.textAlign = 'left';
            resultCard.appendChild(errorContainer);
        }
    }

    if (errorContainer) {
        if (incorrectQuestions.length === 0) {
            errorContainer.innerHTML = `
                <div style="background: #f0fdf4; border: 2px solid #86efac; border-radius: 20px; padding: 24px; text-align: center; margin-top: 30px;">
                    <h4 style="color: #166534; margin: 0 0 8px 0; font-weight: 800; font-size: 1.2rem;">🎉 Hoàn Hảo! Không Có Lỗi Sai Nào!</h4>
                    <p style="color: #15803d; margin: 0; font-size: 1rem;">Bạn đã trả lời chính xác 100% tất cả các câu hỏi trong bài luyện tập này.</p>
                </div>
            `;
        } else {
            let html = `
                <div style="background: #ffffff; border: 2px solid #fecdd3; border-radius: 24px; padding: 28px; margin-top: 30px; box-shadow: 0 10px 30px rgba(244, 63, 94, 0.08);">
                    <h4 style="color: #be123c; margin-top: 0; margin-bottom: 20px; font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 10px; border-bottom: 2px dashed #fecdd3; padding-bottom: 14px;">
                        📊 Thống Kê Chi Tiết Các Lỗi Sai (${incorrectQuestions.length} câu)
                    </h4>
                    <div style="display: flex; flex-direction: column; gap: 18px;">
            `;

            incorrectQuestions.forEach((item, idx) => {
                const itemNum = item.num || (idx + 1);
                const rubyContent = item.rubyAnswer || item.correctAnswer;
                html += `
                    <div style="background: #ffffff; border: 1.5px solid #ffe4e6; border-left: 6px solid #f43f5e; border-radius: 16px; padding: 20px 24px; box-shadow: 0 4px 15px rgba(244, 63, 94, 0.05);">
                        <div style="font-weight: 800; color: #9f1239; margin-bottom: 12px; font-size: 1.05rem; line-height: 1.5;">
                            Câu ${itemNum}: ${item.question}
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 10px;">
                            <div style="background: #fff1f2; border: 1.5px solid #fecdd3; padding: 14px 18px; border-radius: 14px;">
                                <div style="font-size: 0.85rem; font-weight: 800; color: #be123c; margin-bottom: 6px;">❌ Bạn chọn / đánh máy:</div>
                                <div class="chinese-char" style="font-weight: 700; font-size: 1.25rem; color: #9f1239;">
                                    ${item.userAnswer ? item.userAnswer : '(Chưa nhập)'}
                                </div>
                            </div>
                            <div style="background: #f0fdf4; border: 1.5px solid #bbf7d0; padding: 14px 18px; border-radius: 14px;">
                                <div style="font-size: 0.85rem; font-weight: 800; color: #15803d; margin-bottom: 8px;">✅ Đáp án đúng (Có phiên âm Pinyin trên đầu):</div>
                                <div class="chinese-char ruby-answer-box" style="font-weight: 700; font-size: 1.4rem; line-height: 2.3; color: #065f46; margin-top: 4px;">
                                    ${rubyContent}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
            errorContainer.innerHTML = html;
        }
    }

    // Personalized feedback texts
    const titleEl = document.getElementById('result-score-title');
    const descEl = document.getElementById('result-score-desc');

    if (quizScore === quizQuestions.length) {
        titleEl.innerText = "Tuyệt Đối! 🎉🐳";
        descEl.innerText = "Bạn có khả năng cảm thụ ngoại ngữ thiên tài! Chữ Hán của bạn quá xuất sắc, cô Chang tự hào về bạn lắm đấy nhé! 💕";
    } else if (accuracy >= 80) {
        titleEl.innerText = "Xuất Sắc! 🎉🌊";
        descEl.innerText = "Bạn có khả năng tiếp thu ngôn ngữ cực kỳ tuyệt vời! Phản xạ rất nhanh, hãy tiếp tục duy trì làn sóng học tập này nha.";
    } else if (accuracy >= 50) {
        titleEl.innerText = "Khá Tốt! 👍🐳";
        descEl.innerText = "Rất tốt! Bạn đã nắm chắc phần lớn các chữ Hán và Pinyin cơ bản rồi. Cố gắng ôn luyện thêm một chút để đạt điểm tuyệt đối nhé!";
    } else {
        titleEl.innerText = "Hãy Cố Lên Nha! 💪🌸";
        descEl.innerText = "Đừng nản lòng nhé! Chữ Hán mới bắt đầu học sẽ hơi thử thách một chút. Bạn hãy xem lại Flashcard và thử luyện tập lại nha, Cô Chang tin bạn làm được!";
    }
}

window.retryIncorrectQuestions = function() {
    if (incorrectQuestions.length === 0) {
        alert("Chúc mừng bạn! Không có câu nào bị sai cả! 🌸");
        return;
    }
    
    // Set quiz questions to only failed ones
    quizQuestions = incorrectQuestions.map(item => item.rawQuestion || item);
    quizIndex = 0;
    quizScore = 0;
    incorrectQuestions = []; // Reset for the retry round
    
    // Transition views
    document.getElementById('quiz-result-screen').classList.remove('active');
    document.getElementById('quiz-play-screen').classList.add('active');
    
    // Load first failed question
    loadQuizQuestion(quizIndex);
};



/**
 * --------------------------------------------------------------------------
 * PINYIN CHART SPA & SPELLING TONE GENERATOR
 * --------------------------------------------------------------------------
 */
let currentPinyinTone = 1;

const PINYIN_INITIALS = ["", "b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x", "zh", "ch", "sh", "r", "z", "c", "s", "y", "w"];
const PINYIN_FINALS = ["a", "o", "e", "ai", "ei", "ao", "ou", "an", "en", "ang", "eng", "ong", "i", "ia", "ie", "iao", "iu", "ian", "in", "iang", "ing", "iong", "u", "ua", "uo", "uai", "ui", "uan", "un", "uang", "ueng", "ü", "üe", "üan", "ün"];

const VALID_PINYIN_SET = new Set([
    // Zero initial
    "a", "o", "e", "ai", "ei", "ao", "ou", "an", "en", "ang", "eng", "er",
    // b
    "ba", "bo", "bei", "bao", "ban", "ben", "bang", "beng", "bi", "bie", "biao", "bian", "bin", "bing", "bu",
    // p
    "pa", "po", "pei", "pao", "pou", "pan", "pen", "pang", "peng", "pi", "pie", "piao", "pian", "pin", "ping", "pu",
    // m
    "ma", "mo", "me", "mei", "mao", "mou", "man", "men", "mang", "meng", "mi", "mie", "miao", "miu", "mian", "min", "ming", "mu",
    // f
    "fa", "fo", "fei", "fou", "fan", "fen", "fang", "feng", "fu",
    // d
    "da", "de", "dai", "dei", "dao", "dou", "dan", "den", "dang", "deng", "dong", "di", "die", "diao", "diu", "dian", "ding", "du", "duo", "duan", "dun",
    // t
    "ta", "te", "tai", "tao", "tou", "tan", "tang", "teng", "tong", "ti", "tie", "tiao", "tian", "ting", "tu", "tuo", "tuan", "tun",
    // n
    "na", "ne", "nai", "nei", "nao", "nou", "nan", "nen", "nang", "neng", "nong", "ni", "nie", "niao", "niu", "nian", "nin", "niang", "ning", "nu", "nuo", "nuan", "nü", "nüe",
    // l
    "la", "le", "lai", "lei", "lao", "lou", "lan", "lang", "leng", "long", "li", "lia", "lie", "liao", "liu", "lian", "lin", "liang", "reveal", "ling", "lu", "luo", "luan", "lun", "lü", "lüe", "lian",
    // g
    "ga", "ge", "gai", "gei", "gao", "gou", "gan", "gen", "gang", "geng", "gong", "gu", "gua", "guo", "guai", "gui", "guan", "gun", "guang",
    // k
    "ka", "ke", "kai", "kei", "kao", "kou", "kan", "ken", "kang", "keng", "kong", "ku", "kua", "kuo", "kuai", "kui", "kuan", "kun", "kuang",
    // h
    "ha", "he", "hai", "hei", "hao", "hou", "han", "hen", "hang", "heng", "hong", "hu", "hua", "huo", "huai", "hui", "huan", "hun", "huang",
    // j
    "ji", "jia", "jie", "jiao", "jiu", "jian", "jin", "jiang", "jing", "jiong", "ju", "jue", "juan", "jun",
    // q
    "qi", "qia", "qie", "qiao", "qiu", "qian", "qin", "qiang", "qing", "qiong", "qu", "que", "quan", "qun",
    // x
    "xi", "xia", "xie", "xiao", "xiu", "xian", "xin", "xiang", "xing", "xiong", "xu", "xue", "xuan", "xun",
    // zh
    "zha", "zhe", "zhi", "zhai", "zhei", "zhao", "zhou", "zhan", "zhen", "zhang", "zheng", "zhong", "zhu", "zhua", "zhuo", "zhuai", "zhui", "zhuan", "zhun", "zhuang",
    // ch
    "cha", "che", "chi", "chai", "chao", "chou", "chan", "chen", "chang", "cheng", "chong", "chu", "chua", "chuo", "chuai", "chui", "chuan", "chun", "chuang",
    // sh
    "sha", "she", "shi", "shai", "shei", "shao", "shou", "shan", "shen", "shang", "sheng", "shu", "shua", "shuo", "shuai", "shui", "shuan", "shun", "shuang",
    // r
    "re", "ri", "rao", "rou", "ran", "ren", "rang", "reng", "rong", "ru", "rua", "ruo", "rui", "ruan", "run",
    // z
    "za", "ze", "zi", "zai", "zei", "zao", "zou", "zan", "zen", "zang", "zeng", "zong", "zu", "zuo", "zui", "zuan", "zun",
    // c
    "ca", "ce", "ci", "cai", "cao", "cou", "can", "cen", "cang", "ceng", "cong", "cu", "cuo", "cui", "cuan", "cun",
    // s
    "sa", "se", "si", "sai", "sao", "sou", "san", "sen", "sang", "seng", "song", "su", "suo", "sui", "suan", "sun",
    // y
    "ya", "yo", "ye", "yao", "you", "yan", "yin", "yang", "ying", "yong", "yu", "yue", "yuan", "yun",
    // w
    "wa", "wo", "wai", "wei", "wan", "wen", "wang", "weng", "wu"
]);



let currentSyllable = "";
let activeCell = null;

function initPinyinChart() {
    const tableEl = document.getElementById('pinyin-chart-table');
    if (!tableEl) return;

    tableEl.innerHTML = '';

    // Build thead
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const cornerCell = document.createElement('th');
    cornerCell.className = 'corner-cell';
    cornerCell.innerText = 'Đầu \\ Vần';
    headerRow.appendChild(cornerCell);

    PINYIN_FINALS.forEach(final => {
        const th = document.createElement('th');
        th.innerText = final;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    tableEl.appendChild(thead);

    // Build tbody
    const tbody = document.createElement('tbody');
    
    PINYIN_INITIALS.forEach(initial => {
        const row = document.createElement('tr');
        
        // Initial header
        const initialCell = document.createElement('td');
        initialCell.className = 'pinyin-header-initial';
        initialCell.innerText = initial === "" ? "Ø (K.âm)" : initial;
        row.appendChild(initialCell);

        PINYIN_FINALS.forEach(final => {
            const td = document.createElement('td');
            let syllable = initial + final;

            // Spelling rules adjustment
            if (initial === "" && final === "i") syllable = "yi";
            else if (initial === "" && final === "u") syllable = "wu";
            else if (initial === "" && final === "ü") syllable = "yu";

            if (VALID_PINYIN_SET.has(syllable)) {
                td.className = 'pinyin-cell active-syllable';
                td.innerText = syllable; // Hiển thị âm tiết không dấu thanh điệu giống Nga HSK
                td.onclick = (e) => openTones(e, syllable, td);
            } else {
                td.className = 'pinyin-cell disabled-syllable';
                td.innerText = '·'; // Dùng ký tự chấm nhỏ giống mẫu
            }
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    tableEl.appendChild(tbody);
}

function applyToneToSyllable(syllable, tone) {
    if (tone === 5 || tone === 0) return syllable;
    
    const toneMap = {
        'a': ['ā', 'á', 'ǎ', 'à'],
        'o': ['ō', 'ó', 'ǒ', 'ò'],
        'e': ['ē', 'é', 'ě', 'è'],
        'i': ['ī', 'í', 'ǐ', 'ì'],
        'u': ['ū', 'ú', 'ǔ', 'ù'],
        'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
        'v': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
    };

    if (syllable.includes('a')) {
        return syllable.replace('a', toneMap['a'][tone - 1]);
    }
    if (syllable.includes('o')) {
        return syllable.replace('o', toneMap['o'][tone - 1]);
    }
    if (syllable.includes('e')) {
        return syllable.replace('e', toneMap['e'][tone - 1]);
    }
    if (syllable.includes('ui')) {
        return syllable.replace('i', toneMap['i'][tone - 1]);
    }
    if (syllable.includes('iu')) {
        return syllable.replace('u', toneMap['u'][tone - 1]);
    }

    const vowels = ['i', 'u', 'ü', 'v'];
    for (let char of vowels) {
        if (syllable.includes(char)) {
            return syllable.replace(char, toneMap[char][tone - 1]);
        }
    }
    return syllable;
}

window.openTones = function(e, syllable, cell) {
    currentSyllable = syllable;
    
    // Cập nhật tiêu đề và các nút thanh điệu
    const toneLabel = document.getElementById('toneLabel');
    if (toneLabel) toneLabel.innerText = syllable;

    for (let t = 1; t <= 4; t++) {
        const btn = document.getElementById(`btn-t${t}`);
        if (btn) {
            btn.innerText = applyToneToSyllable(syllable, t);
            btn.classList.remove('playing'); // Reset playing state on open
        }
    }

    // Hiển thị và định vị menu thanh điệu tại vị trí click chuột
    const toneMenu = document.getElementById('toneMenu');
    if (toneMenu) {
        toneMenu.style.display = 'block';
        
        let x = e.clientX, y = e.clientY;
        // Tránh menu bị tràn mép màn hình
        if (x + 280 > window.innerWidth) x -= 280;
        if (y + 160 > window.innerHeight) y -= 160;
        
        toneMenu.style.left = x + 'px';
        toneMenu.style.top = y + 'px';
    }

    // Đánh dấu ô đang được chọn
    if (activeCell) activeCell.classList.remove('active-cell');
    activeCell = cell;
    activeCell.classList.add('active-cell');

    e.stopPropagation();
};

window.playSyllable = function(tone) {
    return new Promise((resolve) => {
        let fileName = currentSyllable.replace(/ü/g, 'v') + tone;
        const audioPlayer = document.getElementById('pinyinAudioPlayer');
        if (!audioPlayer) {
            resolve();
            return;
        }

        // Xác định thư mục chứa âm thanh trên chinese.com.vn dựa trên chữ cái đầu
        let folder = 'row1';
        if (fileName.startsWith('zh') || fileName.startsWith('ch') || fileName.startsWith('sh') || fileName.startsWith('r')) {
            folder = 'ZHCHSH';
        } else if (fileName.startsWith('z') || fileName.startsWith('c') || fileName.startsWith('s')) {
            folder = 'ZCS';
        } else if (fileName.startsWith('b') || fileName.startsWith('p') || fileName.startsWith('m') || fileName.startsWith('f')) {
            folder = 'BPMF';
        } else if (fileName.startsWith('d') || fileName.startsWith('t') || fileName.startsWith('n') || fileName.startsWith('l')) {
            folder = 'DTNL';
        } else if (fileName.startsWith('g') || fileName.startsWith('k') || fileName.startsWith('h')) {
            folder = 'GKH';
        } else if (fileName.startsWith('j') || fileName.startsWith('q') || fileName.startsWith('x')) {
            folder = 'JQX';
        }

        const pinyinText = applyToneToSyllable(currentSyllable, tone);
        const btn = document.getElementById(`btn-t${tone}`);

        // Trình phát âm thanh dự phòng bằng AI (TTS) khi không tải được mp3
        const playTTSFallback = () => {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                
                const utterance = new SpeechSynthesisUtterance(pinyinText);
                utterance.lang = 'zh-CN';
                utterance.rate = 0.7;
                
                if (btn) btn.classList.add('playing');
                
                utterance.onend = () => {
                    if (btn) btn.classList.remove('playing');
                    resolve();
                };
                
                utterance.onerror = () => {
                    if (btn) btn.classList.remove('playing');
                    resolve();
                };
                
                window.speechSynthesis.speak(utterance);
            } else {
                if (btn) btn.classList.remove('playing');
                resolve();
            }
        };

        // Tải âm thanh chất lượng chuẩn từ website chinese.com.vn
        audioPlayer.src = `https://chinese.com.vn/wp-content/themes/chinese/audio/pinyinchart/${folder}/${fileName}.mp3`;
        
        // Xóa trạng thái playing ở tất cả các nút thanh điệu trước khi phát âm mới
        for (let t = 1; t <= 4; t++) {
            const otherBtn = document.getElementById(`btn-t${t}`);
            if (otherBtn) otherBtn.classList.remove('playing');
        }
        
        // Hiệu ứng đèn báo playing trên nút thanh điệu tương ứng
        if (btn) btn.classList.add('playing');
        
        audioPlayer.onended = () => {
            if (btn) btn.classList.remove('playing');
            resolve();
        };
        
        audioPlayer.onerror = () => {
            if (btn) btn.classList.remove('playing');
            console.log("Thiếu file hoặc lỗi âm thanh: " + fileName + ", chuyển sang phát âm AI (TTS)");
            playTTSFallback();
        };
        
        audioPlayer.play().catch(() => {
            if (btn) btn.classList.remove('playing');
            console.log("Không thể tự động phát: " + fileName + ", chuyển sang phát âm AI (TTS)");
            playTTSFallback();
        });
    });
};

window.playSequentially = async function() {
    const btnAll = document.getElementById('playAllBtn');
    if (btnAll) {
        btnAll.disabled = true;
        btnAll.style.opacity = '0.5';
    }
    
    for (let t = 1; t <= 4; t++) {
        await playSyllable(t);
        await new Promise(r => setTimeout(r, 300)); // Nghỉ 0.3s giữa các âm tiết
    }
    
    if (btnAll) {
        btnAll.disabled = false;
        btnAll.style.opacity = '1';
    }
};

// Đăng ký sự kiện tắt menu khi click ra ngoài
document.addEventListener('click', (e) => {
    const toneMenu = document.getElementById('toneMenu');
    if (toneMenu && !toneMenu.contains(e.target)) {
        toneMenu.style.display = 'none';
        if (activeCell) {
            activeCell.classList.remove('active-cell');
            activeCell = null;
        }
        // Xóa trạng thái playing ở tất cả các nút thanh điệu khi đóng menu
        for (let t = 1; t <= 4; t++) {
            const btn = document.getElementById(`btn-t${t}`);
            if (btn) btn.classList.remove('playing');
        }
    }
});

/**
 * --------------------------------------------------------------------------
 * UTILITIES

 * --------------------------------------------------------------------------
 */
// Shuffle helper algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

