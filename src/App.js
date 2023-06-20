import { useFetch } from './fetch/useFetch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import { School } from './pages/school/School';
import './App.css';
import './bootstrap-utilities.min.css';
import './bootstrap-grid.min.css';
import { ThemeProvider } from '@emotion/react';
import { theme }  from './Theme';


function App() {

  const { data, loading, error } = useFetch('https://api-ste.smartte.com.mx/controller/user.php');

  return (    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/schools" element={<School></School>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
