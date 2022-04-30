import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

interface Props {
  page: number;
  categoryId: number;
}

const Pagination: React.FC<Props> = ({ page, categoryId }) => {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full py-3 justify-center">
      <div className="flex flex-row space-x-1 text-sm items-center">
        <button
          className="button rounded-full border shadow hover:bg-gray-200"
          disabled={page === 1}
          onClick={() =>
            router.push(`/book/category/${categoryId}?page=${page - 1}`)
          }
        >
          <GrFormPrevious />
        </button>
        <p>{page}</p>
        <button
          className="button rounded-full border shadow hover:bg-gray-200"
          onClick={() =>
            router.push(`/book/category/${categoryId}?page=${page + 1}`)
          }
        >
          <GrFormNext />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Pagination;
