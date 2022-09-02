import axios from "axios";



const DeleteButton = (props) => {
    
    async function deleteSong(){
        const response = await axios.delete(`http://127.0.0.1:8000/music/${props.id}/`)
        console.log(response)
        props.getAllSongs()
    }
    
    
    
    return ( 
        <button onClick = {deleteSong}>DELETE SONG</button>
     );
}
 
export default DeleteButton;