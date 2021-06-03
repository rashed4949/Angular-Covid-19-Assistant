import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase";
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent implements OnInit {

    user: firebase.User;
    users: any[];
    isAdmin: boolean = false;

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase) {

        this.afAuth.authState.subscribe(user => { this.user = user })
    }

    ngOnInit(): void {
        this.afAuth.authState.subscribe(user => { this.user = user })
    }

    logout() {
        this.afAuth.signOut();
        this.isAdmin = false;
    }


    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
                console.log('You have been successfully logged in!');
                this.save(result);
                this.getAllUsers(result.user.uid).valueChanges().subscribe(data => {
                    if (data[1] == true) {
                        this.isAdmin = true;
                    } else {
                        this.isAdmin = false
                    }
                });
            });
    }

    save(result) {
        this.db.object('/users/' + result.user.uid).update({
            name: result.user.displayName,
            email: result.user.email
        })
    }

    getAllUsers(uid: any) {
        return this.db.list('/users/' + uid);
    }
}
