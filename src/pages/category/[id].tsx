import React from 'react';
import CategoryDashboard from '~/components/pages/category/CategoryDashboard';
import SubmainTemplate from '~/components/template/SubmainTemplate';

const CategoryIdPage: React.FC = () => {
  return (
    <SubmainTemplate>
      <CategoryDashboard />
    </SubmainTemplate>
  );
};

export default CategoryIdPage;
