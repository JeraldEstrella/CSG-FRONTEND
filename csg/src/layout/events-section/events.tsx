import { useState, useMemo } from 'react';
import eventData from '../../config/eventsConfig';
import Card from '../../components/card/Card';
import Typography from '../../components/typography/Typography';
import './event.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const EVENTS_PER_SLIDE = 4;

  /*function to take all the event object and group into 4*/
  const eventSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < eventData.length; i += EVENTS_PER_SLIDE) {
      slides.push(eventData.slice(i, i + EVENTS_PER_SLIDE));
    }
    return slides;
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, eventSlides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className='event-container'>
      <div className='event-layout'>
        <div className='event-texts'>
          <Typography size='text-md' color='text-dark'>
            Events
          </Typography>
          <Typography size='text-sm' color='text-ghost'>
            Explore official records from students government proceedings
          </Typography>
        </div>

        <div className='carousel-wrapper'>
          <div
            className='carousel-track'
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {eventSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className='carousel-slide'>
                <div className='card-container'>
                  {slide.map((event, index) => (
                    <div key={event.id} className={`card-item-${index}`}>
                      <Card
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        image={event.image}
                        variant='default'
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='carousel-controls'>
            <button
              className='event-button'
              type='button'
              onClick={prevSlide}
              aria-label='Previous slide'
              title='Previous slide'
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={30} />
            </button>
            <button
              className='event-button'
              type='button'
              onClick={nextSlide}
              aria-label='next slide'
              title='next slide'
              disabled={currentSlide === eventSlides.length - 1}
            >
              <ChevronRight size={30} />
            </button>
          </div>
          <div className='dot-indicators'>
            {eventSlides.map((_, index) => (
              <button
                key={index}
                type='button'
                aria-label={`Go to slide ${index + 1}`}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
