import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getCategories } from '~/api/category';

const CategorySection: React.FC = () => {
  const { data: categories } = useQuery('categories', () => getCategories());

  if (!categories) return null;

  return (
    <div className="flex flex-col w-full p-2 justify-start">
      <div className="flex overflow-auto space-x-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}?page=1`}
            passHref
          >
            <a className="button button-primary rounded-full min-w-max text-sm">
              {category.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
