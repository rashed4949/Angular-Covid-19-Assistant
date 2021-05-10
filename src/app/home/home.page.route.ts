
import { Routes } from "@angular/router";
import { HomePageComponent } from "./home.page.component";
import { TestCenterComponent } from "./test-center/test.center.component";
import { VaccinationCenterComponent } from "./vaccination-center/vaccination.center.component";
import { CreateVolunteerComponent } from "./volunteer/create/create.volunteer.component";
import { ListVolunteerComponent } from "./volunteer/list/list.volunteer.component";

export const HomePageRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'volunteer-list', component: ListVolunteerComponent },
    { path: 'volunteer-create', component: CreateVolunteerComponent },
    { path: 'test-center', component: TestCenterComponent },
    { path: 'vaccination-center', component: VaccinationCenterComponent }


]