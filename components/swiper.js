import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import Styles from '../styles/swiper.module.css'
export default function Swipers() {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        effect={"coverflow"}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        className={Styles.swiper}
        >
        <SwiperSlide ><img src='r.png' className={Styles.img}/> </SwiperSlide>

        <SwiperSlide ><img src='ff.png' className={Styles.img}/> </SwiperSlide>
        <SwiperSlide ><img src='fr.png' className={Styles.img}/></SwiperSlide>
        <SwiperSlide ><img src='jj.png' className={Styles.img}/></SwiperSlide>
        <SwiperSlide ><img src='e.png' className={Styles.img}/></SwiperSlide>
        <SwiperSlide ><img src='av.png' className={Styles.img}/></SwiperSlide>
        ...
        </Swiper>
    );
};