import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';





function MoviePlot({movies}) {
    const [show, visible] = useState(false)
    const [reviews, setReviews] = useState()
    


   function deleteMovie(id) {
        fetch(`http://localhost:9393/movies/${id}`, {
            method: 'DELETE'
        }). then((result) => {
            result.json().then((resp) =>{
                console.warn(resp)
                
            })
        })
        window.location.reload();
      
     }


     useEffect(() => {
        fetch('http://localhost:9393/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
      }, [])
    

    return (
        <div id="">
            <h2>{movies.title}</h2>
            {
            show?<h5>
                <br></br>
                 <p>Genre: {movies.genre}</p>
                 <br></br>
                <p>Plot: {movies.plot}</p>
                 <br></br>
                 <p>Actor List: {movies.actor_list}</p>
                 <br></br>
                <p>Movie Length: {movies.movie_length} min</p> 
                <br/>
                
             </h5>:false
            }

            

           <button onClick={()=> (reviews)} >Movie Reviews</button>
            <button onClick={()=> visible(true)}>View Specs</button>
            <button onClick={()=> visible(false)}>Hide Specs</button>
            <button onClick={() => deleteMovie(movies.id)}>Delete Movie</button>
            <Link to="/movies/rent"> Download This Movie </Link>
            
           
            
        </div>
    )
}



export default MoviePlot; 