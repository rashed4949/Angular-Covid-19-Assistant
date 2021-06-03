import { AdminAuthService } from './../service/admin.auth.guard.service';
import { TestCenterFormComponent } from './../admin/test-center-panel/test.center.form.component';

import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { HomePageComponent } from "./home.page.component";
import { TestCenterComponent } from "./test-center/test.center.component";
import { VaccinationCenterComponent } from "./vaccination-center/vaccination.center.component";
import { CreateVolunteerComponent } from "./volunteer/create/create.volunteer.component";
import { ListVolunteerComponent } from "./volunteer/list/list.volunteer.component";
import { VaccinationCenterFormComponent } from '../admin/vaccination-center-panel/vaccination.center.form.component';

export const HomePageRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'volunteer-list', component: ListVolunteerComponent },
    { path: 'volunteer-list/create', component: CreateVolunteerComponent },
    { path: 'test-center', component: TestCenterComponent },
    { path: 'vaccination-center', component: VaccinationCenterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'test-center-form', component: TestCenterFormComponent, canActivate: [AdminAuthService] },
    { path: 'vaccination-center-form', component: VaccinationCenterFormComponent, canActivate: [AdminAuthService] }




]