import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAIN_API_URL } from 'src/app/constants';
import {
  ILoginUser,
  IRegisterUser,
  IToken,
} from 'src/app/shared/types/registerUser.interface';
import { DbService } from '../db/db.service';
import { map, switchMap } from 'rxjs/operators';
import { UserStorageService } from '../user-storage/user-storage.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/types/user.interface';


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private dbService: DbService,
    private storageService: UserStorageService,
    private store: Store
  ) {}

  setToken(token: string): void {
    this.dbService.setToken(token);
  }

  getUserInfo$() {
    return this.dbService.fetchUserInfo$();
  }

  getToken(): string {
    return this.dbService.getToken();
  }

  // registerUser(registerUser: IRegisterUser) {
  //   return this.dbService
  //     .registerUser$(registerUser)
  //     .pipe(
  //       map(({ token }) => {
  //         this.setToken(token);
  //         this.storageService.setToken(this.getToken());
  //       }),
  //       switchMap(() => {
  //         return this.getUserInfo$();
  //       }),
  //       map((user: IUser) => {
  //         console.log('user', user);
  //         this.store.dispatch(setNewUserAction({ user }));
  //         this.store.dispatch(
  //           setIsUserAuthorizedAction({ isAuthorized: true })
  //         );
  //       })
  //     )
  //     .subscribe();
  // }

  // loginUser(loginUser: ILoginUser) {
  //   this.dbService
  //     .loginUser$(loginUser)
  //     .pipe(
  //       map(({ token }) => {
  //         this.setToken(token);
  //       }),
  //       switchMap(() => {
  //         return this.getUserInfo$();
  //       }),
  //       map((user: IUser) => {
  //         console.log('user', user);
  //         this.store.dispatch(setNewUserAction({ user }));
  //         this.store.dispatch(
  //           setIsUserAuthorizedAction({ isAuthorized: true })
  //         );
  //       })
  //     )
  //     .subscribe();
  // }
}
