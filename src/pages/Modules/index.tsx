import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import GlobalStyle from '../../styles/global';
import HeaderModules from '../../components/HeaderModules';
import Sidebar from '../../components/Sidebar';
import Module from '../../components/Module';

function Modules() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <Sidebar toggleTheme={toggleTheme} />
        <div>
          <HeaderModules toggleTheme={toggleTheme} />
          <Module toggleTheme={toggleTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Modules;
