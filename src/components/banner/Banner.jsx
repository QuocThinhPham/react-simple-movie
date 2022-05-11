import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';
import Button from '../button/Button';

const Banner = () => {
    const { data } = useSWR(tmdbAPI.getMovieList('upcoming'), fetcher);
    return (
        <section className='h-[620px] page-container mb-10 banner-list'>
            <Swiper
                grabCursor={true}
                slidesPerView='auto'
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}>
                {data?.results &&
                    data.results.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem movie={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

const BannerItem = ({ movie: { id, title, poster_path, backdrop_path } }) => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full bg-white relative'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg'></div>
                <img
                    src={tmdbAPI.imageOriginal(backdrop_path || poster_path)}
                    alt=''
                    className='w-full h-full object-cover rounded-[inherit]'
                />
            </div>
            <div className='absolute left-10 bottom-10 w-full'>
                <h2 className='text-6xl font-bold mb-5'>{title}</h2>
                <div className='flex items-center justify-start gap-2 mb-5'>
                    <span className='py-2 px-4 border border-white rounded-md'>
                        Action
                    </span>
                    <span className='py-2 px-4 border border-white rounded-md'>
                        Adventure
                    </span>
                    <span className='py-2 px-4 border border-white rounded-md'>
                        Drama
                    </span>
                </div>
                <div className='flex items-center justify-start gap-4'>
                    <Button
                        primary
                        className='max-w-[170px]'
                        onClick={() => navigate(`/movies/${id}`)}>
                        Watch
                    </Button>
                    <Button className='w-[52px] h-[52px] bg-gray-500 bg-opacity-90 text-4xl flex items-center justify-center'>
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
