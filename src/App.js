import React,{useState,useEffect} from 'react';
import './App.css';
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import AllNote from "./components/AllNote"
import CreateNote from "./components/CreateNote"

function App() {
  
  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      title:'First Note',
      text:"This is my first note",
      date:"03/11/2021"
    },
    {
      id:nanoid(),
      title:'Second Note',
      text:"This is my second note",
      date:"03/11/2021"
    },
    {
      id:nanoid(),
      title:'Third Note',
      text:"This is third note",
      date:"03/11/2021"
    }
  ])

  const [searchNote,setSearchNote] = useState('');

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(saveNotes){
      setNotes(saveNotes)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  const addNote = (title,text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      title: title,
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id!== id);
    setNotes(newNotes)
  }

  return (
    <div className="app">
      <h1>Short Notes App</h1>   
        <div className="main-section">

            <div className="left">     
              <CreateNote handleAddNote = {addNote}/>
            </div>

            <div className="right">
            <Search handleSearch = {setSearchNote}/> 
              <AllNote notes={notes.filter((note) => note.title.toLowerCase().includes(searchNote))}
               handleDelete = {deleteNote}
              />
            </div>

        </div>
    </div>
   
  );
}

export default App;
