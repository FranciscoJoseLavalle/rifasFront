import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const appContext = createContext([])

function AppContext({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getDatabase();
    }, [])

    function getDatabase() {
        axios.get("https://ash-glitter-ticket.glitch.me/")
            .then(res => setData(res.data));
    }
    return (
        <appContext.Provider value={{
            data, getDatabase
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppContext