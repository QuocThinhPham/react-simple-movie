import React, { useEffect, useState } from 'react';
import Button from '../components/button/Button';
import MovieCard, { MovieCardSkeleton } from '../components/movie/MovieCard';
import { fetcher, tmdbAPI } from '../config';
import useDebounce from '../hooks/useDebounce';
import useSWRInfinite from 'swr/infinite';

const itemsPerPage = 20;
const MoviePageLoadmore = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [url, setUrl] = useState(tmdbAPI.getMovieList('popular', pageIndex));
    const [keyword, setKeyword] = useState('');
    const debounceKeyword = useDebounce(keyword);
    const { data, error, size, setSize } = useSWRInfinite(
        (index) => url.replace('page=1', `page=${index + 1}`),
        fetcher
    );

    useEffect(() => {
        if (debounceKeyword)
            setUrl(tmdbAPI.getMovieSearch(debounceKeyword, pageIndex));
        else setUrl(tmdbAPI.getMovieList('popular', pageIndex));
    }, [debounceKeyword, pageIndex]);

    const movies = data
        ? data.reduce(
              (previous, current) => previous.concat(current.results),
              []
          )
        : [];
    const isEmpty = data?.[0]?.results.length === 0;
    const isReachingEnd =
        isEmpty ||
        (data && data[data.length - 1]?.results.length < itemsPerPage);

    console.log(isReachingEnd);
    return (
        <div className='py-5 page-container'>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <input
                        type='text'
                        className='w-full p-4 bg-slate-800 outline-none tracking-widest'
                        placeholder='Type here to search...'
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
                <button className='p-4 bg-indianred text-white'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                    </svg>
                </button>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-10'>
                {!data && !error
                    ? new Array(itemsPerPage)
                          .fill(0)
                          .map((item, index) => (
                              <MovieCardSkeleton
                                  key={index}></MovieCardSkeleton>
                          ))
                    : movies &&
                      movies.map((item) => (
                          <MovieCard key={item.id} movie={item}></MovieCard>
                      ))}
            </div>
            <div className='mt-10'>
                <Button
                    primary
                    className={`block mx-auto w-1/4 ${
                        isReachingEnd
                            ? 'disabled:bg-slate-500 cursor-no-drop'
                            : ''
                    }`}
                    onClick={() => (isReachingEnd ? {} : setSize(size + 1))}
                    disabled={isReachingEnd}>
                    Load more
                </Button>
            </div>
        </div>
    );
};

export default MoviePageLoadmore;
