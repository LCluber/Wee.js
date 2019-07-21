import { isString } from "@lcluber/chjs";
import { HTMLParameters } from "./interfaces";

export type HTMLElements =
  | HTMLElement
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | HTMLProgressElement
  | HTMLCanvasElement
  | HTMLIFrameElement;

export class Dom {
  public static scrollToBottom(HtmlElement: HTMLElements): void {
    HtmlElement.scrollTop = HtmlElement.scrollHeight;
  }

  public static scrollToTop(HtmlElement: HTMLElements): void {
    HtmlElement.scrollTop = 0;
  }

  public static findById(id: string): HTMLElements | null {
    return document.getElementById(id);
  }

  public static findByClass(className: string): HTMLElements[] | null {
    return this.arrayFrom(document.getElementsByClassName(className));
  }

  public static findByTag(tagName: string): HTMLElements[] | null {
    return this.arrayFrom(document.getElementsByTagName(tagName));
  }

  public static showElement(
    element: string | HTMLElements
  ): HTMLElements | null {
    return this.styleElement(element, "display", "block");
  }

  public static hideElement(
    element: string | HTMLElements
  ): HTMLElements | null {
    return this.styleElement(element, "display", "none");
  }

  public static styleElement(
    element: string | HTMLElements,
    parameter: string | number,
    value: string
  ): HTMLElements | null {
    let htmlelement = this.checkElement(element);
    if (htmlelement) {
      htmlelement.style[<number>parameter] = value;
    }
    return htmlelement;
  }

  public static showOverflow(): void {
    document.body.style.overflow = "visible";
  }

  public static hideOverflow(): void {
    document.body.style.overflow = "hidden";
  }

  public static getInputValue(element: string | HTMLElement): string | null {
    let htmlelement = this.checkElement(element);
    if (htmlelement) {
      return (<HTMLInputElement>htmlelement).value;
    }
    return null;
  }

  public static clearInputValue(
    element: string | HTMLElement
  ): HTMLElement | null {
    let htmlelement = this.checkElement(element);
    if (htmlelement) {
      (<HTMLInputElement>htmlelement).value = "";
    }
    return htmlelement;
  }

  public static focusOn(element: string | HTMLElements): HTMLElements | null {
    let htmlelement = this.checkElement(element);
    if (htmlelement) {
      htmlelement.focus();
    }
    return htmlelement;
  }

  public static addHTMLElement(
    parentElement: string | HTMLElement,
    childElementType: string,
    childElementAttributes?: HTMLParameters
  ): HTMLElements | null {
    let parentHtmlElement = this.checkElement(parentElement);
    if (parentHtmlElement) {
      let newElement = document.createElement(childElementType);
      if (childElementAttributes) {
        Object.keys(childElementAttributes).forEach(key => {
          if (key === "textContent" || key === "innerHTML") {
            newElement[key] = childElementAttributes[key];
          } else {
            newElement.setAttribute(key, childElementAttributes[key]);
          }
        });
      }
      parentHtmlElement.appendChild(newElement);
      return newElement;
    }
    return null;
  }

  public static clearHTMLElement(
    element: string | HTMLElement
  ): HTMLElement | null {
    let htmlelement = this.checkElement(element);
    if (htmlelement) {
      htmlelement.innerHTML = "";
    }
    return htmlelement;
  }

  private static arrayFrom(htmlCollection: HTMLCollection): HTMLElements[] {
    const elements: HTMLElements[] = [];
    for (let i = 0; i < htmlCollection.length; i++) {
      elements.push(<HTMLElements>htmlCollection[i]);
    }
    return elements;
  }

  private static checkElement(
    element: string | HTMLElements
  ): HTMLElements | null {
    if (isString(element)) {
      return this.findById(<string>element);
    }
    return <HTMLElements>element;
  }
}
