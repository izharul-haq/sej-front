import { Category } from '~/models/category';
import { BaseInstance } from './base';

export const getCategories = async (): Promise<Category[] | undefined> => {
  const { data } = await BaseInstance.get<Category[]>('/category');

  return data;
};
