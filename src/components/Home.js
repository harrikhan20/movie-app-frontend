import React from 'react';
import MovieSummary from './MoviePlot';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MoviePlot from './MoviePlot';


 function Home() {

    const [movies, setMovies] = useState([]);
    
    


    
    
    useEffect(() => {
      fetch('http://localhost:9393/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      
    }, [])

      
    

const mappedMovies = movies.map(movies =>  <MoviePlot key={movies.id} movies={movies} plot={movies.plot} />)






    return (
        
        <div>

            

        <div id="">
            <h1>Please Choose The Movie You Want To Order</h1>

           {mappedMovies}

            

            <br/>


            <Link to='/movies/new'>Add A Movie For Others To See</Link>

            
        </div>

        

        </div>
        
    )
}

export default Home;