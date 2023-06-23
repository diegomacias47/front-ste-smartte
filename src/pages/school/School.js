import { Header } from "../../components/header/Header";
import { useFetch } from "../../fetch/useFetch";
import { Institution } from "../../components/header/institution/Institution";
import { CircularProgress } from "@mui/material";

export const School = () => {
    const {data, loading, error} = useFetch('https://api-ste.smartte.com.mx/apiv2/schools');
    return (
        <div>
            <Header></Header>
            <div className="container py-4 px-md-5">
                <h1 className="text-center">¡Nuestras escuelas participantes!</h1>
                {loading && <div className="text-center pt-5"><CircularProgress color="primary" /></div>}
                <div className="row pt-4">
                    { data?.map((institution, index) => (<div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 px-3">
                        <Institution institution={institution} />
                    </div>))}
                    
                </div>
            </div>
        </div>
    );
  }