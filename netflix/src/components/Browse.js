import React, { useEffect, useRef } from 'react';
import Header from './Header';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
    const user = useSelector(store => store.app.user);
    const toggle = useSelector(store => store.movie.toggle);
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);

    // my custom hooks
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header />
            <div className="scroll-buttons">
                <button onClick={scrollLeft} className="scroll-button left-button">⬅️</button>
                <button onClick={scrollRight} className="scroll-button right-button">➡️</button>
            </div>
            <div ref={scrollContainerRef} className="scroll-container">
                {toggle ? <SearchMovie /> : (
                    <>
                        <MainContainer />
                        <MovieContainer />
                    </>
                )}
            </div>
        </div>
    );
};

export default Browse;
