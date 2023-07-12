import { Header } from '../../components/header/Header';
import './Home.css';
import {Box } from '@mui/material';
import BannerBus from '../../assets/banner_bus.jpeg';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Jorge from '../../assets/jorge.png';
import Karla from '../../assets/karla.jpeg';
import Karen from '../../assets/karen.jpeg';
import { Banner } from '../../components/Banner';


export function Home() {
    return(
        <main>
            <div className='separator'></div>
            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 d-flex align-items-center'>
                        <div>
                            <h1>¡Bienvenidos a STE!</h1>
                            <div className='size-18 fst-italic'>
                                <p className='py-2'>Contamos con unidades super seguras y con el personal capacitado para llevarte a tiempo a tu casa de estudios.</p>
                                <p className='py-2'>Contamos con unidades limpias que siempre llegaran puntuales al sitio pactado.</p>
                                <p className='py-2'>¡Escoge la ruta y el horario que se adapte a tus necesidades!</p>                         
                            </div>                        
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img className='w-100 border rounded' src={BannerBus}/>
                    </div>
                </div>

                <div className='separator'></div>

                <div>
                    <h1 className='text-center text-md-end mb-3'>¿Qué nos hace especiales?</h1>
                    <div className='row'>
                        <Box className='col-6 col-md-3 p-2'>
                            <Box className='p-3 h-100' sx={{boxShadow: 3, borderRadius: 5}}>
                                <div className='text-center py-3' >
                                    <InstallMobileIcon style={{fontSize: '60px'}} color='primary'/>
                                </div>
                                <p className='py-3 text-center'>¡Aplicación de monitoreo para la ruta!</p>
                            </Box>
                        </Box>
                        <Box className='col-6 col-md-3 p-2'>
                            <Box className='p-3 h-100'  sx={{boxShadow: 3, borderRadius: 5}}>
                                <div className='text-center py-3'>
                                    <SecurityIcon style={{fontSize: '60px'}} color='primary'/>
                                </div>
                                <p className='py-3 text-center'>¡Seguridad garantizada para llegada al plantel!</p>
                            </Box>
                        </Box>
                        <Box className='col-6 col-md-3 p-2'>
                            <Box className='p-3 h-100' sx={{boxShadow: 3, borderRadius: 5}}>
                                <div className='text-center py-3'>
                                    <SchoolIcon style={{fontSize: '60px'}} color='primary'/>
                                </div>
                                <p className='py-3 text-center'>¡Servicio 100% exclusivo para alumnos del plantel!</p>
                            </Box>
                        </Box>
                        <Box className='col-6 col-md-3 p-2'>
                            <Box className='p-3 h-100'  sx={{boxShadow: 3, borderRadius: 5}}>
                                <div className='text-center py-3'>
                                    <AccessAlarmsIcon style={{fontSize: '60px'}} color='primary' />
                                </div>
                                <p className='py-3 text-center'>¡Llegada puntual de hasta 15 minutos antes!</p>
                            </Box>
                        </Box>
                    </div>
                </div>

                <div className='separator'></div>

                <div className='testimonials'>
                    <div className='pb-3 px-2 text-center text-md-start'>
                        <h1>Testimonios</h1>
                        <p>
                            Lo que nuestros estudiantes opinan.
                            <br/>
                            Con el tráfico de nuestra ciudad cada vez es más complicado llegar a tiempo, nuestros
                            estudiantes comentan como ha cambiado su ritmo de vida al momento de contratar 
                            un transporte para llegar a su preparatoria o facultad.
                        </p>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4 pt-3 pt-md-0'>
                            <Box className="p-2 m-1" sx={{minWidth: '250px', boxShadow: 3, borderRadius: 2}}>
                                <div className="py-2 text-align-center my-2 mx-0 d-flex justify-content-center align-items-center">
                                    <img src={Jorge} style={{borderRadius: '50%', height: '55px', width: '60px'}}/>
                                    <div className='px-3'>
                                        <p className='size-18 fw-bolder'>Jorge Torres</p>
                                        <small className='size-12'>Estudiante de la Prepa 7 Ote.</small>
                                    </div>
                                </div>
                                <div className="text-center py-3" style={{borderTop: '1px solid rgb(200, 200, 200)'}}>
                                    <p>El servicio es excelente, los choferes son muy amables y cuidadonos al conducir, siempre llego temprano a mis clases.</p>
                                </div>
                            </Box>                              
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 pt-3 pt-md-0'>
                            <Box className="p-2 m-1" sx={{minWidth: '250px', boxShadow: 3, borderRadius: 2}}>
                                <div className="py-2 text-align-center my-2 mx-0 d-flex justify-content-center align-items-center">
                                    <img src={Karla} style={{borderRadius: '50%', height: '55px', width: '60px'}}/>
                                    <div className='px-3'>
                                        <p className='size-18 fw-bolder'>Karla Castro</p>
                                        <small className='size-12'>Estudiante de la Prepa 22 L. Vista</small>
                                    </div>
                                </div>
                                <div className="text-center py-3" style={{borderTop: '1px solid rgb(200, 200, 200)'}}>
                                    <p>El servicio es excelente, los choferes son muy amables y cuidadonos al conducir, siempre llego temprano a mis clases.</p>
                                </div>
                            </Box>                              
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 pt-3 pt-md-0'>
                            <Box className="p-2 m-1" sx={{minWidth: '250px', boxShadow: 3, borderRadius: 2}}>
                                <div className="py-2 text-align-center my-2 mx-0 d-flex justify-content-center align-items-center">
                                    <img src={Karen} style={{borderRadius: '50%', height: '55px', width: '60px'}}/>
                                    <div className='px-3'>
                                        <p className='size-18 fw-bolder'>Karen Peréz</p>
                                        <small className='size-12'>Estudiante de CIDEB</small>
                                    </div>
                                </div>
                                <div className="text-center py-3" style={{borderTop: '1px solid rgb(200, 200, 200)'}}>
                                    <p>El servicio es excelente, los choferes son muy amables y cuidadonos al conducir, siempre llego temprano a mis clases.</p>
                                </div>
                            </Box>                              
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}