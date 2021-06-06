import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { VolunteerService } from "src/app/service/volunteer.service";

@Component({
    selector: 'volunteer-login',
    templateUrl: './volunteer.login.component.html'
})
export class VolunteerLoginComponent implements OnInit {
    volunteers: any[];
    p: number = 1;
    subscription: Subscription;

    form: FormGroup;
    loading = false;
    submitted = false;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private volunteerService: VolunteerService,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        //  this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        //     this.accountService.login(this.f.username.value, this.f.password.value)
        //         .pipe(first())
        //         .subscribe({
        //             next: () => {
        //                 // get return url from query parameters or default to home page
        //                 const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //                 this.router.navigateByUrl(returnUrl);
        //             },
        //             error: error => {
        //                 this.alertService.error(error);
        //                 this.loading = false;
        //             }
        //         });
    }
}