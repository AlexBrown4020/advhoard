import React from "react";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Navbar } from "./components/navbar/Navbar";
import { Home, About, Projects, Work, Contact } from './pages';

const App= () => {
    return (
        <main className="bg-slate-300">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;
