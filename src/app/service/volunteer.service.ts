import { VolunteerInfo } from './../home/volunteer/create/create.volunteer.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class VolunteerService {

    volunteerInfo: VolunteerInfo = new VolunteerInfo();
    constructor(
        private db: AngularFireDatabase
    ) { }

    createVolunteer(VolunteerInfo) {
        return this.db.list('/volunteers').push(VolunteerInfo);
    }

    getAllVolunteer() {
        return this.db.list('/volunteers');
    }
}