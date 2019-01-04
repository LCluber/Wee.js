
export class Dom {

  static scrollToBottom(HtmlElement: HTMLElement): void {
    HtmlElement.scrollTop = HtmlElement.scrollHeight;
  }

  static findById(id: string): HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement  {
    return document.getElementById(id);
  }

  static showById(a: string): void {
    this.findById(a).style.display='block';
  }

  static hideById(a: string): void {
    this.findById(a).style.display='none';
  }

  static showOverflow(): void {
    document.body.style.overflow = 'visible';
  }

  static hideOverflow(): void {
    document.body.style.overflow = 'hidden';
  }

  static getInputValue(a: string): string {
    return (<HTMLInputElement>this.findById(a)).value;
  }

  static clearInputValue(a: string): void {
    (<HTMLInputElement>this.findById(a)).value = '';
  }

  static focusOn(a: string): void {
    this.findById(a).focus();
  }

  static addHTMLElement(parentElement: HTMLElement, childElementType: string, childElementAttributes?: Object): HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement {
    let newElement = document.createElement(childElementType);
    if(childElementAttributes !== undefined) {
      Object.keys(childElementAttributes).forEach(key => {
        if(key === 'textContent' || key === 'innerHTML') {
          newElement[key] = childElementAttributes[key];
        } else {
          newElement.setAttribute(key, childElementAttributes[key]);
        }
      });
    }
    parentElement.appendChild(newElement);
    return newElement;
  }

}
