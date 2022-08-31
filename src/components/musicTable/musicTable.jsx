import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicTable = (props) => {
    
    const[songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs(); 
    }, []);

    async function getAllSongs(){
        const response = await axios.get('http://127.0.0.1:8000/music')
        setSongs(response.data)
        console.log(response.data)
    }
    
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                </tr>
            </thead>
            <tbody>
                <td>insert Title here</td>
                <td>insert Artist here</td>
                <td>insert Album here</td>
                <td>insert Genre here</td>
                <td>insert Release Date here</td>
                <td>insert Likes here</td>
                <button>Like</button>
                <button>Delete</button>
                <button>Edit</button>
            </tbody>
        </table>
     );
}
 
export default MusicTable;