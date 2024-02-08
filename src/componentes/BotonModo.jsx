import React from 'react';
import {usoGlobal} from '../componentes/Global';

const BotonModo = () => {
    const {modoAzul, cambiarModo} = usoGlobal();

    return (
        <button
            className = "btn btn-success"
            type="button"
            onClick = {cambiarModo}
        >
        Cambio de estado
        </button>
    )
}

export default BotonModo;