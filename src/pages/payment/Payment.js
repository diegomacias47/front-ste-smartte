import { Button, FormControl, TextField, FormHelperText, Select, MenuItem, InputLabel, Radio, FormLabel, RadioGroup, FormControlLabel, Alert, AlertTitle, Snackbar } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
import { APIS, useFetch } from "../../fetch/useFetch";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";

const formValues = {
    'name_student': '',
    'mat_student': '',
    'phone_student': '',
    'mail_student': '',
    'suburb_student': '',
    'cp_student': '',
    'paymentReference': '',
    'pay_type': '',
    'shift': '',
    'type_study': '',
    'route': '',
    'school_id': '',
    'route_id': '',
    'payment_file': null,
    'grade_education': '',
}

const getSelectInputErrors = (values) => {
    const errors = {};

    if (!values['name_student']) {
        errors['name_student'] = 'Este campo es obligatorio.'
    }
    if (!values['mat_student'] ||  isNaN(values["mat_student"])) {
        errors['mat_student'] = 'Este campo es obligatorio y debe ser numerico.'
    }
    if (!values['phone_student'] || isNaN(values['phone_student'])) {
        errors['phone_student'] = 'Este campo es obligatorio y debe ser numerico.'
    }
    if (!values['mail_student']) {
        errors['mail_student'] = 'Este campo es obligatorio.'
    }
    if (!values['suburb_student']) {
        errors['suburb_student'] = 'Este campo es obligatorio.'
    }
    if (!values['cp_student']) {
        errors['cp_student'] = 'Este campo es obligatorio.'
    }
    if (!values['paymentReference'] ||  isNaN(values["paymentReference"])) {
        errors['paymentReference'] = 'Este campo es obligatorio y debe ser numerico.'
    }
    if (!values['pay_type']) {
        errors['pay_type'] = 'Este campo es obligatorio.'
    }
    if (!values['shift']) {
        errors['shift'] = 'Este campo es obligatorio.'
    }
    if (!values['type_study']) {
        errors['type_study'] = 'Este campo es obligatorio.'
    }
    if (!values['school_id']) {
        errors['school_id'] = 'Este campo es obligatorio.'
    }
    if (!values['route_id']) {
        errors['route_id'] = 'Este campo es obligatorio.'
    }
    if (!values['payment_file']) {
        errors['payment_file'] = 'Este campo es obligatorio.'
    }
    if (!values['grade_education']) {
        errors['grade_education'] = 'Este campo es obligatorio.'
    }

    return errors;
}

const alertType = {
    type: 'success',
    message: '.'
}

export const Payment = () => {
    /*useEffect(() => {
        document.title = 'STE | ¡Sube tu pago!';
    }, []);*/
    
    const navigate = useNavigate();

    const institutionsData = useFetch('institutions');
    const paymentsMethodsData = useFetch('payments/methods');
    const studyTypesData = useFetch('studyTypes');
    const shiftsData = useFetch('shift');

    const [paymentData, setPaymentData] = useState(formValues);

    const [filteredInstitutions, setFilteredInstitutions] = useState(null);
    const [filteredPaymentMethods, setFilteredPaymentMethods] = useState(null);
    const [filteredStudyTypes, setFilteredStudyTypes] = useState(null);
    const [filteredShift, setFilteredShift] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [alert, setAlert] = useState(alertType);

    const [formErrors, setFormErrors] = useState({});

    const [routes, setRoutes] = useState(null);

    const formHandlerChange = (event) => {
        const data = { ...paymentData };
        if (event.target.name === 'grade_education') {
            data[event.target.name] = event.target.value;
            data['school_id'] = '';
            data['shift'] = '';
            data['type_study'] = '';
            data['route_id'] = '';
            data['pay_type'] = '';
        } else if (event.target.name === 'school_id') {
            setRoutes(null);
            data['pay_type'] = '';
            data[event.target.name] = event.target.value;
        } else if (event.target.name === 'payment_file') {
            data[event.target.name] = event.target.files[0];
        } else {
            data[event.target.name] = event.target.value;
        }

        setPaymentData(data);
    }

    const setInstitutions = (gradeEducationId) => {
        const institutes = institutionsData.data.filter(i => i.isMiddleEducation == gradeEducationId);
        setFilteredInstitutions(institutes);
    }

    const setPaymentMethods = (instituteId) => {
        const costsId = filteredInstitutions.find(i => i.institutionId == instituteId).paymentType
        const methods = paymentsMethodsData.data?.filter(p => p.pay_type == costsId);
        setFilteredPaymentMethods(methods);
    }

    const setStudyTypes = (gradeEducationId) => {
        const arrStudyTypes = studyTypesData.data?.filter(p => p.isMiddleEducation == gradeEducationId);

        if (arrStudyTypes.length > 1) {
            setFilteredStudyTypes(arrStudyTypes);
        } else {
            setFilteredStudyTypes(null);
            const data = {...paymentData}
            data['type_study'] = arrStudyTypes[0].study_id;
            setPaymentData(data);
        }
    }

    const setShifts = (gradeEducationId) => {
        const shifts = shiftsData.data?.filter(s => s.isMiddleEducation == gradeEducationId);
        setFilteredShift(shifts);
    }

    const getRoutesBySchool = (id) => {
        fetch(APIS.ApiV3 + 'routes/affiliate?id=' + id)
        .then(json => json.json())
        .then(data => {
            setRoutes(data);
        })
        .catch(err => {
            setAlert({type: 'error', message: 'Hubo un problema para recuperar las rutas, si el problema persiste comunicate con nosotros.'})
        });
    }

    const removeFile = () => {
        const data = {...paymentData}
        data['payment_file'] = null;

        setPaymentData(data);
    }

    const sendPaymentData = () => {
        const errors = getSelectInputErrors(paymentData);
        const erroresLength  = Object.keys(errors);
        if (erroresLength.length > 0) {
            setFormErrors(errors);
            return;
        }
        
        let fd = new FormData();
        const keys = Object.keys(paymentData);

        keys.forEach(val => {
            fd.append(val, paymentData[val]);
        });
        console.log('HOlaa');
        fetch(APIS.ApiV3 + 'payments', {
            method: 'POST',
            mode: 'cors',
            body: fd
        }).
        then(json => json.json()).
        then(() => {
            setAlert({type: 'success', message: 'Formulario enviado correctamente.'})
            setOpenSnackbar(true);
        })
        .catch(() => {
            setAlert({type: 'error', message: 'Ocurrio un error al enviar el formulario, por favor, intenta mas tarde.'})
            setOpenSnackbar(true);
        });
    }

    useEffect(() => {        
        if (paymentData.grade_education) {
            setInstitutions(paymentData.grade_education);            
            setStudyTypes(paymentData.grade_education);                
            setShifts(paymentData.grade_education);
            setFilteredPaymentMethods(null);
            setRoutes(null);
        }
    }, [paymentData.grade_education]);

    useEffect(() => {        
        if (paymentData.school_id) {
            setPaymentMethods(paymentData.school_id);            
        }
    }, [paymentData.school_id]);
    return (
        <div className="px-md-5 pt-3 pb-5">
            <div className="container p-3">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <h2 className="text-center text-white ste-bg-primary rounded">Formato pago</h2>
                        <div className="row mt-4">
                            <div className="col-12 col-md-6">
                                <p className="size-16 fw-normal py-2 text-justify">1.- El primer paso a realizar es hacer un deposito o transferencia al numero de cuenta.</p>
                                <p className="size-16 fw-normal py-2 text-justify">2.- Una vez hecho el deposito, llena el siguiente formulario para poder validar tu pago</p>
                                <p className="size-16 fw-normal py-2 text-justify">3.- Tener a la mano una imagen digital ya que será necesario subir evidencia de la transferencia o deposito.</p>
                                <p className="size-16 fw-bolder text-danger py-2 text-justify">*Favor de indiciar en el concepto del pago: el nombre de su hijo/a y su matricula, sin estos datos NO se procesara el pago.</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="px-3 d-flex justify-content-center box-shadow-primary rounded py-2">
                                    <div>
                                        <p className="size-16 fw-bolder py-1 text-center">Datos bancarios</p>
                                        <p className="size-16 fw-normal py-1"><b>Banco:</b> BBVA</p>
                                        <p className="size-16 fw-normal py-1"><b>No. tarjeta:</b> 4555 1130 1055 1929</p>
                                        <p className="size-16 fw-normal py-1"><b>Cuenta:</b> 0119334742</p>
                                        <p className="size-16 fw-normal py-1"><b>Clabe:</b> 012580001193347420</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-3 container">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <h2 className="text-center text-white ste-bg-primary rounded">Datos del estudiante</h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="pt-3">
                                    <FormControl className="w-100" error={formErrors['name_student'] !== undefined}>
                                        <TextField className="w-100" name="name_student" label="Nombre del estudiante" variant="outlined" size="small" onChange={formHandlerChange} error={formErrors['name_student'] !== undefined}/>
                                        <FormHelperText>{formErrors['name_student'] !== undefined && formErrors['name_student']}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pt-3">
                                    <FormControl error={formErrors['phone_student'] !== undefined} className="w-100">
                                        <TextField type="number" inputProps={{ maxLength: 10}} className="w-100" name="phone_student" label="Telefono del tutor" variant="outlined" size="small" onChange={formHandlerChange} error={formErrors['phone_student'] !== undefined}/>
                                        <FormHelperText>{formErrors['phone_student'] !== undefined && formErrors['phone_student']}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pt-3">
                                    <FormControl error={formErrors['suburb_student'] !== undefined} className="w-100">
                                        <TextField className="w-100" name="suburb_student" label="Colonia" variant="outlined" size="small" onChange={formHandlerChange} error={formErrors['suburb_student'] !== undefined}/>
                                        <FormHelperText>{formErrors['suburb_student'] !== undefined && formErrors['suburb_student']}</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="pt-3">
                                    <FormControl error={formErrors['mat_student'] !== undefined} className="w-100">
                                        <TextField type="number" className="w-100" name="mat_student" label="Matricula del estudiante" variant="outlined" size="small" onChange={formHandlerChange} error={formErrors['mat_student'] !== undefined}/>
                                        <FormHelperText>{formErrors['mat_student'] !== undefined && formErrors['mat_student']}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pt-3">
                                    <FormControl error={formErrors['mail_student'] !== undefined} className="w-100">
                                        <TextField type="email" className="w-100" name="mail_student" label="Correo electronico del tutor" variant="outlined" size="small" onChange={formHandlerChange} error={formErrors['mail_student'] !== undefined}/>
                                        <FormHelperText>{formErrors['mail_student'] !== undefined && formErrors['mail_student']}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="pt-3">
                                    <FormControl error={formErrors['cp_student'] !== undefined} className="w-100">
                                        <TextField className="w-100" name="cp_student" type="number" label="Código postal" variant="outlined" size="small" onChange={formHandlerChange} error={formErrors['cp_student'] !== undefined}/>
                                        <FormHelperText>{formErrors['cp_student'] !== undefined && formErrors['cp_student']}</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2" style={{minHeight: "300px"}}>
                        <h2 className="text-center text-white ste-bg-primary rounded">Datos de reservación</h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                {
                                    institutionsData.data &&
                                    <div className="pt-3">
                                        <FormControl fullWidth size="small" error={formErrors['grade_education'] !== undefined}>
                                            <InputLabel>Grado de educación</InputLabel>
                                            <Select
                                                label="Grado de educación"
                                                name="grade_education"
                                                defaultValue = ""
                                                onChange={formHandlerChange}
                                                error={formErrors['grade_education'] !== undefined}
                                            >
                                                <MenuItem value={'1'}>Bachillerato</MenuItem>
                                                <MenuItem value={'0'}>Facutad</MenuItem>
                                            </Select>
                                            <FormHelperText>{formErrors['grade_education'] !== undefined && formErrors['cp_student']}</FormHelperText>
                                        </FormControl>
                                    </div>                    
                                }
                                {
                                    filteredInstitutions &&
                                    <div className="pt-3">
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-simple-select-label">Institución</InputLabel>
                                            <Select
                                                label="Institucion"
                                                name="school_id"
                                                defaultValue = ""
                                                onChange={(event) => {
                                                    formHandlerChange(event);
                                                    getRoutesBySchool(event.target.value);
                                                }}
                                                value={paymentData.school_id}
                                            >
                                                {
                                                    filteredInstitutions?.map(i => (<MenuItem value={i.institutionId} key={i.institutionId} data-affiliate-school={i.affiliateSchool}>{i.institutionName}</MenuItem>))
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                }
                                {
                                    filteredStudyTypes &&
                                    <div className="pt-3">
                                        <FormControl fullWidth size="small" error={formErrors['type_study'] !== undefined}>
                                            <InputLabel id="demo-simple-select-label">Tipo de estudio</InputLabel>
                                            <Select                                    
                                                label="Tipo de estudio"
                                                name="type_study"
                                                defaultValue = ""
                                                onChange={formHandlerChange}
                                                value={paymentData.type_study}
                                                error={formErrors['grade_education'] !== undefined}
                                            >
                                                {
                                                    filteredStudyTypes?.map(s => (<MenuItem value={s.study_id} key={s.study_id}>{s.study_desc}</MenuItem>))
                                                }
                                            </Select>
                                            <FormHelperText>{formErrors['type_study'] !== undefined && formErrors['type_study']}</FormHelperText>
                                        </FormControl>
                                    </div>
                                }
                                {
                                    filteredShift &&
                                    <div className="pt-3">
                                        <FormControl fullWidth size="small" error={formErrors['shift'] !== undefined}>
                                            <InputLabel id="demo-simple-select-label">Turno</InputLabel>
                                            <Select
                                                label="Turno"
                                                name="shift"
                                                defaultValue = ""
                                                value={paymentData.shift}
                                                onChange={formHandlerChange}
                                                error={formErrors['shift'] !== undefined}
                                            >
                                                {
                                                    filteredShift?.map(s => (<MenuItem value={s.id_shift} key={s.id_shift}>{s.description}</MenuItem>))
                                                }
                                            </Select>
                                            <FormHelperText>{formErrors['shift'] !== undefined && formErrors['shift']}</FormHelperText>
                                        </FormControl>
                                    </div>
                                }
                                {
                                    routes &&
                                    <div className="pt-3">
                                        <FormControl fullWidth size="small" error={formErrors['route_id'] !== undefined}>
                                            <InputLabel id="demo-simple-select-label">Seleccione la ruta</InputLabel>
                                            <Select
                                                label="Seleccione la ruta"
                                                name="route_id"
                                                defaultValue = ""
                                                value={paymentData.route_id}
                                                onChange={formHandlerChange}
                                                error={formErrors['route_id'] !== undefined}
                                            >
                                                {
                                                    routes?.map(r => (<MenuItem value={r.id_route} key={r.id_route}>{r.name}</MenuItem>))
                                                }
                                            </Select>
                                            <FormHelperText>{formErrors['route_id'] !== undefined && formErrors['route_id']}</FormHelperText>
                                        </FormControl>
                                    </div>
                                }
                            </div>
                            <div className="col-12 col-md-6">
                                {
                                    filteredPaymentMethods &&
                                    <div className="pt-3">
                                        <FormControl className="w-100" error={formErrors['paymentReference'] !== undefined}>
                                            <TextField type="number" inputProps={{ maxLength: 12}} value={paymentData.paymentReference} className="w-100" name="paymentReference" label="Ficha de pago (Folio, Referencia, No. Movimiento, etc.)" variant="outlined" size="small" onChange={formHandlerChange}  error={formErrors['paymentReference'] !== undefined}/>
                                            <FormHelperText>{formErrors['paymentReference'] !== undefined && formErrors['paymentReference']}</FormHelperText>
                                        </FormControl>
                                    </div>
                                }
                                {
                                    filteredPaymentMethods &&
                                    <div className="py-3">
                                        <label className="d-block mb-2 text-danger text-justify fw-bolder">*Unicamente se acepta un archivo de tipo imagen.</label>
                                        {
                                            paymentData.payment_file &&
                                            <div className="d-flex no-wrap me-3 mb-3">
                                                <button className="btn-custom btn-custom-md btn-custom-danger me-2" onClick={removeFile} style={{whiteSpace: 'nowrap'}}>Borrar archivo</button>
                                                <p className="d-inline-block me-3 text-elipsis">{paymentData.payment_file.name}</p>
                                            </div>
                                        }
                                        <Button
                                            variant="contained"
                                            component="label"
                                            className="ste-btn ste-btn-primary"
                                            style={{
                                                borderRadius: '0.5rem',
                                                backgroundColor: '#2A2AD3',

                                            }}
                                            disabled={paymentData.payment_file !== null}
                                        >
                                            Subir comprobante
                                            <input
                                                type="file"
                                                hidden
                                                name="payment_file"
                                                accept="image/*"
                                                onChange={formHandlerChange}                                        
                                            />
                                        </Button>
                                    </div>
                                }
                                {
                                    filteredPaymentMethods &&
                                    <div className="pt-3">
                                        <FormControl error={formErrors['pay_type'] !== undefined}>
                                            <FormLabel>Tipo de pago:</FormLabel>
                                            <RadioGroup                                   
                                                defaultValue={filteredPaymentMethods[0].id_pay}
                                                name="pay_type"
                                                onChange={formHandlerChange}
                                                value={paymentData.pay_type}                                                                
                                            >
                                                {
                                                    filteredPaymentMethods?.map(m => (<FormControlLabel value={m.id_pay} key={m.id_pay} control={<Radio />} label={m.description} />))
                                                }
                                            </RadioGroup>
                                            <FormHelperText>{formErrors['pay_type'] !== undefined && formErrors['pay_type']}</FormHelperText>
                                        </FormControl>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="text-end pt-3">            
                            <button className="ste-btn ste-btn-primary" onClick={sendPaymentData}>Enviar</button>
                        </div>
                    </div>
                </div>
                <Snackbar open={openSnackbar} autoHideDuration={1800} onClose={() => {setOpenSnackbar(false); navigate(0);}}>
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