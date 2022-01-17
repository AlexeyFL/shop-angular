import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStorageService {
  setToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  getToken() {
    localStorage.getItem('userToken');
  }

  clearToken() {
    localStorage.removeItem('userToken');
  }
}
