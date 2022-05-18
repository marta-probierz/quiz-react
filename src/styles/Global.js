import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  margin: auto;
  background-image: repeating-linear-gradient(180deg,rgba(164, 205, 215, 0) 0%, #3C789E);
  font-family: 'Maven Pro', sans-serif;
  font-size: 1.15em;
  font-weight: 600;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  scroll-behavior: smooth;
}
`;

export const theme = {
  colors: {
    primary: '#d9248f',
    valid: '#ADDB80',
    invalid: '#FF8888',
    text: '#174C6F',
    body: '#fff',
  },
};
