import React, { useState } from 'react';
import './App.css';
import Provinces from './components/Provinces/Provinces'
import Park from './components/Park/Park'
import items from './data'

function App() {

  const [parks, setParks] = useState(items)

  const allProvinces = ['All', ...new Set(items.map((items) => items.province))];
  const [provinces, setProvinces] = useState(allProvinces)

  const filter = (province) =>{
    if(province === 'All'){
      setParks(items)
    }
    else{
      const filterParks = items.filter (item => item.province === province)
      setParks(filterParks)
    }
  }

  return (
    <div>
      <section className='park section'>
        <div className="title">
          <h1>National Parks Canada</h1>
          <div className="underline"></div>
        </div>
        <Provinces provinces = {provinces} filter={filter}/>
        <Park parks={parks}/>
      </section>
    </div>
  );
}

export default App;
