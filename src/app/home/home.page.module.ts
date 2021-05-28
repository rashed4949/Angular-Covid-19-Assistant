import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HomePageComponent } from "./home.page.component";
import { HomePageRoutes } from "./home.page.route";
import { TestCenterComponent } from "./test-center/test.center.component";
import { VaccinationCenterComponent } from "./vaccination-center/vaccination.center.component";
import { CreateVolunteerComponent } from "./volunteer/create/create.volunteer.component";
import { ListVolunteerComponent } from "./volunteer/list/list.volunteer.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomePageRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomePageComponent,
        CreateVolunteerComponent,
        NavbarComponent,
        TestCenterComponent,
        VaccinationCenterComponent,
        ListVolunteerComponent,
        LoginComponent
    ],
    exports: [
        RouterModule,
        HomePageComponent,
        CreateVolunteerComponent,
        NavbarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageModule { }
