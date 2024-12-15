import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToNextResidence() {
    const nextId = +this.route.snapshot.paramMap.get('id')! + 1;
    this.router.navigate(['/residences', nextId]);
  }
}
