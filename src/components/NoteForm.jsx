import React from 'react';

const NoteForm = () => {
  return(
    <form>
      <div className="input-control">
        <input type="text" name="title" placeholder="Title.."/>
      </div>
      <div className="input-control">
        <textarea name="body" cols="30" rows="10" placeholder="Note.."></textarea>
      </div>
      <div className="submit">
        <input type="submit" value="Submit"/>
      </div>
    </form>
  );
}

export default NoteForm;