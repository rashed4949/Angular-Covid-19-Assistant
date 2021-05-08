import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateVolunteerComponent } from "./create/create.volunteer.component";
import { VolunteerRoutes } from "./volanteer.route";

@NgModule({
    imports: [ 
         CommonModule,
         RouterModule.forChild(VolunteerRoutes)
         ],
    declarations: [ CreateVolunteerComponent ],
    exports: [ CreateVolunteerComponent,
        RouterModule
     ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class volunteerModule {}
