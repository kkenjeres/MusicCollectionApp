import React from 'react';
import AlbumList from '../components/AlbumList';
import { data } from '../Data/db'; 

const Home = () => {
  return (
    <>
      <AlbumList albums={data} /> 
    </>
  );
}

export default Home;
