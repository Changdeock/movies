let initialState = {
    popularMovies : {},
    topRatedMovices : {},
    upcommingMovices : {},
    loading : true,
    genreList : {}
}

function movieReducer(state = initialState, action)
{
    let {type, payload} = action;
    switch(type)
    {
        case "GET_MOVIES_SUCCESS":
            return {
                ...state, 
                popularMovies : payload.popularMovices,
                topRatedMovices : payload.topRateMovies,
                upcommingMovices : payload.upCommingMovices,
                genreList : payload.genreList,
                loading :false
            };
        case "GET_MOVIES_REQUEST":
            return {
                ...state, 
               loading : true
            }; 
        case "GET_MOVIES_FAILURE":
            return {
                ...state, 
               loading : false
            }    

            default:
                return {...state};        
    }
    
}
export default movieReducer;