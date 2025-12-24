import Hero from './sections/Hero';
import IntroSection from './sections/IntroSection';
import Impact from './sections/Impact/Impact';
import WhyJLU from './sections/WhyJLU/WhyJLU';
import VoicesOfJLU from './sections/VoicesOfJLU';
import ImageGallery from './sections/ImageGallery';

function App() {
  return (
    <div className="app">
      <Hero />
      <IntroSection />
      <Impact />
      <WhyJLU />
      <ImageGallery />
      <VoicesOfJLU />
    </div>
  );
}

export default App;
