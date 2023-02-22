import { useState } from 'react';
// SCSS
import './App.scss';
import Questions from './Questions';

function App() {
  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Questions question={question} />
          ))}
        </div>
      </div>
    </div>
  );
}

const questions = [
  {
    id: 1,
    title: 'Is this a good product?',
    info: 'aaaaaaaaaaaaasdasdasdasdasdasd',
  },
  {
    id: 2,
    title: 'How much  does it cost?',
    info: 'aaaaaaaaaaaaasdasdasdasdasdasd',
  },
  {
    id: 3,
    title: 'When can I get it?',
    info: 'aaaaaaaaaaaaasdasdasdasdasdasd',
  },
  {
    id: 4,
    title: 'What is Lorem Ipsum?',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
];

export default App;
