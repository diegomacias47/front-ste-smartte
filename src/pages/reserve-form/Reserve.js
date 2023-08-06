import TextField from "@mui/material/TextField/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { APIS, useFetch } from "../../fetch/useFetch";
import { useEffect, useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import { Link, useNavigate } from "react-router-dom";
import {Snackbar, Alert} from "@mui/material";

const initialValues = {
    'tutor_name': '',
    'tutor_phone': '',
    'tutor_email': '',
    'street': '',
    'house_number': '',
    'suburb': '',
    'zip_code': '',
    'city_id': '',
    'school_id': '',
    'period': '',
    'type_study': '',
    'shift': '',
    'route_id': ''
}

const validateForm = (values) => {
    const errors = {};

    if (!values.tutor_name) {
        errors['tutor_name'] = "Por favor, ingresa el nombre del tutor.";
    }
    if (!(values.tutor_phone)) {
        errors['tutor_phone'] = "Por favor, ingrese un numero valido, debe contener almenos 10 digitos.";
    }
    if (!values.tutor_email) {
        errors['tutor_email'] = "Por favor, ingrese su correo";
    }
    if (!values.suburb) {
        errors['suburb'] = "Por favor, ingrese su colonia";
    }
    if (!values.zip_code) {
        errors['zip_code'] = "Por favor, ingrese su codigo postal";
    }
    if (!(values.zip_code)) {
        errors['zip_code'] = "Por favor, ingrese un codigo postal valido";
    }
    if (!values.city_id) {
        errors['city_id'] = "Por favor, ingrese su municipio";
    }
    if (!values.school_id) {
        errors['school_id'] = "Por favor, ingrese su institucion";
    }
    if (!values.period) {
        errors['period'] = "Por favor, ingrese el periodo escolar actual";
    }
    if (!values.type_study) {
        errors['type_study'] = "Por favor, ingrese el tipo de estudio";
    }
    if(!values.shift) {
        errors['shift'] = "Por favor, ingrese su turno escolar";
    }

    return errors;
}

const alertType = {
    type: 'success',
    message: '.'
}

export const Reserve = () => {
    /*useEffect(() => {
        document.title = 'STE | ¡Reserva tu ruta!';
    }, []);*/

    const schoolsData = useFetch('schools');
    const allCities = useFetch('cities');
    const studyTypesData = useFetch('studyTypes');

    const [routes, setRoutes] = useState(null);
    const navigate = useNavigate();
    
    const [errors, setErrors] = useState({});
    const [reserveData, setReserveData] = useState(initialValues);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [alert, setAlert] = useState(alertType);

    useEffect(() => {
        if (reserveData.school_id) {
            setRoutes(null);
        }
    }, [reserveData.school_id]);
    
    const handleChange = event => {
        const data = {...reserveData};
        data[event.target.name] = event.target.value;
        if (event.target.name === 'school_id') {
            data['route_id'] = '';
        }
        
        setReserveData(data);
    };

    const getRoutesBySchool = (value) => {
        fetch(APIS.ApiV3 + 'routes?id=' + value)
        .then(json => json.json())
        .then(data => {
            setRoutes(data);
        })
        .catch(() => {
            setAlert({type: 'error', message: 'Ocurrio un error al enviar el formulario, por favor, intenta mas tarde.'})
            setOpenSnackbar(true);
        });
    }

    const send = () => {
        const errorResult = validateForm(reserveData);
        if (Object.keys(errorResult).length > 0) {
            return setErrors(errorResult);
        }
        
        const fd = new FormData();
        fd.append('tutor_name', 'diego');
        fetch(APIS.ApiV3 + 'reserve', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            mode: 'cors',
            body: Object.entries(reserveData).map(([k,v])=>{return k+'='+v}).join('&')
        })
        .then(json => json.json())
        .then(() => {
            setAlert({type: 'success', message: 'Formulario enviado correctamente.'})
            setOpenSnackbar(true);
        })
        .catch(() => {
            setAlert({type: 'error', message: 'Ocurrio un error al enviar el formulario, por favor, intenta mas tarde.'})
            setOpenSnackbar(true);
        });
    }

    return (
        <div>
            <div className="container pt-3 px-md-5 pb-5" >                
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <h2 className="mt-3 text-center text-white ste-bg-primary rounded">¡Reserva tu Ruta!</h2>
                        <p className="py-5 text-center fw-bolder">Reserva tu ruta en STE Transporte Estudiantil llenando el siguiente formulario.</p>
                        <h2 className="text-center text-white ste-bg-primary rounded mb-2">Datos del tutor</h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl error={errors.tutor_name !== undefined} className="w-100 mt-1">
                                        <TextField error={errors.tutor_name !== undefined} className="w-100" id="tutor_name" name="tutor_name" label="Nombre del tutor" variant="outlined" onChange={handleChange} size="small"/>
                                        <FormHelperText>{errors.tutor_name}</FormHelperText>
                                    </FormControl>
                                    <div className="pb-2">
                                        <small className="d-inline-block mb-2">*Obligatorio</small>
                                        <FormControl error={errors.tutor_email !== undefined} className="w-100 mt-1">
                                            <TextField type="email" error={errors.tutor_email !== undefined} className="w-100" id="tutor_email" name="tutor_email" label="Correo Electronico" variant="outlined" onChange={handleChange} size="small"/>
                                            <FormHelperText>{errors.tutor_email}</FormHelperText>
                                        </FormControl>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-6">
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl error={errors.tutor_phone !== undefined} className="w-100 mt-1">
                                        <TextField error={errors.tutor_phone !== undefined} type="number" className="w-100" id="phone_name" name="tutor_phone" label="Telefono del tutor" variant="outlined" onChange={handleChange} size="small"/>
                                        <FormHelperText>{errors.tutor_phone}</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center text-white ste-bg-primary rounded mb-2">Datos de Dirección:</h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl fullWidth error = {errors.city_id !== undefined} size="small" className="mt-1">
                                        <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="city_id"
                                            label="Ciudad"
                                            onChange={handleChange}
                                            placeholder="Seleccionar"
                                            name="city_id"
                                            value={reserveData.city_id}
                                            size="small"
                                        >
                                            {
                                                allCities.data?.map(val => (
                                                    <MenuItem value={val.city_id} key={val.city_id}>{val.city_name}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                        <FormHelperText>{errors.city_id}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Opcional</small>
                                    <FormControl error={errors.street !== undefined} className="w-100 mt-1">
                                        <TextField error={errors.street !== undefined} className="w-100" id="street" label="Calle" name="street" variant="outlined" onChange={handleChange} size="small"/>
                                        <FormHelperText>{errors.street}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl error={errors.zip_code !== undefined} className="w-100 mt-1">
                                        <TextField error={errors.zip_code !== undefined} type="number" className="w-100" id="zip_code" name="zip_code" label="Codigo Postal" variant="outlined" onChange={handleChange} size="small"/>
                                        <FormHelperText>{errors.zip_code}</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl error={errors.suburb !== undefined} className="w-100 mt-1">
                                        <TextField error={errors.suburb !== undefined} className="w-100" id="suburb" name="suburb" label="Colonia" variant="outlined" onChange={handleChange} size="small"/>
                                        <FormHelperText>{errors.suburb}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Opcional</small>
                                    <FormControl error={errors.house_number !== undefined} className="w-100 mt-1">
                                        <TextField error={errors.house_number !== undefined} type="number" className="w-100" id="house_number" name="house_number" label="Numero exterior" variant="outlined" onChange={handleChange} size="small"/>
                                        <FormHelperText>{errors.house_number}</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mt-1">
                        <h2 className="text-center text-white ste-bg-primary rounded mb-2">Datos escolares</h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl fullWidth error={errors.period !== undefined} size="small" className="mt-1">
                                        <InputLabel>Ciclo</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="period"
                                            label="Age"
                                            onChange={handleChange}
                                            name="period"
                                            value={reserveData.period}
                                            size="small"
                                        >
                                            <MenuItem value={1}>Ago-Dic 2023</MenuItem>

                                        </Select>
                                        <FormHelperText>{errors.period}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl fullWidth error = {errors.shift !== undefined} size="small" className="mt-1">
                                        <InputLabel>Turno</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="shift"
                                            label="Turno"
                                            onChange={handleChange}
                                            name="shift"
                                            value={reserveData.shift}
                                        >
                                            <MenuItem value={'MATUTINO'}>Matutino</MenuItem>
                                            <MenuItem value={'VESPERTINO'}>Vespertino</MenuItem>
                                            <MenuItem value={'NOCTURNO'}>Nocturno</MenuItem>

                                        </Select>
                                        <FormHelperText>{errors.shift}</FormHelperText>
                                    </FormControl>
                                </div>
                                {
                                    routes &&
                                    <div className="pb-2">
                                        <small className="d-inline-block mb-2">*Obligatorio</small>
                                        <FormControl fullWidth error = {errors.school_id !== undefined} size="small" className="mt-1">
                                            <InputLabel id="demo-simple-select-label">Ruta</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="route_id"
                                                label="Ruta"  
                                                onChange={handleChange}
                                                value={reserveData.route_id}          
                                                name="route_id"
                                            >
                                                {                                    
                                                    routes?.map((element, index) => (
                                                        <MenuItem key={index} value={ element.id_route}>{element.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                            <FormHelperText>{errors.school_id}</FormHelperText>
                                        </FormControl>
                                        <Link target="_blank" rel="noopener noreferrer" className="mb-4 btn-custom btn-custom-md btn-custom-text text-decoration-none mt-1 d-inline-block" to={'/routes?id=' + reserveData.school_id}>¿No conoce nuestras rutas? De click aquí.</Link>
                                    </div>
                                }
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl fullWidth error = {errors.school_id !== undefined} size="small" className="mt-1">
                                        <InputLabel id="demo-simple-select-label">Institucion</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="school_id"
                                            label="Institucion"  
                                            onChange={(event) => {
                                                handleChange(event);
                                                getRoutesBySchool(event.target.value);
                                            }}
                                            value={reserveData.school_id}          
                                            name="school_id"
                                        >
                                            {                                    
                                                schoolsData.data?.map((element, index) => (
                                                    <MenuItem key={index} value={ element.id_school}>{element.name}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                        <FormHelperText>{errors.school_id}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pb-2">
                                    <small className="d-inline-block mb-2">*Obligatorio</small>
                                    <FormControl fullWidth error = {errors.type_study !== undefined} size="small" className="mt-1">
                                        <InputLabel id="demo-simple-select-label">Clase</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="type_study"
                                            label="Clase"
                                            onChange={handleChange}
                                            name="type_study"
                                            value={reserveData.type_study}
                                        >
                                            {
                                                studyTypesData.data?.map(val => (
                                                    <MenuItem value={val.study_id} key={val.study_id}>{val.study_desc}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    <FormHelperText>{errors.type_study}</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="mt-3 text-end">
                                <button onClick={send} className="ste-btn ste-btn-primary">Enviar reservación</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={openSnackbar} autoHideDuration={1800} onClose={() => {setOpenSnackbar(false); navigate(0);}}>
                    <Alert severity={alert.type} sx={{ width: '100%' }}>
                        {
                            alert.message
                        }
                    </Alert>
                </Snackbar>
            </div> 
        </div>
    );

}