import './Modal.css';

const Modal = ({ isOpen, className = '', children }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-backdrop flex-container'>
      <div className={`modal-content flex-container ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
