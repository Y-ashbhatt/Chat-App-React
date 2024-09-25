import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
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
      <div className="center">

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rerum perferendis, porro voluptates excepturi commodi,
              eos voluptatibus minima quisquam adipisci quia deleniti odit
              asperiores numquam odio! Incidunt hic magnam sit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
         
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rerum perferendis, porro voluptates excepturi commodi,
              eos voluptatibus minima quisquam adipisci quia deleniti odit
              asperiores numquam odio! Incidunt hic magnam sit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rerum perferendis, porro voluptates excepturi commodi,
              eos voluptatibus minima quisquam adipisci quia deleniti odit
              asperiores numquam odio! Incidunt hic magnam sit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
         
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rerum perferendis, porro voluptates excepturi commodi,
              eos voluptatibus minima quisquam adipisci quia deleniti odit
              asperiores numquam odio! Incidunt hic magnam sit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
         
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rerum perferendis, porro voluptates excepturi commodi,
              eos voluptatibus minima quisquam adipisci quia deleniti odit
              asperiores numquam odio! Incidunt hic magnam sit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rerum perferendis, porro voluptates excepturi commodi,
              eos voluptatibus minima quisquam adipisci quia deleniti odit
              asperiores numquam odio! Incidunt hic magnam sit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
         
          <div className="texts">
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rerum perferendis, porro voluptates excepturi commodi,
              eos voluptatibus minima quisquam adipisci quia deleniti odit
              asperiores numquam odio! Incidunt hic magnam sit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Type a message..."
        />
        <div className="emoji">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src="./emoji.png"
            alt="emoji"
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}
