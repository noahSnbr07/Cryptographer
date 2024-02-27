import React from 'react'
import Navbar from './utils/components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import NewCryptograph from './pages/NewCryptograph.jsx';
import Output from './pages/Output.jsx';
import Invalid from './pages/Invalid.jsx';
import './styles/viewport.css';
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