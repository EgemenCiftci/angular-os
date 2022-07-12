import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { ContentHostDirective } from '../../directives/content-host.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild(ContentHostDirective, { static: true })
  contentHost!: ContentHostDirective;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.container = this.contentHost.viewContainerRef;
  }
}
