import "./AllNote.css"
import NoteCard from "./NoteCard"

const AllNotes = ({handleDelete,notes}) => {
    return(
        <div className="grid-container">  
          {/* {notes.map((note) => {
            <NoteCard 
            key = {note.id}
            id = {note.id}
            title = {note.title}
            text = {note.text}
            date = {note.date}
            handleDelete = {handleDelete}
            />
          })}    */}

           {notes.map((note)=>
               <NoteCard key = {note.id} 
               id={note.id}
               title = {note.title} 
               text={note.text} 
               date={note.date}
               handleDelete={handleDelete}
               />
           )} 
            
        </div>

    )
}

export default AllNotes