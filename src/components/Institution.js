import { Box, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Institution = ({institution, cb}) => {
    const imageHost = 'https://api-ste.smartte.com.mx/';
    return (
        <div className="p-1 p-md-2 p-md-3">
            <div className="primary-box-shadow rounded" style={{height: '350px'}}>
                <div className="p-2 text-center" style={{height: '50%'}}>
                    <img className="h-100 w-100 px-3" src={imageHost + institution.url_logo} alt="img_institution"/>
                </div>
                <div className="px-2 text-center" style={{height: '35%'}}>
                    <label className="size-18 fw-bolder">
                        {institution.name}
                    </label>
                </div>
                <div style={{height: '25%'}}>
                    <button onClick={() => cb('/routes?id=' + institution.id_school)} className='btn-custom btn-custom-md btn-custom-primary w-100'>¡Ver Rutas!</button>
                </div>
            </div>
        </div>
    );
};