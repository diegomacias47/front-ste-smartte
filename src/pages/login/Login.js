import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import imagenlogo from '../../assets/imagenlogo.jpg'

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const userFormData = {
        'user': '',
        'password': ''
    };
    const [userData, setUserData] = useState(userFormData)
    const [user, setUser] = useState(null);
    //const [userName, setUserName] = useState(null);

    const handleLogin = (event) => {
        fetch('https://api-ste.smartte.com.mx/apiv2/web-login', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: Object.entries(userData).map(([k,v])=>{return k+'='+v}).join('&')
        })
        .then(response => response.json())
        .then(data => {
            window.localStorage.setItem('loggedUserData', JSON.stringify(data));
            setUser(data)
        })
        .catch(error => console.log(error));
    }

    const handleChangeUserData = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setUserData({...userData, [name]: value});
        console.log(userData);
    }

    return(
        <div>
            <div className="container h-100 pt-3 px-md-5">
                <div className="row">
                    <div className="col-12 col-md-6 pb-2">
                        <h1 className="text-center pt-3 pb-3">Inicio de Sesion</h1>
                        <div className="pt-3 px-4">
                            <FormControl sx={{width: '100%' }} variant="outlined">
                                <TextField className="pb-3 w-100" value={userData.user} id="outlined-basic" name="user" label="Usuario" onChange={handleChangeUserData} variant="outlined" />
                            </FormControl>
                            <FormControl sx={{width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    onChange={handleChangeUserData}
                                    value={userData.password}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                    />
                            </FormControl>

                            <div className="text-end pt-3">
                                <Button variant="outlined" className="text-capitalize" size="large" onClick={handleLogin}>
                                    Entrar
                                </Button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-12 col-md-6 d-md-flex align-items-center justify-content-center pb-2 pt-5">
                        <img src={imagenlogo} style={{width:'300px',height:'300px'}} alt="SMARTTE-LOGO"/>
                    </div>
                        
                    
                </div>
            </div>
        </div>
      
    )
}