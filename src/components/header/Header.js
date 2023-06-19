import * as React from 'react';
import './Header.css';
import SteLogo from '../../assets/ste_logo.png';
import Button  from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';

export const Header = () => {

  return (
    <Box className='py-3 px-4' sx={{backgroundColor: 'secondary.maisn', boxShadow: 4}}>
      <div className='d-flex align-items-center'>
        <div className='d-flex align-items-center flex-1'>
          <img className='logo me-3' src={SteLogo}/>
          <label className='size-22 fw-bold text-whites fst-italic'>STE Transporte Estudiantil</label>
        </div>
        <div className='d-flex justify-content-end flex-1'>
          <Button className='text-capitalize fw-bolder' variant="contained" startIcon={<AccountCircleIcon/>} color='primary'>Iniciar Sesión</Button>
        </div>
      </div>
    </Box>
  );
}

