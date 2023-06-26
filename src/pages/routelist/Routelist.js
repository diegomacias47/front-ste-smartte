import { Header } from "../../components/header/Header";
import logoprepa15 from '../../assets/logoprepa15.png'
import Ruta15Ruiz from '../../assets/Ruta15Ruiz.png'
import Ruta15Lindavista from '../../assets/Ruta15Lindavista.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export const Routelist = () => {
    return(
        <div>
            <Header></Header>
            <div className="container pt-3 px-md-5">
                <div className="row pb-3">
                    <div className="col-4">
                    <img src={logoprepa15} style={{width: '150px', height: '150px'}}></img>
                    </div>
                    <div className="col-6 pt-5 ps-5">
                        <h1>Prepa 15 Madero</h1>
                    </div>
                    
                    
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 pt-3 pb-5">
                        <h2 className="pb-3 pt-3 text-center">Ruta Ruiz Cortines</h2>
                        <img src={Ruta15Ruiz} style={{width: '570px', height: '400px'}}></img>
                        <div className="text-end pt-2">
                            <Button variant="outlined" size="large">
                                        Reserva aqui
                            </Button>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 pt-3 pb-5">
                        <h2 className="pb-3 ps-5 pt-3 text-center">Ruta Linda Vista</h2>
                        <img src={Ruta15Lindavista} style={{width: '570px', height: '400px'}}></img>
                        <div className="text-end pt-2">
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