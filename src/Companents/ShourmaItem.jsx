import React from 'react'
// import img1 from '../Utils/Images/shourma-b-g.png';

const ShourmaItem = () => {
  return (
    <ul className='d-flex d-flex justify-content-center gap-4 p-0 mx-auto flex-wrap'>
      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>  
        {/* <img src={img1} className='card-img-top' alt="lavash" /> */}
        <div class="card-body">
          <h4 class="card-title">Lavash mol go'shtli</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>25,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Standart Lavash Mol Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    {/* <img src={img1} className='card-img-top' alt="lavash" /> */}
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

export default ShourmaItem