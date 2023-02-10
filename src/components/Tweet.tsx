import { Link } from 'react-router-dom';
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/edusmpaio.png" alt="" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Eduardo Sampaio</strong>
          <span>@edusmpaio</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
