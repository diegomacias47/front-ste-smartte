import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { CreditCard } from '@mui/icons-material';
import { InstallMobile } from '@mui/icons-material';
import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const STEDrawer = () => {
    const [loading, setLoading] = useState(false);
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

    const items = [
        {
            name: 'Inicio',
            icon: <CottageIcon/>,
            to: '/home'
        },
        {
            name: 'Escuelas',
            icon: <SchoolIcon/>,
            to: '/schools'
        },
        {
            name: 'Reservar',
            icon: <ArticleIcon/>,
            to: '/reservation'
        },
        {
            name: 'Formato de pago',
            icon: <CreditCard/>,
            to: '/payment'
        }/*,
        {
            name: 'Iniciar Sesión',
            icon: <LoginIcon/>,
            to: '/login'
        }*/
    ];

    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className='py-3'>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemIcon>
                    { item.icon }
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
                <ListItemButton onClick={downloadApp}>
                  <ListItemIcon>
                    <InstallMobile />
                  </ListItemIcon>
                  <ListItemText primary='Descargar aplicación' />
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
    );
    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
            <Drawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={loading} >
                <Alert severity='success' sx={{ width: '100%' }}>
                    Descargando aplicación...
                </Alert>
            </Snackbar>
        </div>
    );
}