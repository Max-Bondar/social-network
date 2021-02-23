type BaseEntityT = {};

// DTOs

export type UserDTO = {
  email?: string;
  username?: string;
  bio?: string;
  image?: string;
};

export type UpdateUserDTO = {
  password?: string;
} & UserDTO;
