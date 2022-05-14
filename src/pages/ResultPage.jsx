import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { paths } from '../config';
import { Container, Header, Button, LinkButton } from '../styles';

export const ResultPage = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate(paths.home, { replace: true });
    }
  }, [name, navigate]);

  return (
    <Container>
      <Header>Your score:</Header>
      <Header>{score}</Header>
      <Button>
        <LinkButton to="/">Play again</LinkButton>
      </Button>
    </Container>
  );
};
