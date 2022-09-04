import React from 'react';
import DeleteButton from '../DeleteSong/DeleteSong';
import './musicTable.css';

const MusicTable = (props) => {
    

    
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
                
                {props.parentSongs.map((songs)=> {
                    return(
                        <tr key = {songs.id}>
                        <td>{songs.title}</td>
                        <td>{songs.artist}</td>
                        <td>{songs.album}</td>
                        <td>{songs.genre}</td>
                        <td>{songs.release_date}</td>
                        <td>{songs.likes}</td>
                        <td><DeleteButton id = {songs.id} getAllSongs = {props.getAllSongs}/></td>
                        
                </tr>
                    )
                })}
                
                
            </tbody>
        </table>
     );
}
 
export default MusicTable;