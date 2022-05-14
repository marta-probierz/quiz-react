import React, { useState, useEffect } from 'react';

import { Loader, Questions } from '../components';
import { Container, Header, InfoBox, Info } from '../styles';

export const QuizPage = ({ name, questions, score, setScore, setQuestions }) => {
  const [answers, setAnswers] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setAnswers(
      questions &&
        handler([questions[currentQuestion]?.correct_answer, ...questions[currentQuestion]?.incorrect_answers]),
    );
  }, [currentQuestion, questions]);

  const handler = (e) => {
    return e.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <Container>
        <Header>Hello, {name}</Header>
        {questions ? (
          <>
            <InfoBox>
              <Info>{questions[currentQuestion].category}</Info>
              <Info>Score: {score}</Info>
            </InfoBox>
            <Questions
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              answers={answers}
              correct={questions[currentQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};
