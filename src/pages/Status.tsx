import { FormEvent, useState } from 'react';

import { Header } from '../components/Header';
import { Tweet } from '../components/Tweet';
import { Separator } from '../components/Separator';

import './Status.css';

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

  return (
    <main className="status">
      <Header title="Home" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor similique exercitationem optio officia, quas rem magni ex numquam impedit porro, quod dolores eaque distinctio? Eos exercitationem fugiat non libero." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/edusmpaio.png" alt="Eduardo Sampaio" />
          <textarea
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            id="tweet"
            placeholder="Tweet your answer"
          />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
