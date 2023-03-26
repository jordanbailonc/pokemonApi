import { Component, OnInit } from '@angular/core';
import { AbilityService } from 'src/app/services/ability.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.page.html',
  styleUrls: ['./abilities.page.scss'],
})
export class AbilitiesPage implements OnInit {

  data:any;

  constructor(
    private abilitiesService: AbilityService
  ) { }

  async ngOnInit() {
    this.data = await this.abilitiesService.getAllHabilities();
    if(this.data===null){
      console.log('fails');
    }else{
      console.log(this.data);
    }
  }

  inform(){
    console.log('info');
  }
}
