import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Model } from './components/model/Model';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/model' element={<Model/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
