import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { WindowHostDirective } from '../../directives/window-host.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild(WindowHostDirective, { static: true })
  windowHost!: WindowHostDirective;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.container = this.windowHost.viewContainerRef;
  }
}
