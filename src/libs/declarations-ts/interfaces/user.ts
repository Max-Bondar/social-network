export interface BaseEntityI {
  id: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface UserI extends BaseEntityI {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}
