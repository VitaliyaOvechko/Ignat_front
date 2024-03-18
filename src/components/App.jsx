import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import PopularProducts from './PopularProducts/PopularProducts';
import PromoBlock from './PromoBlock/PromoBlock';
import Reviews from './Reviews/Reviews';
import Subscription from './Subscription/Subscription';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <PromoBlock />
      <PopularProducts />
      <Subscription />
      <Reviews />
      <Footer />
    </div>
  );
};
