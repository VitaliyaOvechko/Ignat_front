import icons from '../../assets/icons.svg';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="topPanel">
          <div className="linksWrapper">
            <a href="tel:+3800989000909">098 900 09 09</a>
            <a href="/">Допомога</a>
          </div>
          <p>Увійти / Зареєструватися</p>
        </div>
      </div>
      <div className="bottomPanel container">
        <nav className="navigation">
          <h1 className="logo">Ignat</h1>
          <ul className="menu">
            <li className="menuItem">новинки</li>
            <li className="menuItem">чоловіки</li>
            <li className="menuItem">жінки</li>
            <li className="menuItem">аксесуари</li>
            <li className="menuItem">акції</li>
          </ul>
        </nav>
        <div className="searchBarIcons">
          <div className="searchBlock">
            <input className="searchInput" />
            <svg width="21" height="21" className="searchIcon">
              <use href={icons + '#icon-search'}></use>
            </svg>
          </div>
          <svg width="24" height="24" style={{ cursor: 'pointer' }}>
            <use href={icons + '#icon-heart'}></use>
          </svg>
          <svg width="24" height="24">
            <use
              href={icons + '#icon-cart'}
              style={{ cursor: 'pointer' }}
            ></use>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
