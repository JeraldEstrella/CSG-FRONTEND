import './button.css';

type buttonProps = {
  variant: string;
  id?: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};
export default function Button({
  variant,
  id,
  children,
  onClick,
  style,
}: buttonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      type='submit'
      className={`button ${variant}`}
      style={style}
    >
      {children}
    </button>
  );
}
