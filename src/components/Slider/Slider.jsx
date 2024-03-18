import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import icons from '../../assets/icons.svg';
import products from '../../helpers/products.json';
import reviews from '../../helpers/reviews.json';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './Slider.scss';

import { useRef } from 'react';
import ProductCard from 'components/PopularProducts/ProductCard/ProductCard';
import ReviewItem from 'components/Reviews/ReviewItem/ReviewItem';

const Slider = ({ isPopularProducts, isReviews }) => {
  const sliderRef = useRef(null);

  return (
    <div className="container">
      <div className="slider-title-wrap">
        {isPopularProducts ? (
          <h3 className="slider-title">Найгарячіші товари</h3>
        ) : (
          <h3 className="reviews-title">Відгуги наших клієнтів</h3>
        )}
        <div className="pagination">
          <div>01/03</div>
          <div className="pagination-btn">
            <svg
              className="swiper-button-prev1"
              width="25"
              style={{ cursor: 'pointer' }}
            >
              <use href={icons + '#icon-arrow-left'} />
            </svg>
            <svg
              className="swiper-button-next1"
              width="25"
              style={{ cursor: 'pointer' }}
              fill={Swiper.isEnd ? '#4AAA4E' : '#000'}
            >
              <use href={icons + '#icon-arrow-right'} />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={isPopularProducts ? 3 : 4}
        navigation={{
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        }}
        onSwiper={swiper => {
          sliderRef.current = swiper;
        }}
      >
        {isPopularProducts &&
          products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        {isReviews &&
          reviews.map(review => (
            <SwiperSlide key={review.id}>
              <ReviewItem review={review} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
