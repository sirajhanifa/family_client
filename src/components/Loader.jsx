import React from 'react';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm z-50">
      <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
