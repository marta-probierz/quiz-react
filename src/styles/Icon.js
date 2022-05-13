import styled from 'styled-components';

import questionMark from '../assets/questionMark.png';

export const QuestionMark = styled.img.attrs({
  src: `${questionMark}`,
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin: 15px;

  @media (min-width: 700px) {
    width: 300px;
    margin: 20px;
  }
`;
