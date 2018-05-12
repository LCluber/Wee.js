
export class Bind {

  data    : string|number;
  element : HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement;

  constructor(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement, data:string) {
    this.data = data;
    this.element = element;
    this.element.value = data;
    this.element.addEventListener('change', this, false);
  }

  public handleEvent(event: Event): void {
    switch (event.type) {
      case 'change': this.change(<string>this.element.value);
    }
  }

  public change(value: string|number): void {
    this.data = value;
    this.element.value = value;
  }

}
