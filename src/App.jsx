import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { paths } from './config/path';
import { GlobalStyles, theme } from './styles/Global';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { ResultPage } from './pages/ResultPage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.quiz} element={<QuizPage />} />
        <Route path={paths.result} element={<ResultPage />} />
      </Routes>
    </ThemeProvider>
  );
};
