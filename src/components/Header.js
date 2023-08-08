import SteLogo from '../assets/ste_logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { STEDrawer } from './drawer/STEDrawer';
import { Fragment, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

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
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path)
  }

  //const [openSnackbar, setOpenSnackbar] = useState(false);

  const downloadApp = async () => {
    setLoading(true);
    await fetch('https://api-ste.smartte.com.mx/ste-files/ste-estudiantil.apk')
    .then(response => response.blob())
    .then((blob) => {
        let blobUrl = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'STEApp';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setLoading(false);
    })
    .catch(err => {
        setLoading(false);
        console.log(err)
    });

  }

  return (
    <Fragment>
      <div className='py-3 px-3 px-lg-4 box-shadow-primary' style={headerClasses.header}>
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
            <button className={`text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-sm ste-btn-outlined-primary ${location.pathname === '/refund' ? 'active' : ''}`} onClick={() => goTo('/refund')}>Reembolsos</button>
          </div>
          <div className='d-flex align-items-center'>
            <button className='text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-sm ste-btn-primary' onClick={downloadApp}>
              ¡Descarga nuestra aplicación!
            </button> 
            { /*<button className='text-capitalize d-none d-lg-inline-flex ste-btn ste-btn-primary' onClick={() => goTo('/login')}>Iniciar Sesión</button> */ }
            <div className='d-inline-flex d-lg-none'>
              <STEDrawer></STEDrawer>
            </div>
          </div>
        </div>
      </div>
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={loading} >
        <Alert severity='success' sx={{ width: '100%' }}>
            Descargando aplicación...
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

