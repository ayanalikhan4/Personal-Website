// components/PhotoGallery.tsx

import React from 'react';

const photos = [  
  '/photography/IMG_7547.JPG',
  '/photography/IMG_8630.JPG',
  '/photography/IMG_8768.JPG',
  '/photography/IMG_8928.JPG',
  '/photography/IMG_3535.JPG',
  '/photography/IMG_2681.JPG',
  
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="bg-[#1E1E1E] p-6 md:p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-semibold text-white mb-6">Photography</h2>
      <h3 className="text-2xl font-semibold mb-4 animated-gradient-text">some of my favourite shots</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="w-full h-64 overflow-hidden rounded-lg bg-gray-500">
          <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover transform hover:scale-110 transition duration-500 ease-in-out" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default PhotoGallery;
