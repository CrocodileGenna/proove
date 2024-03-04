import React, { useState } from 'react';
import photo1 from './img/395198181.png';
import photo2 from './img/Screenshot_5.png';
import photo3 from './img/Screenshot_7.png';
import { ORION, PHOTO_DIV, IMG, IMG_DIV, PAG_DIV } from './Orion.styled';
const photos = [photo1, photo2, photo3];

export const Orion = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToNextPhoto = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === photos.length - 1 ? 0 : currentPhotoIndex + 1
    );
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1
    );
  };
  const handleDotClick = index => {
    setCurrentPhotoIndex(index);
  };

  return (
    <ORION>
      <PHOTO_DIV>
        <IMG_DIV>
          <div onClick={goToPreviousPhoto}>{'<'}</div>
          <IMG
            src={photos[currentPhotoIndex]}
            alt={`photo${currentPhotoIndex + 1}`}
          />
          <div onClick={goToNextPhoto}>{'>'}</div>
        </IMG_DIV>
        <div>
          {photos.map((photo, index) => (
            <PAG_DIV
              key={index}
              active={index === currentPhotoIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </PHOTO_DIV>
    </ORION>
  );
};
