import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Layout from './components/Layout/Layout';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
import Travel from './pages/Travel/Travel'
import LexHeroes from './pages/projects/LexHeroes/LexHeroes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/projects" element={<Projects />}></Route> */}
        <Route path="/travel" element={<Travel />}></Route>
        <Route path="/lex-heroes" element={<LexHeroes />}></Route>
      </Routes>
    </>
  );
}

export default App;
