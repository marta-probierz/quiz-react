import styled from 'styled-components';

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  color: ${({ theme }) => theme.colors.text || '#174C6F'};
`;

export const Info = styled.div`
  max-width: 250px;
  margin: auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.text || '#FFFFFF'};
  border-style: none none solid solid;
  @media (min-width: 700px) {
    min-width: fit-content;
    padding: 7px;
  }
`;

export const Question = styled.div``;
