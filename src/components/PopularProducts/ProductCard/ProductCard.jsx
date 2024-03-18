import icons from '../../../assets/icons.svg';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const getImgUrl = imageName => {
    return require(`../../../assets/images/${imageName}.png`);
  };
  return (
    <div className="product-card">
      <div className="favorite">
        <svg width={20} height={20} style={{ cursor: 'pointer' }}>
          <use href={icons + '#icon-heart'} />
        </svg>
      </div>
      <img src={getImgUrl(product.imageName)} alt={product.title} />
      <div>
        <p className="product-title">{product.title}</p>
        <p className="product-type">{product.type}</p>
        <p className="product-feature">{product.feature}</p>
        <p className="product-price">{product.price} грн.</p>
      </div>
    </div>
  );
};

export default ProductCard;
