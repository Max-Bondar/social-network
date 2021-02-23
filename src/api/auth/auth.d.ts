import { UserI } from 'libs/declarations-ts/interfaces/user';

export type BaseEntityCustomerT = {
  email: string;
  password: string;
  username: string;
};

// DTOs
export type SignupUserDTO = {
  user: BaseEntityCustomerT;
};

export type LoginUserDTO = {
  user: Omit<BaseEntityCustomerT, 'username'>;
};

// Responses
export type AuthResponseT = {
  user: UserI;
};
