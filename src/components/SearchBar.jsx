import React, { useState, useEffect } from 'react';
import LocationList from './LocationList';
import FilterSearch from './FilterSearch';
import Guests from './Guests';
import logo from "../assets/logo.png";
import '../styles/SearchBar.css';


function SearchBar() {

  const [showForm, setShowForm] = useState(false);

  const nuevaTarea = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  }

  return (
    <>
    <div id='nav-bar'>
      <nav className="navi-gator">
      <div id="logo" className="logo">
        <button className="btn-windbnb" >
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }}/>
        </button>
      </div>
    <div className='nav-divv'>
    <div>
      <form>
      <div>
      {showForm ? <LocationList /> : ''}
      </div>
      <div>
      {showForm ? <Guests /> : ''}
      </div>
      </form>
      </div>
      {showForm ? <FilterSearch /> : ''}
      <div className='cajitabtn'>
      <button className='btn-agregar' onClick={nuevaTarea}>{showForm ? 'Add Locations' : 'Add Locations'}
      </button>
      <button className='btn-agregar' onClick={nuevaTarea}>{showForm ? 'Add Guests' : 'Add Guests'}
      </button>
      </div>
    </div>
    </nav>
    </div>
    </>
  );
}


export default SearchBar;
