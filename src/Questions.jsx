import React from 'react';
import { useState } from 'react';

const Questions = ({ question }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <section>
      <div key={question.id} className={isOpen ? 'open' : 'closed'}>
        <h4>{question.title}</h4>
        <button onClick={() => setisOpen(!isOpen)}>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
};

export default Questions;
