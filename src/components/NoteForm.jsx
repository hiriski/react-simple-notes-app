import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { noteContext } from '../context/NoteContext';
import { useHistory } from 'react-router-dom';

const NoteForm = () => {
  let history = useHistory();
  const { addNote, notes } = useContext(noteContext);

  // self state
  const [newNote, setNewNote] = useState({
    title : "",
    body  : ""
  });

  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      id: uuidv4(),
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    addNote(newNote);

    // reset
    setNewNote({
      title : "",
      body  : ""
    });
    e.preventDefault();
    history.push('/');
  }

  return(
    <form>
      <div className="input-control">
        <input value={newNote.title} onChange={handleChange} type="text" name="title" placeholder="Title.."/>
      </div>
      <div className="input-control">
        <textarea value={newNote.body} onChange={handleChange} name="body" cols="30" rows="10" placeholder="Note.."></textarea>
      </div>
      <div className="submit">
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </div>
    </form>
  );
}

export default NoteForm;