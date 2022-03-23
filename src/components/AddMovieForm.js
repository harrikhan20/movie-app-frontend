import React, {useState} from 'react';



 function AddMovieForm({addMovie}) {

    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        plot: '',
        actorList: '',
        movieLength: ''


    })
    
    function handleSubmit(event) {
        event.preventDefault()
        addMovie(formData)
        if([movies.title, movies.genre, movies.plot, movies.actorList, movies.movieLength])

    }
    

    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
            onChange={event => setFormData({...formData, title: event.target.value})}
            value={formData.title}
            placeholder='Movie Name'
            />
                <br></br>
            <input type="text"
            onChange={event => setFormData({...formData, genre: event.target.value})}
            value={formData.genre}
            placeholder="Movie Genre"
            />
                <br></br>
            <input type="text"
            onChange={event => setFormData({...formData, plot: event.target.value})}
            value={formData.plot}
            placeholder='Movie Plot'
            />
                <br></br>
            <input type="actorList"
            onChange={event => setFormData({...formData, actorList: event.target.value})}
            value={formData.actorList}
            placeholder='Actor List'
            />
                <br></br>
            <input type="text"
            onChange={event => setFormData({...formData, movieLength: event.target.value})}
            value={formData.movieLength}
            placeholder='Movie Length'
            />

                <br></br>

            <input type="submit" value="Add The Movie To The List" />

            

        </form>
    )
}

export default AddMovieForm;
