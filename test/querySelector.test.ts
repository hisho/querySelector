import {QuerySelector} from "../src";

describe('QuerySelector', (): void => {
  describe('constructor', (): void => {
    test('instance生成', (): void => {
      document.body.innerHTML = `
      <div>hello</div>
      `;
      const DOM = new QuerySelector('div');
      expect(DOM).toBeDefined();
      expect(DOM.all).toBeDefined();
      expect(DOM.exists).toBeDefined();
    });
  });
})
