export type OrderItem = {
  id: string;
  amount: number;
};

export type OrderDetails = {
  name: 'string';
  address: 'string';
  phone: 'string';
  timeToDeliver: 'string';
  comment: 'string';
};

export interface IOrder {
  id: string;
  items: OrderItem[];
  details: OrderDetails;
}
