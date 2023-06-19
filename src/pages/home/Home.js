import { Header } from '../../components/header/Header';
import  banner  from '../../assets/banner.png';
import './Home.css';
import { Button, Box } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BannerBus from '../../assets/banner_bus.jpeg';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Jorge from '../../assets/jorge.png';
import Karla from '../../assets/karla.jpeg';
import Karen from '../../assets/karen.jpeg';


export function Home() {
    return(
        <main>
            <Header></Header>
            <Box className='banner-content position-relative' sx={{boxShadow: 1}}>
                <div className='w-100 banner-image-content py-3'>
                    <img className='banner-image float-end' src={banner}/>
                </div>            
                <div className='banner-description position-absolute d-flex align-items-center justify-content-center flex-column'>
                    <div className='w-75 text-center text-white'>
                        <h1 className='fw-bolder'>¡Somos la opción definitiva para el transporte estudiantil!</h1>
                        <p className='mt-2'>Proveemos un servicio de transporte enfocado a estudiantes de la Universidad Autónoma de Nuevo León</p>
                    </div>
                    <Box>
                        <Button className='fw-bolder text-capitalize' sx={{m:3}} variant='contained' size='large' color="secondary" startIcon={<ConnectWithoutContactIcon />}>¡Contactanos!</Button>
                        <Button className='fw-bolder text-capitalize' sx={{m:3}} variant='contained' size='large' color="secondary" startIcon={<EventNoteIcon />}>¡Haz tu reserva!</Button>
                    </Box>
                </div>
            </Box>

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

                <div className='services'>
                    <h1 className='text-end mb-3'>¿Qué nos hace especiales?</h1>
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
                            <Box className='p-3'  sx={{boxShadow: 3, borderRadius: 5}}>
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
                    <div className='pb-3 px-2'>
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
                        <div className='col-4'>
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
                        <div className='col-4'>
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
                        <div className='col-4'>
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