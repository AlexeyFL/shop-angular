import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors!: string | null;
  errorMessages!: string | null;

  constructor() {}

  ngOnInit(): void {
    console.log('this.backendErrors', this.backendErrors);
    this.errorMessages = this.backendErrors;
  }
}
