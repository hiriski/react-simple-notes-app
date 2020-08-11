import React, { createContext, useState } from 'react';

export const noteContext = createContext();

const defaultNote = [
  {
    id: 1,
    title: 'My Journey with React',
    body: 'Perjalanan saya selam belajar react... bla bla bla'
  },
  {
    id: 2,
    title: 'Belajar react hook',
    body: 'Belajar react hook. Membuat aplikasi note sederhana...'
  },
];

const NoteContextProvider = ({children}) => {
  const [notes, setNotes] = useState(defaultNote);
  return(
    <noteContext.Provider value={{notes, setNotes}}>
      {children}
    </noteContext.Provider>
  );
}

export default NoteContextProvider;