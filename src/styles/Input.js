import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.body || "#FFFFFF"};
  border-style: none none solid none;
  background: none;
  outline: none;
  font-size: 14px;
  width: 245px;
  height: 30px;
  padding: 10px 0;
  margin: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
  &::placeholder {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    text-align: right;
  }
`;