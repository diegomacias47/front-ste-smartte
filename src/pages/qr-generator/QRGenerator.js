import { TextField } from "@mui/material";
import { useState } from "react";

const qrForm = {
    user: '',
    password: ''
}

export const QRGenerator = () => {
    const [login, setLogin] = useState(qrForm);

    const handleForm = (event) => {
        const data = {...login};

        data[event.target.name] = event.target.value;

        setLogin(data);
    }


    const getQR = async () => {

        const request = await fetch('https://api-ste.smartte.com.mx/apiv2/login', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: Object.entries(login).map(([k,v])=>{return k+'='+v}).join('&')
        }).catch(err => console.error(err));

        const data = await request.json();  

        const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + JSON.stringify(data);
        console.log(qrUrl);
        const qrRequest = await fetch(qrUrl)
        .then(response => response.blob())
        .then((blob) => {
            let blobUrl = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.download = login.user + '_QR';
            a.href = blobUrl;
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="py-5">
            <h1>Descarga tu QR</h1>
            <TextField onChange={handleForm} type="text" className="w-100 d-inline-block my-2" name="user" label="Matricula" variant="outlined" size="small" />
            <TextField onChange={handleForm} type="password" className="w-100 d-inline-block my-2" name="password" label="Contraseña" variant="outlined" size="small" />
            <div className="py-4">
                <button className="btn-custom btn-custom-md btn-custom-primary" onClick={getQR}>Descargar QR</button>
            </div>
        </div>
    
    );

}