import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RashedComponent } from './rashed.component';



@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ RashedComponent ],
    exports: [ RashedComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class RashedModule {}