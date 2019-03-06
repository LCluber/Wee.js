
export type HTMLElements = HTMLElement|HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement|HTMLProgressElement|HTMLCanvasElement;

export class Dom {

  public static scrollToBottom(HtmlElement: HTMLElement): void {
    HtmlElement.scrollTop = HtmlElement.scrollHeight;
  }

  public static scrollToTop(HtmlElement: HTMLElement): void {
    HtmlElement.scrollTop = 0;
  }

  public static findById(id: string): HTMLElements {
    return document.getElementById(id);
  }

  public static findByClass(name: string): Array<HTMLElements> {
    return this.arrayFrom(document.getElementsByClassName(name));
  }

  public static findByTag(name: string): Array<HTMLElements> {
    return this.arrayFrom(document.getElementsByTagName(name));
  }

  public static showById(a: string): void {
    this.findById(a).style.display='block';
  }

  public static hideById(a: string): void {
    this.findById(a).style.display='none';
  }

  public static showOverflow(): void {
    document.body.style.overflow = 'visible';
  }

  public static hideOverflow(): void {
    document.body.style.overflow = 'hidden';
  }

  public static getInputValue(a: string): string {
    return (<HTMLInputElement>this.findById(a)).value;
  }

  public static clearInputValue(a: string): void {
    (<HTMLInputElement>this.findById(a)).value = '';
  }

  public static focusOn(a: string): void {
    this.findById(a).focus();
  }

  public static addHTMLElement(parentElement: HTMLElement, childElementType: string, childElementAttributes?: Object): HTMLElements {
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

  public static clearHTMLElement(id: string): HTMLElement {
    let element = this.findById(id);
    if (element) {
      element.innerHTML = '';
    }
    return element;
  }

  private static arrayFrom(HTMLCollection: HTMLCollection): Array<HTMLElements> {
    const elements: Array<HTMLElements> = [];
    for (let i = 0; i < HTMLCollection.length; i++) {
      elements.push(<HTMLElement>HTMLCollection[i]);
    }
    return elements;
  }

}
