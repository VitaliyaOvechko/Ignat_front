import icons from '../../assets/icons.svg';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="top-header-panel">
          <div className="links-wrap">
            <a href="tel:+3800989000909">098 900 09 09</a>
            <a href="/">Допомога</a>
          </div>
          <p>Увійти / Зареєструватися</p>
        </div>
      </div>
      <div className="bottom-header-panel container">
        <nav className="navigation">
          <p className="logo">Ignat</p>
          <ul className="menu">
            <li className="menu-item">новинки</li>
            <li className="menu-item">чоловіки</li>
            <li className="menu-item">жінки</li>
            <li className="menu-item">аксесуари</li>
            <li className="menu-item">акції</li>
          </ul>
        </nav>
        <div className="search-bar-icons">
          <div className="search-block">
            <input className="search-input" />
            <svg width="21" height="21" className="search-icon">
              <use href={icons + '#icon-search'} />
            </svg>
          </div>
          <svg width="24" height="24" style={{ cursor: 'pointer' }}>
            <use href={icons + '#icon-heart'} />
          </svg>
          <svg width="24" height="24">
            <use href={icons + '#icon-cart'} style={{ cursor: 'pointer' }} />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
