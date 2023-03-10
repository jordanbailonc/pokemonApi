import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EggGroupPageRoutingModule } from './egg-group-routing.module';

import { EggGroupPage } from './egg-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EggGroupPageRoutingModule
  ],
  declarations: [EggGroupPage]
})
export class EggGroupPageModule {}
