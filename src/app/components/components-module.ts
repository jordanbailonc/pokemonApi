import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { FloatingMenuComponent } from "./floating-menu/floating-menu.component";

@NgModule({
    imports:[CommonModule,IonicModule.forRoot(),RouterModule],
    declarations:[FloatingMenuComponent],
    exports:[FloatingMenuComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule{}