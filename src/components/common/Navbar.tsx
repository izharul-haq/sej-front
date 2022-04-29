import React from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <nav className="z-50 w-full sticky top-0">
      <div className="w-full py-4 px-2 fixed bg-space-cadet-500">
        <div className="w-full flex justify-start items-center">
          <Link href={'/'} passHref>
            <a className="flex flex-row space-x-2 items-center text-white font-medium text-xl hover:text-mango-300 focus:text-mango-600">
              <AiFillHome />
              <p>Home</p>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
