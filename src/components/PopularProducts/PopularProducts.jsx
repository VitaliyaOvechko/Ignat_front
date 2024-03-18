import './PopularProducts.scss';
import Slider from 'components/Slider/Slider';

const PopularProducts = () => {
  return (
    <div className="popular">
      <Slider isPopularProducts={true} />
    </div>
  );
};

export default PopularProducts;
