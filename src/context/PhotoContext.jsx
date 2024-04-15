

import React, { createContext, useState, useEffect } from 'react';
import jsonData from '/public/photos.json'; 

export const PhotoContext = createContext();

const Provider = ({ children }) => {
  const [photos,setPhotos] = useState([]);

  useEffect(() => {
    const updatedPhotos = jsonData.photos.map(photo => ({ ...photo, liked: false }));
    setPhotos(updatedPhotos);
  }, []);

  const toggleLike = (id) => {
    setPhotos(prevPhotos => {
      return prevPhotos.map(photo => {
        if (photo.id === id) {
          return { ...photo, liked: !photo.liked };
        }
        return photo;
      });
    });
  };

  return (
    <PhotoContext.Provider value={{ photos, setPhotos, toggleLike }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default Provider;
