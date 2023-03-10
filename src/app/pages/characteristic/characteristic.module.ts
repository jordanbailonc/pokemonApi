import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacteristicPageRoutingModule } from './characteristic-routing.module';

import { CharacteristicPage } from './characteristic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacteristicPageRoutingModule
  ],
  declarations: [CharacteristicPage]
})
export class CharacteristicPageModule {}
