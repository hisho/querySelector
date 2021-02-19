# querySelector

## Features

- typescript
- vanilla js

## Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Install

```shell script
$ npm i @hisho/query-selector
```

## Usage
querySelector() - `string | NodeListOf<Element> | HTMLElement | HTMLElement[] | null`

```typescript
import {querySelector} from "@hisho/query-selector";

const dom = querySelector('div');

if(dom.exists) {
  dom.all.forEach((item) => {
    console.log(item);
  });
}

```

## API

### all

return - `HTMLElement[]`

```typescript
querySelector('div').all; //[div,div,...] or []
```

### exists

return - `boolean`

```typescript
querySelector('div').exists; //true or false
```


## License

[MIT © hisho](./LICENSE)
