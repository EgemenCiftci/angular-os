import { ComponentRef, Injectable } from '@angular/core';
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

  constructor() {}
}
