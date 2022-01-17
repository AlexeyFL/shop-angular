import { IAuthState } from 'src/app/shop/modules/auth/types/authState.interface';
import { ICategoryState } from 'src/app/shop/pages/categories-page/types/categoriesState.interface';
import { ICategoryPageStateInterface } from 'src/app/shop/pages/category-page/types/CategoryPageState.interface';

export interface IAppState {
  auth: IAuthState;
  categories: ICategoryState;
  categoryPageGoods: ICategoryPageStateInterface;
}
