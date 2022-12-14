import React from 'react'
import { Link } from 'react-router-dom';

const MenyCategory = () => {
  return (
    <div class="container list__meny fixed-button">
      <ul class="list d-flex justify-content-between my-2 py-3 border-1 bg-light rounded-5" >
        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to='/lavash'>
            Lavash
          </Link>
        </li>

        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to='/shourma'>
            Shourma
          </Link>
        </li>

        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to="/donar">
            Danar
          </Link>
        </li>

        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to="/xoddog">
            Xoddog
          </Link>
        </li>

        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to="/gamburger">
            Gamburger
          </Link>
        </li>

        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to="/sous">
            Souslar
          </Link>
        </li>

        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to="/ichimlik">
            Ichimliklar
          </Link>
        </li>

        <li class="list-item">
          <Link class="text-decoration-none text-secondary fs-4" to="/kofe">
            Kofe
          </Link>
        </li>

        <li class="list-item me-4">
          <Link class="text-decoration-none text-secondary fs-4" to="/choy">
            choy
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenyCategory