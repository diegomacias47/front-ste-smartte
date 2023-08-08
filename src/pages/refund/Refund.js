import { useState } from "react";
import { FormControl, TextField, FormHelperText, Button, Snackbar, Alert } from "@mui/material";
import { APIS } from "../../fetch/useFetch";
import { useNavigate } from "react-router-dom";

const RefundModel = {
    clabe: '',
    destinataryName: '',
    bankName: '',
    tuitution: '',
    'proofPaymentFiles': null
}

const getRefundFormErrors = (data) => {
    const errors = {};

    if (!data['clabe']) {
        errors['clabe'] = "Este campo es obligatorio, favor de llenarlo.";
    }
    if (!data['destinataryName']) {
        errors['destinataryName'] = "Este campo es obligatorio, favor de llenarlo.";
    }
    if (!data['bankName']) {
        errors['bankName'] = "Este campo es obligatorio, favor de llenarlo.";
    }
    if (!data['proofPaymentFiles']) {
        errors['proofPaymentFiles'] = "Este campo es obligatorio, favor de llenarlo.";
    }
    if (!data['tuitution']) {
        errors['tuitution'] = "Este campo es obligatorio, favor de llenarlo.";
    }

    return errors;
}

const alertType = {
    type: 'success',
    message: '.'
}

export const Refund = () => {
    const [refundForm, setRefundForm] = useState(RefundModel);
    const [refundFormErrors, setRefunFormErros] = useState({});
    const [disabledButton, setDisabledButton] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [alert, setAlert] = useState(alertType);

    const navigate = useNavigate();

    const formHandler = (event) => {
        const data = {...refundForm};
        if (event.target.name === 'proofPaymentFiles') {
            data['proofPaymentFiles'] = [...Array.from(event.target.files), ...data['proofPaymentFiles'] ?? []]
        } else {
            data[event.target.name] = event.target.value;
        }

        setRefundForm(data);
    }

    const sendRefundForm = async () => {
        const errors = getRefundFormErrors(refundForm);
        if (Object.keys(errors).length > 0) {
            setRefunFormErros(errors);
            return;
        }

        let fd = new FormData();
        const keys = Object.keys(refundForm);

        keys.forEach((val, index) => {
            if (val !== 'proofPaymentFiles') {
                fd.append(val, refundForm[val]);
            }
        });

        refundForm.proofPaymentFiles.forEach((e) => {
            fd.append('paymentProofFiles[]', e);
        })
        setDisabledButton(true);
        fetch(APIS.ApiV3 + 'refunds', {
            method: 'POST',
            mode: 'cors',
            body: fd
        })
        .then(json => json.json())
        .then((data) => {
            setDisabledButton(false);
            setOpenSnackbar(true);
            setAlert({type: 'success', message: 'El reembolso ha sido solicitado y será efectuado en un plazo de 72 horas habiles.'})
        })
        .catch(() => {
            setOpenSnackbar(true);
            setAlert({type: 'error', message: 'Ocurrio un error al enviar el formulario, por favor intentelo más tarde o comuniquese con nosotros.'})
            setDisabledButton(false);
        });
    }

    const removeFile = (fileName) => {
        const newFiles = refundForm.proofPaymentFiles.filter(e => e.name !== fileName);
        const data = {...refundForm};

        data['proofPaymentFiles'] = newFiles;

        setRefundForm(data);
    }

    const ImageUploaded = ({name}) => {
        return (
            <div className="d-flex align-items-center no-wrap me-3 mb-3">                   
                <button className="btn-custom btn-custom-danger me-2 size-10" onClick={() => removeFile(name)} style={{whiteSpace: 'nowrap'}}>X</button>
                <p className="d-inline-block me-3 text-elipsis size-12">{name}</p>
            </div>
        );
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                    <h2 className="text-center text-white ste-bg-primary rounded">Reembolsos</h2>
                    <div className="mt-3">
                        <p className="size-14">Llena el siguiente formulario para poder efectuar tu reembolso correctamente. 
                            Ten a la mano una imagen digital de tu comprobante ya que será necesario adjuntar la evidencia de pago. 
                        </p>
                        <p className="size-14">
                            Tendras la opción de subir multiples imagenes, solo asegurate de subirlas todas al mismo tiempo en el selector multiple.
                        </p>
                        <p className="size-14 text-danger mt-2">*Todos los campos son necesarios.</p>
                        <p className="size-14 text-danger mt-2">*El reembolso se hara dentro de las siguientes 72 horas habiles.</p>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 col-md-6">
                            <div className="pt-3">
                                <FormControl className="w-100" error={refundFormErrors['clabe'] !== undefined}>
                                    <TextField 
                                        className="w-100" 
                                        name="clabe" 
                                        label="Clabe interbancaria" 
                                        variant="outlined" 
                                        size="small" 
                                        onChange={formHandler} 
                                        error={refundFormErrors['clabe'] !== undefined}
                                        type="number"
                                        />
                                    <FormHelperText>{refundFormErrors['clabe'] !== undefined && refundFormErrors['clabe']}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className="pt-3">
                                <FormControl className="w-100" error={refundFormErrors['destinataryName'] !== undefined}>
                                    <TextField 
                                        className="w-100" 
                                        name="destinataryName" 
                                        label="Nombre del destinatario" 
                                        variant="outlined" 
                                        size="small" 
                                        onChange={formHandler} 
                                        error={refundFormErrors['destinataryName'] !== undefined}
                                        />
                                    <FormHelperText>{refundFormErrors['destinataryName'] !== undefined && refundFormErrors['destinataryName']}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className="pt-3">
                                <FormControl className="w-100" error={refundFormErrors['bankName'] !== undefined}>
                                    <TextField 
                                        className="w-100" 
                                        name="bankName" 
                                        label="Nombre del banco" 
                                        variant="outlined" 
                                        size="small" 
                                        onChange={formHandler} 
                                        error={refundFormErrors['bankName'] !== undefined}
                                        />
                                    <FormHelperText>{refundFormErrors['bankName'] !== undefined && refundFormErrors['bankName']}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className="pt-3">
                                <FormControl className="w-100" error={refundFormErrors['tuitution'] !== undefined}>
                                    <TextField 
                                        className="w-100" 
                                        name="tuitution" 
                                        label="Matricula del estudiante" 
                                        variant="outlined" 
                                        size="small" 
                                        onChange={formHandler} 
                                        error={refundFormErrors['tuitution'] !== undefined}
                                        type="number"
                                        />
                                    <FormHelperText>{refundFormErrors['tuitution'] !== undefined && refundFormErrors['tuitution']}</FormHelperText>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="py-3">
                                <label className="d-block mb-2 text-danger text-justify fw-bolder size-14">*Unicamente se acepta archivos en formato imagen.</label>
                                {
                                    refundForm.proofPaymentFiles &&
                                    <div>
                                        <small className="my-1 d-inline-block">*Cantidad de archivos cargados: <b>{refundForm.proofPaymentFiles.length}</b></small>
                                        {
                                            refundForm.proofPaymentFiles.map((val, index) => 
                                                (
                                                    <ImageUploaded key={index} name={val.name}/>
                                                )
                                            )
                                        }
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
                                >
                                    Seleccionar comprobante
                                    <input
                                        type="file"
                                        hidden
                                        name="proofPaymentFiles"
                                        accept="image/*"
                                        onChange={formHandler}  
                                        multiple                                      
                                    />
                                </Button>
                                <p className="text-danger size-12 mt-2">{refundFormErrors['proofPaymentFiles'] !== undefined && refundFormErrors['proofPaymentFiles']}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3 text-end">
                        <button className="ste-btn ste-btn-primary" onClick={sendRefundForm} disabled={disabledButton}>Solicitar reembolso</button>
                    </div>
                </div>

            </div>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={openSnackbar} autoHideDuration={3500} onClose={() => {setOpenSnackbar(false); navigate(0);}}>
                <Alert severity={alert.type} sx={{ width: '100%' }}>
                    {
                        alert.message
                    }
                </Alert>
            </Snackbar>
        </div>
    );

}