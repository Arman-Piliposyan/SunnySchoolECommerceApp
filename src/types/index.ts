export interface ISignUpData {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  password: string;
  email: string;
  phone: string;
}

export interface ISignInData {
  password: string;
  email: string;
}

export interface IProfileData {
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phone: string;
}

export interface IAddProductData {
  description: string;
  imageUrl: string;
  title: string;
  price: number;
}

export interface IProductData extends IAddProductData {
  id: number;
}

export type IAddProductToCardData = Omit<IAddProductData, 'description'> & {
  userId: number;
  count: number;
};

export type ICardProductData = IAddProductToCardData & {
  id: number;
};

export type IOrderData = IAddProductToCardData & {
  date: string;
};
