import React, { useState } from 'react';
import '../styles/Guests.css';

function Guests() {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const handleIncrement = (setValue, value) => {
        setValue(value + 1);
    };

    const handleDecrement = (setValue, value) => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const totalGuests = adults + children;

    return (
        <div className="guests">
          <input 
          id='guests' 
          type="text" 
          placeholder='Search for Guests'
          value={totalGuests} 
          className="input-local2"
          />
          
          <div>
                <small className="font-weight-bold">Adults</small>
                </div>
                <div>Ages 13 or More</div>
                <form>
                    <button onClick={(e) => { e.preventDefault(); handleDecrement(setAdults, adults) }}>-</button>
                    <div className="count">{adults}</div>
                    <button onClick={(e) => { e.preventDefault(); handleIncrement(setAdults, adults) }}>+</button>
                </form>
                <small className="font-weight-bold">Children</small>
                <div className="infoAges">Ages 2-12</div>
                <form>
                    <button onClick={(e) => { e.preventDefault(); handleDecrement(setChildren, children) }}>-</button>
                    <div className="count">{children}</div>
                    <button onClick={(e) => { e.preventDefault(); handleIncrement(setChildren, children) }}>+</button>
                </form>
                <small className="font-weight-bold">Total</small>
                <div className="count">{totalGuests}</div>
        </div>
    );
}

export default Guests;
