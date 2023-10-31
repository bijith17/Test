import React from 'react';
import 'swiper/css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from './Data';

const Testimonial = () => {
  return (
    <div className="p-4 py-20 bg-testBg">
      <h1 className="text-2xl font-[1000] text-center mb-4">The Canadian Home</h1>
      <p className='font-semibold text-center mb-12'>What customers say about the The Canadian Home experience</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2.5,
          },
        }}
      >
        {data.map((datas, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg p-4 py-10 px-10 shadow-md border border-buttonBg">
              <p className="text-gray-600 mt-2">{datas.paragraph}</p>
              <h2 className="text-2xl my-2 text-center font-semibold text-gray-800">
                {datas.heading}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
