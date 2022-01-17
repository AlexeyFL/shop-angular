import { ISubCategories } from './subCategories.interface';

export interface ICategory {
  id: string;
  name: string;
  subCategories: ISubCategories;
}
