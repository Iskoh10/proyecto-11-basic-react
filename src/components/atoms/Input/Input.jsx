import './Input.css';

const Input = ({
  type = 'text',
  value = '',
  placeholder = '',
  label,
  id = 'input',
  ...rest
}) => {
  return (
    <div className='input'>
      <label htmlFor={id} className='text'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        className='input'
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
