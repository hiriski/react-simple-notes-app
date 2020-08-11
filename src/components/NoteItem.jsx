import React from 'react';
import { useHistory } from 'react-router-dom';


const NoteItem = ({item}) => {
  let history = useHistory();

  const goSingle = (slug) => {
    history.push(`note/${ slug }`);
  }

  return(
    <div className="item">
      <div className="card">
        <div className="card-content">
          <h2 onClick={ () => goSingle(item.id) }>{ item.title }</h2>
          <div className="body">{ item.body }</div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;