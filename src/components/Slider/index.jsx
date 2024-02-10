import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./index.scss";
const Slider = () => {
    return (
        <>
            <section id='team'>
                <div className='slider_container'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <p>Deploying my application through Kinsta made so much sense. I was able to host my database, backend and frontend all in one place! Managing all 3 through the fuss-free UI was easy. As soon as I connected my GitHub account, the steps were clear. (Sponsored)</p>
                            <div className='slide_name'>
                                <img src="https://kinsta.com/wp-content/uploads/2023/02/Code-with-Ania-150x150.jpeg" alt="" />
                                <div className='slide_text'>
                                    <h3>Ania Kubów</h3>
                                    <span>Code with Ania Kubów</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Deploying my application through Kinsta made so much sense. I was able to host my database, backend and frontend all in one place! Managing all 3 through the fuss-free UI was easy. As soon as I connected my GitHub account, the steps were clear. (Sponsored)</p>
                            <div className='slide_name'>
                                <img src="https://kinsta.com/wp-content/uploads/2023/02/Code-with-Ania-150x150.jpeg" alt="" />
                                <div className='slide_text'>
                                    <h3>Ania Kubów</h3>
                                    <span>Code with Ania Kubów</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Deploying my application through Kinsta made so much sense. I was able to host my database, backend and frontend all in one place! Managing all 3 through the fuss-free UI was easy. As soon as I connected my GitHub account, the steps were clear. (Sponsored)</p>
                            <div className='slide_name'>
                                <img src="https://kinsta.com/wp-content/uploads/2023/02/Code-with-Ania-150x150.jpeg" alt="" />
                                <div className='slide_text'>
                                    <h3>Ania Kubów</h3>
                                    <span>Code with Ania Kubów</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Deploying my application through Kinsta made so much sense. I was able to host my database, backend and frontend all in one place! Managing all 3 through the fuss-free UI was easy. As soon as I connected my GitHub account, the steps were clear. (Sponsored)</p>
                            <div className='slide_name'>
                                <img src="https://kinsta.com/wp-content/uploads/2023/02/Code-with-Ania-150x150.jpeg" alt="" />
                                <div className='slide_text'>
                                    <h3>Ania Kubów</h3>
                                    <span>Code with Ania Kubów</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Slider