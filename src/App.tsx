import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import { AnimatePresence } from "framer-motion";

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Modules from './pages/Modules';
import Classes from './pages/Classes';
import Politica from './pages/Politica';
import Termos from './pages/Termos';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/:nomeCurso/:nomeModulo/:nomeAula' element={<Classes />} />
            <Route path='/:nomeCurso/:nomeModulo' element={<Classes />} />
            <Route path='/:nomeCurso' element={<Modules />} />
            <Route path='/' element={<Home />} />
            <Route path='/politicadeprivacidade' element={<Politica />} />
            <Route path='/termosdeuso' element={<Termos />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </AnimatePresence>
  );
}

export default App;
