import React, { useEffect, useRef, useState } from 'react';
import './Impact.css';
import Frame10 from '../../assets/images/Frame 10.png';
import Frame11 from '../../assets/images/Frame 11.png';
import Frame12 from '../../assets/images/Frame 12.png';
import Frame13 from '../../assets/images/Frame 13.png';

const Impact = () => {
  const sectionRef = useRef(null);
  const visualWrapperRef = useRef(null);
  const impactSectionRef = useRef(null);
  const [isMarqueeActive, setIsMarqueeActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const animationState = useRef({
    translateX: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartTranslateX: 0,
    animationId: null,
    speed: 1, // pixels per frame (adjust for speed)
    maxWidth: 0
  });

  // Calculate max scroll width (half of total width for seamless loop)
  useEffect(() => {
    const impactSection = impactSectionRef.current;
    if (!impactSection) return;

    const calculateMaxWidth = () => {
      // Wait for next tick to ensure DOM is fully rendered
      setTimeout(() => {
        const firstContent = impactSection.querySelector('.impact-content');
        const firstVisual = impactSection.querySelector('.impact-visual-wrapper');

        if (firstContent && firstVisual) {
          // Calculate exact width of one complete set (content + visual)
          const contentWidth = firstContent.offsetWidth;
          const visualWidth = firstVisual.offsetWidth;
          animationState.current.maxWidth = contentWidth + visualWidth;

          console.log('Max width calculated:', animationState.current.maxWidth);
        }
      }, 100);
    };

    calculateMaxWidth();
    window.addEventListener('resize', calculateMaxWidth);

    return () => window.removeEventListener('resize', calculateMaxWidth);
  }, []);

  // Main animation loop
  useEffect(() => {
    const impactSection = impactSectionRef.current;
    if (!impactSection || !isMarqueeActive) return;

    const animate = () => {
      if (!animationState.current.isDragging) {
        // Auto-scroll when not dragging
        animationState.current.translateX -= animationState.current.speed;
      }

      // Seamless loop wrapping - happens whether dragging or not
      if (animationState.current.maxWidth > 0) {
        // When we've moved a full section width to the left, wrap forward
        if (animationState.current.translateX <= -animationState.current.maxWidth) {
          animationState.current.translateX += animationState.current.maxWidth;
        }
        // When dragging to the right (positive values), wrap backward
        else if (animationState.current.translateX > 0) {
          animationState.current.translateX -= animationState.current.maxWidth;
        }
      }

      // Apply transform
      impactSection.style.transform = `translate3d(${animationState.current.translateX}px, 0, 0)`;

      // Continue animation
      animationState.current.animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationState.current.animationId = requestAnimationFrame(animate);

    return () => {
      if (animationState.current.animationId) {
        cancelAnimationFrame(animationState.current.animationId);
      }
    };
  }, [isMarqueeActive]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Intersection Observer to trigger marquee when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMarqueeActive(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();

    animationState.current.isDragging = true;
    animationState.current.dragStartX = e.clientX;
    animationState.current.dragStartTranslateX = animationState.current.translateX;
    setIsDragging(true);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();

    animationState.current.isDragging = true;
    animationState.current.dragStartX = e.touches[0].clientX;
    animationState.current.dragStartTranslateX = animationState.current.translateX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!animationState.current.isDragging) return;
    e.preventDefault();

    const currentX = e.touches[0].clientX;
    const diff = currentX - animationState.current.dragStartX;
    animationState.current.translateX = animationState.current.dragStartTranslateX + diff;
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!animationState.current.isDragging) return;
      e.preventDefault();

      const currentX = e.clientX;
      const diff = currentX - animationState.current.dragStartX;
      animationState.current.translateX = animationState.current.dragStartTranslateX + diff;
    };

    const handleGlobalMouseUp = () => {
      if (!animationState.current.isDragging) return;

      animationState.current.isDragging = false;
      setIsDragging(false);
    };

    const handleGlobalTouchEnd = () => {
      if (!animationState.current.isDragging) return;

      animationState.current.isDragging = false;
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  return (
    <div className="impact-wrapper" ref={sectionRef}>
      <div
        ref={impactSectionRef}
        className={`impact-section ${isMarqueeActive ? 'marquee-active' : ''} ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* First Set */}
        <div className="impact-content">
          <h2 className="impact-heading">JLU's Impact</h2>

          <div className="impact-paragraphs">
            <p className="impact-paragraph">
              Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non. Pretium
              lobortis ultrices urna faucibus leo. Adipiscing a eu accumsan ornare. Sodales in tempor
              pretium nibh vulputate tincidunt aliquam.
            </p>

            <p className="impact-paragraph">
              Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non.
            </p>
          </div>
        </div>

        <div
          ref={visualWrapperRef}
          className="impact-visual-wrapper"
        >
          <div className="impact-visual">
            <div className="impact-card green-card">
              <div>
                <p className="card-number">01</p>
                <p className="card-subtitle">IMPACT METRIC</p>
              </div>
              <div>
                <h3 className="card-title">Student Success</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non.</p>
              </div>
            </div>

            <img src={Frame10} alt="University Building" className="side-image" />

            <div className="impact-card blue-card">
              <div>
                <p className="card-number">02</p>
                <p className="card-subtitle">GLOBAL REACH</p>
              </div>
              <div>
                <h3 className="card-title">International Network</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pretium lobortis ultrices urna faucibus leo.</p>
              </div>
            </div>

            <img src={Frame11} alt="Campus Gateway" className="side-image" />

            <div className="impact-card yellow-card">
              <div>
                <p className="card-number">03</p>
                <p className="card-subtitle">RESEARCH OUTPUT</p>
              </div>
              <div>
                <h3 className="card-title">Innovation Hub</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Adipiscing a eu accumsan ornare.</p>
              </div>
            </div>

            <img src={Frame12} alt="Library Interior" className="side-image" />
            <img src={Frame13} alt="Study Hall" className="side-image" />
          </div>
        </div>

        {/* Second Set - Duplicate for seamless loop */}
        <div className="impact-content" aria-hidden="true">
          <h2 className="impact-heading">JLU's Impact</h2>

          <div className="impact-paragraphs">
            <p className="impact-paragraph">
              Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non. Pretium
              lobortis ultrices urna faucibus leo. Adipiscing a eu accumsan ornare. Sodales in tempor
              pretium nibh vulputate tincidunt aliquam.
            </p>

            <p className="impact-paragraph">
              Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non.
            </p>
          </div>
        </div>

        <div className="impact-visual-wrapper" aria-hidden="true">
          <div className="impact-visual">
            <div className="impact-card green-card">
              <div>
                <p className="card-number">01</p>
                <p className="card-subtitle">IMPACT METRIC</p>
              </div>
              <div>
                <h3 className="card-title">Student Success</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non.</p>
              </div>
            </div>

            <img src={Frame10} alt="" className="side-image" />

            <div className="impact-card blue-card">
              <div>
                <p className="card-number">02</p>
                <p className="card-subtitle">GLOBAL REACH</p>
              </div>
              <div>
                <h3 className="card-title">International Network</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pretium lobortis ultrices urna faucibus leo.</p>
              </div>
            </div>

            <img src={Frame11} alt="" className="side-image" />

            <div className="impact-card yellow-card">
              <div>
                <p className="card-number">03</p>
                <p className="card-subtitle">RESEARCH OUTPUT</p>
              </div>
              <div>
                <h3 className="card-title">Innovation Hub</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Adipiscing a eu accumsan ornare.</p>
              </div>
            </div>

            <img src={Frame12} alt="" className="side-image" />
            <img src={Frame13} alt="" className="side-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
