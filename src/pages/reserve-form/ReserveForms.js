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
    'route_id': 2,
    'interested': true,
    'reg_date': '2023-06-03'
}

export const ReserveForms = () => {
    const { data, loading, error } = useFetch('https://api-ste.smartte.com.mx/apiv2/schools');
    
    const [reserveData, setReserveData] = useState(initialValues);
    
    const handleChange = event => {
        console.log(event)
        const data = {... reserveData};
        //console.log(event.name);
        data[event.target.name] = event.target.value;

        setReserveData(data);
        console.log(data);
    };

    const send = () => {
        console.log(reserveData);
        let fd = new FormData();
        fd.append('tutor_name', 'diego');
        fetch('https://api-ste.smartte.com.mx/apiv2/reserve_form', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            mode: 'cors',
            body: Object.entries(reserveData).map(([k,v])=>{return k+'='+v}).join('&')
        }).
        then(json => json.json()).
        then(data => console.log(data)).
        catch(err => console.log(err));
    }

    return (
        <div>
            <Header></Header>
            <div className="container pt-3 px-md-5" >                
                <h1 className="pb-3">¡Reserva tu Ruta!</h1>

                <h3 className="pb-2">Datos del Tutor</h3>
                <div className="row pb-3">
                    <div className="col-12 col-md-6 pb-2">
                        <TextField className="w-100" id="tutor_name" name="tutor_name" label="Nombre" variant="outlined" onChange={handleChange}/>
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <TextField className="w-100" id="phone_name" name="tutor_phone" label="Telefono" variant="outlined" onChange={handleChange}/>
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <TextField className="w-100" id="tutor_email" name="tutor_email" label="Correo Electronico" variant="outlined" onChange={handleChange}/>
                    </div>
                </div>
                <h3 className="pb-2">Dirección</h3>
                <div className="row pb-3">
                    <div className="col-6 pb-2">
                        <TextField className="w-100" id="street" label="Calle" name="street" variant="outlined" onChange={handleChange}/>
                    </div>
                    <div className="col-6 pb-2">
                        <TextField className="w-100" id="house_number" name="house_number" label="Numero" variant="outlined" onChange={handleChange}/>
                    </div>
                    <div className="col-6 pb-2">
                        <TextField className="w-100" id="suburb" name="suburb" label="Colonia" variant="outlined" onChange={handleChange}/>
                    </div>
                    <div className="col-6 pb-2">
                        <TextField className="w-100" id="zip_code" name="zip_code" label="Codigo Postal" variant="outlined" onChange={handleChange}/>
                    </div>
                    <div className="col-md-6 pb-3">
                        <FormControl fullWidth>
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
                                <MenuItem value={1}>Monterrey</MenuItem>
                                <MenuItem value={2}>Guadalupe</MenuItem>
                                <MenuItem value={3}>Garcia</MenuItem>
                                <MenuItem value={4}>Apodaca</MenuItem>
                                <MenuItem value={5}>Escobedo</MenuItem>
                                <MenuItem value={6}>San Nicolas</MenuItem>
                                <MenuItem value={7}>Santa Catarina</MenuItem>
                                <MenuItem value={8}>Juarez</MenuItem>

                            </Select>
                        </FormControl>
                    </div>
                </div>
                <h3 className="pb-2">Datos del estudiante</h3>
                <div className="row pb-3">
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth>
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
                        </FormControl>
                    </div>
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth>
                            <InputLabel>Turno</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="shift"
                                label="Turno"
                                onChange={handleChange}
                                name="shift"
                                value={reserveData.shift}
                            >
                                <MenuItem value={1}>Matutino</MenuItem>
                                <MenuItem value={2}>Vespertino</MenuItem>
                                <MenuItem value={3}>Nocturno</MenuItem>

                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Clase</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="type_study"
                                label="Clase"
                                onChange={handleChange}
                                name="type_study"
                                value={reserveData.type_study}
                            >
                                <MenuItem value={1}>Preparatoria Bilingue</MenuItem>
                                <MenuItem value={2}>Preparatoria Internacional</MenuItem>
                                <MenuItem value={3}>Preparatoria Progresivo</MenuItem>
                                <MenuItem value={4}>Preparatoria Normal</MenuItem>
                                <MenuItem value={5}>Facultad</MenuItem>

                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-6 pb-2">
                        <FormControl fullWidth>
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
                        </FormControl>
                    </div>
                </div>

                <h3 className="pb-2">Si ya conoce nuestras rutas, favor de anotarla aqui abajo</h3>
                <div className="col-md-6 pb-5">
                    <TextField className="w-100" id="outlined-basic" label="Ruta" variant="outlined" onChange={handleChange}/>
                </div>
                <div className="row">
                    <div className="col-4 pb-4">
                        <Button variant="outlined">Regresar</Button>
                    </div>
                    <div className="col-4 pb-4"></div>
                    <div className="col-4 text-end pb-4">
                        <Button variant="contained" onClick={send}>Enviar</Button>
                    </div>

                </div>

            </div>
        </div>
    );

}
