import React from 'react';
import MovieSummary from './MoviePlot';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import MoviePlot from './MoviePlot';


 function Home({movies}) {


const mappedMovies = movies.map(movies =>  <MoviePlot key={movies.id} movies={movies} plot={movies.plot} rentLink="Thank You For your" />)





    return (
        <div id="">
            <h1>Please Choose The Movie You Want To Order</h1>

            {mappedMovies}

            <br/>

            <Link to='/movies/new'>Add A Movie For Others To See</Link>

            
        </div>
    )
}

export default Home;