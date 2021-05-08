import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./home.page.component";
import { HomePageRoutes } from "./home.page.route";

@NgModule({
    imports: [ 
         CommonModule,
         RouterModule.forChild(HomePageRoutes)
         ],
    declarations: [ HomePageComponent ],
    exports: [ 
        RouterModule,
        HomePageComponent
     ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HomePageModule {}
