import { Is } from '@lcluber/chjs';
import { Dom, HTMLElements } from './dom';

export class Binding {

  private _value : string|number;
  private property : string[];
  private lastProperty : string;
  private elements : HTMLElement[] | HTMLInputElement[] | HTMLSelectElement[] | HTMLTextAreaElement[] | HTMLProgressElement[] | HTMLCanvasElement[] | HTMLIFrameElement[] | null;

  constructor(element: string | HTMLElement | HTMLElement[], property: string, value: string|number) {
    this._value = '';
    this.elements = this.getElements(element);

    this.property = [];
    this.lastProperty = '';
    if (property) {
      this.property = property.split('.');
      this.lastProperty = this.property[this.property.length - 1];
      this.addPropertyToElement();
    }
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

  private addPropertyToElement() {
    if (this.elements) {
      for (let j = 0 ; j < this.elements.length ; j++) {
        for (let i = 0 ; i < this.property.length - 1 ; i++) {
          this.elements[j] = this.elements[j][this.property[i]];
        }
      }
    }
  }

  public update(value: string|number): void {
    this.value = value;
  }

  private updateDom(): void {
    if (this.elements) {
      let str = this._value as string;
      for (let element of this.elements) {
        if (this.property.length) {
          element[this.lastProperty] = str;
          // console.log('property');
        } else {
          if (element.hasAttribute('value')) {
            (element as HTMLInputElement).value = str;
            // console.log('value');
          } else {
            let pattern = /<\s*.*[^>]*>(.*?)<\s*.*\s*>/ig;
            if (Is.string(this._value) && str.match(pattern)) {
              element.innerHTML = str;
              // console.log('innerHTML');
            } else {
              element.textContent = str;
              // console.log('textContent');
            }
          }
        }
      }
    }
  }

  private getElements(element: string | HTMLElements | HTMLElements[] ): HTMLElements[] | null {
    let elements: HTMLElements[]|null = [];
    if (Is.array(element)) {
      for (const elt of element as HTMLElements[]) {
        if (Is.htmlElement(elt)) {
          elements.push(elt);
        }
      }
    }
    else if (Is.string(element)) {
      let htmlElement = Dom.findById(element as string);
      if (htmlElement) {
        elements.push(htmlElement);
      } else {
        elements = Dom.findByClass(element as string);
      }
    }
    else if (Is.htmlElement(element)) {
      elements.push(element as HTMLElements);
    }
    return elements;
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
