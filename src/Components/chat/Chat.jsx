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
            <img src="https://imgs.search.brave.com/2yuE8S2MfO4IWVaGYFgOmekDCpHsIrA8IXN11Tspwd4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNE4xTmVv/SFRhVDhuSTB4N3Ax/akNHay81YTYwNTRh/NTA0NmI3NzQ5YTZi/NzhhZDNjYTFlYjU3/Zi93YXRlci1zcGxh/c2gtY2xyLXNodXR0/ZXJzdG9ja18yNTg0/MjE4MDUuanBnP2Zp/dD1maWxsJnc9NDgw/Jmg9Mjcw" alt="" />
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
