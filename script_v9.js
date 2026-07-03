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
    { char: "没有", pinyin: "méiyǒu", hanViet: "Một hữu", meaning: "Không có", pos: "Động từ" }
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
        5: [
            { speaker: "Học sinh A", role: "a", zh: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", vi: "Nhà bạn có mấy người?" },
            { speaker: "Học sinh B", role: "b", zh: "我家有五口人：爸爸、妈妈、哥哥、妹妹和我。你呢？", pinyin: "Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, gēge, mèimei hé wǒ. Nǐ ne?", vi: "Nhà tôi có 5 người: bố, mẹ, anh trai, em gái và tôi. Còn bạn?" },
            { speaker: "Học sinh A", role: "a", zh: "我没有哥哥和妹妹，我有一个弟弟。", pinyin: "Wǒ méiyǒu gēge hé mèimei, wǒ yǒu yí gè dìdi.", vi: "Tôi không có anh trai và em gái, tôi có một em trai." },
            { speaker: "Học sinh B", role: "b", zh: "你哥哥在哪儿工作？", pinyin: "Nǐ gēge zài nǎr gōngzuò?", vi: "Anh trai bạn làm việc ở đâu?" },
            { speaker: "Học sinh A", role: "a", zh: "他在学校工作，他是老师。", pinyin: "Tā zài xuéxiào gōngzuò, tā shì lǎoshī.", vi: "Anh ấy làm việc ở trường học, anh ấy là giáo viên." },
            { speaker: "Học sinh B", role: "b", zh: "你有爷爷、奶奶吗？", pinyin: "Nǐ yǒu yéye, nǎinai ma?", vi: "Bạn có ông bà nội không?" },
            { speaker: "Học sinh A", role: "a", zh: "有，我也有外公和外婆。", pinyin: "Yǒu, wǒ yě yǒu wàigōng hé wàipó.", vi: "Có, tôi cũng có ông ngoại và bà ngoại." }
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
    "有": { hanViet: "Hữu", radical: "Nguyệt (月) - mặt trăng", strokes: 6, strokeSteps: ["1. Ngang (横)", "2. Phẩy (撇)", "3. Sổ đứng (竖)", "4. Ngang gập (横折)", "5. Ngang (横)", "6. Ngang khép (横)"] }
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
    if (courseName !== "Giao tiếp 1" && courseName !== "Từ vựng theo chủ đề") {
        alert(`Khóa học ${courseName} của cô Chang hiện đang được nâng cấp tài liệu tương tác. Bạn vui lòng chọn học lớp 'Giao tiếp 1' hoặc 'Từ vựng theo chủ đề' để khám phá trọn vẹn nhé! 💕`);
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

                <!-- Lesson 3 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Bài 3</div>
                    <h3>Gia đình ấm áp</h3>
                    <p class="lesson-desc-text">Học cách giới thiệu các thành viên trong gia đình và nghề nghiệp của họ.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>

                <!-- Lesson 4 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Bài 4</div>
                    <h3>Món ăn & Ẩm thực</h3>
                    <p class="lesson-desc-text">Gọi món ăn, diễn đạt sở thích ăn uống và thanh toán hóa đơn bằng tiếng Trung.</p>
                    <span class="lesson-status-badge badge-locked">Đang thiết lập</span>
                </div>

                <!-- Lesson 5 (Unlocked) -->
                <div class="lesson-card unlocked border-blue cursor-pointer" onclick="enterLesson(5)">
                    <div class="lesson-num">Bài 5</div>
                    <h3><span class="chinese-char">你哥哥在哪儿工作？</span></h3>
                    <p class="lesson-desc-text">Từ vựng về gia đình, nghề nghiệp, nơi làm việc và các từ hỏi liên quan.</p>
                    <span class="lesson-status-badge">Sẵn sàng học &rarr;</span>
                </div>

                <!-- Lesson 6 (Locked) -->
                <div class="lesson-card locked border-gray">
                    <div class="lesson-num">Bài 6</div>
                    <h3>Thời gian & Lịch trình</h3>
                    <p class="lesson-desc-text">Xem giờ giấc, nói về các ngày trong tuần, lập thời gian biểu cá nhân chi tiết.</p>
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
    if (lessonNum !== 1 && lessonNum !== 2 && lessonNum !== 5) {
        alert("Bài học này đang được Cô Chang chuẩn bị nội dung. Bạn hãy học 'Bài 1 / Chủ đề 1' cực kỳ sinh động đang có sẵn nhé! 🥰");
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
        } else if (lessonNum === 5) {
            VOCAB_DATA = [...GIAO_TIEP_1_B5_VOCAB];
            document.getElementById('workspace-badge').style.display = 'inline-block';
            document.getElementById('workspace-lesson-title').innerHTML = `Lớp Giao tiếp 1 - Bài 5: <span class="chinese-char">你哥哥在哪儿工作？</span>`;
            document.getElementById('workspace-badge').innerText = `Giao tiếp 1 • Bài 5`;
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
        let lessonName = currentCourse === "Giao tiếp 1" ? `Bài ${lessonNum}` : `Chủ đề ${lessonNum}`;
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
        } else if (currentLesson === 5) {
            dialogues = [
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你家有几_______人？</span><br>B: <span class="chinese-char">我家有五口人。</span>', ans: "口", opts: ["口", "个", "人", "家"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你家有_______人？</span><br>B: <span class="chinese-char">我家有四口人。</span>', ans: "几口", opts: ["几口", "sự", "bao nhiêu", "ai"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你_______哥哥 ma？</span><br>B: <span class="chinese-char">我没有哥哥，我有一个弟弟。</span>', ans: "有", opts: ["有", "没有", "是", "叫"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">你哥哥在哪儿_______？</span><br>B: <span class="chinese-char">他在北京工作。</span>', ans: "工作", opts: ["工作", "学习", "起床", "上班"] },
                { q: 'Điền từ vào ô trống:<br>A: <span class="chinese-char">爸爸_______妈妈都在家吗？</span><br>B: <span class="chinese-char">是的， họ đều ở nhà.</span>', ans: "和", opts: ["和", "有", "个", "的"] }
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
            incorrectQuestions.push(q); // Track wrong question
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

        if (userAnswer === q.correctAnswer) {
            isCorrect = true;
            textInput.classList.add('correct-state');
            quizScore++;
        } else {
            textInput.classList.add('incorrect-state');
            incorrectQuestions.push(q); // Track wrong question
            feedbackMessage.innerText = `Chưa đúng rồi! Đáp án chuẩn là: "${q.correctAnswer}"`;
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
            feedbackMessage.innerText = `Chưa đúng rồi! Đáp án chuẩn là: "${q.correctAnswer}"`;
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
    quizQuestions = [...incorrectQuestions];
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

