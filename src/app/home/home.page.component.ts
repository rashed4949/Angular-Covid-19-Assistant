import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css']
})
export class HomePageComponent {

  constructor(private route: ActivatedRoute,
    private router: Router
  ) {
  }

  vaccinationCenter() {
    this.router.navigate(['/vaccination-center']);
  }
  testCenter() {
    this.router.navigate(['/test-center']);
  }
  volunteerList() {
    this.router.navigate(['/volunteer-list']);
  }

}