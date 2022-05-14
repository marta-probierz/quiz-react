import React, { useState } from 'react';
// import { useTranslation } from "react-i18next";
import { paths } from '../config/path';
import { useNavigate } from 'react-router-dom';

import { inputs } from '../config/inputs';
import { FormInput } from '../components/Input';
import { Button } from '../styles/Button';
import { QuestionMark } from '../styles/Icon';
import { Container, Header, Form } from '../styles/HomePage';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  // const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <Button disabled={name.length < 3 && name.length > 0 ? true : false}>Submit</Button>
        </Form>

        {/* <Form onSubmit={handleSubmit}>
          {/* <Input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          {error && <ErrorMsg>Please type your name</ErrorMsg>}
          <Button>Start</Button> */}
        {/* </Form> */}
        <Footer />
      </Container>
    </>
  );
};
