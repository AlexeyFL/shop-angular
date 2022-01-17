import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MAIN_API_URL } from 'src/app/constants';
import { IGood } from 'src/app/shared/types/good.interface';
import { ICategory } from 'src/app/shared/types/category.inteface';
import { IUser } from 'src/app/shared/types/user.interface';
import {
  ILoginUser,
  IRegisterUser,
  IToken,
} from 'src/app/shared/types/registerUser.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DbService {
  private token: string = '';

  constructor(private http: HttpClient) {}

  fetchAllCategories$() {
    return this.http.get<ICategory[]>(MAIN_API_URL.CATEGORIES);
  }

  fetchCategoryGoods$(categoryId: string) {
    return this.http.get<IGood[]>(
      `${MAIN_API_URL.CATEGORY_GOODS}${categoryId}`
    );
  }

  fetchSubCategoryGoods$(categoryId: string, subCategoryId: string) {
    return this.http.get<IGood[]>(
      `${MAIN_API_URL.CATEGORY_GOODS}${categoryId}/${subCategoryId}`
    );
  }

  setToken(userToken: string) {
    this.token = userToken;
  }

  getToken() {
    return this.token;
  }

  registerUser$(registerUser: IRegisterUser): Observable<IToken> {
    return this.http.post<IToken>(MAIN_API_URL.REGISTER_USER, registerUser);
  }

  loginUser$(loginUser: ILoginUser) {
    console.log('login')
    return this.http.post<IToken>(MAIN_API_URL.LOGIN_USER, loginUser);
  }

  fetchUserInfo$() {
    return this.http.get<IUser>(MAIN_API_URL.USER_INFO, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
