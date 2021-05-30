import { VolunteerService } from './../../../service/volunteer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerInfo } from '../create/create.volunteer.component';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';

@Component({
    selector: 'list-volunteer',
    templateUrl: './list.volunteer.component.html',
    styleUrls: ['./list.volunteer.component.css']
})
export class ListVolunteerComponent implements OnInit {
    volunteers;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private volunteerService: VolunteerService
    ) {
    }
    ngOnInit(): void {
        this.volunteerService.getAllVolunteer().valueChanges().subscribe(data => {
            this.volunteers = data;
        })


    }




    createVolunteer() {
        this.router.navigate(['/volunteer-create']);
    }

    // getVolunteerList() {
    //     this.volunteers = this.volunteerService.getAllVolunteer();
    //     console.log(this.volunteers);
    // }
}
