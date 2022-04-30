import { Book } from '~/models/book';
import { BaseInstance } from './base';

export const getBooksByCategories = async (
  categoryId: number,
  page?: number,
  size?: number
): Promise<Book[]> => {
  let urlParam = `/fee-assessment-books?categoryId=${categoryId}`;

  if (page !== undefined) urlParam += `&page=${page}`;
  if (size !== undefined) urlParam += `&size=${size}`;

  const { data } = await BaseInstance.get<Book[]>(urlParam);

  return data;
};
