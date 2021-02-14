var QuerySelector = /** @class */ (function () {
    function QuerySelector(query, parent) {
        if (parent === void 0) { parent = document; }
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
    Object.defineProperty(QuerySelector.prototype, "all", {
        get: function () {
            return this.query;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuerySelector.prototype, "exists", {
        get: function () {
            return this.query.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    return QuerySelector;
}());
export { QuerySelector };
//# sourceMappingURL=querySelector.js.map