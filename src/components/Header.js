import * as React from 'react';
import SteLogo from '../assets/ste_logo.png';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { STEDrawer } from './drawer/STEDrawer';

const headerClasses = {
  logo: {
    width: '100px',
    height: '45px',
  },
  header: {
    backgroundColor: '#FCFCFC'
  }
}

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path)
  }
  console.log(location.pathname);
  return (
    <div className='py-3 px-md-2 px-lg-4 box-shadow-primary' style={headerClasses.header}>
      <div className='container-fluid px-0 px-md-2 d-flex justify-content-around'>
        <div className='d-flex align-items-center justify-content-center'>
          <img className='logo me-3' src={SteLogo} alt='ste-logo' style={headerClasses.logo} />
          <label className='size-22 fw-normal text-whites d-none d-lg-inline'>Smartte</label>
        </div>
        <div className='d-flex align-items-center justify-content-center col-6 text-capitalize' style={{ gap: '10px' }}>
          <button className={`text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-sm ste-btn-outlined-primary ${location.pathname === '/home' ? 'active' : ''}`} onClick={() => goTo('/')}>Inicio</button>
          <button className={`text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-sm ste-btn-outlined-primary ${location.pathname === '/schools' ? 'active' : ''}`} onClick={() => goTo('/schools')}>Escuelas</button>
          <button className={`text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-sm ste-btn-outlined-primary ${location.pathname === '/reservation' ? 'active' : ''}`} onClick={() => goTo('/reservation')}>Reservar</button>
          <button className={`text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-sm ste-btn-outlined-primary ${location.pathname === '/payment' ? 'active' : ''}`} onClick={() => goTo('/payment')}>Formato pago</button>
          <button className={`text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-sm ste-btn-outlined-primary ${location.pathname === '/qr' ? 'active' : ''}`} onClick={() => goTo('/qr')}>Generar QR</button>
        </div>
        <div className='d-flex align-items-center'>
          <button className='text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-primary' onClick={() => goTo('/login')}>Iniciar Sesión</button>
          <div className='d-inline-flex d-lg-none'>
            <STEDrawer></STEDrawer>
          </div>
        </div>
      </div>
    </div>
  );
}

