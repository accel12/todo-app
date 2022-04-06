import React from 'react'

const Buscador = () => {
  return (
    <div className='flex'>
        <input className='w-full h-8 mr-3 border border-#BDBDBD rounded-lg' />
        <button className='bg-primary px-4 rounded-lg text-white hover:bg-violet-600'>Add</button>
    </div>
  )
}

export default Buscador