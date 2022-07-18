import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Application } from './application';
import { NotepadComponent } from './components/notepad/notepad.component';
import { WindowComponent } from './components/window/window.component';

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
      isIframe: true,
    },
    {
      src: 'https://www.gamespot.com/',
      title: 'Window (IFrame)',
      isIframe: true,
    },
    {
      src: NotepadComponent as any,
      title: 'Window (Component)',
      isIframe: false,
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  addWindow(application: Application) {
    const windowRef = this.container.createComponent<WindowComponent>(
      WindowComponent as any
    );
    const id = Date.now();
    application.id = id;

    if (application.isIframe) {
      application.src = this.sanitizer.bypassSecurityTrustResourceUrl(
        application.src
      );
    } else {
      windowRef.instance.viewContainerRef$.subscribe((f) =>
        f.createComponent(application.src)
      );
    }

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
