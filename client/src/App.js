import './App.css';
import { Router } from '@reach/router';
import AllPets from  './components/AllPets';
import NewPet from './components/NewPet';
import Detail from './components/Detail';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App container">
      <h1 className="mt-4">Pet Shelter</h1>

      <Router>
        <AllPets path="/" />
        <NewPet path="/petShelter/new" />
        <Detail path="/petShelter/:id" />
        <Edit path="/petShelter/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
