import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'list-volunteer',
    templateUrl: './list.volunteer.component.html',
    styleUrls: ['./list.volunteer.component.css']
})
export class ListVolunteerComponent {
    constructor(private route: ActivatedRoute,
        private router: Router
    ) {
    }


    createVolunteer() {
        this.router.navigate(['/volunteer-create']);
    }
}
