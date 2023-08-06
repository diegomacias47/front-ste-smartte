
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Jorge from '../../assets/jorge.png';
import Karla from '../../assets/karla.jpeg';
import Karen from '../../assets/karen.jpeg';
import Publicidad from './../../assets/PublicidadFormat.jpg';
import { useEffect } from 'react';
import './Home.css';
import { Fragment } from 'react';

export function Home() {
    /*useEffect(() => {
        document.title = 'STE | Inicio';
    }, []);*/
    return(
        <Fragment>
            <div className='container'>
                <div className='separator'></div>
                <div className='container px-0 px-md-3 px-lg-5 pb-4'>
                    <h1 className='fw-bolder text-center mb-4'>¡Bienvenidos a STE!</h1>
                    <div className='row'>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'>
                            <div className='px-3'>
                                <p className='text-uppercase fw-bolder size-18'>Nuestros servicios</p>
                                <p className='fw-normal size-22'>¿Que nos hace especiales?</p>
                                <div className='size-14 fw-normal'>
                                    <p className='py-2'>Contamos con unidades super seguras y con el personal capacitado para llevarte a tiempo a tu casa de estudios.</p>
                                    <p className='py-2'>Contamos con unidades limpias que siempre llegaran puntuales al sitio pactado.</p>
                                    <p className='py-2'>¡Escoge la ruta y el horario que se adapte a tus necesidades!</p>                         
                                </div>  
                            </div>
                        </div>
                        <div className='col-12 col-md-8'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='mx-0 mx-md-3 bg-light border rounded'>
                                        <div className='text-center py-3' >
                                            <InstallMobileIcon style={{fontSize: '60px', color: '#2A2AD3'}}/>
                                        </div>
                                        <p className='text-center fw-bolder'>Aplicación</p>
                                        <p className='py-3 text-center mx-1 mx-md-3 mx-lg-5 size-14'>¡Brindamos una aplicación de monitoreo para la ruta!</p>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='mx-0 mx-md-3 mt-4 bg-light border rounded'>
                                        <div className='text-center py-3' >
                                            <SecurityIcon style={{fontSize: '60px', color: '#2A2AD3'}}/>
                                        </div>
                                        <p className='text-center fw-bolder'>Seguridad</p>
                                        <p className='py-3 text-center mx-1 mx-md-3 mx-lg-5 size-14'>Garantizamos a tu hijo/a seguridad para la llegada al plantel!</p>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='mx-0 mx-md-3 bg-light border rounded'>
                                        <div className='text-center py-3' >
                                            <SchoolIcon style={{fontSize: '60px', color: '#2A2AD3'}}/>
                                        </div>
                                        <p className='text-center fw-bolder'>Puntualidad</p>
                                        <p className='py-3 text-center mx-1 mx-md-3 mx-lg-5 size-14'>Llegada puntual de hasta 15 minutos antes</p>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='mx-0 mx-md-3 mt-4 bg-light border rounded'>
                                        <div className='text-center py-3' >
                                            <AccessAlarmsIcon style={{fontSize: '60px', color: '#2A2AD3'}} />
                                        </div>
                                        <p className='text-center fw-bolder'>Exclusividad</p>
                                        <p className='py-3 text-center mx-1 mx-md-3 mx-lg-5 size-14'>Servicio 100% exclusivo para alumnos del plantel</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>   
                </div>
                <div className='separator'></div>
            </div>
            <div className='bg-light border-top border-bottom'>
                <div className='d-flex justify-content-center'>
                    <div className='mt-3'>
                        <h1 className='fw-bolder text-center size-26'>¡Transporte seguro!</h1>
                        <div className='py-4'>
                            <img className='publicity rounded' src={Publicidad} alt='publicity' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='separator'></div>
            <div className='container px-0 px-md-3 px-lg-5 pb-4'>
                <div className='testimonials'>
                    <div className='pb-3 px-2 text-center text-md-start'>
                        <h1 className='fw-bolder size-24 text-center mb-2'>Testimonios</h1>
                        <p className='size-14 text-center caption'>
                            Con el tráfico de nuestra ciudad cada vez es más complicado llegar a tiempo, nuestros
                            estudiantes comentan como ha cambiado su ritmo de vida al momento de contratar 
                            un transporte para llegar a su preparatoria o facultad.
                        </p>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-4 pt-3 pt-md-0 mt-3'>
                                <div className="p-2 testimonial">
                                    <div className="py-2 text-align-center my-2 mx-0 d-flex justify-content-center align-items-center">
                                        <img src={Jorge} style={{borderRadius: '50%', height: '55px', width: '60px'}} alt='Jorge'/>
                                        <div className='px-3'>
                                            <p className='size-18 fw-bolder'>Jorge Torres</p>
                                            <small className='size-12'>Estudiante de la Prepa 7 Ote.</small>
                                        </div>
                                    </div>
                                    <div className="text-center py-3" style={{borderTop: '1px solid rgb(200, 200, 200)'}}>
                                        <p className='size-14'>El servicio es excelente, los choferes son muy amables y cuidadonos al conducir, siempre llego temprano a mis clases.</p>
                                    </div>
                                </div>                              
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 pt-3 pt-md-0 mt-3'>
                                <div className="p-2 testimonial">
                                    <div className="py-2 text-align-center my-2 mx-0 d-flex justify-content-center align-items-center">
                                        <img src={Karla} style={{borderRadius: '50%', height: '55px', width: '60px'}} alt='Karla'/>
                                        <div className='px-3'>
                                            <p className='size-18 fw-bolder'>Karla Castro</p>
                                            <small className='size-12'>Estudiante de la Prepa 22 L. Vista</small>
                                        </div>
                                    </div>
                                    <div className="text-center py-3" style={{borderTop: '1px solid rgb(200, 200, 200)'}}>
                                        <p className='size-14'>El servicio es excelente, los choferes son muy amables y cuidadonos al conducir, siempre llego temprano a mis clases.</p>
                                    </div>
                                </div>                              
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 pt-3 pt-md-0 mt-3'>
                                <div className="p-2 testimonial">
                                    <div className="py-2 text-align-center my-2 mx-0 d-flex justify-content-center align-items-center">
                                        <img src={Karen} style={{borderRadius: '50%', height: '55px', width: '60px'}} alt='Karen'/>
                                        <div className='px-3'>
                                            <p className='size-18 fw-bolder'>Karen Peréz</p>
                                            <small className='size-12'>Estudiante de CIDEB</small>
                                        </div>
                                    </div>
                                    <div className="text-center py-3" style={{borderTop: '1px solid rgb(200, 200, 200)'}}>
                                        <p className='size-14'>El servicio es excelente, los choferes son muy amables y cuidadonos al conducir, siempre llego temprano a mis clases.</p>
                                    </div>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='separator'></div>
        </Fragment>
    );
}

//181a26
//style={{backgroundColor: '#1a1b1d'}}