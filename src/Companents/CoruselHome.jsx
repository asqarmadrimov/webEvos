import React from 'react';
import Acsiya from '../Utils/Images/EVOS_NEW_Akciya_3.png';
import IceCrem from '../Utils/Images/IceCrem.jpg'
import Img from '../Utils/Images/carusel_img.jpeg'

const CoruselHome = () => {
  return (
    <div id="carouselExampleControls" style={{maxWidth: '500px'}} class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner rounded">
        <div class="carousel-item active">
          <img src={Acsiya} className="d-block carousel__img w-100" alt="" width={500} height={500} />
        </div>
        <div class="carousel-item">
          <img src={IceCrem} className="d-block carousel__img w-100" alt="" width={500} height={500}/>
        </div>
        <div class="carousel-item">
          <img src={Img} className="d-block carousel__img w-100" alt="" width={500} height={500}/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default CoruselHome