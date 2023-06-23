import { Header } from "../../components/header/Header";
import  TextField  from "@mui/material/TextField/TextField";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFetch } from "../../fetch/useFetch";

export const ReserveForms = () => {
    const {data, loading, error} = useFetch('https://api-ste.smartte.com.mx/apiv2/schools');

    return (
        <div> 
            <Header></Header>
            <div className="container pt-3 px-md-5" >

                <h1 className="pb-3">Reserva de Ruta</h1>

                <h3 className="pb-2">Datos del Tutor</h3>
                <div className="row">
                    <div className="col-12 col-md-6 pb-2">
                        <TextField className="w-100" id="outlined-basic" label="Nombre" variant="outlined" />
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <TextField className="w-100"id="outlined-basic" label="Telefono" variant="outlined" />
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <TextField className="w-100"id="outlined-basic" label="Correo Electronico" variant="outlined" />
                    </div>
                 </div>
                <h3 className="pb-2">Dirección</h3>
                <div className="row">
                        <div className="col-6 pb-2">
                           <TextField className="w-100" id="outlined-basic" label="Calle" variant="outlined" />
                        </div>
                        <div className="col-6 pb-2">
                         <TextField className="w-100" id="outlined-basic" label="Numero" variant="outlined" />
                        </div>
                        <div className="col-6 pb-2">
                            <TextField className="w-100" id="outlined-basic" label="Colonia" variant="outlined" />
                        </div>
                        <div className="col-6 pb-2">
                            <TextField className="w-100" id="outlined-basic" label="Codigo Postal" variant="outlined" />
                        </div>
                    </div>
                <div className="col-md-6 pb-3">
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Ciudad"
                    >
                    <MenuItem value={10}>Monterrey</MenuItem>
                    <MenuItem value={10}>Guadalupe</MenuItem>
                    <MenuItem value={10}>Garcia</MenuItem>
                    <MenuItem value={10}>Apodaca</MenuItem>
                    <MenuItem value={10}>Escobedo</MenuItem>
                    <MenuItem value={10}>San Nicolas</MenuItem>
                    <MenuItem value={10}>Santa Catarina</MenuItem>
                    <MenuItem value={10}>Juarez</MenuItem>
                    
                    </Select>
                    </FormControl>
                </div>
                <h3 className="pb-2">Datos del estudiante</h3>
                <div className="row">
                <div className="col-md-6 pb-2">
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Ciclo</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    >
                    <MenuItem value={10}>Ago-Dic 2023</MenuItem>
                    
                    </Select>
                    </FormControl>
                </div>
                <div className="col-md-6 pb-2">
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Turno</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Turno"
                    >
                    <MenuItem value={10}>Matutino</MenuItem>
                    <MenuItem value={10}>Vespertino</MenuItem>
                    <MenuItem value={10}>Nocturno</MenuItem>
                    
                    </Select>
                    </FormControl>
                </div>
                <div className="col-md-6 pb-2">
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Clase</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Clase"
                    >
                    <MenuItem value={10}>Preparatoria Bilingue</MenuItem>
                    <MenuItem value={10}>Preparatoria Internacional</MenuItem>
                    <MenuItem value={10}>Preparatoria Progresivo</MenuItem>
                    <MenuItem value={10}>Preparatoria Normal</MenuItem>
                    <MenuItem value={10}>Facultad</MenuItem>
                    
                    </Select>
                    </FormControl>
                </div>
                <div className="col-md-6 pb-2">
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Institucion</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Institucion"
                    >
                    
                    {
                        data?.map((element, index) => (
                            <MenuItem value={element.id_school}>{element.name}</MenuItem>
                        ))
                    }
                    </Select>
                    </FormControl>
                </div>
                </div>
               
                <h3 className="pb-2">Si ya conoce nuestras rutas, favor de anotarla aqui abajo</h3>
                <div className="col-md-6 pb-5">
                    <TextField className="w-100" id="outlined-basic" label="Ruta" variant="outlined" />    
                </div>
                <div className="row">
                    <div className="col-4 pb-4">
                        <Button variant="outlined">Regresar</Button>
                    </div>
                    <div className="col-4 pb-4"></div>
                    <div className="col-4 text-end pb-4">
                        <Button variant="contained">Enviar</Button>
                    </div>

                </div>



            </div>
        </div>
    );

}
