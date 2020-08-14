import React, { createContext, useState } from 'react';

export const noteContext = createContext();

const defaultNotes = [
  {
    id: 1,
    title: 'My Journey with React',
    body: 'Perjalananku selam belajar react... bla bla bla...'
  },
  {
    id: 2,
    title: 'Belajar react hooks',
    body: 'Belajar hook sambil buat aplikasi catatan sederhana,  pengennya sih mirip kayak google keep 😀'
  },
  {
    id: 3,
    title: 'Daftar lagu ini mungkin bisa jadi temanku saat ngoding 🎵☕',
    body: '1. Lướt Qua Nhau Một Đời, 2. Đại Điền Hậu Sinh Tử, 3. Đưa nhau đi trốn, 4. Mang Chủng - Âm Khuyết Thi Thính, 5. Bu Jin Jin Shi Xi Huan, 6. 我願意平凡的陪在你身旁.'
  },
  {
    id: 4,
    title: 'Masak aer biar mateng.',
    body: 'Ini pantun apaan sih 😂'
  },
];

const NoteContextProvider = ({children}) => {
  const [notes, setNotes] = useState(defaultNotes);

  /** Method untuk menambahkan catatan baru */
  const addNote = (data) => {
    setNotes([...notes, data]);
  }

  return(
    <noteContext.Provider value={{notes, setNotes, addNote}}>
      {children}
    </noteContext.Provider>
  );
}

export default NoteContextProvider;