import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAbilityPage } from './detail-ability.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAbilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAbilityPageRoutingModule {}
