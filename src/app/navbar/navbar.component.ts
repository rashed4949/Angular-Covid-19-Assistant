import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  menuItems: any[];
  user: firebase.User;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => { this.user = user })
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
  login() {
    this.router.navigate(['/login']);
  }
  newsPortalList() {
    this.router.navigate(['/news-portal']);
  }
  mentalHealth() {
    this.router.navigate(['/mental-health']);
  }

}