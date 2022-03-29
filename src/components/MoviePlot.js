import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';





function MoviePlot({movies}) {
    const [show, visible] = useState(false)
    const [reviewsView, setReviewsView] = useState(false)
    const history = useHistory()
    
    
    


   function deleteMovie(id) {
        fetch(`http://localhost:9393/movies/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
         history.push("/")   
            })
     }

 
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

           <button  onClick={()=> setReviewsView(!reviewsView)} >Movie Reviews</button>
           <Link to="/reviews/new">Create A New Review</Link>
            <button onClick={()=> visible(true)}>View Specs</button>
            <button onClick={()=> visible(false)}>Hide Specs</button>
            <button onClick={() => deleteMovie(movies.id)}>Delete Movie</button>
            {reviewsView ? movies.reviews.map(reviews => <p><span>{reviews.text}</span><br/><span>Rating: {reviews.rating}</span></p>): null}
            <Link to="/movies/rent"> Download This Movie </Link>


            
        </div>
    )
}



export default MoviePlot; 