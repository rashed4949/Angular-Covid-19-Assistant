import { VolunteerService } from './../../../service/volunteer.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerInfo } from '../../../models/volunteer.registration.model';


@Component({
  selector: 'create-volunteer',
  templateUrl: './create.volunteer.component.html',
  styleUrls: ['./create.volunteer.component.css']
})
export class CreateVolunteerComponent {

  volunteerInfo: VolunteerInfo = new VolunteerInfo();
  volunteerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private volunteerService: VolunteerService) {
    this.prepareVolunteerForm(null);
  }


  prepareVolunteerForm(volunteerInfofoFormData: VolunteerInfo) {
    volunteerInfofoFormData = volunteerInfofoFormData ? volunteerInfofoFormData : new VolunteerInfo();
    this.volunteerForm = this.formBuilder.group({
      name: [volunteerInfofoFormData.name, [Validators.required]],
      phoneNumber: [volunteerInfofoFormData.phoneNumber, [Validators.required]],
      password: [volunteerInfofoFormData.password, [Validators.required, Validators.minLength(6)]],
      email: [volunteerInfofoFormData.email, [Validators.required]],
      interest: [volunteerInfofoFormData.interest],
      city: [volunteerInfofoFormData.city, [Validators.required]],
      timeTo: [volunteerInfofoFormData.timeTo, [Validators.required]],
      timeFrom: [volunteerInfofoFormData.timeFrom, [Validators.required]],
      sDate: [volunteerInfofoFormData.sDate, [Validators.required]]
    })
  }

  get f() { return this.volunteerForm.controls; }

  saveVolunterInfo() {
    this.submitted = true;
    if (this.volunteerForm.invalid) {
      return;
    }
    this.volunteerInfo = this.volunteerForm.value;
    console.log(this.volunteerInfo)
    this.volunteerService.createVolunteer(this.volunteerInfo);
    this.prepareVolunteerForm(null);
    this.myFunction();
    this.back();
  }

  myFunction() {
    alert("You are successfully resigtered. Welcome!!!");
  }
  back() {
    this.router.navigate(['../'], { relativeTo: this.route });

  }
}
