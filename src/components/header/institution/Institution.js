import { Box, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Institution = (props) => {
    const imageHost = 'https://api-ste.smartte.com.mx/';
    return (
        <Box className="pt-3">
            <Card sx={{}}>
                <Box sx={{textAlign: 'center'}}>
                    <img style={{height: 190, width: 190, textAlign: 'center'}} src={imageHost + props.institution.url_logo}/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.institution.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='text-capitalize fw-bolder' variant="outlined" size="small" color='primary'>¡Reserva aquí!</Button>
                    <Button component={Link} to={'/my-routes?id=' + props.institution.id_school}  className='text-capitalize fw-bolder' variant="outlined" size="small" color='primary'>¡Ver Rutas!</Button>
                </CardActions>
            </Card>
        </Box>
    );
};