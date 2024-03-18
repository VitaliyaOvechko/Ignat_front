import userImage from '../../../assets/images/user.png';
import icons from '../../../assets/icons.svg';
import './ReviewItem.scss';

const ReviewItem = ({ review }) => {
  return (
    <div className="review">
      <div className="review-info">
        <img src={userImage} alt="user" />
        <div>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <svg
                width={12}
                height={12}
                stroke="#000"
                key={index}
                fill={index < review.rating ? '#000' : 'none'}
              >
                <use href={icons + '#icon-star'} />
              </svg>
            ))}
          </div>
          <p className="user-name">{review.name}</p>
        </div>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  );
};

export default ReviewItem;
