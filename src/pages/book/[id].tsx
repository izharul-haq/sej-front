import React from 'react';
import BookDashboard from '~/components/pages/book/BookDashboard';
import SubmainTemplate from '~/components/template/SubmainTemplate';

const BookPage: React.FC = () => {
  return (
    <SubmainTemplate>
      <BookDashboard />
    </SubmainTemplate>
  );
};

export default BookPage;
