import { Component, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from './app.service';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('windowHost', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private appService: AppService, private sanitizer: DomSanitizer) {
    this.appService.appComponent = this;
  }

  addWindow(iconName: string, title: string, src: string) {
    const windowRef =
      this.container.createComponent<WindowComponent>(WindowComponent);
    const id = Date.now();
    windowRef.instance.id = id;
    windowRef.instance.iconName = iconName;
    windowRef.instance.title = title;
    windowRef.instance.src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
    this.appService.windowComponentRefs.set(id, windowRef);
  }

  removeWindow(id: number) {
    const windowRef = this.appService.windowComponentRefs.get(id);
    if (windowRef) {
      this.container.remove(this.container.indexOf(windowRef.hostView));
      this.appService.windowComponentRefs.delete(id);
    }
  }
}
