import pic from '../assets/importPicWebPack';
const navLinks = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Giới thiệu', href: '#' },
  { label: 'Thực đơn', href: '#' },
  { label: 'Tin tức', href: '#' },
  { label: 'Liên hệ', href: '#' },
  { label: 'Đặt bàn', href: '#' },
];

const socialLinks = [
  { icon: 'f', label: 'Facebook', href: '#' },
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '♪', label: 'TikTok', href: '#' },
  { icon: '▶', label: 'YouTube', href: '#' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img
          src = {pic.logo}
          alt="Logo"
          className="footer-logo-img"
        />
        <h2 className="footer-logo-text">Phạm Tạ Quốc Thịnh Coffee</h2>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <p className="footer-col-title">Kết nối với chúng tôi</p>
          <p className="footer-desc">
            Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất.
            Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn
            của tách Coffee
          </p>
          <div className="footer-socials">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Liên hệ</p>
          <div className="footer-contact-item">
            <span className="icon">🏠</span>
            <span>25A Trần Nguyên Hãn – Nha Trang</span>
          </div>
          <div className="footer-contact-item">
            <span className="icon">📞</span>
            <span>Hotline: 091 353 3457 – 09 1425 2542</span>
          </div>
          <div className="footer-contact-item">
            <span className="icon">✉️</span>
            <span>Email : zinzinfood@gmail.com</span>
          </div>
          <div className="footer-contact-item">
            <span className="icon">📘</span>
            <span>Facebook : fb.com/zinzinfood</span>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Chính sách</p>
          <ul className="footer-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Fanpage</p>
          <div className="footer-fanpage-card">
            <div className="footer-fanpage-logo">
              <img width = "40px" height = "40px"
                src={pic.meta}
                alt="Fanpage Logo"
                className="footer-fanpage-logo-img"
              />
            </div>
            <div className="footer-fanpage-info">
              <div className="footer-fanpage-name">
                Meta
                <span className="footer-fanpage-verified">✔</span>
              </div>
              <div className="footer-fanpage-followers">106 triệu người theo dõi</div>
            </div>
          </div>
          <button className="footer-dat-ban-btn">ĐẶT BÀN 📅</button>
          <button className="footer-follow-btn">
            <span>f</span> Theo dõi Trang
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
