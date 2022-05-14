import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  height: 40px;
  width: 150px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 2.5px;
  margin-top: 20px;
  align-self: center;
  color: ${({ theme }) => theme.colors.body || '#FFFFFF'};
  cursor: pointer;
  @media (min-width: 700px) {
    height: 45px;
    width: 250px;
    font-size: 25px;
    padding-top: 2px;
  }
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
