import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function handleLike() {
    setLike((prevLike) => {
      const newLike = !prevLike;
      setLikeCount(newLike ? 1 : 0);
      return newLike;
    });
  }

  function disableButton() {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1000);
  }

  function handleClick() {
    handleLike();
    disableButton();
  }

  return (
    <div className="like-card">
      <div
        onClick={handleClick}
        className={`heart ${like ? "active" : ""}`}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
      >
        {like ? "❤️" : "🤍"} <span className="count">{likeCount}</span>
      </div>

      <button
        onClick={handleClick}
        id="like-button"
        disabled={disabled}
        className={disabled ? "disabled" : ""}
      >
        {like ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default LikeButton;
