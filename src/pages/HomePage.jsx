import React, { useState } from 'react';
// import { useTranslation } from "react-i18next";
import { paths } from '../config/path';
import { useNavigate } from 'react-router-dom';

import { Button } from '../styles/Button';
import { QuestionMark } from '../styles/Icon';
import { Container, LinkButton, Header, ErrorMsg, Form } from '../styles/HomePage';
import { Footer } from '../components/Footer';
import { Input } from '../styles/Input';

export const HomePage = ({ name, setName }) => {
  // const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);
    } else {
      setError(false);
      navigate(paths.quiz, { replace: true });
    }
  };

  return (
    <>
      <Container>
        <Header>Welcome to Quiz</Header>
        <QuestionMark />
          <Form onSubmit={handleSubmit}>
            <Input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            {error && <ErrorMsg>Please type your name</ErrorMsg>}
            <Button>Start</Button>
          </Form>
        <Footer />
      </Container>
    </>
  );
};
