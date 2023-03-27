import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbilitiesPage } from './abilities.page';
import { DetailAbilityPage } from './detail-ability/detail-ability.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AbilitiesPage
      },
      {
        path: 'detail/:name',
        component: DetailAbilityPage,
        loadChildren: () => import('./detail-ability/detail-ability.module').then((m) => m.DetailAbilityPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbilitiesPageRoutingModule { }
