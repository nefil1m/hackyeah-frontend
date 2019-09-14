import React, { useState, useEffect } from 'react';
import cs from 'classnames';

export default ({ questions, redirect }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const hasMoreQuestions = !!questions[currentQuestionIndex];

  useEffect(() => {
    if (!hasMoreQuestions) {
      redirect();
    }
  });

  if (!hasMoreQuestions) {
    return null;
  }

  const { question, answers } = questions[currentQuestionIndex] || {};
  const chooseAnswer = (answer) => {
    setChosenAnswer(answer);
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>{question}</h1>
      {answers.map((answer, i) => (
        <p
          onClick={() => chooseAnswer(answer)}
          className={cs({
            'answer--correct': answer === chosenAnswer && answer.correct,
            'answer--incorrect': chosenAnswer === answer && !answer.correct,
          })}
        >
          {i + 1}. {answer.text}
        </p>
      ))}
    </div>
  );
};