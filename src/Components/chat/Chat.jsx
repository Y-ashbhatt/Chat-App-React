import './chat.css'

export default function Chat() {
  return <div className='chat' >
    <div className="top">
      <div className="user">
        <img src="./avatar.png" alt="user-avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Lorem ipsum, dolor sit amet </p>
        </div>
      </div>
      <div className="icons">
        <img src="./phone.png" alt="phone-call" />
        <img src="./video.png" alt="video-call" />
        <img src="./info.png" alt="info" />
      </div>
    </div>
    <div className="center"></div>
    <div className="bottom"></div>
  </div>;
}
