import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminPanelService } from "src/app/service/admin.panel.service";


export class VaccinationCenterInfo {
    name: string;
    phoneNumber: string;
    email: string
    city: string
    timeTo: string
    timeFrom: string;
    address: string;
    apRequired: string;
    website: string;


}

@Component({
    selector: 'test-center-panel',
    templateUrl: './vaccination.center.form.component.html',
    styleUrls: ['./vaccination.center.form.component.css']
})
export class VaccinationCenterFormComponent {
    vaccinationCenterForm: FormGroup;
    vaccinationCenterInfo: VaccinationCenterInfo = new VaccinationCenterInfo();
    submitted = false;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private adminPanelService: AdminPanelService
    ) {
        this.prepareVaccinationCenterForm(null);
    }

    prepareVaccinationCenterForm(vaccinationCenterInfoData: VaccinationCenterInfo) {
        vaccinationCenterInfoData = vaccinationCenterInfoData ? vaccinationCenterInfoData : new VaccinationCenterInfo();
        this.vaccinationCenterForm = this.formBuilder.group({
            name: [vaccinationCenterInfoData.name, [Validators.required, Validators.maxLength(50)]],
            phoneNumber: [vaccinationCenterInfoData.phoneNumber, [Validators.required, Validators.maxLength(20)]],
            address: [vaccinationCenterInfoData.address, [Validators.required]],
            email: [vaccinationCenterInfoData.email],
            apRequired: [vaccinationCenterInfoData.apRequired, [Validators.required]],
            city: [vaccinationCenterInfoData.city, [Validators.required]],
            timeTo: [vaccinationCenterInfoData.timeTo, [Validators.required]],
            timeFrom: [vaccinationCenterInfoData.timeFrom, [Validators.required]],
            website: [vaccinationCenterInfoData.website]
        })
    }
    get f() { return this.vaccinationCenterForm.controls; }

    saveVaccinationCenterInfo() {
        this.submitted = true;
        if (this.vaccinationCenterForm.invalid) {
            return;
        }
        this.vaccinationCenterInfo = this.vaccinationCenterForm.value;
        console.log(this.vaccinationCenterInfo)
        this.adminPanelService.createVaccinaionCenter(this.vaccinationCenterInfo);
        this.myFunction();
        this.prepareVaccinationCenterForm(null);
        // this.back();
    }

    myFunction() {
        alert("You are successfully inserted data.");
    }
    back() {
        this.router.navigate(['../'], { relativeTo: this.route });

    }
}