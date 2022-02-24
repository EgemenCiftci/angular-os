import { Component, OnInit } from '@angular/core';
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
    this.appService.addWindow(
      application.iconName,
      application.title,
      application.src
    );
  }
}
