import './Message.css';

const Message = ({ text }) => {
  return (
    <div className='message flex-container'>
      <p>{text}</p>
    </div>
  );
};

export default Message;
