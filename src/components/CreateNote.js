import React,{useState} from 'react'
import "./createNote.css"

const CreateNote = ({handleAddNote}) => {
    
    const [noteHeading,setNoteHeading] = useState('')
    const [noteText,setNoteText] = useState('');
   
    const charLimit = 300;

    const handleTextChange =(event)=>{
        if(charLimit - event.target.value.length>=0){
            setNoteText(event.target.value)
        }
    }

    const handleheadingChange = (event) => {
        setNoteHeading(event.target.value)
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteHeading,noteText,);
            setNoteText('');
            setNoteHeading('')
        }
    }

    return(
        <div className="newNote">         
            <form>
            <h1>Add New Note</h1>
                <input type="text" placeholder="Note Title" value={noteHeading} onChange = {handleheadingChange} required/>
                <textarea  cols="10" rows="8" placeholder="Type to add a new note..."
                onChange={handleTextChange} value={noteText}
                ></textarea>
                <small>{charLimit - noteText.length} Words Remaining</small>
                <button className="button"  onClick={handleSaveClick}  >Create</button>
            </form>
        </div>
    )
}

export default CreateNote;