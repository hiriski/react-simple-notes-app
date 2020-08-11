import React, { Fragment } from 'react';
import NoteForm from './NoteForm';

const AddNote = () => {
  return(
    <Fragment>
      <div className="header">
        <div className="container">
          <h1>Add new note</h1>
        </div>
      </div>
      <div id="add-note">
        <div className="container">
          <NoteForm/>
        </div>
      </div>
    </Fragment>
  );
}

export default AddNote;