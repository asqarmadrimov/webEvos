import React from 'react'
import img1 from '../Utils/Images/donar.png';
import img2 from '../Utils/Images/donar_k.png';
import img3 from '../Utils/Images/strips.png';

const DonarItem = () => {
  return (
    <ul className='d-flex justify-content-center gap-4 p-0 mx-auto flex-wrap'>
      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>  
        <img src={img1} className='card-img-top' alt="shourma" />
        <div class="card-body">
          <h4 class="card-title">Donar Mol Go'shtli</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>40,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#donarg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="donarg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Donar Mol Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img1} className='card-img-top' alt="shourma" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>  
        <img src={img2} className='card-img-top' alt="shourma" />
        <div class="card-body">
          <h4 class="card-title">Donar Tovuq Go'shtli</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>38,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#donart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="donart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Donar Tovuq Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img2} className='card-img-top' alt="shourma" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>  
        <img src={img3} className='card-img-top' alt="shourma" />
        <div class="card-body">
          <h4 class="card-title">Strips</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>17,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#donars">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="donars" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Strips</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img3} className='card-img-top' alt="Strips" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default DonarItem