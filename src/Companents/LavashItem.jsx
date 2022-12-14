import React from 'react';
import img1 from '../Utils/Images/lavash_g.png';
import img2 from '../Utils/Images/lavash_k.png';
import img3 from '../Utils/Images/lavash_s_g.png';
import img4 from '../Utils/Images/lavash_s_k.png';
import img5 from '../Utils/Images/lavash_ostriy_s_govyadinoy.png';
import img6 from '../Utils/Images/lavash_o_k.png';
import img7 from '../Utils/Images/lavash_g_m_s.png';
import img8 from '../Utils/Images/lavash_k_m_s.png';
import img9 from '../Utils/Images/fitter.png';

const LavashItem = () => {
  return (
    <ul className='d-flex d-flex justify-content-center gap-4 p-0 mx-auto flex-wrap'>
      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>  
        <img src={img1} className='card-img-top' alt="lavash" />
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
                    <img src={img1} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img2} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Lavash to'viq go'shtli</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>23,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Standart Lavash Tovuq Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img2} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img1} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Lavash mini mol ...</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>21,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Standart Lavash Mini Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img1} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img2} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Lavash mini to'viq ...</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>19,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Standart Lavash Mini Tovuq Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img2} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img3} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Sir Lavash mol go'shtli</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>28,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sir Lavash Mol Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img3} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img4} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Sir Lavash to'viq go'..</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>26,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sir Lavash Tovuq Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img4} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img7} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Sir Lavash mini mol ...</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>24,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sir Lavash Mini Mol Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img7} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img8} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Sir Lavash mini to'viq ...</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>22,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal7">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sir Lavash Mini Tovuq Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img8} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img5} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Qalampir Lavash mol ...</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>26,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Qalampir Lavash Mol Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img5} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img6} className='card-img-top' alt="lavash" />
        <div class="card-body">
          <h4 class="card-title">Qalampir Lavash to'vi..</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>26,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal9">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Qalampir Lavash Tovuq Go'shtli</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img6} className='card-img-top' alt="lavash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="card m-0 p-0 my-3" style={{ maxWidth: '18rem' }}>
        <img src={img9} className='card-img-top' alt="fitter" />
        <div class="card-body">
          <h4 class="card-title">Fitter</h4>
          <p class="card-text"><em>Har doimilikdan ham juda yaxshi!</em></p>
          <p><strong className='card-text'>21,000 so'm</strong></p>
          <div className=" d-flex justify-content-between">
            <button href="#" class="btn btn-success">Savatga +</button>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-white" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Fitter</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={img9} className='card-img-top' alt="lavash" />
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

export default LavashItem