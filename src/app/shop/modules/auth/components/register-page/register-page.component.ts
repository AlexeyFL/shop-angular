import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isSubmittingSelector, getBackendErrorsSelector } from '../../store/selectors';
import { IRegisterUser } from 'src/app/shared/types/registerUser.interface';
import { AuthService } from 'src/app/shop/services/auth/auth.service';
import { registerAction } from '../../store/actions/auth.action';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;
  validForm!: boolean;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<string | null>;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.minLength],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(getBackendErrorsSelector));
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    const { firstName, lastName, password, login } = form.value;

    const request: IRegisterUser = {
      firstName,
      lastName,
      login,
      password,
    };

    this.store.dispatch(registerAction({ request }));

    form.reset();
  }
}
