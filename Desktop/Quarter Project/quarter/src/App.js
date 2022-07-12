import 'typeface-nunito-sans';

import './App.css';
import Announcement from './Components/Announcement/Announcement';
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection';
import ServiceSection from './Components/ServiceSection/ServiceSection';
import ImageWithText from './Components/ImageWithText/ImageWithText';
import Counter from './Components/Counter/Counter';
import ImageWithText2 from './Components/ImageWithText2/ImageWithText2';
import Cards from './Components/Cards/Cards';
import ProSlider from './Components/ProSlider/ProSlider';
import Apartment from './Components/Apartment/Apartment';
import VideoSection from './Components/Video/Video';
import CategorySection from './Components/Category-section/CategorySection';
import Testimonials from './Components/Testimonials/Testimonials';
import BlogSlider from './Components/BlogSlider/BlogSlider';
import CallToAction from './Components/CallToAction/CallToAction';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Announcement />
      <Header />
      <HeroSection />
      <ServiceSection />
      <ImageWithText  />
      <Counter />
      <ImageWithText2 />
      <Cards />
      <ProSlider />
      <Apartment />
      <VideoSection />
      <CategorySection />
      <Testimonials />
      <BlogSlider />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
