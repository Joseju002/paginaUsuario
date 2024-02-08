import React, {createContext, useContext, useState} from 'react';

const ModoContext = createContext();

export const usoGlobal = () => useContext(ModoContext);

export const ModoProvider = ({children}) => {

    const [modoAzul, setModoAzul] = useState(true);

    const cambiarModo = () => {
        setModoAzul(prevModo => !modoAzul);
    };

    return (
        <ModoContext.Provider value={{ modoAzul, cambiarModo }}>
            {children}
        </ModoContext.Provider>
    )
}