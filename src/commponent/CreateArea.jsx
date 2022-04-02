import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
const [zoom,setZoom] =useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function notesend(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }


  function handelChange(event) {
    const { name, value } = event.target;

    setNote((prvNote) => {
      return {
        ...prvNote,
        [name]: value
      }
    })
}

function handelZoom(event){
setZoom(true)
}




  return (
    <div>
      <form className="create-note">
       {zoom ? <input 
        name="title" 
      
          onChange={handelChange}
           value={note.title}
            placeholder="Title" />:null}
        <textarea     onClick={handelZoom} name="content" onChange={handelChange} value={note.content} placeholder="Take a note..." rows={zoom?3:1} />

        <Zoom in={zoom}> 
        <Fab onClick={notesend} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        </Zoom>





      </form>
    </div>
  );
}

export default CreateArea;
