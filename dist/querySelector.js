export class QuerySelector {
    constructor(query, parent = document) {
        if (query === null) {
            //null
            this.query = [];
        }
        else if (typeof query === 'string') {
            //string
            this.query = Array.from(parent.querySelectorAll(query));
        }
        else if (query instanceof NodeList) {
            //document.querySelectorAll
            this.query = Array.from(query);
        }
        else if (query instanceof HTMLElement) {
            //HTMLElement
            this.query = [query];
        }
        else {
            //HTMLElement []
            this.query = query;
        }
    }
    get all() {
        return this.query;
    }
    get exists() {
        return this.query.length > 0;
    }
}
//# sourceMappingURL=querySelector.js.map