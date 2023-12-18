import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const { photo, title, type, beds, superHost, rating } = props;

  return (
    <>
    <div className='enmarcado'>
    <div className="recuadros-info">
      <img src={photo} className="card-img-top" alt="imagen" />
    </div>
    <div className='info-spto'> 
      <span>
    {superHost == true ? <span className="card_superHost">SUPER HOST </span> : "" }
    </span>
    <span>
    {type} {beds == null ? "" : `${beds} beds`}
    </span>
    <div className="div-estrella">
   <span className="material-symbols-outlined align-middle" style={{ color: "rgb(235, 87, 87)" }}>
    star
   </span>
   <span className="estrella">{rating}</span>
   </div>
    </div>
     <h6 className="font-weight-bold">{title}</h6>
     </div>
     </>
  );
};

export default Card;
