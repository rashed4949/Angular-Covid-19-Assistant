import { VolunteerService } from './../../../service/volunteer.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


export class VolunteerInfo {
  name: string;
  phoneNumber: string;
  cPassword: string
  password: string
  email: string
  interest: string
  city: string
  timeTo: string
  timeFrom: string
  sDate: Date;
}
@Component({
  selector: 'create-volunteer',
  templateUrl: './create.volunteer.component.html',
  styleUrls: ['./create.volunteer.component.css']
})
export class CreateVolunteerComponent {

  volunteerInfo: VolunteerInfo = new VolunteerInfo();
  volunteerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private volunteerService: VolunteerService) {
    this.prepareLCForm(null);
  }


  prepareLCForm(volunteerInfofoFormData: VolunteerInfo) {
    volunteerInfofoFormData = volunteerInfofoFormData ? volunteerInfofoFormData : new VolunteerInfo();
    this.volunteerForm = this.formBuilder.group({
      name: [volunteerInfofoFormData.name],
      phoneNumber: [volunteerInfofoFormData.phoneNumber],
      cPassword: [volunteerInfofoFormData.cPassword],
      password: [volunteerInfofoFormData.password],
      email: [volunteerInfofoFormData.email],
      interest: [volunteerInfofoFormData.interest],
      city: [volunteerInfofoFormData.city],
      timeTo: [volunteerInfofoFormData.timeTo],
      timeFrom: [volunteerInfofoFormData.timeFrom],
      sDate: [volunteerInfofoFormData.sDate]
    })
  }

  saveLcInfo() {
    this.volunteerInfo = this.volunteerForm.value;
    console.log(this.volunteerInfo)
    this.volunteerService.createVolunteer(this.volunteerInfo);
    this.prepareLCForm(null);
  }
}
