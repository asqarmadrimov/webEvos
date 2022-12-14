import React from 'react'
import { Link } from 'react-router-dom'

const Basket = () => {
  return (
    <div class="Basket">
      <button className="btn btn-success d-flex align-items-center" type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          className="header__basket-img me-2 bi bi-bag-plus" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
          <path
            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        Savat
      </button>

      <div className="header__search offcanvas offcanvas-end ps-2 pe-2" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header position-relative">
          <h5 className="offcanvas-title text-success" id="offcanvasRightLabel">Hmm. Hechnarsa topilmadi!</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <Link to='/meny' className="p-3 bg-success text-white text-center text-decoration-none border-0 w-100 mx-auto mb-5 position-absolute bottom-0">Savatga
          qo'shish</Link>
        <div className="offcanvas-body text-center mt-5">
        </div>
      </div>
    </div>
  )
}

export default Basket