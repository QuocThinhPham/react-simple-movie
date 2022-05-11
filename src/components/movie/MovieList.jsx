import { fetcher, tmdbAPI } from '../../config';
import PropTypes from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import MovieCard, { MovieCardSkeleton } from './MovieCard';

const MovieList = ({ endpoint, title }) => {
    const { data, error } = useSWR(tmdbAPI.getMovieList(endpoint), fetcher);
    return (
        <section className='page-container mb-10'>
            <h2 className='capitalize text-white mb-5 text-2xl font-bold'>
                {title}
            </h2>
            <div className='movie-list'>
                <Swiper
                    grabCursor={true}
                    spaceBetween={40}
                    slidesPerView='auto'>
                    {!data && !error
                        ? Array(4)
                              .fill(0)
                              .map((item, index) => (
                                  <SwiperSlide key={index}>
                                      <MovieCardSkeleton></MovieCardSkeleton>
                                  </SwiperSlide>
                              ))
                        : data?.results &&
                          data.results.map((item) => (
                              <SwiperSlide key={item.id}>
                                  <MovieCard movie={item}></MovieCard>
                              </SwiperSlide>
                          ))}
                </Swiper>
            </div>
        </section>
    );
};

MovieList.propTypes = {
    endpoint: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default MovieList;
