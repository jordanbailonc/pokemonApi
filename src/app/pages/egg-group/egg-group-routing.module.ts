import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EggGroupPage } from './egg-group.page';

const routes: Routes = [
  {
    path: '',
    component: EggGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EggGroupPageRoutingModule {}
