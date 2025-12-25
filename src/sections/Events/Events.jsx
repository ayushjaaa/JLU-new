import { useState } from 'react';
import './Events.css';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const eventsData = [
    {
      id: 1,
      date: { month: 'Oct', day: '14' },
      color: '#5b8de8',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '12:00 PM | 00 PM',
      location: 'Perrin Theater, Keiler Center for the Arts'
    },
    {
      id: 2,
      date: { month: 'Oct', day: '14' },
      color: '#e85b7c',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '12:00 PM | 00 PM',
      location: 'Perrin Theater, Keiler Center for the Arts'
    },
    {
      id: 3,
      date: { month: 'Oct', day: '14' },
      color: '#e8c55b',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '12:00 PM | 00 PM',
      location: 'Perrin Theater, Keiler Center for the Arts'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="events-section">
      <div className="events-top-content">
        <div className="events-left-block">
          <p className="events-label">UPCOMING EVENTS</p>
          <h2 className="events-heading">SEE WHAT's GOING ON</h2>
          <p className="events-description">
            Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque
          </p>
          <button className="events-cta-button">View full Calender</button>
        </div>

        <div className="events-right-block">
          <div className="events-cards-container">
            <div
              className="events-cards-wrapper"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {eventsData.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-header">
                    <div
                      className="event-date-badge"
                      style={{ backgroundColor: event.color }}
                    >
                      <span className="event-month">{event.date.month}</span>
                      <span className="event-day">{event.date.day}</span>
                    </div>
                    <h3 className="event-title">{event.title}</h3>
                  </div>
                  <div className="event-meta">
                    <div className="event-time">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7" stroke="#666" strokeWidth="1.5"/>
                        <path d="M8 4V8L11 11" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="event-location">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" fill="#666"/>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <a href="#" className="event-read-more">Read More</a>
                </div>
              ))}
            </div>
          </div>

          <div className="events-slider-navigation">
            <button
              className="slider-nav-button slider-prev"
              onClick={handlePrevSlide}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="slider-nav-button slider-next"
              onClick={handleNextSlide}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="events-bottom-gallery">
        <div className="gallery-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
            alt="Event gathering"
            className="gallery-image"
          />
        </div>
        <div className="gallery-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
            alt="Event audience"
            className="gallery-image"
          />
        </div>
        <div className="gallery-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
            alt="Event workshop"
            className="gallery-image"
          />
        </div>
        <div className="gallery-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80"
            alt="Event presentation"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
