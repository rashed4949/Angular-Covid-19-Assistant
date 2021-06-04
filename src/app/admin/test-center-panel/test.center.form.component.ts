import { AdminPanelService } from './../../service/admin.panel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TestCenterInfo } from '../../models/test.center.model';

@Component({
    selector: 'test-center-panel',
    templateUrl: './test.center.form.component.html',
    styleUrls: ['./test.center.form.component.css']
})
export class TestCenterFormComponent {
    testCenterForm: FormGroup;
    testCenterInfo: TestCenterInfo = new TestCenterInfo();
    submitted = false;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private adminPanelService: AdminPanelService
    ) {
        this.prepareTestCenterForm(null);
    }

    prepareTestCenterForm(testCenterInfoData: TestCenterInfo) {
        testCenterInfoData = testCenterInfoData ? testCenterInfoData : new TestCenterInfo();
        this.testCenterForm = this.formBuilder.group({
            name: [testCenterInfoData.name, [Validators.required]],
            phoneNumber: [testCenterInfoData.phoneNumber, [Validators.required]],
            address: [testCenterInfoData.address, [Validators.required]],
            email: [testCenterInfoData.email],
            apRequired: [testCenterInfoData.apRequired, [Validators.required]],
            city: [testCenterInfoData.city, [Validators.required]],
            timeTo: [testCenterInfoData.timeTo, [Validators.required]],
            timeFrom: [testCenterInfoData.timeFrom, [Validators.required]],
            website: [testCenterInfoData.website]
        })
    }
    get f() { return this.testCenterForm.controls; }

    saveTestCenterInfo() {
        this.submitted = true;
        if (this.testCenterForm.invalid) {
            return;
        }
        this.testCenterInfo = this.testCenterForm.value;
        console.log(this.testCenterInfo)
        this.adminPanelService.createTestCenter(this.testCenterInfo);
        this.myFunction();
        this.prepareTestCenterForm(null);
        this.back();
    }

    myFunction() {
        alert("You are successfully inserted data.");
    }
    back() {
        this.router.navigate(['/login']);

    }
}