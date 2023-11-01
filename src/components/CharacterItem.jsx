import React from "react";
import vela from './img/vela.jpg';
import healthStatus from './img/health.jpg';
import unknownStatus from './img/unknown.jpg';

function CharacterItem({ props }) {
  return (
    < div className="card" >
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <div className="img-container"><img src={props.image} alt='' /></div>
        {props.status === 'Alive' ? (
          <><h2 className="card-text">Estado: Vivo</h2>
            <img className="estado" src={healthStatus} alt='velita' />
          </>
        ) : props.status === 'Dead' ? (
          <>
            <h2 className="card-text">Estado: Muerto</h2>
            <img className="estado" src={vela} alt='velita' />
          </>
        ) : (
          <>
            <h2 className="card-text">Estado: Desconocido</h2>
            <img className="estado" src={unknownStatus} alt='velita' />
          </>
        )}
        <p className="card-text">Especie: {props.species}</p>
        <p className="card-text">Origen: {props.origin.name}</p>
        <p className="card-text">Locación: {props.location.name}</p>
        <p>Genero: {props.gender}</p>
      </div >
    </div >
  )
}

export default CharacterItem;