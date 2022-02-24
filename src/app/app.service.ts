import { ComponentRef, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Application } from './application';
import { WindowComponent } from './window/window.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  appComponent: AppComponent;
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

  addWindow(iconName: string, title: string, src: string) {
    const windowRef =
      this.appComponent.container.createComponent<WindowComponent>(
        WindowComponent
      );
    const id = Date.now();
    windowRef.instance.id = id;
    windowRef.instance.iconName = iconName;
    windowRef.instance.title = title;
    windowRef.instance.src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
    this.windowComponentRefs.set(id, windowRef);
  }

  removeWindow(id: number) {
    const windowRef = this.windowComponentRefs.get(id);
    if (windowRef) {
      this.appComponent.container.remove(
        this.appComponent.container.indexOf(windowRef.hostView)
      );
      this.windowComponentRefs.delete(id);
    }
  }
}
