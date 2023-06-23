import { Header } from "../../components/header/Header";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import imagenlogo from '../../assets/imagenlogo.jpg'
export const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
        <div>
            <Header></Header>
            <div className="container h-100 pt-3 px-md-5">
                <div className="row">
                    <div className="col-12 col-md-6 pb-2">
                        <h1 className="text-center pt-3 pb-3">Inicio de Sesion</h1>
                        <div className="pt-3 px-4">
                            <TextField className="pb-3 ps-2 w-100" id="outlined-basic" label="Usuario" variant="outlined" />

                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
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
                                <Button variant="outlined" size="large">
                                    Entrar
                                </Button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-12 col-md-6 d-md-flex align-items-center justify-content-center pb-2 pt-5">
                        <img src={imagenlogo} style={{width:'300px',height:'300px'}}></img>
                    </div>
                        
                    
                </div>
            </div>
        </div>
      
    )
}