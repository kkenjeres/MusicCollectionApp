// Home.jsx
import React from 'react';
import AlbumCard from '../components/AlbumCard';
import { data } from '../Data/db'; 

const Home = () => {
  return (
    <div>
      <section>
        <AlbumCard albums={data} /> 
      </section>
    </div>
  );
}

export default Home;

