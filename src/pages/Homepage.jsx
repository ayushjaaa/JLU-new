import Hero from '../sections/Hero';
import IntroSection from '../sections/IntroSection';
import Impact from '../sections/Impact/Impact';
import WhyJLU from '../sections/WhyJLU/WhyJLU';
import Programs from '../sections/Programs';
import VoicesOfJLU from '../sections/VoicesOfJLU';
import ImageGallery from '../sections/ImageGallery';
import Faculty from '../sections/Faculty';
import Events from '../sections/Events';
import Awards from '../sections/Awards/Awards';

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
      <Events />
      <Programs />
      <Awards />
    </>
  );
}

export default Homepage;
