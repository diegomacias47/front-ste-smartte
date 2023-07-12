import { Header } from "../../components/header/Header";
import TextField from "@mui/material/TextField/TextField";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFetch } from "../../fetch/useFetch";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../fetch/useForm";
import FormHelperText from "@mui/material/FormHelperText";
import { Link, useNavigate } from "react-router-dom";

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
    'route_id': '',
    'interested': true,
    'reg_date': '2023-06-03'
}

const validateForm = (values) => {
    const errors = {};

    var phone = document.getElementById("phone_name").value;
    var numphone = phone.length;

    if (!values.tutor_name) {
        errors['tutor_name'] = "Por favor, ingresa el nombre del tutor.";
    }

    if (!(values.tutor_phone.match(/^[0-9]+$/)) || (10!=numphone)) {
        errors['tutor_phone'] = "Por favor, ingrese un numero valido";
    }

    if (!values.tutor_email) {
        errors ['tutor_email'] = "Por favor, ingrese su correo";
    }
    
    if (!values.street) {
        errors ['street'] = "Por favor, ingrese su calle";
    }

    if (!values.house_number) {
        errors ['house_number'] = "Por favor, ingrese el numero de su domicilio";
    }

    if (!values.suburb) {
        errors ['suburb'] = "Por favor, ingrese su colonia";
    }

    if (!values.zip_code) {
        errors ['zip_code'] = "Por favor, ingrese su codigo postal";
    }

    if (!(values.zip_code.match(/^[0-9]+$/))) {
        errors['zip_code'] = "Por favor, ingrese un codigo postal valido";
    }

    if (!values.city_id) {
        errors ['city_id'] = "Por favor, ingrese su municipio";
    }

    if (!values.school_id) {
        errors ['school_id'] = "Por favor, ingrese su institucion";
    }

    if (!values.period) {
        errors ['period'] = "Por favor, ingrese el periodo escolar actual";
    }

    if (!values.type_study) {
        errors ['type_study'] = "Por favor, ingrese el tipo de estudio";
    }

    if(!values.shift) {
        errors ['shift'] = "Por favor, ingrese su turno escolar";
    }


    return errors;


}
export const ReserveForms = () => {
    const { data, loading, error } = useFetch('https://api-ste.smartte.com.mx/V3/schools');
    //const allCities = useFetch('https://api-ste.smartte.com.mx/V3/schools');
    const [routes, setRoutes] = useState(null);
    const navigate = useNavigate();
    
    const [errors, setErrors] = useState({});
    const [reserveData, setReserveData] = useState(initialValues);
    
    const handleChange = event => {
        const data = {...reserveData};
        data[event.target.name] = event.target.value;

        setReserveData(data);

        if (event.target.name == 'school_id') {
            fetch('https://api-ste.smartte.com.mx/apiv2/route?id=' + event.target.value)
            .then(json => json.json())
            .then(data => {
                setRoutes(data);
            })
            .catch(err => console.log(err));
        }
    };

    const send = (event) => {
        event.preventDefault();

        const errorResult = validateForm(reserveData);
        if (Object.keys(errorResult).length > 0) {
            return setErrors(errorResult);
        }

        let fd = new FormData();
        fd.append('tutor_name', 'diego');
        fetch('https://api-ste.smartte.com.mx/apiv2/reserve_form', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            mode: 'cors',
            body: Object.entries(reserveData).map(([k,v])=>{return k+'='+v}).join('&')
        }).
        then(json => json.json()).
        then(data => {
            alert('Formulario enviado correctamente')
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Header></Header>
            <div className="container pt-3 px-md-5" >                
                <h1 className="pb-3">¡Reserva tu Ruta!</h1>

                <h3 className="pb-2">Datos del Tutor</h3>
                
                <div className="row pb-3">
                    <div className="col-12 col-md-6 pb-2">
                        <FormControl error className="w-100">
                            <TextField className="w-100" id="tutor_name" name="tutor_name" label="Nombre" variant="outlined" onChange={handleChange}/>
                            <FormHelperText>{errors.tutor_name}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <FormControl error className="w-100">
                        <TextField className="w-100" id="phone_name" name="tutor_phone" label="Telefono" variant="outlined" onChange={handleChange}/>
                        <FormHelperText>{errors.tutor_phone}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <FormControl error className="w-100">
                        <TextField className="w-100" id="tutor_email" name="tutor_email" label="Correo Electronico" variant="outlined" onChange={handleChange}/>
                        <FormHelperText>{errors.tutor_email}</FormHelperText>
                        </FormControl>
                    </div>
                </div>
                <h3 className="pb-2">Dirección</h3>
                <div className="row pb-3">
                    <div className="col-6 pb-2">
                        <FormControl error className="w-100">
                        <TextField className="w-100" id="street" label="Calle" name="street" variant="outlined" onChange={handleChange}/>
                        <FormHelperText>{errors.street}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-6 pb-2">
                        <FormControl error className="w-100">
                        <TextField className="w-100" id="house_number" name="house_number" label="Numero" variant="outlined" onChange={handleChange}/>
                        <FormHelperText>{errors.house_number}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-6 pb-2">
                        <FormControl error className="w-100">
                        <TextField className="w-100" id="suburb" name="suburb" label="Colonia" variant="outlined" onChange={handleChange}/>
                        <FormHelperText>{errors.suburb}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-6 pb-2">
                        <FormControl error className="w-100">
                        <TextField className="w-100" id="zip_code" name="zip_code" label="Codigo Postal" variant="outlined" onChange={handleChange}/>
                        <FormHelperText>{errors.zip_code}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-md-6 pb-3">
                        <FormControl fullWidth error = {errors.city_id !== undefined}>
                            <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="city_id"
                                label="Ciudad"
                                onChange={handleChange}
                                placeholder="Seleccionar"
                                name="city_id"
                                value={reserveData.city_id}
                            >
                                <MenuItem value={1}>MONTERREY</MenuItem>
                                <MenuItem value={2}>APODACA</MenuItem>
                                <MenuItem value={3}>GUADALUPE</MenuItem>
                                <MenuItem value={4}>GENERAL ESCOBEDO</MenuItem>
                                <MenuItem value={5}>JUAREZ</MenuItem>
                                <MenuItem value={6}>SAN NICOLÁS DE LOS GARZA</MenuItem>
                                <MenuItem value={7}>GARCÍA</MenuItem>
                                <MenuItem value={8}>SANTA CATARINA</MenuItem>
                                <MenuItem value={9}>PESQUERÍA</MenuItem>
                                <MenuItem value={10}>SAN PEDRO GARZA GARCÍA</MenuItem>
                                <MenuItem value={11}>CADEREYTA JIMENEZ</MenuItem>
                                <MenuItem value={12}>SALINAS VICTORIA</MenuItem>
                                <MenuItem value={13}>SANTIAGO</MenuItem>
                                <MenuItem value={13}>OTRO</MenuItem>

                            </Select>
                            <FormHelperText>{errors.city_id}</FormHelperText>
                        </FormControl>
                    </div>
                </div>
                <h3 className="pb-2">Datos del estudiante</h3>
                <div className="row pb-3">
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth error = {errors.period !== undefined}>
                            <InputLabel>Ciclo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="period"
                                label="Age"
                                onChange={handleChange}
                                name="period"
                                value={reserveData.period}

                            >
                                <MenuItem value={1}>Ago-Dic 2023</MenuItem>

                            </Select>
                            <FormHelperText>{errors.period}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth error = {errors.shift !== undefined} >
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
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth error = {errors.type_study !== undefined}>
                            <InputLabel id="demo-simple-select-label">Clase</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="type_study"
                                label="Clase"
                                onChange={handleChange}
                                name="type_study"
                                value={reserveData.type_study}
                            >
                                <MenuItem value={1}>BACHILLERATO GENERAL</MenuItem>
                                <MenuItem value={2}>BACHILLERATO BILINGUE</MenuItem>
                                <MenuItem value={3}>BACHILLERATO INTERNACIONAL</MenuItem>
                                <MenuItem value={4}>BACHILLERATO PROGRESIVO</MenuItem>
                                <MenuItem value={5}>FACULTAD</MenuItem>

                            </Select>
                           <FormHelperText>{errors.type_study}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth error = {errors.school_id !== undefined}>
                            <InputLabel id="demo-simple-select-label">Institucion</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="school_id"
                                label="Institucion"  
                                onChange={handleChange}
                                value={reserveData.school_id}          
                                name="school_id"
                            >
                                {                                    
                                    data?.map((element, index) => (
                                        <MenuItem key={index} value={ element.id_school}>{element.name}</MenuItem>
                                    ))
                                    //institutionsList(data)
                                }
                            </Select>
                            <FormHelperText>{errors.school_id}</FormHelperText>
                        </FormControl>
                    </div>
                    {
                        routes &&
                        <div className="col-md-6 pb-2">
                            <Link className="mb-4" to={'/my-routes?id=' + reserveData.school_id}>¿No conoce nuestras rutas? Vea nuestro catalogo de rutas de esta escuela.</Link>
                            <FormControl fullWidth error = {errors.school_id !== undefined}>
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
                        </div>
                    }
                </div>

                {
                   /*             <h3 className="pb-2">Si ya conoce nuestras rutas, favor de anotarla aqui abajo</h3>
                <div className="col-md-6 pb-5">
                    <TextField className="w-100" id="outlined-basic" label="Ruta" variant="outlined" onChange={handleChange}/>
                </div>*/
                }
                <div className="row">
                    <div className="col-4 pb-4">
                        {/*<Button variant="outlined">Regresar</Button>*/}
                    </div>
                    <div className="col-4 pb-4"></div>
                    <div className="col-4 text-end pb-4">
                        <Button variant="contained" onClick={send} disabled={!reserveData.route_id}>Enviar</Button>
                    </div>

                </div>

            </div> 
        </div>
    );

}
