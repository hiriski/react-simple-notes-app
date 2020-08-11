import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NoteContextProvider from './context/NoteContext';
import MultipleNote from './components/MultipleNote';
import SingleNote from  './components/SingleNote';
import AddNote from './components/AddNote';

function App() {
  return (
    <NoteContextProvider>
      <main>
        <div id="Note">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <MultipleNote/>
              </Route>
              <Route path="/create">
                <AddNote/>
              </Route>
              <Route path="/note/:slug">
                <SingleNote/>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    </NoteContextProvider>
  );
}

export default App;
