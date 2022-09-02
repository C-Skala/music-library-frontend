import MusicTable from "./components/musicTable/musicTable";
import NavBar from "./components/navBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostNewSong from "./components/postNewSong/postNewSong";

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
    <div>
      <NavBar/>
      <SearchBar/>
      <MusicTable parentSongs ={songs}/>
      <PostNewSong getAllSongs = {getAllSongs}/>
    </div>
  );
}

export default App;
