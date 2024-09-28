import { useState } from "react";
import "./login.css";

export default function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back,</h2>
        <form>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>New to ChatApp?</h2>
        <p>Sign up now and start chatting with your friends.</p>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
           <span>Upload Image</span> 
          </label>
          <input
            type="file"
            id="file"
            onChange={handleAvatar}
            style={{ display: "none" }}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
