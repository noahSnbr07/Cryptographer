import React from 'react';
import './styles/viewport.css';
import { Route, Routes } from 'react-router-dom';
//components
import Navbar from './utils/components/Navbar';
import Landing from './pages/Landing';
import NewCryptograph from './pages/NewCryptograph.jsx';
import Output from './pages/Output.jsx';
import Invalid from './pages/Invalid.jsx';
export default function App() {
  return (
    <>
      <Navbar />
      <main className='viewport'>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/new' element={<NewCryptograph />} />
          <Route path='/output' element={<Output />} />
          <Route path='*' element={<Invalid />} />
        </Routes>
      </main>
    </>
  );
}