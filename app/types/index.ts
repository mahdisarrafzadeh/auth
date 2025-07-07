export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserLogin {
  uuid: string;
  username: string;
  password: string;
}

export interface User {
  gender: string;
  name: UserName;
  email: string;
  phone: string;
  picture: UserPicture;
  login: UserLogin;
}

export interface ApiResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
