import React from 'react';
import Select from 'react-select';


const songSearch = [
  { label: 'Title', value: 'title' },
  { label: 'Artist', value: 'artist' },
  { label: 'Album', value: 'album' },
  { label: 'Genre', value: 'genre' },
  { label: 'Release date', value: 'release_date' },
];

function App() {
  return (
    <div className="App">
      <Select
        options={songSearch}
      />
    </div>
  );
}

<Select
  options={songSearch}
  onChange={opt => console.log(opt.label, opt.value)}
/>

export default App;
