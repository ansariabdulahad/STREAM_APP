import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { Button } from '../../../Tailwind';

const LatestMovies = ({ latest, title }) => {
    console.log(latest);
    const design = (
        <>
            <>
                <div className='bg-white p-4'>
                    <h1 className='text-black mb-5 text-3xl font-bold'>
                        {title}
                    </h1>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {
                            latest && latest.map((item, index) => (
                                <SwiperSlide key={index} style={{
                                    height: '182px',
                                    // background: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT}/${item.thumbnail})`,
                                    // backgroundSize: 'cover'
                                }}>
                                    <Link href={{
                                        pathname: `/videos/${item.title.toLowerCase().split(" ").join("-")}`,
                                        query: item
                                    }} passHref>
                                        <img src={`${process.env.NEXT_PUBLIC_CLOUDFRONT}/${item.thumbnail}`}
                                            alt={item.title}
                                            width={'100%'}
                                        />
                                    </Link>

                                    <div
                                        className='w-full text-left absolute bottom-0 left-0 p-4'
                                        style={{
                                            background: 'rgba(0,0,0,.7)'
                                        }}
                                    >
                                        <h1 className='text-white font-bold capitalize'>
                                            {item.title}
                                        </h1>
                                        <p className='text-white'>
                                            Duration : {(item.duration / 60).toFixed(2)} Min
                                        </p>

                                        <Link href={{
                                            pathname: `/videos/${item.title.toLowerCase().split(" ").join("-")}`,
                                            query: item
                                        }} passHref>
                                            <Button className='mt-2' theme='error'>Play Now</Button>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </>
        </>
    );
    return design;
}

export default LatestMovies;