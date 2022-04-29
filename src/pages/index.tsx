import React from 'react';
import MainDashboard from '~/components/pages/home/MainDashboard';
import IndexTemplate from '~/components/template/MainTemplate';

const IndexPage: React.FC = () => {
  return (
    <div>
      <IndexTemplate>
        <MainDashboard />
      </IndexTemplate>
    </div>
  );
};

export default IndexPage;
