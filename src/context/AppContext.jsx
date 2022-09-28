import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const appContext = createContext([])

function AppContext({ children }) {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getDatabase();
    }, [])

    function getDatabase() {
        setLoaded(true);
        axios.get("https://ash-glitter-ticket.glitch.me/")
            .then(res => setData(res.data))
            .finally(res => setLoaded(false))
    }
    return (
        <appContext.Provider value={{
            data, getDatabase, loaded
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppContext