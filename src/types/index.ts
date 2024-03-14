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
  id: string;
}

export type IAddProductToCardData = Omit<IAddProductData, 'description'> & {
  userId: string;
  count: number;
};

export type ICardProductData = IAddProductToCardData & {
  id: string;
};

export type IOrderData = IAddProductToCardData & {
  date: string;
};
