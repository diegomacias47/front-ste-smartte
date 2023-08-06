import { useEffect, useState } from "react";

export const APIS = {
    localHost: 'http://localhost/apiv2/',
    ApiV3: 'https://api-ste.smartte.com.mx/V4/'
}

export function useFetch(path, fetchParams = { method: 'GET', mode: 'cors'}, TargetApi = APIS.ApiV3) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(TargetApi + path, fetchParams)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setData(data)
                }
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error};

}