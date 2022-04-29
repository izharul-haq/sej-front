import React from 'react';
import { Book } from '~/models/book';

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <div className="flex flex-row border rounded-md p-2 space-x-2">
      <div className="flex flex-col space-y-1">
        <p className="font-medium">{book.title}</p>
        <p className="text-sm">{book.authors.join(', ')}</p>
      </div>
    </div>
  );
};

export default BookCard;
