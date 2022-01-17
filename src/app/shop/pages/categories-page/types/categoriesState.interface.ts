import { ICategory } from 'src/app/shared/types/category.inteface';

export interface ICategoryState {
  data: ICategory[] | null;
  isLoading: boolean;
  error: null;
  currentCategory: string | null;
}
