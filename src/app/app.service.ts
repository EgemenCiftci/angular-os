import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Application } from './application';
import { BrowserComponent } from './components/browser/browser.component';
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
      src: BrowserComponent as any,
      title: 'Browser',
      iconName: 'bi-browser-chrome',
    },
    {
      src: NotepadComponent as any,
      title: 'Notepad',
      iconName: 'bi-journal',
    },
  ];

  constructor() {}

  addWindow(application: Application) {
    const windowRef = this.container.createComponent<WindowComponent>(
      WindowComponent as any
    );
    const id = Date.now();
    application.id = id;

    windowRef.instance.viewContainerRef$.subscribe((f) =>
      f.createComponent(application.src)
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
