import * as React from 'react';
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { SchoolRoutes } from "../../components/school-routes/SchoolRoutes";

export const MyRoutes = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const {data, loading, error} = useFetch('routes?id=' + searchParams.get('id'));
    
    return(
        <div>
            <div className="container pt-3 px-md-5">               
                <div className="row">
                    {
                        data?.map((value, index) => (<div key={index} className="col-12 col-md-4 pt-5 pb-5"> <SchoolRoutes route={value}></SchoolRoutes> </div>) )
                    }
                </div>
            </div>
        </div>
    )
}