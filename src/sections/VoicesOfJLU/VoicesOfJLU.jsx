import React, { useState } from 'react';
import './VoicesOfJLU.css';

const VoicesOfJLU = () => {
  const [activeIndex, setActiveIndex] = useState(7);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Thompson',
      degree: 'B.Tech | II Year',
      quote: 'The hands-on learning approach and supportive faculty have transformed my understanding of technology.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      degree: 'B.Sc | III Year',
      quote: 'JLU provided me the perfect environment to explore my passion for science and research.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80'
    },
    {
      id: 3,
      name: 'Michael Chen',
      degree: 'MBA | I Year',
      quote: 'The diverse campus culture and industry connections have been invaluable for my career growth.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      degree: 'BBA | II Year',
      quote: 'The entrepreneurship programs here have helped me develop my business acumen significantly.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80'
    },
    {
      id: 5,
      name: 'David Martinez',
      degree: 'B.Tech | IV Year',
      quote: 'From internships to placements, JLU has opened doors to amazing opportunities.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      degree: 'B.Des | III Year',
      quote: 'The creative freedom and state-of-the-art facilities have helped me bring my designs to life.',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80'
    },
    {
      id: 7,
      name: 'Rajesh Kumar',
      degree: 'M.Tech | I Year',
      quote: 'The research facilities and mentorship at JLU are world-class and inspiring.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80'
    },
    {
      id: 8,
      name: 'John Doe',
      degree: 'B.Tech | I Year',
      quote: 'Lorem ipsum dolor sit amet consectetur. Rhoncus erat sagittis sed nisl. Nascetur posuere aliquam tellus dignissim.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80'
    }
  ];

  return (
    <section className="voices-of-jlu">
      <div className="section-header">
        <h1 className="main-heading">VOICES OF JLU</h1>
        <p className="sub-text">
          Lorem ipsum dolor sit amet consectetur. Feugiat mi enim<br />
          lectus convallis scelerisque pharetra facilisi amet.
        </p>
      </div>

      <div className="image-gallery">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`gallery-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className="gallery-image"
              style={{ backgroundImage: `url(${testimonial.image})` }}
            >
              <div className="overlay-content">
                <h3 className="testimonial-name">
                  {testimonial.name} ({testimonial.degree})
                </h3>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VoicesOfJLU;
