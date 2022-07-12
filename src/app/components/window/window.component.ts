import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from '../../app.service';
import { Application } from '../../application';
import { ContentHostDirective } from '../../directives/content-host.directive';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})
export class WindowComponent implements OnInit {
  @Input() application: Application;
  @ViewChild(ContentHostDirective, { static: true })
  contentHost!: ContentHostDirective;
  viewContainerRef$ = new BehaviorSubject<ViewContainerRef>(undefined);

  constructor(private appService: AppService) {}

  ngOnInit() {
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
