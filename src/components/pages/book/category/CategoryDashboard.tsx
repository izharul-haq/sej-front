import React from 'react';
import CategorySection from '~/components/common/CategorySection';
import BookSection from './books/BookSection';

const CategoryDashboard: React.FC = () => {
  return (
    <div className="page-container pt-[3.75rem] p-2">
      <div className="flex flex-col min-h-screen items-center space-y-2">
        <div className="w-full flex flex-col items-start space-y-4">
          <CategorySection />
          <BookSection />
        </div>
      </div>
    </div>
  );
};

export default CategoryDashboard;
