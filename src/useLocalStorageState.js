import { useState, useEffect } from "react";

export const useLocalStorageState = (key, value) => {
    const getInitialState = () => {
        const localStorageState = localStorage.getItem(key);
        if (localStorageState === null) {
            return value;
        }
        return JSON.parse(localStorageState);
    };

    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(key,
            JSON.stringify(state));
    }, [key, state]);
    
    return [state, setState];
};