import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const MainTemplate: React.FC = (props) => {
  return (
    <div className="antialiased w-full">
      <Navbar />
      <main className="w-full min-h-screen mb-4">{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
