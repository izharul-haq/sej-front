import React from 'react';
import Footer from '../common/Footer';

const IndexTemplate: React.FC = (props) => {
  return (
    <div className="antialiased w-full">
      <main className="w-full min-h-screen mb-4">{props.children}</main>
      <Footer />
    </div>
  );
};

export default IndexTemplate;
