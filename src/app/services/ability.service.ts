import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(
    private http: HttpClient
  ) { }


  async getAllHabilities(){
    try{
      return await lastValueFrom(this.http.get(`${environment.main_url}/ability`));
    }catch(error){
      console.log('error', error);
      return null;

    }
  }
}
