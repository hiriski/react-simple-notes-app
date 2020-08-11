import React, { useContext, useState,  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { noteContext } from '../context/NoteContext';

const SingleNote = () => {
  const { slug } = useParams();
  const { notes } = useContext(noteContext);
  const [note, setNote] = useState({});

  useEffect(() => {
    setNote(getNoteById(slug));
  }, []);

  const getNoteById = (slug) => {
    return notes.find((note) => note.id === parseInt(slug));
  }

  return(
    <div className="single">
      <div className="container">
        <div className="title">
          <h1>{ note.title }</h1>
        </div>
        <div className="body">
          { note.body }
        </div>
      </div>
    </div>
  )
}

export default SingleNote;