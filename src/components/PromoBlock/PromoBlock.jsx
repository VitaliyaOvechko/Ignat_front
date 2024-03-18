import promo from '../../assets/images/promo.png';
import './PromoBlock.scss';

const PromoBlock = () => {
  return (
    <div className="container promo">
      <div>
        <h2 className="promo-title">
          Ми знаємо, що сподобається вашим “великим” друзям!
        </h2>
        <p className="promo-text">
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <button className="promo-button">До каталогу</button>
      </div>
      <img src={promo} alt="catalog" />
    </div>
  );
};

export default PromoBlock;
