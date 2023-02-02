import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import { LC } from './components/models/LC';
import { ElfAxe } from './components/models/ElvenAxeAdvHoard';
import { Ganyu } from './components/models/Ganyu';
import { Oni } from './components/models/Oni';
import { ElfDagger } from './components/models/ElfDagger';
import { Venom } from './components/models/Venom';
import { Keen } from './components/models/Keen';
import { CheshireCat } from './components/models/CheshireCat';
import { Clayman } from './components/models/Clayman';
import { Raziel } from './components/models/Raziel';
import { Sarenrae } from './components/models/Sarenrae';
import { Hydra } from './components/models/Hydra';
import { Wyvern } from './components/models/Wyvern';
import { SerpentFly } from './components/models/SerpentFly';
import { Basilisk } from './components/models/Basilisk';
import { Lizardman } from './components/models/Lizardman';
import { Gnoll } from './components/models/Gnoll';
import { Giant } from './components/models/Giant';
import { Genie } from './components/models/Genie';
import { Naga } from './components/models/Naga';
import { Gremlin } from './components/models/Gremlin';
import { MechPistol } from './components/models/MechPistol';
import { Flintlock } from './components/models/Flintlock';
import { Protection } from './components/models/Protection';
import { Evasion } from './components/models/Evasion';
import { Wishes } from './components/models/Wishes';

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
          <Route path='/Keen' element={<Keen/>}/>
          <Route path='/CheshireCat' element={<CheshireCat/>}/>
          <Route path='/Clayman' element={<Clayman/>}/>
          <Route path='/Raziel' element={<Raziel/>}/>
          <Route path='/Sarenrae' element={<Sarenrae/>}/>
          <Route path='/Hydra' element={<Hydra/>}/>
          <Route path='/Wyvern' element={<Wyvern/>}/>
          <Route path='/SerpentFly' element={<SerpentFly/>}/>
          <Route path='/Basilisk' element={<Basilisk/>}/>
          <Route path='/Lizardman' element={<Lizardman/>}/>
          <Route path='/Gnoll' element={<Gnoll/>}/>
          <Route path='/Giant' element={<Giant/>}/>
          <Route path='/Genie' element={<Genie/>}/>
          <Route path='/Naga' element={<Naga/>}/>
          <Route path='/Gremlin' element={<Gremlin/>}/>
          <Route path='/MechPistol' element={<MechPistol/>}/>
          <Route path='/Flintlock' element={<Flintlock/>}/>
          <Route path='/Protection' element={<Protection/>}/>
          <Route path='/Evasion' element={<Evasion/>}/>
          <Route path='/Wishes' element={<Wishes/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
