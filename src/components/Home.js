import React from 'react';
import MovieSummary from './MoviePlot';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MoviePlot from './MoviePlot';


 function Home() {

    const [movies, setMovies] = useState([]);
    const[reviews, setReviews] = useState([]);
    


    
    
    useEffect(() => {
      fetch('http://localhost:9393/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      
    }, [])

    useEffect(() => {
        fetch('http://localhost:9393/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
        
      }, [])

    
    

const mappedMovies = movies.map(movies =>  <MoviePlot key={movies.id} movies={movies} plot={movies.plot} rentLink="Thank You For your" />)
const mappedReviews = reviews.map(reviews =>  <MoviePlot key={reviews.id} reviews={reviews.text} rating={reviews.rating} />)





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