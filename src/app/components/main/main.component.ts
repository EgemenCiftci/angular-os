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

  get backgroundColor(): string {
    let val = localStorage.getItem('backgroundColor');
    if (!val) {
      val = 'transparent';
      localStorage.setItem('backgroundColor', val);
    }
    return val;
  }

  get backgroundImage(): string {
    let val = localStorage.getItem('backgroundImage');
    if (!val) {
      val = 'none';
      localStorage.setItem('backgroundImage', val);
    }
    return val;
  }

  get backgroundRepeat(): string {
    let val = localStorage.getItem('backgroundRepeat');
    if (!val) {
      val = 'repeat';
      localStorage.setItem('backgroundRepeat', val);
    }
    return val;
  }

  get backgroundAttachment(): string {
    let val = localStorage.getItem('backgroundAttachment');
    if (!val) {
      val = 'scroll';
      localStorage.setItem('backgroundAttachment', val);
    }
    return val;
  }

  get backgroundPosition(): string {
    let val = localStorage.getItem('backgroundPosition');
    if (!val) {
      val = '0% 0%';
      localStorage.setItem('backgroundPosition', val);
    }
    return val;
  }

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.container = this.contentHost.viewContainerRef;
  }
}
