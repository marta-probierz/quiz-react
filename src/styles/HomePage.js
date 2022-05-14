import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  padding-top: 50px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  @media (min-width: 700px) {
    max-width: 1600px;
    margin: auto;
  }
`;

export const LinkButton = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.body || '#fff'};
  line-height: 36px;
  text-decoration: none;
`;

export const Header = styled.h1`
  margin: 80px 0 20px;
  color: ${({ theme }) => theme.colors.text || '#174C6F'};
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

  @media (min-width: 700px) {
    font-size: 2.5em;
  }
`;

export const Foot = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  bottom: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
