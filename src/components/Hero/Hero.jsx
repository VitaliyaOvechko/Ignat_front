import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import hero1 from '../../assets/images/Hero_1.png';
import hero2 from '../../assets/images/Hero_2.png';
import hero3 from '../../assets/images/Hero_3.png';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        effect="fade"
      >
        <SwiperSlide>
          <img src={hero1} alt="hero" width={1366} height={489} />
          <div className="hero-text">
            <div className="hero-title-wrap">
              <h1 className="hero-title">
                Швидше. <br /> Вище. <br />
                Сильніше.
              </h1>
              <p className="hero-subtitle">Разом із Nike</p>
            </div>
            <div>
              <p className="discounts-label">Знижки до 40%</p>
              <p className="discounts-text">Залишився лише тиждень</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="hero" width={1366} height={489} />
          <div className="hero-text">
            <div className="hero-title-wrap">
              <h1 className="hero-title">
                Швидше. <br /> Вище. <br />
                Сильніше.
              </h1>
              <p className="hero-subtitle">Разом із Nike</p>
            </div>
            <div>
              <p className="discounts-label">Знижки до 40%</p>
              <p className="discounts-text">Залишився лише тиждень</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt="hero" width={1366} height={489} />
          <div className="hero-text">
            <div className="hero-title-wrap">
              <h1 className="hero-title">
                Швидше. <br /> Вище. <br />
                Сильніше.
              </h1>
              <p className="hero-subtitle">Разом із Nike</p>
            </div>
            <div>
              <p className="discounts-label">Знижки до 40%</p>
              <p className="discounts-text">Залишився лише тиждень</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="button-swiper">
        <div className="swiper-button-prev" />
        <div className="swiper-pagination" />
        <div className="swiper-button-next" />
      </div>
    </div>
  );
};

export default Hero;
