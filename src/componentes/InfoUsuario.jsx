import React, { useState } from 'react'
import ranaPepe1 from '../imagenes/pepeuwu.gif'
import ranaPepe2 from '../imagenes/pepeEpileptico.gif'
import { usoGlobal } from './Global';

function InfoUsuario({nombre, edad, ubicacion, descripcion}) {
  const { modoAzul } = usoGlobal();
  return (
    <div>
      <div className={`container-fluid p-5 mb-1 ${modoAzul ? 'titulos-color1' : 'titulos-color2'} text-center`}>
        <h1>Información personal</h1>
      </div>
      <div className="card text-center mx-5 shadow-lg">
        <div className="pt-4">
          <img className="rotar" src={modoAzul ? ranaPepe1 : ranaPepe2} alt="pepe" width="200px" height="200px"/>
        </div>
        <div>
          <p>Nombre: <i>{nombre}</i></p>
          <p>Edad: <i>{edad}</i></p>
          <p>Ubicación: <i>{ubicacion}</i></p>
          <p>Descripción: <i>{descripcion}</i></p>
        </div>
      </div>
    </div>
  )
}

export default InfoUsuario
