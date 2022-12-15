
import React from 'react';
import { Link } from 'react-router-dom';
import CoruselHome from '../Companents/CoruselHome';
import Meny from './Meny';
import News from './News'


const Home = () => {
  return (
    <>
      <section className='home p-3'>
        <div className="container-flud home__inner mb-3">
          <div className=" mt-3 mb-3">
            <h1 className='fs-1 text-white'><em>Mazali, Sifatli, Tez</em></h1>
            <em className='text-white fs-4'>Sevimli taomlar va sharqona mehmon do'stlik!</em>
            <Link to="/meny" className='btn btn-success home__btn d-block mt-5'>Bizning Meny</Link>
          </div>
          <CoruselHome />
        </div>
      </section>
      <Meny />
      <News />
    </>
  )
}

export default Home