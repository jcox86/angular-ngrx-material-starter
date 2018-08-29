import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[context-host]',
})
export class ContextSideDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
