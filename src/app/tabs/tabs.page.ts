import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { filter } from 'rxjs';
import { FloatingMenuComponent } from '../components/floating-menu/floating-menu.component';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private router: Router,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
  }

  async settingPopEver(ev:any){
    const popEver = await this.popoverController.create({
      component: FloatingMenuComponent,
      showBackdrop:false,

      size: 'auto',

      reference:'event',
      arrow:false,
      event:ev,
      cssClass:'popever_setting',
      translucent:true
    });

    popEver.onDidDismiss().then((result)=>{
      console.log(result.data);
    });

    return await popEver.present();
  }

}
