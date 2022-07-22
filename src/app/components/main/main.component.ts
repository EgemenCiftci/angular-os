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

  get backgroundStyle(): string {
    let val = localStorage.getItem('backgroundStyle');
    if (!val) {
      val = 'blue';
      localStorage.setItem('backgroundStyle', val);
    }
    return val;
  }

  set backgroundStyle(val: string) {
    if (val !== localStorage.getItem('backgroundStyle')) {
      localStorage.setItem('backgroundStyle', val);
    }
  }

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.container = this.contentHost.viewContainerRef;
  }
}
