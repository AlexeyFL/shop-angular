import { IUser } from './user.interface';

export interface IUserState {
  user: IUser;
  isLoggedIn: boolean;
}
