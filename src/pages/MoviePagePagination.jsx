import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import useSWR from 'swr';
import MovieCard, { MovieCardSkeleton } from '../components/movie/MovieCard';
import { fetcher, tmdbAPI } from '../config';
import useDebounce from '../hooks/useDebounce';

const itemsPerPage = 20;
const MoviePage = () => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);
    const [url, setUrl] = useState(tmdbAPI.getMovieList('popular', pageIndex));
    const [keyword, setKeyword] = useState('');
    const debounceKeyword = useDebounce(keyword);
    const { data, error } = useSWR(url, fetcher);

    useEffect(() => {
        if (debounceKeyword)
            setUrl(tmdbAPI.getMovieSearch(debounceKeyword, pageIndex));
        else setUrl(tmdbAPI.getMovieList('popular', pageIndex));
    }, [debounceKeyword, pageIndex]);

    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_results;
        setItemOffset(newOffset);
        setPageIndex(event.selected + 1);
    };

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
                    : data?.results &&
                      data.results.map((item) => (
                          <MovieCard key={item.id} movie={item}></MovieCard>
                      ))}
            </div>
            <div className='mt-10'>
                <ReactPaginate
                    breakLabel='...'
                    nextLabel='Next'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel='Previous'
                    renderOnZeroPageCount={null}
                    className='pagination'
                />
            </div>
        </div>
    );
};

export default MoviePage;
