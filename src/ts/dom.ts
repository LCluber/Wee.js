import { Is } from '@lcluber/chjs';
import { HTMLParameters } from './interfaces';

export type HTMLElements = HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement | HTMLIFrameElement;

export class Dom {

  public static scrollToBottom(HtmlElement: HTMLElements): void {
    HtmlElement.scrollTop = HtmlElement.scrollHeight;
  }

  public static scrollToTop(HtmlElement: HTMLElements): void {
    HtmlElement.scrollTop = 0;
  }

  public static findById(id: string): HTMLElements|null {
    return document.getElementById(id);
  }

  public static findByClass(className: string): HTMLElements[]|null {
    return this.arrayFrom(document.getElementsByClassName(className));
  }

  public static findByTag(tagName: string): HTMLElements[]|null {
    return this.arrayFrom(document.getElementsByTagName(tagName));
  }

  public static showElement(element: string|HTMLElements): HTMLElements|null {
    return this.styleElement(element,'display','block');
  }

  public static hideElement(element: string|HTMLElements): HTMLElements|null {
    return this.styleElement(element,'display','none');
  }

  public static styleElement( element: string|HTMLElements|null,
                              parameter: string|number,
                              value: string
                            ): HTMLElements|null {

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

  public static focusOn(element: string|HTMLElements|null): HTMLElements|null {
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

  private static arrayFrom(HTMLCollection: HTMLCollection): HTMLElements[] {
    const elements: HTMLElements[] = [];
    for (let i = 0; i < HTMLCollection.length; i++) {
      elements.push(<HTMLElements>HTMLCollection[i]);
    }
    return elements;
  }

  private static checkElement(element: string|HTMLElements|null): HTMLElements|null{
    if (Is.string(element)) {
      element = this.findById(<string>element);
    }
    return <HTMLElements>element;
  }

}
