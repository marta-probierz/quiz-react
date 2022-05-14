import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paths, inputs } from '../config';
import { FormInput, Footer } from '../components';
import { Button, QuestionMark, Container, Header, Form } from '../styles';

export const HomePage = ({ name, setName, disabled, fetchQuestions }) => {
  const { t } = useTranslation();
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
        <Header>{t`homePage.welcome`}</Header>
        <QuestionMark />
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={name} onChange={onChange} />
          ))}
          <Button disabled={disabled}>{t`homePage.start`}</Button>
        </Form>
        <Footer />
      </Container>
    </>
  );
};
