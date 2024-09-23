import { useState } from "react";
import "../chatList/chatList.css";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input type="text" placeholder="Search..." />
        </div>
        <img
          onClick={() => setAddMode((prev) => !prev)}
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="plus"
          className="add"
        />
      </div>
    </div>
  );
}
