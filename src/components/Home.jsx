import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Home() {
    const [notes, setNotes] = useState([]);

 const addNote = async({title, content}) => {
       if (title.length > 0 && content.length) {
           setNotes((prevNotes) => [{ title, content }, ...prevNotes]);
       } 
    }
  
    const deleteNote = async(id) => {
        setNotes((prevNotes)=>{
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });

        });
        
    }
    
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
     {notes && notes.map((noteItem, index)=>{
          return (
              <Note 
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              />
          )
      })}
      <Footer />
    </div>
  );
}

export default Home;
