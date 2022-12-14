import React from 'react'
import { Link } from 'react-router-dom'
import Basket from '../Companents/Basket'
import Hamburger from '../Companents/Hamburger'
import Langue from '../Companents/Langue'
import Navbar from '../Companents/Navbar'
import Room from '../Companents/Room'

const Header = () => {
  return (
    <header className="header">
      <div className="container-flud">
        <div className="inner header_inner d-flex align-items-center justify-content-between p-2">
          <div className="d-flex align-items-center">
            <div className="header__link p-2 pe-3 me-2 ps-3 bg-success h3 rounded-2">
              <Link className="text-decoration-none text-white" to="/">
                EVOS
              </Link>
            </div>
            <Navbar />
          </div>
          <div className="d-flex align-items-center">
            <Basket />
            <div className="header__content">
              <Langue />
              <Room />
            </div>
            <Hamburger />
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header