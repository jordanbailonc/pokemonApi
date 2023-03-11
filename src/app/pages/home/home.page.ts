import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  categoriesList: any;

  constructor(
    private catService : CategoriesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.categoriesList = this.catService.getAllCategories();
    console.log('all Categories', this.categoriesList);
    
  }

  logInfo(){
    console.log('info');
    
  }

}
