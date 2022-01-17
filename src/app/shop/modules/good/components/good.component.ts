import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss'],
})
export class GoodComponent implements OnInit {
  @Input() good: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(
      map((data) => {
        console.log(data);
      })
    );
  }
}
