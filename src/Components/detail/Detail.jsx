import "./detail.css";

export default function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://imgs.search.brave.com/2yuE8S2MfO4IWVaGYFgOmekDCpHsIrA8IXN11Tspwd4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNE4xTmVv/SFRhVDhuSTB4N3Ax/akNHay81YTYwNTRh/NTA0NmI3NzQ5YTZi/NzhhZDNjYTFlYjU3/Zi93YXRlci1zcGxh/c2gtY2xyLXNodXR0/ZXJzdG9ja18yNTg0/MjE4MDUuanBnP2Zp/dD1maWxsJnc9NDgw/Jmg9Mjcw"
                  alt=""
                />
                </div>
                <span>photo_2024.png</span>
                <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
}
