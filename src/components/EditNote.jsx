import React, { Fragment } from 'react';   
import NoteForm from './NoteForm';

const EditNote = () => {
  return(
    <Fragment>
      <div className="header">
        <div className="container">
          <h1>Edit note</h1>
        </div>
      </div>
      <div id="edit-note">
        <div className="container">
          <NoteForm/>
        </div>
      </div>
    </Fragment>
  );
}

export default EditNote;