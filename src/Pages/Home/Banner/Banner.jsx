// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'

import './banner.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
        <>
        <div className='md:h-[900px] '>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide><img className='bg-cover' src={img1} alt="banner" /></SwiperSlide>
          <SwiperSlide><img className='bg-cover' src={img2} alt="banner" /></SwiperSlide>
          <SwiperSlide><img className='bg-cover' src={img3} alt="banner" /></SwiperSlide>
        </Swiper>
        </div>
      </>
    );
};

export default Banner;