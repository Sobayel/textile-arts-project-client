import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='py-7'>
        <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide><img className='w-full h-[500px] rounded-xl' src="https://i.ibb.co/b3JCbtv/Knitting-Crocheting.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] rounded-xl' src="https://i.ibb.co/SJJ5KFK/1st.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] rounded-xl' src="https://i.ibb.co/wzTxX9Z/Quilting.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] rounded-xl' src="https://i.ibb.co/M70ST96/embroid-Beadwork.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] rounded-xl' src="https://i.ibb.co/bJmzN3B/Tie-Dyeing.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] rounded-xl' src="https://i.ibb.co/JBzLWJV/Macrame.jpg" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;