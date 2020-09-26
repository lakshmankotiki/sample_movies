import React from 'react';
import ReactDOM from 'react-dom';
import * as fakeMoviAPI from '../services/fakeMovieService'

class Movie extends React.Component {
    state = {
        movies: fakeMoviAPI.getMovies()
    };

    render() {
        return(
            <h1>Hello Lakshman</h1>
        );
    }
}

export default Movie;