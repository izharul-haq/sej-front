import React from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

interface Props {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ page, setPage }) => {
  return (
    <div className="flex flex-row w-full py-3 justify-center">
      <div className="flex flex-row space-x-1 text-sm items-center">
        <button
          className="button rounded-full border shadow hover:bg-gray-200"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          <GrFormPrevious />
        </button>
        <p>{page + 1}</p>
        <button
          className="button rounded-full border shadow hover:bg-gray-200"
          onClick={() => setPage(page + 1)}
        >
          <GrFormNext />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Pagination;
