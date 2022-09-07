import React from 'react';
import './navBar.css';
import SearchBar from '../searchBar/SearchBar';

const NavBar = (props) => {
    return ( 
        <div className = 'head'>
            <div className = 'mainWord'>
                Music World!
            </div>
            <div className = 'searchBar'>
                <SearchBar songs ={props.songs} setSongs ={props.setSongs}/>
            </div>
            </div>
       
     );
}
 
export default NavBar;