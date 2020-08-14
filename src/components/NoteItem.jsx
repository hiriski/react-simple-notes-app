import React from 'react';
import { useHistory } from 'react-router-dom';

const NoteItem = ({note}) => {
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
      </div>
    </div>
  );
}

export default NoteItem;