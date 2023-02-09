import React from 'react';
import ReactDOM from 'react-dom/client';
import { Tweet } from './components/Tweet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet />
    </div>
  </React.StrictMode>
);
