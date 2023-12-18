import React, { useState } from "react";
import '../styles/LocationList.css';

function LocationList() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
       <input
         id="location"
         type="text"
         placeholder="Search For Location"
         defaultValue={selectedLocation}
         className="input-local"
       />
       <div className="Location-Select">
        <li onClick={() => handleLocationClick('Helsinki, Finland')}>Helsinki, Finland</li>
        <li onClick={() => handleLocationClick('Turku, Finland')}>Turku, Finland</li>
        <li onClick={() => handleLocationClick('Vaasa, Finland')}>Vaasa, Finland</li>
        <li onClick={() => handleLocationClick('Oulu, Finland')}>Oulu, Finland</li>
      {/* Location list components */}
    </div>
    </>
  );
}

export default LocationList;
