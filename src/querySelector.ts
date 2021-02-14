type querySelectorAllQuery = string | NodeListOf<Element> | HTMLElement | HTMLElement[] | null

export class QuerySelector {
  private readonly query: HTMLElement[];

  constructor(query: querySelectorAllQuery, parent = document) {
    if (query === null) {
      //null
      this.query = [];
    } else if (typeof query === 'string') {
      //string
      this.query = Array.from(parent.querySelectorAll(query));
    } else if (query instanceof NodeList) {
      //document.querySelectorAll
      this.query = Array.from((query as NodeListOf<HTMLElement>));
    } else if (query instanceof HTMLElement) {
      //HTMLElement
      this.query = [query];
    } else {
      //HTMLElement []
      this.query = query;
    }
  }

  get all(): HTMLElement[] {
    return this.query;
  }

  get exists(): boolean {
    return this.query.length > 0;
  }

}