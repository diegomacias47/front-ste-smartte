import * as React from 'react';
import './Header.css';
import SteLogo from '../../assets/ste_logo.png';
import Button  from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


export const Header = () => {

  return (
    <Box className='py-3 px-4' sx={{backgroundColor: 'secondary.maisn', boxShadow: 4}}>
      <div className='d-flex align-items-center'>
        <div className='d-flex align-items-center flex-1'>
          <img className='logo me-3' src={SteLogo}/>
          <label className='size-22 fw-bold text-whites fst-italic d-none d-md-inline'>STE Transporte Estudiantil</label>
        </div>
        <div className='d-none d-md-flex justify-content-end flex-1' style={{gap: 10}}>
          <Button className='text-capitalize fw-bolder p-0' variant='outlined'><Link to='/' className='text-decoration-none text-black d-block px-3 py-1 h-100'>Home</Link></Button>
          <Button className='text-capitalize fw-bolder p-0' variant='outlined'><Link to='/schools' className='text-decoration-none text-black d-block px-3 py-1 h-100'>Escuelas</Link></Button>
          <Button className='text-capitalize fw-bolder' variant='outlined'><Link to='/reserve-forms' className='text-decoration-none text-black d-block px-3 py-1 h-100'>Reservar</Link></Button>
          <Button className='text-capitalize fw-bolder' variant='outlined'>Contacto</Button>
          <Button className='text-capitalize fw-bolder d-none d-md-inline-flex' variant="contained" startIcon={<AccountCircleIcon/>} color='primary'><Link to='/login'>Iniciar Sesión</Link></Button>
          <Button className='d-inline-flex d-md-none' variant="outlined"><MenuIcon /></Button>
        </div>
      </div>
    </Box>
  );
}

