import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(private router: Router, private route: ActivatedRoute){}

  goToAgeCounter() {
    this.router.navigate(['age'], {relativeTo: this.route});
  }
}
