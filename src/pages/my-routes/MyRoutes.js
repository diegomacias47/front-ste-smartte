import { Header } from "../../components/header/Header";
import logoprepa15 from '../../assets/logoprepa15.png'
import Ruta15Cumbres from '../../assets/Ruta15Cumbres.png'
import Ruta15LindaVista from '../../assets/Ruta15LindaVista.png'
import Ruta15Acapulco from '../../assets/Ruta15Acapulco.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { SchoolRoutes } from "../../components/school-routes/SchoolRoutes";

export const MyRoutes = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const {data, loading, error} = useFetch('routes?id=' + searchParams.get('id'));
    
    return(
        <div>
            <div className="container pt-3 px-md-5">               
                <div className="row">
                    {
                        data?.map((value, index) => (<div key={index} className="col-12 col-md-4 pt-5 pb-5"> <SchoolRoutes route={value}></SchoolRoutes> </div>) )
                    }
                </div>
            </div>
        </div>
    )
}