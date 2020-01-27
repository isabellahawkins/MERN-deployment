import React from 'react';
import { Router , Link } from '@reach/router';
import Home from './components/Home';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import Details from './components/Details';

function App() {
  return (
    <>
      <Link to="/" className="btn">Home</Link>
      <Link to="/new" className="btn">Add a Pet</Link>
      <Router>
        <Home path="/" />
        <NewPet path="/new" />
        <EditPet path="/edit/:_id" />
        <Details path="/:_id" />
      </Router>
    </>
  );
}

export default App;
