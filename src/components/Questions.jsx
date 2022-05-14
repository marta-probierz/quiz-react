import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { paths } from '../config';
import { Container, InfoBox, AnswersBox, Answers, Question, Amount, Button, ButtonsBox, LinkButton } from '../styles';

export const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  answers,
  correct,
  score,
  setScore
}) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();

  const handleSelect = (e) => {
    if (selected === e && selected === correct) return 'selected';
    else if (selected === e && selected !== correct) return 'wrong';
    else if (e === correct) return 'selected';
  };

  const handleCheck = (e) => {
    setSelected(e);
    if (e === correct) setScore(score + 1);
    if (currentQuestion <= 3) {
    setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelected();
      }, 1000)
      }
  };

  const goToResult = () => {
    if (currentQuestion === 4) navigate(paths.result, { replace: true });
  }

  return (
    <>
      <Container>
        <Amount>Question {currentQuestion + 1}/5</Amount>

        <Question>{questions[currentQuestion].question}</Question>
        <InfoBox>
          <AnswersBox>
            {answers &&
              answers.map((e) => (
                <Answers
                  className={`singleOption ${selected && handleSelect(e)}`}
                  key={e}
                  disabled={selected}
                  onClick={() => handleCheck(e)}
                >
                  {e}
                </Answers>
              ))}
          </AnswersBox>
        </InfoBox>
        <ButtonsBox>
          <Button>
            <LinkButton to="/">I give up</LinkButton>
          </Button>
          <Button disabled={currentQuestion <= 3} onClick={() => goToResult()}>Result</Button>
        </ButtonsBox>
      </Container>
    </>
  );
};
