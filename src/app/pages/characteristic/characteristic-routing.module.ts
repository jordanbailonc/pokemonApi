import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacteristicPage } from './characteristic.page';

const routes: Routes = [
  {
    path: '',
    component: CharacteristicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacteristicPageRoutingModule {}
