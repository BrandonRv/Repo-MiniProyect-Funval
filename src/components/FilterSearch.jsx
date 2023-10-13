import React, { useState } from 'react';
import useResultSearch from './services/useResultSearch'
import data from '../../stays.json';
import lupa from '../assets/lupa.png';
import '../styles/FilterSearch.css';

const FilterSearch = () => {

  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = () => {
        const inputValue1 = document.getElementById('location').value.toLowerCase();
        const inputValue2 = document.getElementById('guests').value.toLowerCase();
      
        setLocation(inputValue1);
        setGuests(inputValue2);
        console.log("input de ubicacion " + inputValue1);
        console.log("input de Invitados " + inputValue2);
      
        if (inputValue1 && inputValue2) {
          const filteredResults = data.filter(item => {
            return (
              item.city.toLowerCase().includes(inputValue1) ||
              item.country.toLowerCase().includes(inputValue1) ||
              item.title.toLowerCase().includes(inputValue1) ||
              item.type.toLowerCase().includes(inputValue1)
            ) && item.maxGuests >= parseInt(inputValue2, 10);
          });
          setSearchResults(filteredResults);
        } else {
          setSearchResults([]); 
        }
    }

  return (
    <div>
      <button className='btn-search' onClick={handleInputChange}><img src={lupa} alt="lupa" style={{ width: '30px', height: 'auto' }} /></button>
      <div className="results">

        {searchResults.map(item => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>City: {item.city}</p>
            <p>Country: {item.country}</p>
            <p>Type: {item.type}</p>
            <img src={item.photo} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSearch;