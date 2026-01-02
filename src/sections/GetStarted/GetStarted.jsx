import React, { useRef } from 'react';
import './GetStarted.css';

const GetStarted = () => {
  const eventsContainerRef = useRef(null);

  const events = [
    {
      id: 1,
      month: 'Oct',
      day: '14',
      color: '#1673FF',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '12:00 PM 1:00 PM',
      location: 'Perrin Theater, Keiter Center for the Arts'
    },
    {
      id: 2,
      month: 'Oct',
      day: '14',
      color: '#EF476F',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '12:00 PM 1:00 PM',
      location: 'Perrin Theater, Keiter Center for the Arts'
    },
    {
      id: 3,
      month: 'Oct',
      day: '14',
      color: '#FFD166',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '12:00 PM 1:00 PM',
      location: 'Perrin Theater, Keiter Center for the Arts'
    },
    {
      id: 4,
      month: 'Oct',
      day: '15',
      color: '#5B8FF9',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '2:00 PM 3:00 PM',
      location: 'Perrin Theater, Keiter Center for the Arts'
    },
    {
      id: 5,
      month: 'Oct',
      day: '16',
      color: '#F46D75',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '3:00 PM 4:00 PM',
      location: 'Perrin Theater, Keiter Center for the Arts'
    },
    {
      id: 6,
      month: 'Oct',
      day: '17',
      color: '#FDBB5D',
      title: 'Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis.',
      time: '4:00 PM 5:00 PM',
      location: 'Perrin Theater, Keiter Center for the Arts'
    }
  ];

  const scrollLeft = () => {
    if (eventsContainerRef.current) {
      const cardWidth = 360 + 24; // card width + gap
      eventsContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (eventsContainerRef.current) {
      const cardWidth = 360 + 24; // card width + gap
      eventsContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="get-started-wrapper">
      <div className="get-started-container">
        {/* Main Heading */}
        <div className="get-started-header">
          <h2 className="get-started-main-heading">UPCOMING EVENTS</h2>
          <div className="heading-bar"></div>
        </div>

        {/* Two Column Layout */}
        <div className="get-started-content">
          {/* Left Column */}
          <div className="left-column">
            <h3 className="left-heading">SEE WHAT's GOING ON</h3>
            <p className="left-paragraph">
              Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque
            </p>
            <button className="left-button">View full Calender</button>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Event Cards Container */}
            <div className="events-container" ref={eventsContainerRef}>
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-header-row">
                    <div className="event-date-badge" style={{ backgroundColor: event.color }}>
                      <span className="event-month">{event.month}</span>
                      <span className="event-day">{event.day}</span>
                    </div>
                    <h4 className="event-title">{event.title}</h4>
                  </div>
                  <div className="event-content">
                    <div className="event-details">
                      <div className="event-time">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.5"/>
                          <path d="M8 4V8L11 11" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="event-location">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 1C5.24 1 3 3.24 3 6c0 3.54 5 9 5 9s5-5.46 5-9c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S7.17 4.5 8 4.5s1.5.67 1.5 1.5S8.83 7.5 8 7.5z" fill="#999"/>
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <a href="#" className="read-more-link">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="slider-buttons">
          <button className="slider-btn prev-btn" aria-label="Previous" onClick={scrollLeft}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="slider-btn next-btn" aria-label="Next" onClick={scrollRight}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
