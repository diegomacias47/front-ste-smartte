import { useEffect, useState } from "react";

export function useFetch(url, fetchParams = { method: 'GET', mode: 'cors'}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url, fetchParams)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error};

}