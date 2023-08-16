import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content:""
    });

    const [isExpanded, setExpanded] = useState(false);

    const handleChange= async(event)=>{
        const { name, value } = event.target;
        
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    const onNoteSubmit = async(event)=>{

        props.onAdd(note);
      
        event.preventDefault();

        setExpanded(false);

        setNote({
            title: "",
            content: ""
        });
        
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            
            props.onAdd(note);

            setNote({
            title:"",
            content:""
        });
       
          }
    };

    const handleClick = ()=>{
        setExpanded(true);
    }


  return (
    <div>
      <form className="create-note">
      {isExpanded && <input
        onChange={handleChange} 
        name="title" placeholder="Title" 
        value={note.title} 
        onKeyDown={handleKeyDown}
        />}
        
        <textarea 
        onChange={handleChange} 
        name="content" placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1} 
        value={note.content} 
         onKeyDown={handleKeyDown}
         onClick={handleClick}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={onNoteSubmit}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
