"use client"

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function HomeSlider() {
    return (
        <>
            <Swiper
                pagination={{
                    // dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="max-h-[380px]"
                    >
                        <Image
                            src="/slide-banner.png"
                            width={2000}
                            height={2000}
                            alt="slider 1"
                            className="w-full h-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="max-h-[380px]"
                    >
                        <Image
                            src="/slide4.svg"
                            width={2000}
                            height={2000}
                            alt="slider 1"
                            className="w-full h-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="max-h-[380px]"
                    >
                        <Image
                            src="/slider3.svg"
                            width={2000}
                            height={2000}
                            alt="slider 1"
                            className="w-full h-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="max-h-[380px]"
                    >
                        <Image
                            src="/slider1.jpeg"
                            width={2000}
                            height={2000}
                            alt="slider 1"
                            className="w-full h-full"
                        />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    )
}