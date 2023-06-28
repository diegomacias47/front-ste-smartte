import { useFetch } from './fetch/useFetch';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from './pages/home/Home';
import { ReserveForms } from './pages/reserve-form/ReserveForms';
import { School } from './pages/school/School';
import { MyRoutes } from './pages/my-routes/MyRoutes';
import { Login } from './pages/login/Login';
import './App.css';
import './bootstrap-utilities.min.css';
import './bootstrap-grid.min.css';
import { ThemeProvider } from '@emotion/react';
import { theme }  from './Theme';
import React from 'react';



function App() {

  


  return (    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/schools" element={<School></School>}></Route>
          <Route path="/reserve-form" element={<ReserveForms></ReserveForms>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/my-routes" element={<MyRoutes></MyRoutes>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
