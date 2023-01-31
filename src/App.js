import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import { LC } from './components/models/LC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/:path' element={<LC/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
