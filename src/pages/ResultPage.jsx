import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { paths } from '../config';
import { Container, Header, Button, LinkButton, ButtonsBox } from '../styles';

export const ResultPage = ({ name, score, setScore }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate(paths.home, { replace: true });
    }
  }, [name, navigate]);

  const hadleChange = () => {
    setScore(0);
  };

  return (
    <Container>
      <Header>{t`resultPage.correct`}</Header>
      <Header>{score}</Header>
      <Header>{t`resultPage.incorrect`}</Header>
      <Header>{5 - score}</Header>
      <ButtonsBox>
        <Button>
          <LinkButton to="/">{t`resultPage.button-left`}</LinkButton>
        </Button>
        <Button>
          <LinkButton onClick={hadleChange} to="/quiz">{t`resultPage.button-right`}</LinkButton>
        </Button>
      </ButtonsBox>
    </Container>
  );
};
