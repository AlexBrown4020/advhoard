import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Model } from './pages/model/Model';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/model/:id' element={<Model/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
