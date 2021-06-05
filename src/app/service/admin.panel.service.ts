import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";


@Injectable({
    providedIn: 'root'
})

export class AdminPanelService {

    constructor(private db: AngularFireDatabase) {

    }

    createTestCenter(testCenterInfo) {
        return this.db.list('/test-centers').push(testCenterInfo);
    }

    getAllTestCenter() {
        return this.db.list('/test-centers');
    }

    createVaccinaionCenter(vaccinationCenterInfo) {
        return this.db.list('/vaccination-centers').push(vaccinationCenterInfo);
    }

    getAllVaccinationCenter() {
        return this.db.list('/vaccination-centers');
    }

    createNewsPortal(newsPortalInfo) {
        return this.db.list('/news-portal').push(newsPortalInfo);
    }

    getAllNewsPortal() {
        return this.db.list('/news-portal');
    }
}