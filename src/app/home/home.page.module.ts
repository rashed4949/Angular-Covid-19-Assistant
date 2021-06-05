import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { NewsPortalFormComponent } from "../admin/news-portal-panel/news.portal.form.component";
import { TestCenterFormComponent } from "../admin/test-center-panel/test.center.form.component";
import { VaccinationCenterFormComponent } from "../admin/vaccination-center-panel/vaccination.center.form.component";
import { LoginComponent } from "../login/login.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { AdminAuthService } from "../service/admin.auth.guard.service";
import { AdminPanelService } from "../service/admin.panel.service";
import { VolunteerService } from "../service/volunteer.service";
import { HomePageComponent } from "./home.page.component";
import { HomePageRoutes } from "./home.page.route";
import { NewsPortalListComponent } from "./news-portal/news.portal.list.component";
import { TestCenterComponent } from "./test-center/test.center.component";
import { VaccinationCenterComponent } from "./vaccination-center/vaccination.center.component";
import { CreateVolunteerComponent } from "./volunteer/create/create.volunteer.component";
import { ListVolunteerComponent } from "./volunteer/list/list.volunteer.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomePageRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ],
    declarations: [
        HomePageComponent,
        CreateVolunteerComponent,
        NavbarComponent,
        TestCenterComponent,
        VaccinationCenterComponent,
        ListVolunteerComponent,
        LoginComponent,
        TestCenterFormComponent,
        VaccinationCenterFormComponent,
        NewsPortalListComponent,
        NewsPortalFormComponent
    ],
    exports: [
        RouterModule,
        HomePageComponent,
        CreateVolunteerComponent,
        NavbarComponent,
        TestCenterFormComponent,
        VaccinationCenterFormComponent,
        NewsPortalListComponent,
        NewsPortalFormComponent
    ],
    providers: [
        VolunteerService,
        AdminAuthService,
        AdminPanelService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageModule { }
