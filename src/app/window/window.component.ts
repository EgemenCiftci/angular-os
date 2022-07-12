import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Application } from '../application';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})
export class WindowComponent implements OnInit {
  @Input() application: Application;

  constructor(private appService: AppService) {}

  ngOnInit() {}

  close() {
    this.appService.removeWindow(this.application);
  }

  minimize() {
    this.application.isHidden = true;
  }

  maximize() {
    this.application.isMaximized = true;
  }
}
