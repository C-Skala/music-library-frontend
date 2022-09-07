import MusicTable from "./components/musicTable/musicTable";
import NavBar from "./components/navBar/NavBar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostNewSong from "./components/postNewSong/postNewSong";
import './App.css';
import './components/navBar/navBar.css'
import danceGig from './components/Images/starlord-dance.gif';

function App() {
  const[songs, setSongs] = useState([]);

  useEffect(() => {
      getAllSongs(); 
  }, []);

  async function getAllSongs(){
      const response = await axios.get('http://127.0.0.1:8000/music/')
      setSongs(response.data)
      console.log(response.data)
  }
  
  
  
  return (
    <div className="whole">
      <div>
        <div>
          <div>
           <NavBar songs = {songs} setSongs = {setSongs}/> 
          </div>
          <div className = 'table'>
            <MusicTable parentSongs ={songs} getAllSongs = {getAllSongs}/>
          </div>
          <div className = 'postNewSongArea'>
            <PostNewSong getAllSongs = {getAllSongs}/>
          </div>
          <div className="imageSetup">
          <img src={danceGig} altText = 'starlord dancing' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
