import { Component, Host, OnInit, ViewContainerRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';
import { Application } from '../application';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css'],
})
export class LauncherComponent implements OnInit {
  now: number;

  constructor(public appService: AppService) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  ngOnInit() {}

  showApplication(application: Application) {
    this.appService.appComponent.addWindow(
      application.iconName,
      application.title,
      application.src
    );
  }
}
