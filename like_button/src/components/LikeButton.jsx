import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    function handleLike() {
        setLike(prevLike => {
            const newLike = !prevLike;
            setLikeCount(newLike ? 1 : 0);
            return newLike;
        });
    }

    function disableButton() {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 1000);
    }

    return (
        <div className="like-card">
            <div
                onClick={() => {
                    handleLike();
                    disableButton();
                }}
                className="heart"
                style={{ pointerEvents: disabled ? "none" : "auto"}}
            >
                {like ? "❤️" : "🤍"} {likeCount}
            </div>

            <button
                onClick={() => {
                    handleLike();
                    disableButton();
                }}
                id="like-button"
                disabled={disabled}
                style={{ opacity: disabled ? 0.5 : 1 }}
            >
                Like
            </button>
        </div>
    );
}

export default LikeButton;
