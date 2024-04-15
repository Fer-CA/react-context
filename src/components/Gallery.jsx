import IconHeart from "./IconHeart";
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Gallery = ({photos}) => {
  const { setPhotos } = useContext(PhotoContext);

  const addAndRemoveFavourite = (id) => {
    const newPhotos = photos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: !photo.liked
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div key={photo.id} className="photo" style={{ backgroundImage: `url(${photo.src.medium})` }}>
          <IconHeart onClick={() => addAndRemoveFavourite(photo.id)} filled={photo.liked}  />
          <div className="overlay">
            <p className="text">{photo.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;