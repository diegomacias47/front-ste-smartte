import { Button, FormControl, TextField, FormHelperText, Select, MenuItem, InputLabel, Radio, FormLabel, RadioGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";

const formValues = {
    'name_student': '',
    'mat_student': '',
    'phone_student': '',
    'mail_student': '',
    'suburb_student': '',
    'cp_student': '',
    'pay_type': '',
    'shift': '',
    'type_study': '',
    'route': '',
    'school_id': '',
    'route_id': '',
    'payment_file': null,
}


export const Payment = () => {

    const [paymentData, setPaymentData] = useState(formValues);

    const formHandlerChange = (event) => {
        const data = { ...paymentData };

        data[event.target.name] = event.target.value;

        setPaymentData(data);
        console.log(paymentData);
    }

    
    const PaymentType = () => {
        return (
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Tipo de pago:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </FormControl>
        );
    }
    return (
        <div className="px-md-5 pt-3">
            <h1 className="text-start">Formato de pago</h1>
            <h4>¡Llena el siguiente formulario para poder validar tu pago!</h4>
            <div className="pt-3">
                <div className="row">
                    <div className="col-12 col-md-6 pt-3">
                        <FormControl error className="w-100">
                            <TextField className="w-100" name="name_student" label="Nombre" variant="outlined" size="small" onChange={formHandlerChange}/>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-12 col-md-6 pt-3">
                        <FormControl error className="w-100">
                            <TextField className="w-100" name="mat_student" label="Matricula" variant="outlined" size="small" onChange={formHandlerChange}/>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-12 col-md-6 pt-3">
                        <FormControl error className="w-100">
                            <TextField className="w-100" name="phone_student" label="Telefono" variant="outlined" size="small" onChange={formHandlerChange}/>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-12 col-md-6 pt-3">
                        <FormControl error className="w-100">
                            <TextField className="w-100" name="mail_student" label="Correo" variant="outlined" size="small"/>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-12 col-md-6 pt-3">
                        <FormControl error className="w-100">
                            <TextField className="w-100" name="suburb_student" label="Colonia" variant="outlined" size="small"/>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-12 col-md-6 pt-3">
                        <FormControl error className="w-100">
                            <TextField className="w-100" name="cp_student" label="Código postal" variant="outlined" size="small"/>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-md-6 pt-3">
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Grado de educación</InputLabel>
                            <Select
                                id="type_study"
                                label="Grado de educación"
                                name="type_study"
                            >
                                <MenuItem value={'1'}>BACHILLERATO</MenuItem>
                                <MenuItem value={'2'}>FACULTAD</MenuItem>
                            </Select>
                           <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Institucion</InputLabel>
                            <Select
                                id="type_study"
                                label="Grado de educación"
                                name="type_study"
                            >
                                <MenuItem value={'1'}>BACHILLERATO</MenuItem>
                                <MenuItem value={'2'}>FACULTAD</MenuItem>
                            </Select>
                           <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-md-6 pb-2">
                        <FormControl error className="w-100">
                            <TextField className="w-100" name="student_mat" label="No. referencia" variant="outlined" size="small"/>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                    <div className="col-md-6">
                        <PaymentType />
                    </div>
                </div>
            </div>

        </div>
    );
}