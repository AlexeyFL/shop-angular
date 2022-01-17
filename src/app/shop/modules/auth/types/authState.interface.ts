import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from 'src/app/shared/types/user.interface';

export interface IAuthState {
  user: IUser | null;
  IsLoggedIn: boolean;
  isSubmitting: boolean;
  validationErrors: string | null;
}
