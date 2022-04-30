import { useRouter } from 'next/router';
import React from 'react';
import { Book } from '~/models/book';

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-row border rounded-md p-2 space-x-2 hover:bg-gray-200 cursor-pointer"
      onClick={() => router.push(`/book/${book.id}`)}
    >
      <div className="flex flex-col space-y-1">
        <p className="font-medium">{book.title}</p>
        <p className="text-sm">{book.authors.join(', ')}</p>
      </div>
    </div>
  );
};

export default BookCard;
