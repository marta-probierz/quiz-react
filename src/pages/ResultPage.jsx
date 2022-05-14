import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { paths } from '../config';
import { Container, Header, Button, LinkButton } from '../styles';

export const ResultPage = ({ name, score }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate(paths.home, { replace: true });
    }
  }, [name, navigate]);

  return (
    <Container>
      <Header>{t`resultPage.header`}</Header>
      <Header>{score}</Header>
      <Button>
        <LinkButton to="/">{t`resultPage.button`}</LinkButton>
      </Button>
    </Container>
  );
};
