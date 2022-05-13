import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&family=Ubuntu:wght@300&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background-image: repeating-linear-gradient(180deg,rgba(164, 205, 215, 0) 0%, #3C789E);
  font-family: 'Maven Pro', sans-serif;
  font-size: 1.15em;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  scroll-behavior: smooth;
}
`;