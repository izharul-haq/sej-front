import React from 'react';

const NoBooks: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <p className="font-semibold text-xl">No more books left</p>
    </div>
  );
};

export default NoBooks;
