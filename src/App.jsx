import React from 'react';
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Home from './pages/Home'; 
import Library from './pages/Library';

function App() {
  return (
    <BrowserRouter>
      <>
        <section className='bg-[#1DB954] rounded-xl m-4 flex'>
          <Header />
          <main>
          <Routes>
            <Route path='/home' element={<Home />} /> 
            <Route path='/search' element={<Search />} />
            <Route path='/library' element={<Library />} />
          </Routes>
          </main>
        </section>
       
      </>
    </BrowserRouter>
  );
}

export default App;
