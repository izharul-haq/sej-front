import React from 'react';
import { useQuery } from 'react-query';
import { getBooksByCategories } from '~/api/book';
import Image from 'next/image';

const PopularSection: React.FC = () => {
  const { data: books } = useQuery('popular', () =>
    getBooksByCategories(21, undefined, 15)
  );

  if (!books) return null;

  return (
    <div className="flex flex-col w-full px-2 justify-center space-y-2">
      <p className="font-semibold text-2xl">Popular Books</p>
      <div className="flex overflow-auto space-x-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex min-w-max flex-col justify-center items-start border rounded-lg p-3 space-y-2"
          >
            <Image src={book.cover_url} width="200px" height="300px" />
            <div>
              <p className="font-semibold">{book.title}</p>
              <p className="text-sm">{book.authors.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
