import * as React from 'react';
import './Header.css';
import SteLogo from '../../assets/ste_logo.png';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { STEDrawer } from '../drawer/STEDrawer';

export const Header = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path)
  }
  return (
    <Box className='py-3 px-md-2 px-lg-4 position-sticky' sx={{backgroundColor: 'secondary.maisn', boxShadow: 4}}>
      <div className='container-fluid px-0 px-md-2 d-flex'>
        <div className='col-6'>
          <div className='d-flex align-items-center justify-content-center'>
              <img className='logo me-3' src={SteLogo}/>
              <label className='size-22 fw-bold text-whites fst-italic d-none d-lg-inline'>STE Transporte Estudiantil</label>
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-end col-6 text-capitalize' style={{gap: '10px'}}>
          <button className='text-capitalize d-none d-lg-inline-flex btn-custom btn-custom-md btn-custom-text' onClick={() => goTo('/')}>Inicio</button>
          <button className='text-capitalize d-none d-lg-inline-flex btn-custom btn-custom-md btn-custom-text' onClick={() => goTo('/schools')}>Escuelas</button>
          <button className='text-capitalize d-none d-lg-inline-flex btn-custom btn-custom-md btn-custom-text' onClick={() => goTo('/reservation')}>Reservar</button>
          <button className='text-capitalize d-none d-lg-inline-flex btn-custom btn-custom-md btn-custom-primary' onClick={() => goTo('/login')}>Iniciar Sesión</button>
          <div className='d-inline-flex d-lg-none'>
            <STEDrawer></STEDrawer>
          </div>          
        </div>
      </div>
    </Box>
  );
}

