import React from 'react';
// import { useTranslation } from "react-i18next";
import { paths } from '../config/path';
import { useNavigate } from 'react-router-dom';

import { inputs } from '../config/inputs';
import { FormInput } from '../components/Input';
import { Button } from '../styles/Button';
import { QuestionMark } from '../styles/Icon';
import { Container, Header, Form } from '../styles/HomePage';
import { Footer } from '../components/Footer';

export const HomePage = ({ name, setName, disabled, fetchQuestions }) => {
  // const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuestions();
    navigate(paths.quiz, { replace: true });
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Container>
        <Header>Welcome to Quiz</Header>
        <QuestionMark />
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={name} onChange={onChange} />
          ))}
          <Button disabled={disabled}>Submit</Button>
        </Form>
        <Footer />
      </Container>
    </>
  );
};
