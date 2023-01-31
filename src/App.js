import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import { LC } from './components/models/LC';
import { ElfAxe } from './components/models/ElvenAxeAdvHoard';
import { Ganyu } from './components/models/Ganyu';
import { Oni } from './components/models/Oni';
import { ElfDagger } from './components/models/ElfDagger';
import { Venom } from './components/models/Venom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/LC' element={<LC/>}/>
          <Route path='/ElfAxe' element={<ElfAxe/>}/>
          <Route path='/Ganyu' element={<Ganyu/>}/>
          <Route path='/Oni' element={<Oni/>}/>
          <Route path='/ElfDagger' element={<ElfDagger/>}/>
          <Route path='/Venom' element={<Venom/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
