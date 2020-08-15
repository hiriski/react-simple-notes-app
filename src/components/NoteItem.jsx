import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { noteContext } from '../context/NoteContext';

const NoteItem = ({note}) => {
  const { removeNote } = useContext(noteContext);
  let history = useHistory();

  const goSingle = (slug) => {
    history.push(`note/${ slug }`);
  }

  return(
    <div className="note">
      <div className="card">
        <div className="card-content">
          <h2 onClick={ () => goSingle(note.id) }>{ note.title }</h2>
          <div className="body">{ note.body }</div>
        </div>
        <div className="card-actions">
          <Link className="edit" to={`/edit/${note.id}`}>Edit</Link>
          <button className="delete" onClick={ () => removeNote(note.id) }>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;