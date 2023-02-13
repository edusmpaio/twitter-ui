import { Link } from 'react-router-dom';
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import avatar from '../assets/avatar.svg';
import './Tweet.css';

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src={avatar} alt="Ícone do usuário" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Amelia Earhart</strong>
          <span>@user01293</span>
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
