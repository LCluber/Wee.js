export declare class Bind {
    data: string | number;
    element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement;
    constructor(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement, data: string);
    handleEvent(event: Event): void;
    change(value: string | number): void;
}
