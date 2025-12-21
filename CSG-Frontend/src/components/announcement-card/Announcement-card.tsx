import "./announcement-card.css";
import { useState, useEffect } from "react";

type AnnouncementCardProps = {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  variant?: "default" | "outlined" | "elevated";
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  buttonLabel?: string;
  onButtonClick?: () => void;
  items?: Array<{
    title?: string;
    description?: string;
    image?: string;
    date?: string;
  }>;
};

export default function AnnouncementCard({
  id,
  title,
  description,
  image,
  date,
  variant = "default",
  onClick,
  style,
  buttonLabel = "Learn More",
  onButtonClick,
  items = [],
}: AnnouncementCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleItems = items.length > 0;
  const currentItem = hasMultipleItems
    ? items[currentIndex]
    : { title, description, image, date };

  useEffect(() => {
    if (!hasMultipleItems) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasMultipleItems, items.length]);

  return (
    <div
      id={id}
      className={`announce-card ${variant}`}
      style={style}
      onClick={onClick}>
      {currentItem.image && (
        <div className="announcement-card-image">
          <img src={currentItem.image} alt={currentItem.title} />
        </div>
      )}
      <div className="announcement-card-content">
        {currentItem.title && (
          <h3 className="announcement-card-title">{currentItem.title}</h3>
        )}
        {currentItem.date && (
          <p className="announcement-card-date">{currentItem.date}</p>
        )}
        {currentItem.description && (
          <p className="announcement-card-description">
            {currentItem.description}
          </p>
        )}
        <button className="annoucement-card-button" onClick={onButtonClick}>
          Go to CSG Bulletin
        </button>
      </div>
    </div>
  );
}
