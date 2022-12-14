import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="header__nav">
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
      </ul>
    </nav>
  )
}

export default Navbar