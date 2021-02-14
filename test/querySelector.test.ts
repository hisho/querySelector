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

    test('divを一つ取得する', (): void => {
      document.body.innerHTML = `
      <div>hello</div>
      `;
      const DOM = new QuerySelector('div');
      expect(DOM.all).toEqual(Array.from(document.querySelectorAll('div')));
      expect(DOM.all.length).toEqual(1);
      DOM.all.forEach((item) => {
        expect(item.innerHTML).toEqual('hello');
      });
    });

    test('diを取得できない', (): void => {
      document.body.innerHTML = `
      <div>hello</div>
      `;
      const DOM = new QuerySelector('di');
      expect(DOM.all).toEqual(Array.from(document.querySelectorAll('di')));
      expect(DOM.all.length).toEqual(0);
      DOM.all.forEach((item) => {
        expect(item.innerHTML).toEqual(undefined);
      });
    });

    test('div複数取得する', (): void => {
      document.body.innerHTML = `
      <div>hello</div>
      <div>hello</div>
      `;
      const DOM = new QuerySelector('div');
      expect(DOM.all).toEqual(Array.from(document.querySelectorAll('div')));
      expect(DOM.all.length).toEqual(2);
      DOM.all.forEach((item) => {
        expect(item.innerHTML).toEqual('hello');
      });
    });
  });

  describe('all', (): void => {
    test('返り値が配列か確かめる', (): void => {
      document.body.innerHTML = `
      <div id="test">hello</div>
      <div>hello</div>
      `;
      const DOM1 = new QuerySelector('div');
      const DOM2 = new QuerySelector('#test');
      const DOM3 = new QuerySelector('#no exist');
      expect(Array.isArray(DOM1.all)).toEqual(true);
      expect(DOM1.all.length).toEqual(2);
      expect(Array.isArray(DOM2.all)).toEqual(true);
      expect(DOM2.all.length).toEqual(1);
      expect(Array.isArray(DOM3.all)).toEqual(true);
      expect(DOM3.all.length).toEqual(0);
    });
  });

  describe('exists', (): void => {
    test('div存在するか確かめる', (): void => {
      document.body.innerHTML = `
      <div id="test">hello</div>
      <div>hello</div>
      `;
      const DOM1 = new QuerySelector('div');
      const DOM2 = new QuerySelector('#test');
      expect(DOM1.exists).toEqual(true);
      expect(DOM2.exists).toEqual(true);
    });

    test('div存在しない事を確かめる', (): void => {
      document.body.innerHTML = `
      <div>hello</div>
      `;
      const DOM1 = new QuerySelector('di');
      const DOM2 = new QuerySelector('#test');
      expect(DOM1.exists).toEqual(false);
      expect(DOM2.exists).toEqual(false);
    });
  });
})
