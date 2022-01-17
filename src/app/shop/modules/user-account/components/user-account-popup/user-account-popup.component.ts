import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/types/user.interface';
import { logoutAction } from '../../../auth/store/actions/auth.action';

import { getNewUserSelector } from '../../../auth/store/selectors';

@Component({
  selector: 'app-user-account-popup',
  templateUrl: './user-account-popup.component.html',
  styleUrls: ['./user-account-popup.component.scss'],
  exportAs: 'menuInOtherComponent',
})
export class UserAccountPopupComponent implements OnInit {
  @ViewChild(MatMenu, { static: true }) menu!: MatMenu;
  user$!: Observable<IUser | null>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    console.log('init');
    this.user$ = this.store.pipe(select(getNewUserSelector));
  }

  logout() {
    this.store.dispatch(logoutAction())
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
