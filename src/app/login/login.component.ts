import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase";
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent implements OnInit {

    user: firebase.User;
    users: any[];
    isAdmin: boolean = false;
    result: any;

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router,
        private route: ActivatedRoute) {


        this.afAuth.authState.subscribe(user => { this.user = user })
    }

    ngOnInit(): void {
        let data = JSON.parse(localStorage.getItem("datas"));
        console.log(data);
        if (data) {
            this.getAllUsers(data.user.uid).valueChanges().subscribe(data => {
                if (data[1] == true) {
                    this.isAdmin = true;
                } else {
                    this.isAdmin = false
                }
            });
        }
    }

    logout() {
        this.afAuth.signOut();
        this.isAdmin = false;
        localStorage.clear();
    }


    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
                this.result = result;
                localStorage.setItem("datas", JSON.stringify(this.result));
                console.log('You have been successfully logged in!');
                this.save(result);
                this.getAllUsers(result.user.uid).valueChanges().subscribe(data => {
                    ;
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

    testCenterCreate() {
        this.router.navigate(['/test-center-form']);
    }
    vaccinationCenterCreate() {
        this.router.navigate(['/vaccination-center-form']);
    }
}


