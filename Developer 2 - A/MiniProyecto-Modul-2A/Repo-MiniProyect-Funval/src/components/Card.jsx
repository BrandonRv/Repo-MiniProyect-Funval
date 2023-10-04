import { useState, useEffect } from "react";
import "../styles/Card.css"


const Card = (props) => {

    const { photo, title } = props;

    console.log("Esto es un Array", photo)
    console.log("Esto es un Array", title)


    return (
        <div className="card_00">
            <img src={photo} className="card-img-top" alt="imagen" ></img>
    
        </div>
    )
}
export default Card