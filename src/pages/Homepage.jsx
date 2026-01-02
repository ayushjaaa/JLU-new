
import Hero from '../components/Hero';
import IntroSection from '../sections/IntroSection';
import Impact from '../sections/Impact/Impact';
import WhyJLU from '../sections/WhyJLU/WhyJLU';
import Programs from '../sections/Programs';
import VoicesOfJLU from '../sections/VoicesOfJLU';
import ImageGallery from '../sections/ImageGallery';
import Faculty from '../sections/Faculty';
import Awards from '../sections/Awards/Awards';
import GetStarted from '../sections/GetStarted/GetStarted';
import ThreeBoxSection from '../sections/ThreeBoxSection/ThreeBoxSection';

function Homepage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <Impact />
      <WhyJLU />
      <ImageGallery />
      <VoicesOfJLU />
      <Faculty />
      <GetStarted />
      <Programs />
      <ThreeBoxSection />
      <Awards />


    </>
  );
}

export default Homepage;
