import { useEffect, useState } from "react";

export const useFetch = (URL) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState("Ładowanie danych");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const resData = await response.json();
                setResponse(resData);
                setLoading("");
            } catch (error) {
                setLoading("");
                setError("Nie udało się pobrać danych");
            }
        };
        fetchData();
    }, [URL]);
    return { response, error, loading };
};
