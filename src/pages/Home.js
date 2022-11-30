import React from 'react';
import { useEffect } from 'react';
import { MovieAction } from '../redux/action/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSilde from '../components/MovieSilde';
import ClipLoader from "react-spinners/ClipLoader";


const Home = () =>{
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovices, upcommingMovices, loading} = useSelector(state=>state.movie);
    useEffect(()=>{
        dispatch(MovieAction.getMovies());

    },[]);

    // loading is true > spinners show
    // loading is false > spinners disabled
    // true : 데이터 도착 전
    // false : 데이터 도착 후 / 에러 발생  
    if(loading){
        return <ClipLoader
        color="red"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    }    
    return (
    <div className="home-body">
        <Banner movie={popularMovies.results[0]}></Banner>
        <h2>popular Movie</h2>
        <MovieSilde movies={popularMovies}/>
        <h2>Top rated Movie</h2>
        <MovieSilde movies={topRatedMovices}/>
        <h2>Upcoming Movie</h2>
        <MovieSilde movies={upcommingMovices}/>
    </div>
    )
}

export default Home;

//https://www.npmjs.com/package/react-multi-carousel