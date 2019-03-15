import { Is } from '@lcluber/chjs';
import { HTMLParameters } from './interfaces';

export type HTMLElements = HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement;

export class Dom {

  public static scrollToBottom(HtmlElement: HTMLElement): void {
    HtmlElement.scrollTop = HtmlElement.scrollHeight;
  }

  public static scrollToTop(HtmlElement: HTMLElement): void {
    HtmlElement.scrollTop = 0;
  }

  public static findById(id: string): HTMLElements|null {
    return document.getElementById(id);
  }

  public static findByClass(className: string): Array<HTMLElements> {
    return this.arrayFrom(document.getElementsByClassName(className));
  }

  public static findByTag(tagName: string): Array<HTMLElements> {
    return this.arrayFrom(document.getElementsByTagName(tagName));
  }

  public static showElement(element: string|HTMLElement): HTMLElement|null {
    return this.styleElement(element,'display','block');
  }

  public static hideElement(element: string|HTMLElement): HTMLElement|null {
    return this.styleElement(element,'display','none');
  }

  public static styleElement( element: string|HTMLElement|null, 
                              parameter: string|number, 
                              value: string
                            ): HTMLElement|null {
                              
    element = this.checkElement(element);
    if (element) {
      element.style[<number>parameter] = value;
    }
    return element;
  }

  public static showOverflow(): void {
    document.body.style.overflow = 'visible';
  }

  public static hideOverflow(): void {
    document.body.style.overflow = 'hidden';
  }

  public static getInputValue(element: string|HTMLElement|null): string|null {
    element = this.checkElement(element);
    if (element) {
      return (<HTMLInputElement>element).value;
    }
    return null;
  }

  public static clearInputValue(element: string|HTMLElement|null): HTMLElement|null  {
    element = this.checkElement(element);
    if (element) {
      (<HTMLInputElement>element).value = '';
    }
    return element;
  }

  public static focusOn(element: string|HTMLElement|null): HTMLElement|null {
    element = this.checkElement(element);
    if (element) {
      element.focus();
    }
    return element;
  }

  public static addHTMLElement( parentElement: string|HTMLElement|null, 
                                childElementType: string, 
                                childElementAttributes?: HTMLParameters
                              ): HTMLElements {
                                
    parentElement = this.checkElement(parentElement);
    let newElement = document.createElement(childElementType);
    if(childElementAttributes) {
      Object.keys(childElementAttributes).forEach(key => {
        if(key === 'textContent' || key === 'innerHTML') {
          newElement[key] = childElementAttributes[key];
        } else {
          newElement.setAttribute(key, childElementAttributes[key]);
        }
      });
    }
    (<HTMLElement>parentElement).appendChild(newElement);
    return newElement;
  }

  public static clearHTMLElement(element: string|HTMLElement|null): HTMLElement|null {
    element = this.checkElement(element);
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

  private static checkElement(element: string|HTMLElement|null): HTMLElement|null{
    if (Is.string(element)) {
      element = this.findById(<string>element);
    }
    return <HTMLElement>element;
  }

}
