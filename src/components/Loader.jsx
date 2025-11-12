import React from 'react';
import { Html } from '@react-three/drei';
import { Loader2 } from 'lucide';

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="animate-spin w-32 h-32"/>
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