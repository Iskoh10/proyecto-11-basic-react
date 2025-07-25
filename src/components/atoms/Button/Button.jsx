import './Button.css';

const Button = ({
  text = '',
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
