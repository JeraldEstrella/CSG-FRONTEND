import './card.css';

type CardProps = {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

export default function Card({
  id,
  title,
  description,
  image,
  date,
  variant = 'default',
  onClick,
  style,
}: CardProps) {
  return (
    <div id={id} className={`card ${variant}`} style={style} onClick={onClick}>
      {image && (
        <div className='card-image'>
          <img src={image} alt={title} />
        </div>
      )}
      <div className='card-content'>
        {title && <h3 className='card-title'>{title}</h3>}
        {date && <p className='card-date'>{date}</p>}
        {description && <p className='card-description'>{description}</p>}
      </div>
    </div>
  );
}
