import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.body || '#FFFFFF'};
  border-style: none none solid none;
  background: none;
  outline: none;
  font-size: 14px;
  width: 245px;
  height: 30px;
  padding: 10px 0;
  margin: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.body || '#FFFFFF'};
  &::placeholder {
    color: ${({ theme }) => theme.colors.body || '#FFFFFF'};
    text-align: right;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:required:focus:valid {
    background: url('https://assets.digitalocean.com/labs/icons/hand-thumbs-up.svg') no-repeat 95% 50%
      ${({ theme }) => theme.colors.valid || '#FFFFFF'};
    border-radius: 5px;
    border-style: none;
    background-size: 25px;
  }
  &:focus:invalid {
    background: url('https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg') no-repeat 95% 50%
      ${({ theme }) => theme.colors.invalid || '#FFFFFF'};
    border-radius: 5px;
    border-style: none;
    background-size: 25px;
  }
`;
