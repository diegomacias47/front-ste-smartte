import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import './bootstrap-utilities.min.css';
import './bootstrap-grid.min.css';
import { ThemeProvider } from '@emotion/react';
import { theme }  from './Theme';
import React from 'react';
import { RoutesIndex } from './components/RoutesIndex';



function App() {

  


  return (    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
