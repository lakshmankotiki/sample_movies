import React from 'react';
import ReactDOM from 'react-dom';
import * as fakeMoviAPI from '../services/fakeMovieService'

class Movie extends React.Component {
    state = {
        movies: fakeMoviAPI.getMovies()
    };

    handleClick = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    }

    render() {
        const { length: count } = this.state.movies;
        // conditional rendering and showing messages
        if(count === 0)
            return <p>There are no movies in the database</p>
        return(
            <main className="container">
                <h1 className="text-center font-italic text-success"><u>Movies Application</u></h1>
                <p>{`There are ${count} movies in the database`}</p>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* mapping through array of movies */}
                        {this.state.movies.map(movie => {
                            return(
                                // giving unique key while doing map
                                <tr key={movie.title}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    {/* button and onclick handler */}
                                    <td><button type="button" className="btn btn-danger" onClick={() => this.handleClick(movie)}>Delete</button></td>
                                </tr>
                            )
                        })};
                    </tbody>
                </table>
            </main>
        );
    }
}

export default Movie;