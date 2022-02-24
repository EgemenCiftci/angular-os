import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('windowHost', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private appService: AppService) {
    this.appService.appComponent = this;
  }
}
