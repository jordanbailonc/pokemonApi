import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'ability',
        loadChildren: () => import('./../pages/abilities/abilities.module').then(m => m.AbilitiesPageModule)
      },
      {
        path: 'characteristic',
        loadChildren: () => import('./../pages/characteristic/characteristic.module').then( m => m.CharacteristicPageModule)
      },
      {
        path: 'egg-group',
        loadChildren: () => import('./../pages/egg-group/egg-group.module').then( m => m.EggGroupPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
