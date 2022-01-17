import { IGood } from 'src/app/shared/types/good.interface';

export interface ICategoryPageStateInterface {
  data: IGood[] | null;
  isLoading: boolean;
  error: string | null;
}
