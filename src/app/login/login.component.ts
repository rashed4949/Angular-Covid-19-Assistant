

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase";
import { AuthService } from '../service/auth.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent {
    user: firebase.User;

    constructor(
        private afAuth: AngularFireAuth,
        public authService: AuthService) {

        this.afAuth.authState.subscribe(user => { this.user = user })
    }

    logout() {
        this.afAuth.signOut();
    }

}
