import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import MovieList from '../components/movie/MovieList';
import { fetcher, tmdbAPI } from '../config';
import PropTypes from 'prop-types';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;
    return (
        <div className='py-10'>
            <div className='w-full h-[600px] relative'>
                <div className='absolute inset-0 bg-black-900 bg-opacity-70'></div>
                <div
                    className='w-full h-full bg-cover bg-no-repeat'
                    style={{
                        backgroundImage: `url(${tmdbAPI.imageOriginal(
                            backdrop_path
                        )})`,
                    }}></div>
            </div>
            <div className='w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] mb-14 relative z-10'>
                <img
                    className='w-full h-full object-cover rounded-xl'
                    src={tmdbAPI.imageOriginal(poster_path)}
                    alt=''
                />
            </div>
            <h2 className='font-bold text-5xl text-center mb-14'>{title}</h2>
            {genres && (
                <div className='flex items-center justify-center gap-9 mb-14'>
                    {genres.map((item) => (
                        <span
                            className='min-w-[140px] py-[10px] px-5 border border-[#7D6AFF] bg-transparent rounded-[50px] text-lg font-medium text-center'
                            key={item.id}>
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
            <p className='w-full max-w-[968px] mx-auto mb-14 text-white text-center leading-7 text-lg font-normal'>
                {overview}
            </p>
            <div className='mb-14'>
                <MovieDetailsMeta endpoint='credits'></MovieDetailsMeta>
            </div>
            <div className='mb-14'>
                <MovieDetailsMeta endpoint='videos'></MovieDetailsMeta>
            </div>
            <MovieDetailsSimilar></MovieDetailsSimilar>
        </div>
    );
};

const MovieDetailsMeta = ({ endpoint }) => {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, endpoint), fetcher);
    if (!data) return null;
    switch (endpoint) {
        case 'credits':
            const { cast } = data;
            if (cast)
                return (
                    <>
                        <h3 className='font-bold text-4xl text-center mb-7'>
                            Casts
                        </h3>
                        <div className='grid grid-cols-4 gap-10 w-full max-w-[968px] mx-auto'>
                            {cast
                                .slice(0, 4)
                                .map(({ id, profile_path, name }) => (
                                    <div
                                        className='w-full h-full flex flex-col items-center gap-2'
                                        key={id}>
                                        <img
                                            src={tmdbAPI.imageW500(
                                                profile_path
                                            )}
                                            alt={name}
                                            className='w-full h-full- object-cover rounded-lg'
                                        />
                                        <span className='text-lg font-medium opacity-60'>
                                            {name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </>
                );
        case 'videos':
            const { results } = data;
            if (results)
                return (
                    <>
                        {results.slice(0, 1).map(({ id, key }) => (
                            <div
                                key={id}
                                className='w-full max-w-[968px] mx-auto aspect-video'>
                                <iframe
                                    className='w-full h-full'
                                    width='560'
                                    height='315'
                                    src={`https://www.youtube.com/embed/${key}`}
                                    title='YouTube video player'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen></iframe>
                            </div>
                        ))}
                    </>
                );
        default:
            return null;
    }
};

MovieDetailsMeta.propTypes = {
    endpoint: PropTypes.string.isRequired,
};

const MovieDetailsSimilar = () => {
    const { movieId } = useParams();
    return (
        <MovieList
            endpoint={`${movieId}/similar`}
            title='Similar Movies'></MovieList>
    );
};

export default MovieDetailsPage;

// const MovieDetailsCast = () => {
//     const { movieId } = useParams();
//     const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, 'credits'), fetcher);
//     if (!data) return null;
//     const { cast } = data;
//     if (cast)
//         return (
//             <>
//                 <h3 className='font-bold text-4xl text-center mb-7'>Casts</h3>
//                 <div className='grid grid-cols-4 gap-10 w-full max-w-[968px] mx-auto'>
//                     {cast.slice(0, 4).map(({ id, profile_path, name }) => (
//                         <div
//                             className='w-full h-full flex flex-col items-center gap-2'
//                             key={id}>
//                             <img
//                                 src={tmdbAPI.imageW500(profile_path)}
//                                 alt={name}
//                                 className='w-full h-full- object-cover rounded-lg'
//                             />
//                             <span className='text-lg font-medium opacity-60'>
//                                 {name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </>
//         );
// };

// const MovieDetailsVideo = () => {
//     const { movieId } = useParams();
//     const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, 'videos'), fetcher);
//     if (!data) return null;
//     const { results } = data;
//     if (results)
//         return (
//             <>
//                 {results.slice(0, 1).map(({ id, key }) => (
//                     <div
//                         key={id}
//                         className='w-full max-w-[968px] mx-auto aspect-video'>
//                         <iframe
//                             className='w-full h-full'
//                             width='560'
//                             height='315'
//                             src={`https://www.youtube.com/embed/${key}`}
//                             title='YouTube video player'
//                             frameBorder='0'
//                             allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//                             allowFullScreen></iframe>
//                     </div>
//                 ))}
//             </>
//         );
// };
