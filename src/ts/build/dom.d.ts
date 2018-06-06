export declare type ChildElementOptions = {
    id: string;
    content: string;
    class: string;
    href: string;
    src: string;
    alt: string;
    width: string;
    height: string;
};
export declare class Dom {
    static scrollToBottom(HtmlElement: HTMLElement): void;
    static findById(id: string): HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement;
    static showById(a: string): void;
    static hideById(a: string): void;
    static showOverflow(): void;
    static hideOverflow(): void;
    static getInputValue(a: string): string;
    static clearInputValue(a: string): void;
    static focusOn(a: string): void;
    static addHTMLElement(parentElement: HTMLElement, childElementType: string, childElementOptions?: ChildElementOptions): HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement;
}
