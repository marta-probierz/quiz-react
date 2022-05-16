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
    font-size: 20px;
  }
`;

export const Amount = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text || '#174C6F'};
  font-size: 20px;
  @media (min-width: 700px) {
    font-size: 30px;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px 15px;
  color: ${({ theme }) => theme.colors.text || '#174C6F'};
  font-size: 18px;
  @media (min-width: 700px) {
    font-size: 25px;
    margin: 15px 25px;
  }
`;

export const AnswersBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Answers = styled.button`
  &.singleOption {
    border: 1px solid ${({ theme }) => theme.colors.body || '#FFFFFF'};
    border-style: solid;
    background: none;
    border-radius: 3px;
    outline: none;
    width: 245px;
    font-size: 17px;
    min-height: 40px;
    margin: 10px;
    display: block;
    color: ${({ theme }) => theme.colors.body || '#FFFFFF'};
    cursor: pointer;
    @media (min-width: 700px) {
      min-height: 50px;
      width: 300px;
      font-size: 20px;
      padding-top: 2px;
    }
    &:hover {
      opacity: 0.9;
      background-color: rgba(164, 205, 215, 5);
    }
    &:disabled {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
    }
    &.selected {
      background-color: ${({ theme }) => theme.colors.valid || '#FFFFFF'};
    }
    &.wrong {
      background-color: ${({ theme }) => theme.colors.invalid || '#FFFFFF'};
    }
  }
`;
