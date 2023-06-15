import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../../app.service';
import { Application } from '../../application';
import { ContentHostDirective } from '../../directives/content-host.directive';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})
export class WindowComponent implements OnInit, AfterViewInit {
  @Input() application: Application;
  @ViewChild(ContentHostDirective)
  contentHost!: ContentHostDirective;
  viewContainerRef$ = new BehaviorSubject<ViewContainerRef>(undefined);

  constructor(private appService: AppService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.viewContainerRef$.next(this.contentHost.viewContainerRef);
  }

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
