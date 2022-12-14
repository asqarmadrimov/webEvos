import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer p-3'>
      <div className="container-flud">
        <div class="header__link p-2 bg-success h4 ms-3 rounded-2" style={{ maxWidth: '90px', textAlign: 'center' }}>
          <Link class="text-decoration-none text-white" to="/">
            EVOS
          </Link>
        </div>

        <nav class="mb-2">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link class="color text-success fs-5 nav-link" to="/">Asosiy</Link>
            </li>
            <li class="nav-item">
              <Link class="color nav-link text-success fs-5" to="/meny">Meny</Link>
            </li>
            <li class="nav-item">
              <Link class="color nav-link text-success fs-5" to="/new">Yangiliklar</Link>
            </li>
            <li class="nav-item">
              <Link class="color nav-link text-success fs-5" to="/aboute">Biz haqimizda</Link>
            </li>
            <li class="nav-item">
              <Link class="color nav-link text-success fs-5" to="/contact">Kontaktlar</Link>
            </li>
            <li className='nav-item'>
            </li>
          </ul>
        </nav>
        <b className='text-light'>
          M.Asqar | 09.12.2022
        </b>
      </div>
    </footer>
  )
}

export default Footer