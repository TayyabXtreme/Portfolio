import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="text-white text-lg font-medium mb-4">Loading 3D Model...</div>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full animate-pulse"
            style={{ width: '60%' }}
          />
        </div>
      </div>
    </Html>
  );
};

export default Loader;