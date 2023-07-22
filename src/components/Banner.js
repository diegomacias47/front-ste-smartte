import blurry_background from './../assets/blurry_background (3).svg';
import waves from './../assets/wavesNegative.svg';
import Banner_B from './../assets/banner_B.jpg';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path)
    }
    /*absolute top-[5%] md:top-16 left-0  */
    //h-[400px] md:h-[45vh]
    return (
        <div className="position-relative">
            <img className='w-100 position-absolute' src={waves} style={{height: '5%', bottom: 0}}/>
            <img className='w-100 position-absolute h-100' style={{zIndex: -2}} src={Banner_B}/>
            <div className='position-absolute w-100 h-100' style={{backdropFilter: 'blur(4px)', backgroundColor: 'rgba(.3, .3, .3, .3)', zIndex: -1}}></div>            
            <div className='w-100 d-flex justify-content-center flex-column text-white pt-5 pb-5' style={{gap: '1.5rem'}}>
                <h2 className="text-center font-lobster size-32" >STE Transportes</h2>
                <h2 className="text-center poppins-bold size-30">¡Somos la opción definitiva para el transporte estudiantil!</h2>
                <h3 className="text-center font-poppins size-20" variant="h6">Proveemos un servicio de transporte enfocado a estudiantes de la Universidad Autónoma de Nuevo León</h3>
                <div className='d-none d-md-flex justify-content-center' style={{gap: '5px'}}>
                    {/*<button className='btn-custom btn-custom-lg btn-custom-secondary' onClick={() => goTo('/schools')} data-go-to="/schools">Contactanos</button>*/}
                    <button className='btn-custom btn-custom-lg btn-custom-secondary' onClick={() => goTo('/schools')}>Revisa nuestras rutas</button>
                </div>                                                               
            </div>
        </div>
    );
}