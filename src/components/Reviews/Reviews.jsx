import Slider from 'components/Slider/Slider';
import './Reviews.scss';

const Reviews = () => {
  return (
    <div className="reviews">
      <Slider isReviews={true} />
    </div>
  );
};

export default Reviews;
