import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { Application } from '../../application';
import { WindowHostDirective } from '../../directives/window-host.directive';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})
export class WindowComponent implements OnInit {
  @Input() application: Application;
  @ViewChild(WindowHostDirective, { static: true })
  windowHost!: WindowHostDirective;

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

  restore() {
    this.application.isMaximized = false;
  }
}
