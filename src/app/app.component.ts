import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  __env = environment
  main_url :string | undefined

  constructor(
  ) {}

  ngOnInit(): void {
    this.main_url = this.__env.main_url
  }
}
