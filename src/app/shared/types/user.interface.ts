import { IOrder } from './order.interface';

export interface IUser {
  firstName: string;
  lastName: string;
  cart: string[];
  favorites: string[];
  orders: IOrder[];
}
