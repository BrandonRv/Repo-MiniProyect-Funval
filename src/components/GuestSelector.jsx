import React from "react";

function GuestSelector({ guests, onGuestsChange, isOpenMenu }) {
  return (
    <div className={`guest_box ${isOpenMenu ? '' : 'hola'}`}>
      {/* Guest selector components */}
    </div>
  );
}

export default GuestSelector;
