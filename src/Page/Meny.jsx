import React from 'react'
import MenyCategory from '../Companents/MenyCategory'
import MenyList from '../Companents/MenyList'

const Meny = () => {
  return (
    <section className='Meny'>
        <MenyCategory />
      <div className="container-flud">
        <MenyList />
      </div>
    </section>
  )
}

export default Meny