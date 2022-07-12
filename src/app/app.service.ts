import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Application } from './application';
import { WindowComponent } from './window/window.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  container: ViewContainerRef;
  windowComponentRefs: Map<number, ComponentRef<WindowComponent>> = new Map<
    number,
    ComponentRef<WindowComponent>
  >();
  applications: Application[] = [
    {
      src: 'https://www.online-calculator.com/full-screen-calculator/',
      title: 'Calculator',
      iconName: 'bi-calculator-fill',
    },
    {
      src: 'https://www.sozcu.com.tr/',
      title: 'Web Site',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  addWindow(application: Application) {
    const windowRef = this.container.createComponent<WindowComponent>(
      WindowComponent as any
    );
    const id = Date.now();
    application.id = id;
    application.src = this.sanitizer.bypassSecurityTrustResourceUrl(
      application.src
    );
    windowRef.instance.application = application;
    this.windowComponentRefs.set(id, windowRef);
  }

  removeWindow(application: Application) {
    const windowRef = this.windowComponentRefs.get(application.id);
    if (windowRef) {
      this.container.remove(this.container.indexOf(windowRef.hostView));
      this.windowComponentRefs.delete(application.id);
    }
  }
}
