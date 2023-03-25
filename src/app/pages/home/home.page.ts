import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesService } from 'src/app/services/categories.service';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  categoriesList: any;

  constructor(
    private catService: CategoriesService,
    private navCtrl: NavController
  ) { }

  async ngOnInit(): Promise<void> {
    this.categoriesList = this.catService.getAllCategories();

    console.log(this.categoriesList);
    // if (this.categoriesList == null || this.categoriesList['__zone_symbol__state']!==true) {
    //   this.navCtrl.navigateRoot(['error-page']);
    // }
  }

  logInfo() {
    console.log('information');

  }
}
