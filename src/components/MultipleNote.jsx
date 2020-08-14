import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { noteContext } from '../context/NoteContext';
import NoteItem from './NoteItem';

const MultipleNote = () => {
  const { notes } = useContext(noteContext);
  return(
    <Fragment>
      <div className="header">
        <div className="container">
          <h1>My notes</h1>
          <Link to="/create">Add new note</Link>
        </div>
      </div>
      <div className="multiple-note">
        <div className="container">
          { notes.map((item, index) => (
            <NoteItem note={item} key={ index } />
          )) }
        </div>
      </div>
    </Fragment>
  );
}

export default MultipleNote;