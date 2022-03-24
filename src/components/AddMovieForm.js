import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import {useHistory} from "react-router-dom"


 function AddMovieForm({movies}) {

    const [movie, setMovie] = useState({
        title: '',
        genre: '',
        plot: '',
        actorList: '',
        movieLength: ''


    })

    const history = useHistory()



    
      
    
    const handleSubmit = e =>  {
        e.preventDefault()
        if([movie.title, movie.genre, movie.plot, movie.actorList, movie.movieLength].some(val => val.trim() === "")) {
            alert("Please Fill In All The Information")
        }
        

 const newMovie = {
       title: movie.title,
       genre: movie.genre,
       plot: movie.plot,
        actor_list: movie.actorList,
        movie_length: movie.movieLength
      }
    



fetch('http://127.0.0.1:9393/movies', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie)
})
.then(() => history.push("/home") )



    }

    const handleChange = (e) => {
        setMovie({
          ...movie,
           [e.target.name]: e.target.value 

        })
        
    }


   

    return (
        <form onSubmit={handleSubmit}>

           <label htmlFor="title">Title</label>
           <input onChange={handleChange} type="text" name="title" value={movie.title} required></input>
                <br/>

           <label htmlFor="genre">Genre</label>
           <input onChange={handleChange} type="text" name="genre" value={movie.genre} required></input>

                <br/>

           <label htmlFor="plot">Plot</label>
           <input onChange={handleChange} type="text" name="plot" value={movie.plot} required></input>
                <br/>

           <label htmlFor="actorList">Actor List</label>
           <input onChange={handleChange} type="text" name="actorList" value={movie.actorList} required></input>

                <br/>

           <label htmlFor="movieLength">Movie Length /min</label>
           <input onChange={handleChange} type="text" name="movieLength" value={movie.movieLength} required></input>
            <br/>

           <input type="submit" value="Create New Movie"></input>

           

            

        </form>
    )
}

export default AddMovieForm;
