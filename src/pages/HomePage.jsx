import React from 'react';
// import { useTranslation } from "react-i18next";
import { paths } from '../config/path';

import { Button } from '../styles/Button';
import { QuestionMark } from '../styles/Icon';
import { Container, LinkButton, Header } from '../styles/HomePage';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  // const { t } = useTranslation();
  return (
    <>
      <Container>
        <Header>Welcome to Quiz</Header>
          <QuestionMark />
        <Button>
          <LinkButton to={paths.quiz}>Start game</LinkButton>
        </Button>
        <Footer />
      </Container>
    </>
  );
};
