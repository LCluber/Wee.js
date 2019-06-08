import { Dom } from './dom';

export class Bind {

  private _value : string|number;
  private elements : HTMLElement[]/*HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement*/;

  constructor(elementId: string, value: string|number) {
    this._value = '';
    this.elements = Dom.findByClass(elementId) as HTMLElement[];
    this.value = value;
    // this.element.value = data;
    // this.element.addEventListener('change', this, false);
    // input.value = observable();
    // observable.subscribe(function(){ input.value = observable(); });

  }

  set value(value: string|number) {
    this._value = value;
    this.updateDom();
  }

  get value(): string|number {
    return this._value;
  }

  public update(value: string|number): void {
    this.value = value;
  }

  private updateDom() {
    // if (this.elements.length) {
      for (const element of this.elements) {
        element.textContent = this._value as string;
      }
    // }
  }

  // public handleEvent(event: Event): void {
  //   switch (event.type) {
  //     case 'change': this.change(<string>this.element.value);
  //   }
  // }

  // public change(value: string|number): void {
  //   this.value = value;
  //   this.element.value = value;
  // }

}
