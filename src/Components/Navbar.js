import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
        <ul className='flex cursor-pointer list-style-none mb-3'>
            <li className='mr-6 mb-3'>
                <NavLink className={(navData) => navData.isActive ? " border-primary border-b-2" : "" } to='/Add'>Add</NavLink>
            </li>
            <li className='mr-6 mb-3' >
                <NavLink className={(navData) => navData.isActive ? " border-primary border-b-2" : "" } to='/Add'>Actived</NavLink>
            </li>
            <li className='mr-6 mb-3' >
                <NavLink className={(navData) => navData.isActive ? " border-primary border-b-2" : "" } to='/Add'>Completed</NavLink>
            </li>
        </ul>

    </div>
  )
}

export default Navbar