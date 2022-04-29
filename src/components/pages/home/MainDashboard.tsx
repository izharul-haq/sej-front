import React from 'react';
import CategorySection from '~/components/common/CategorySection';
import PopularSection from './section/PopularSection';
import RecommendSection from './section/RecommendSection';

const MainDashboard: React.FC = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col min-h-screen items-center space-y-2">
        <div className="flex p-2 justify-center align-middle w-full h-[28rem] bg-space-cadet-500 items-center">
          <p className="font-bold uppercase text-center text-4xl text-white">
            enrich yourself <br />
            by reading books now
          </p>
        </div>
        <div className="flex flex-col items-start px-2 w-full space-y-2">
          <CategorySection />
          <RecommendSection />
          <PopularSection />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
