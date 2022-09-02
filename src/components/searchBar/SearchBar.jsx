import React, { useState } from 'react';

const SearchBar = (props) => {
  
const [searchTerm, setSearchTerm] = useState('')

function songSearch(event){
  event.preventDefault();
  let response = props.songs.filter((song) =>{
    if (song.title.includes(searchTerm) ||
        song.artist.includes(searchTerm) ||
        song.album.includes(searchTerm) ||
        song.genre.includes(searchTerm) ||
        song.release_date.includes(searchTerm)){
          return true;
        }
        else {
          return false;
        }
      });
      props.setSongs(response)
  }

  
  return ( 
    <form onSubmit = {songSearch}>
      <input placeholder = 'search' type = 'text' value = {searchTerm} onChange = {(event) => setSearchTerm(event.target.value)}/>
      <button type = 'submit'>search</button>
    </form>
   );
}
 
export default SearchBar;






// import Select from 'react-select';


// const songSearch = [
//   { label: 'Title', value: 'title' },
//   { label: 'Artist', value: 'artist' },
//   { label: 'Album', value: 'album' },
//   { label: 'Genre', value: 'genre' },
//   { label: 'Release date', value: 'release_date' },
// ];

// function App() {
//   return (
//     <div className="App">
//       <Select
//         options={songSearch}
//       />
//     </div>
//   );
// }

// <Select
//   options={songSearch}
//   onChange={opt => console.log(opt.label, opt.value)}
// />

// export default App;
