import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  menuItems: any[];

  constructor(private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
  }
  volunteerList() {
    this.router.navigate(['/volunteer-list']);
  }
  testCenter() {
    this.router.navigate(['/test-center']);
  }
  vaccinationCenter() {
    this.router.navigate(['/vaccination-center']);
  }
}
