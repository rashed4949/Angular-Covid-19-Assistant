import { VolunteerService } from './../../../service/volunteer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'list-volunteer',
    templateUrl: './list.volunteer.component.html',
    styleUrls: ['./list.volunteer.component.css']
})
export class ListVolunteerComponent implements OnInit, OnDestroy {
    volunteers: any[];
    p: number = 1;
    subscription: Subscription;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private volunteerService: VolunteerService
    ) {
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.subscription = this.volunteerService.getAllVolunteer().valueChanges().subscribe(data => {
            this.filterData = this.volunteers = data;
        })


    }

    createVolunteer() {
        this.router.navigate(['create'], { relativeTo: this.route });
    }

    filterData: any[];
    searchFunction(term: string) {
        if (!term) {
            this.filterData = this.volunteers;
        } else {
            this.filterData = this.volunteers.filter(x =>
                x.name.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.city.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.phoneNumber.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.email.trim().toLowerCase().includes(term.trim().toLowerCase())
            );
        }
    }


}
