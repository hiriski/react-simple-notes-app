import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { noteContext } from '../context/NoteContext';
import { useHistory, useParams } from 'react-router-dom';

const NoteForm = () => {
  let history = useHistory();
  let { slug } = useParams();
  const { addNote, notes, editNote } = useContext(noteContext);

  // self state
  let initialState = {title : "", body: ""};
  const [note, setNote] = useState(initialState);

  const handleChange = (e) => {
    if(slug) {
      setNote({ ...note, id: slug, [e.target.name]: e.target.value });
    } else {
      setNote({ ...note, id: uuidv4(), [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    if(slug) {
      editNote(note); 
    } else {
      addNote(note);
      setNote(initialState); // reset
    }
    e.preventDefault();
    history.push('/');
  }

  useEffect(() => {
    if(slug) {
      let findItem = notes.find( note => note.id === slug );
      setNote({
        id: findItem.id,
        title: findItem.title,
        body: findItem.body,
      });
    }
  }, []);

  return(
    <form>
      <div className="input-control">
        <input value={ note.title } onChange={handleChange} type="text" name="title" placeholder="Title.."/>
      </div>
      <div className="input-control">
        <textarea value={ note.body } onChange={handleChange} name="body" cols="30" rows="10" placeholder="Note.."></textarea>
      </div>
      <div className="submit">
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </div>
    </form>
  );
}

export default NoteForm;