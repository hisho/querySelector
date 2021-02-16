# QuerySelector

# INSTALLATION

```shell script
$ npm i @hisho/query-selector
```

# USAGE

```typescript
import {querySelector} from "@hisho/query-selector";

const dom = querySelector('div');

if(dom.exists) {
  dom.all.forEach((item) => {
    console.log(item);
  });
}

```

# API

## all

return - `HTMLElement[]`

```typescript
querySelector('div').all;
```

## exists
