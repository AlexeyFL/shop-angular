export interface IRegisterUser {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}

export interface ILoginUser {
  login: string;
  password: string;
}

export interface IToken {
  token: string;
}
