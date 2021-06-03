import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { TestCenterInfo } from "../admin/test-center-panel/test.center.form.component";

@Injectable({
    providedIn: 'root'
})

export class AdminPanelService {

    testCenterInfo: TestCenterInfo = new TestCenterInfo();
    constructor(
        private db: AngularFireDatabase
    ) { }

    createTestCenter(testCenterInfo) {
        return this.db.list('/test-centers').push(testCenterInfo);
    }

    getAllTestCenter() {
        return this.db.list('/test-centers');
    }

    createVaccinaionCenter(testCenterInfo) {
        return this.db.list('/vaccination-centers').push(testCenterInfo);
    }

    getAllVaccinationCenter() {
        return this.db.list('/vaccination-centers');
    }
}