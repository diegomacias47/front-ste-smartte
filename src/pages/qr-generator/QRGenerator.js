import { TextField } from "@mui/material";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const qrForm = {
    user: '',
    password: ''
}

export const QRGenerator = () => {
    const [login, setLogin] = useState(qrForm);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleForm = (event) => {
        const data = {...login};

        data[event.target.name] = event.target.value;

        setLogin(data);
    }


    const getQR = async () => {
        setLoading(true);
        setError('');
        const request = await fetch('https://api-ste.smartte.com.mx/apiv2/login', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: Object.entries(login).map(([k,v])=>{return k+'='+v}).join('&')
        }).catch(err => console.error(err));

        if (!request) {
            setLoading(false);
            setError('Error!');
            return;
        }
        const data = await request.json();  
        if (!data || data.status || data.status === '404') {
            setLoading(false);
            setError('Error!');
            return;
        }
        const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + JSON.stringify(data);
        await fetch(qrUrl)
        .then(response => response.blob())
        .then((blob) => {
            let blobUrl = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.download = login.user + '_QR';
            a.href = blobUrl;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
            setError('Error!');
            console.log(err)
        });
    }

    return (
        <div className="py-5 container">
            <div className="d-flex justify-content-center">
                <div>
                    <h1>Descarga tu QR</h1>
                    <small>*Ingresa tu matricula y contraseña para descargar tu QR.</small>
                    <TextField onChange={handleForm} type="text" className="w-100 d-inline-block my-2" name="user" label="Matricula" variant="outlined" size="small" />
                    <TextField onChange={handleForm} type="password" className="w-100 d-inline-block my-2" name="password" label="Contraseña" variant="outlined" size="small" />
                    <div className="py-4">
                        <button className="ste-btn ste-btn-primary" onClick={getQR}>Descargar QR</button>
                    </div>
                    {loading && <div className="text-center pt-5"><CircularProgress color="primary" /></div>}
                    {error && <div><h3 className="text-danger size-16">*Hubo un error al generar el QR, verifique los datos ingresados o intenta mas tarde.</h3></div>}
                </div>
            </div>
        </div>
    
    );

}