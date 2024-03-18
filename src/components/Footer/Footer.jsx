import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-panel container">
        <ul className="info-list">
          <p className="info-list-title">Контакт - центр</p>
          <li className="info-list-item">098 900 09 09</li>
          <li className="info-list-item">Пн - Пт 09:00 - 21:00</li>
          <li className="info-list-item">Пн - Пт 09:00 - 21:00</li>
        </ul>
        <div className="info-block">
          <ul className="info-list">
            <p className="info-list-title">Покупцям</p>
            <li className="info-list-item">Оплата і доставка</li>
            <li className="info-list-item">Повернення</li>
            <li className="info-list-item">Питання та відповіді</li>
          </ul>
          <ul className="info-list">
            <p className="info-list-title">Особистий кабінет</p>
            <li className="info-list-item">Мої дані</li>
            <li className="info-list-item">Історія замовлень</li>
            <li className="info-list-item">Улюблені</li>
            <li className="info-list-item">Розсилки</li>
          </ul>
          <ul className="info-list">
            <p className="info-list-title">Про компанію</p>
            <li className="info-list-item">Про нас</li>
            <li className="info-list-item">Новини</li>
            <li className="info-list-item">Стати партнером</li>
            <li className="info-list-item">Угода користувача</li>
          </ul>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="container footer-block">
          <ul className="footer-nav-list">
            <li className="nav-list-item">новинки</li>
            <li className="nav-list-item">чоловіки</li>
            <li className="nav-list-item">жінки</li>
            <li className="nav-list-item">аксесуари</li>
            <li className="nav-list-item">акції</li>
          </ul>
          <p className="footer-text">
            © 2022 — 2023 IGNAT. Усі права захищені.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
