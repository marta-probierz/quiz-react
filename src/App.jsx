import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { paths } from './config';
import { GlobalStyles, theme } from './styles';
import { HomePage, QuizPage, ResultPage } from './pages';

export const App = () => {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const data = await axios.get(`https://opentdb.com/api.php?amount=5`);
    setQuestions(data.data.results);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route
          path={paths.home}
          element={
            <HomePage name={name} setName={setName} disabled={name.length < 3 || name.length > 16} fetchQuestions={fetchQuestions} />
          }
        />
        <Route
          path={paths.quiz}
          element={<QuizPage name={name} questions={questions} score={score} setScore={setScore} />}
        />
        <Route path={paths.result} element={<ResultPage name={name} score={score} />} />
      </Routes>
    </ThemeProvider>
  );
};
