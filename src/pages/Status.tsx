import { FormEvent, KeyboardEvent, useState } from 'react';

import { Header } from '../components/Header';
import { Tweet } from '../components/Tweet';
import { Separator } from '../components/Separator';

import avatar from '../assets/avatar.svg';
import './Status.css';
import { PaperPlaneRight } from 'phosphor-react';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso',
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    if (newAnswer !== '') {
      setAnswers((prevState) => [newAnswer, ...prevState]);
      setNewAnswer('');
    }
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      if (newAnswer !== '') {
        setAnswers((prevState) => [newAnswer, ...prevState]);
        setNewAnswer('');
      }
    }
  }

  return (
    <main className="status">
      <Header title="Home" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor similique exercitationem optio officia, quas rem magni ex numquam impedit porro, quod dolores eaque distinctio? Eos exercitationem fugiat non libero." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src={avatar} alt="Ícone do usuário" />
          <textarea
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            onKeyDown={handleHotkeySubmit}
            id="tweet"
            placeholder="Tweet your answer"
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
