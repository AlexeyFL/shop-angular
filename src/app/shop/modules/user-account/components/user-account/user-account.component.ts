import { Component, OnInit , ViewChild} from '@angular/core';
import { cities } from 'src/app/cities';
import { UserAccountPopupComponent } from '../user-account-popup/user-account-popup.component';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit {
  @ViewChild(UserAccountPopupComponent) childComponentMenu!: UserAccountPopupComponent;
  showPopup: boolean = false;
  constructor() {}

  popupHandle() {
    this.showPopup = !this.showPopup;
  }

  ngOnInit(): void {}
}
