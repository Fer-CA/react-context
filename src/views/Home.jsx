

import React, { useContext } from 'react';
import Gallery from '../components/Gallery';
import { PhotoContext } from '../context/PhotoContext';

const Home = () => {
  const { photos } = useContext(PhotoContext);
  

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery photos={photos}  />
      
    </div>
  );
};

export default Home;
