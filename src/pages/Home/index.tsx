import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import GlobalStyle from '../../styles/global';
import Header from '../../components/Header';
import Courses from '../../components/Courses';

function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme} />
        <Courses toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default Home;
