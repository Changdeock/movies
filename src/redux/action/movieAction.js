import api from '../api';

/* */
const API_KEY = "cab1ea5e4ead34fbecd66aab05165294";
function getMovies(){    
    return async (dispatch)=>{
        try
        {
            dispatch(
                {type : "GET_MOVIES_REQUEST"}
            )
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRateMovieApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upCommingMovieApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);

            let [popularMovices, topRateMovies, upCommingMovices, genreList] = await Promise.all([popularMovieApi, topRateMovieApi, upCommingMovieApi,genreApi]);
            dispatch({
                type : "GET_MOVIES_SUCCESS",
                payload : {
                    popularMovices:popularMovices.data,
                    topRateMovies:topRateMovies.data,
                    upCommingMovices:upCommingMovices.data,
                    genreList:genreList.data.genres

                }
            });
        }
        catch(error)
        {
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
        
     
    }

    
}


export const MovieAction = {
    getMovies,
}
