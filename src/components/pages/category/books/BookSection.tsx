import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getBooksByCategories } from '~/api/book';
import Loading from '~/components/common/Loading';
import BookCard from './BookCard';
import NoBooks from './NoBooks';
import Pagination from './Pagination';

const BookSection: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>();

  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line prefer-const
  let { data: books, isLoading } = useQuery(`book-${id}-page-${page}`, () =>
    getBooksByCategories(parseInt(id as string), page, 15)
  );

  if (isLoading) return <Loading />;

  if (!books) return <NoBooks />;

  if (query !== undefined) {
    books = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(query) ||
        book.authors.toString().toLowerCase().includes(query)
      );
    });
  }

  return (
    <div className="w-full p-2 space-y-4">
      <div>
        <input
          className="input-text"
          type="text"
          placeholder="Input title or author(s)"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>

      <div className="w-full flex flex-col space-y-2">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="w-fullflex justify-center items-center">
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default BookSection;
