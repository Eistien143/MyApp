const apiKey: string = '6d6d19127a679e4dc3dd4a0b04b784b7';
export const nowPlayingMovies:string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upComingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export const searchMovies = (keyword: string)=>{
        return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
};

export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
};

export const movieCastDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
};
export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };

