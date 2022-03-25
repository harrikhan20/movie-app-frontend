import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import {useHistory} from "react-router-dom"
import MoviePlot from './MoviePlot';
import {useEffect} from 'react';

function AddReviewForm() {

    const [review, setReview] = useState({
        text: '',
        rating: '',
        movieId: ''


    })
    const [movies, setMovies] = useState()

    const history = useHistory()



    useEffect(() => {
        fetch('http://localhost:9393/movies')
        .then(res => res.json())
        .then(data => setMovies(data))
        
      }, [])
      
    
    const handleSubmit = e =>  {
        e.preventDefault()
        if([review.text, review.rating, review.movieId].some(val => val.trim() === "")) {
            alert("Please Fill In All The Information")
        }
        

 const newReview = {
       text: review.text,
       rating: review.rating,
       movie_id: review.movieId,
        
      }
    



fetch('http://127.0.0.1:9393/reviews', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview)
})
.then(() => history.push("/home") )



    }

    const handleChange = (e) => {
        setReview({
          ...review,
           [e.target.name]: e.target.value 

        })
        
    }


   

    return (
        <form onSubmit={handleSubmit}>
            

           <label htmlFor="review">Review</label>
           <input onChange={handleChange} type="text" name="text" value={review.text} required></input>
                <br/>

           <label htmlFor="rating">Rating</label>
           <input onChange={handleChange} type="text" name="rating" value={review.rating} required></input>

                <br/>

           <label htmlFor="movieId">Movie ID</label>
           <input onChange={handleChange} type="integer" name="movieId" value={review.movieId} required></input>
                <br/>

    

           <input type="submit" value="Create New Movie"></input>

           

            

        </form>
    )
}


export default AddReviewForm;