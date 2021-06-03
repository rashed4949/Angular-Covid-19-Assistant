import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { VolunteerInfo } from "../home/volunteer/create/create.volunteer.component";

@Injectable({
    providedIn: 'root'
})

export class AdminAuthService implements CanActivate {
    uid: any
    user: firebase.User;
    isAdmin: boolean = false;
    volunteerInfo: VolunteerInfo = new VolunteerInfo();
    constructor(
        private db: AngularFireDatabase,
        private afAuth: AngularFireAuth,
        private router: Router,
        private route: ActivatedRoute
    ) {
        // this.afAuth.authState.subscribe(user => {
        //     this.user = user
        // });
    }
    canActivate(): boolean {
        if (localStorage.getItem('datas')) {
            // logged in so return true

            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}


    // canActivate():any {
    //     let data = JSON.parse(localStorage.getItem("datas"));
    //     console.log(data);
    //     this.db.list('/users/' + data.user.uid).valueChanges().subscribe(data => {
    //         if (!data[1] == true) {
    //             this.isAdmin = false;
    //             return this.router.navigate(['']);
    //         } else {
    //             return this.router.navigate(['/test-center-form']);
    //         }
    //     })

    // }
