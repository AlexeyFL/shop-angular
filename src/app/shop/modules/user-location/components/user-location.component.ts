import { Component, OnInit } from '@angular/core';
import { cities } from 'src/app/cities';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss'],
})
export class UserLocationComponent implements OnInit {
  cities: string[] = cities;
  constructor() {}

  ngOnInit(): void {}
}
