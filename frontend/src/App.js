import React from 'react';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CurrentLocation from './components/CurrentLocation';
import FlyOver from './components/FlyOver';
import PeopleInSpace from './components/PeopleInSpace';


function App() {
  document.body.style.backgroundColor = "#4d5b81";
  return (
    <MemoryRouter>
      <div className="App">
        <Navbar />
        <Route path='/CurrentLocation' component={CurrentLocation} />
        <Route path='/FlyOver' component={FlyOver} />
        <Route path='/PeopleInSpace' component={PeopleInSpace} />
      </div>
    </MemoryRouter>
  );
}

export default App;
