import React from 'react';
import Nav from './components/Nav';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Nav />
    </ThemeProvider>
  );
}

export default App;
