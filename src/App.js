import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is a note",
      date: "01/01/2021",
    },
    {
      id: nanoid(),
      text: "this is a note",
      date: "01/01/2021",
    },
    {
      id: nanoid(),
      text: "this is anotha one",
      date: "01/01/2021",
    },
  ]);

  const [searchText, setSearchText] = useState('')

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
