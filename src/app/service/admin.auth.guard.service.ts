import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class AdminAuthService implements CanActivate {

    constructor(private router: Router) {

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
