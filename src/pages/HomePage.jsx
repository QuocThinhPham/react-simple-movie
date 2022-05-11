import React from 'react';
import MovieList from '../components/movie/MovieList';

const sectionMovies = [
    { id: 1, endpoint: 'now_playing', title: 'Now Playing' },
    { id: 2, endpoint: 'popular', title: 'Trending' },
    { id: 3, endpoint: 'top_rated', title: 'Top Rated' },
];

const HomePage = () => {
    return (
        <>
            {sectionMovies &&
                sectionMovies.map(({ id, endpoint, title }) => (
                    <MovieList
                        key={id}
                        endpoint={endpoint}
                        title={title}></MovieList>
                ))}
        </>
    );
};

export default HomePage;
