import React from 'react';
import DonarItem from './DonarItem';
import LavashItem from './LavashItem';
import ShourmaItem from './ShourmaItem';

const MenyList = () => {
  return (
    <div>
      <div className="lavash">
        <p className='fs-1 bord ms-2 '><em>Lavash</em></p>
        <LavashItem />
      </div>

      <div className="shourma">
        <p className='fs-1 bord ms-2 '><em>Shourma</em></p>
        <ShourmaItem /> 
      </div>

      <div className='Donar'>
        <p className='fs-1 bord ms-2'> <em>Donar</em></p>
        <DonarItem />
      </div>

    </div>
  )
}

export default MenyList