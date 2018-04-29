export declare class Ajax {
    static method: 'GET' | 'POST';
    static async: boolean;
    static noCache: boolean;
    static call(url: string): Promise<string>;
}
