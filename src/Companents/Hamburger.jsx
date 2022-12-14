import React from 'react'
import { Link } from 'react-router-dom'
import MenyBtn from '../Utils/Images/hamburger_btn.svg'

const Hamburger = () => {
  return (
    <div class="header__hamburger">
      <button class="bg-transparent border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        {/* <img src={MenyBtn} alt="hamburger" width="30" height="30"> */}
        <img src={MenyBtn} alt="MenyBtn" width='30' height="30" />

      </button>

      <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">

        <h2 className="text-white bg-success fs-2 rounded-2 text-center m-3 w-25">evos</h2>
        <div className="offcanvas-header position-relative">
          <div className="list-group w-100 mt-2">
            <Link to="/" className="list-group-item list-group-item-action">
              Asosiy</Link>
            <Link to="/meny" className="list-group-item list-group-item-action">
              Meny</Link>
            <Link to="/new" className="list-group-item list-group-item-action">
              Yangiliklar</Link>
            <Link to="/aboute" className="list-group-item list-group-item-action">
              Bizhaqi mizda</Link>
            <Link to="/contact" className="list-group-item list-group-item-action">
              Cantact</Link>
            <Link to="/panel" class="list-group-item list-group-item-action">
              Kirish</Link>
          </div>
        </div>
        <button type="button" class="btn-close p-4 position-absolute top-0 end-0" data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>
    </div>
  )
}

export default Hamburger