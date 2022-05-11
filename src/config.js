export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = 'f698839c50a9befc6d0f2ed52ffb7860';
export const tmdbEndpoint = 'https://api.themoviedb.org/3/movie';
export const tmdbEndpointSearch = 'https://api.themoviedb.org/3/search/movie';
export const tmdbAPI = {
    getMovieList: (endpoint, page = 1) =>
        `${tmdbEndpoint}/${endpoint}?api_key=${apiKey}&page=${page}`,
    getMovieSearch: (query, page = 1) =>
        `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, endpoint) =>
        `${tmdbEndpoint}/${movieId}/${endpoint}?api_key=${apiKey}`,
    imageOriginal: (path) => `https://image.tmdb.org/t/p/original${path}`,
    imageW500: (path) => `https://image.tmdb.org/t/p/w500${path}`,
};
