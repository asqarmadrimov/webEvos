import React from 'react';
import uz from '../Utils/Images/uz.svg'
import ru from '../Utils/Images/ru.svg';
import en from '../Utils/Images/en.svg'

const Langue = () => {
  return (
    <div class="header__language mx-3 ms-4">
                <ul class="nav nav-tabs">
                  <li class="nav-item dropdown">
                    <a class="color fs-6 nav-link dropdown-toggle text-success fs-5" data-bs-toggle="dropdown" href="#/" role="button"
                      aria-expanded="false">Tilni tallang</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#/">
                          <img src={uz} alt="uzb" width={'31'} height={'31'} className="me-2" />
                          UZB
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#/">
                          <img src={ru} alt="uzb" width={'31'} height={'31'} className="me-2" />
                          RU
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#/">
                          <img src={en} alt="uzb" width={'31'} height={'31'} className="me-2" />
                          ENG
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
  )
}

export default Langue