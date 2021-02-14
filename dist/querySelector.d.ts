declare type querySelectorAllQuery = string | NodeListOf<Element> | HTMLElement | HTMLElement[] | null;
export declare class QuerySelector {
    private readonly query;
    constructor(query: querySelectorAllQuery, parent?: Document);
    get all(): HTMLElement[];
    get exists(): boolean;
}
export {};
