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


export const MyRoutes = () => {
    return(
        <div>
            <Header></Header>
            <div className="container pt-3 px-md-5">
                <div className="row pb-3">
                    <div className="col-4">
                    <img src={logoprepa15} style={{width: '100px', height: '100px'}}></img>
                    </div>
                    <div className="col-6 pt-5 ps-5">
                        <h1>Prepa 15 Madero</h1>
                    </div>
                    
                    
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 pt-3 pb-5">
                        <h2 className="pb-3 pt-3 text-center">Ruta Ruiz Cortines</h2>
                        <div className="text-center">
                            <img src={Ruta15Cumbres} alt="rutaruiz" data-bs-toggle="modal" data-bs-target="#imageexample"style={{width: '350px', height: '280px'}} id="ruta1"></img>
                        </div>
                       
                        <div className="text-center pt-2">
                           
                            <Button variant="outlined" size="large">
                                        Reserva aqui
                            </Button>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-4 pt-3 pb-5">
                        <h2 className="pb-3 ps-5 pt-3 text-center">Ruta Linda Vista</h2>
                        <div className="text center">
                            <img src={Ruta15LindaVista} style={{width: '350px', height: '280px'}}></img>
                        </div>
                        <div className="text-center pt-2">
                            <Button variant="outlined" size="large">
                                        Reserva aqui
                            </Button>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 pt-3 pb-5">
                        <h2 className="pb-3 ps-5 pt-3 text-center">Ruta Acapulco</h2>
                        <div>
                            <img src={Ruta15Acapulco} style={{width: '350px', height: '280px'}}></img>
                        </div>
                        <div className="text-center pt-2">
                            <Button variant="outlined" size="large">
                                        Reserva aqui
                            </Button>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    )
}