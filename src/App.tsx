import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Main from './pages/Main/Main';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
import Travel from './pages/Travel/Travel'
import Contact from './pages/Contact/Contact'
import LexHeroes from './pages/projects/LexHeroes/LexHeroes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/projects" element={<Projects />}></Route> */}
        <Route path="/travel" element={<Travel />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/lex-heroes" element={<LexHeroes />}></Route>
      </Routes>
    </>
  );
}

export default App;
