import { useTranslation } from 'react-i18next';

import { Container, Header, Button, LinkButton, ButtonsBox } from '../styles';

export const ResultPage = ({ score, setScore, fetchQuestions }) => {
  const { t } = useTranslation();

  const hadleChange = () => {
    setScore(0);
    fetchQuestions();
  };

  return (
    <Container>
      <Header>{t`resultPage.correct`}</Header>
      <Header>{score}</Header>
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
