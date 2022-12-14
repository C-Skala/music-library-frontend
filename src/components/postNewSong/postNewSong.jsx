import axios from 'axios';
import React, { useState } from 'react';



const PostNewSong = (props) => {
   
   
   async function AddNewSong(newSong){
    const response = await axios.post('http://127.0.0.1:8000/music/', newSong)
    console.log(response.data)
    props.getAllSongs()
   }
   
   
    const [title, setTitle] = useState('');
   const [artist, setArtist] = useState('');
   const [album, setAlbum] = useState('');
   const [genre, setGenre] = useState('');
   const [releaseDate, setReleaseDate] = useState('');
   
   function handlesubmit(event){
    event.preventDefault();
    let newSong = {
        title: title,
        artist: artist,
        album: album,
        genre: genre,
        release_date: releaseDate,
    };
    AddNewSong(newSong)
   }


   
    return ( 
        <div>
            <form onSubmit = {handlesubmit}>
                <label>Title</label>
                <input value = {title} onChange = {(event) => setTitle(event.target.value)} />
                <label>Artist</label>
                <input value = {artist} onChange = {(event) => setArtist(event.target.value)} />
                <label>Album</label>
                <input value = {album} onChange = {(event) => setAlbum(event.target.value)} />
                <label>Genre</label>
                <input value = {genre} onChange = {(event) => setGenre(event.target.value)} />
                <label>Release Date</label>
                <input type = 'date' value = {releaseDate} onChange = {(event) => setReleaseDate(event.target.value)} />
                <button type = 'submit'>submit</button>
            </form>
        </div>
     );
}
 
export default PostNewSong;