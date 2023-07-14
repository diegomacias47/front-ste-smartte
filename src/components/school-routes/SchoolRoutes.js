import Button from '@mui/material/Button';
export const SchoolRoutes = (props) => {
    const imageHost = 'https://api-ste.smartte.com.mx';
    return (
        <div style={{height: '300px'}}>
            <h2 className="pb-3 pt-3 text-center">{props.route.name}</h2>
            <div className="text-center">
                <img src={imageHost + props.route.url_imgroute} alt="rutaruiz" data-bs-toggle="modal" data-bs-target="#imageexample" style={{width: '100%', height: '100%'}} id="ruta1"></img>
            </div>
            <div className="text-center pt-2">
                <a className='btn-custom btn-custom-lg btn-custom-primary text-decoration-none d-inline-block' target='_blank' rel='noreferrer' href={`${imageHost + props.route.url_imgroute}`}>
                    Ver imagen
                </a>
            </div>
        </div>

    );
}