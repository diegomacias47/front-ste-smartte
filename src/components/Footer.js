const footerStyles = {
    footer: {
        backgroundColor: '#2b2b2b'
    },
    list: {
        listStyle: 'none'
    }
}

export const Footer = () => {
    return (
        <footer className="py-5 bg-light border-top border-bottom">
            <div className="container">
                <h2 className="fw-bolder size-24 text-center pb-3 border-bottom">STE Transporte Estudiantil</h2>
                <div className="row my-4">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center">
                            <div>
                                <ul style={footerStyles.list}>
                                    <li><span className="size-14"><b>Facebook: </b><a href="https://www.facebook.com/profile.php?id=100092481503701" target="_blank" className="text-decoration-underline text-black">STE Transporte Estudiantil</a></span></li>
                                    <li><span className="size-14"><b>WhatsApp: </b><span className="text-decoration-underline">81-1887-4614</span></span></li>
                                    <li><span className="size-14"><b>Correo: </b> <span className="text-decoration-underline ">contacto@smartte.com.mx</span></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                        <div className="text-center">
                            <ul style={footerStyles.list}>
                                <li><span className="size-14"><b>Direccion: </b><span>Blanca Vista 704,Linda Vista, Guadalupe ,Nuevo León Apodaca, 66612, MX</span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}