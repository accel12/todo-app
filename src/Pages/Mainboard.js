import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Actividad from '../Components/Actividad'
import Buscador from "../Components/Buscador";
import Navbar from "../Components/Navbar";
import Agregar from './Agregar';
const Mainboard = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold underline mb-10'>#Todo</h1>
        <Navbar />
        <Routes>
            <Route path="/Add" element={<Agregar />} />
        </Routes>
        <Buscador />    
        <div>
          <Actividad />
          <Actividad />
          <Actividad />
        </div>
    </div>
  )
}

export default Mainboard