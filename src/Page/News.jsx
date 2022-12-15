import React from 'react';
import img from '../Utils/Images/EVOS_NEW_Akciya_3.png'

const News = () => {
  return (
    <section className='news'>
      <div className="container-flud news-content py-3 px-3">
        <img src={img} className="news_img" alt="news" />
        <div className="text-start ms-3">
          <h2 className='fs-2 my-2 text-white'>
          <strong>«EVOS»dan Yangi yil sovg’alari!</strong>
          </h2>
          <p className='text-white'>
            <em>
              Aziz do'stlar, Yangi yil arafasida biz maxsus aksiyani boshlayapmiz! <br /> <br />

              🎫 55 000 so'mdan boshlanadigan summaga buyurtma bergan har bir mijoz kafolatlangan sovg'aga ega ajoyib sovg'ali kartani qo'lga kiritadi. <br /> <br />

              Siz qaysi sovrinni qo'lga kiritganingizni bilish uchun kartadagi himoya qatlamini o'chirishning o'zi kifoya. <br /> <br />

              ⌛️ Aksiya 8-dekabrdan 31-dekabrgacha davom etadi va restoranlardagi buyurtmalar va yetkazib berish xizmati uchun amal qiladi. Barcha sovg'alarni 2023-yil 15-yanvargacha olishingiz mumkin! <br /> <br />

              Aksiyaning to‘liq shartlari «EVOS» rasmiy sayti www.evos.uz ga joylashtirilgan. <br /> <br />

              Ishtirok etishga shoshiling va qimmatbaho sovg'alarni yutib oling!💚
            </em>
          </p>
        </div>
      </div> 
    </section>
  )
}

export default News