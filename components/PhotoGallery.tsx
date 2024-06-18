// components/PhotoGallery.tsx

import React from 'react';

const photos = [  
  '/photography/IMG_0899.PNG',
  '/photography/IMG_0642.PNG',
  '/photography/IMG_1332.JPG',
  '/photography/IMG_8928.jpeg',
  '/photography/IMG_0976.jpg',
  '/photography/IMG_0544.JPG',
  
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="bg-[#E1E2E2] p-6 md:p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-semibold text-black mb-6">Photography</h2>
      <h3 className="text-2xl font-semibold mb-4 animated-gradient-text">Some of my favourite shots</h3>
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
