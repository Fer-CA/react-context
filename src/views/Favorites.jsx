import React, { useContext } from 'react';
import Gallery from '../components/Gallery';
import { PhotoContext } from '../context/PhotoContext';

const Favorites = () => {
  const { photos } = useContext(PhotoContext);
  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <div className="">
        <h1>Fotos favoritas</h1>
        {favoritePhotos.length > 0 ? (
        <Gallery photos={favoritePhotos} />
      ) : (
        <p>No hay fotos favoritas</p>
      )}
      </div>
    </div>
  );
};
export default Favorites;
