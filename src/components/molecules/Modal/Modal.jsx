import './Modal.css';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-backdrop flex-container'>
      <div className='modal-content flex-container'>{children}</div>
    </div>
  );
};

export default Modal;
