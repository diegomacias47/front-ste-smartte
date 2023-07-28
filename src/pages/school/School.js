import { useFetch } from "../../fetch/useFetch";
import { Institution } from "../../components/Institution";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const School = () => {
    const {data, loading, error} = useFetch('schools');
    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div>
            <div className="container py-4 px-md-5">
                <h1 className="text-center">¡Mira nuestras escuelas participantes!</h1>
                {loading && <div className="text-center pt-5"><CircularProgress color="primary" /></div>}
                <div className="row pt-4">
                    { data?.map((institution, index) => (<div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 px-2">
                        <Institution institution={institution} cb={goTo}/>
                    </div>))}
                    
                </div>
            </div>
        </div>
    );
  }