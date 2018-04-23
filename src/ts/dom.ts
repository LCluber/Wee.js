
export class Dom {

  static scrollToBottom(HtmlElement: HTMLElement): void{
    HtmlElement.scrollTop = HtmlElement.scrollHeight;
  }

  static findById(id: string): HTMLElement | HTMLInputElement | HTMLCanvasElement  {
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

}
