import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWindowHost]',
})
export class WindowHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
