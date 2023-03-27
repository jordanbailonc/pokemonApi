import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAbilityPageRoutingModule } from './detail-ability-routing.module';

import { DetailAbilityPage } from './detail-ability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAbilityPageRoutingModule
  ],
  declarations: [DetailAbilityPage]
})
export class DetailAbilityPageModule {}
