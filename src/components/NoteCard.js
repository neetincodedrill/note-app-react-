import "./NoteCard.css"

const NoteCard = ({id,text,date,handleDelete,title}) => { 
  return(  
        <div className="grid-item">
        <div className="note-card">
        <h2> {title} </h2>
        <div className="content">
            <span>{date}</span>
            <p>{text}</p>
        </div>
        <button className="button-9" onClick = {() => handleDelete(id)}>Delete</button>
      </div>
    </div>
   
  )
}

export default NoteCard;