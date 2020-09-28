import React from 'react';
import ReactDOM from 'react-dom';
import * as fakeMoviAPI from '../services/fakeMovieService'

class Movie extends React.Component {
    state = {
        movies: fakeMoviAPI.getMovies()
    };

    handleClick = (id) => {
        let deletedMovie = fakeMoviAPI.deleteMovie(id);
        window.alert("You're deleting " +deletedMovie.title);
        // telling the react to we've updated state
        this.setState({movies: fakeMoviAPI.getMovies()});
    }

    render() {
        return(
            <main className="container">
                <h1 className="text-center font-italic text-success"><u>Movies Application</u></h1>
                {/* conditional rendering and displaying movies count based on condition */}
                <p>{this.state.movies.length === 0 ? `There are no movies in the database` : `Showing ${this.state.movies.length} in the database`}</p>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* mapping through array of movies */}
                        {this.state.movies.map(movie => {
                            return(
                                // giving unique key while doing map
                                <tr key={ movie.title }>
                                    <td>{ movie.title }</td>
                                    <td>{ movie.genre.name }</td>
                                    <td>{ movie.numberInStock }</td>
                                    <td>{ movie.dailyRentalRate }</td>
                                    {/* button and onclick handler */}
                                    <td><button type="button" className="btn btn-danger mt-2" onClick={this.handleClick.bind(this, movie._id)}>Delete</button></td>
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