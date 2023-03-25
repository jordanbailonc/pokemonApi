import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  async getAllCategories() {
    try {
      return await firstValueFrom(this.http.get(environment.main_url).pipe());
    } catch (error) {
      console.error(error);
      return null;
    }
  }


}
