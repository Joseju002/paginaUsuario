import React from 'react'
import { usoGlobal } from './Global';

function EstadisticasUsuario({seguidores, seguidos, publicaciones}) {
  const { modoAzul } = usoGlobal();
  return (
    <div>
      <div className={`container-fluid ${modoAzul ? 'titulos-color1' : 'titulos-color2'} p-5 mb-1 text-center`}>
        <h1>Estadísticas del usuario</h1>
      </div>
      <div className="card  text-center mb-5 mx-5 pt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <h4>Seguidores</h4>
              <p>{seguidores}</p>
            </div>
            <div className="col-sm-4">
              <h4>Seguidos</h4>
              <p>{seguidos}</p>
            </div>
            <div className="col-sm-4">
              <h4>Publicaciones</h4>
              <p>{publicaciones}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstadisticasUsuario
