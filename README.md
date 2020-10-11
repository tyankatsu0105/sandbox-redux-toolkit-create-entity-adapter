- `@hookform/devtools`は本来devDependenciesに入れるものだが、検証サイトということで、dependenciesに入れている。
- https://github.com/react-hook-form/devtools/issues/18
  - NODE_ENVで見せないように分岐させているので、強制的に見せる場合は`import * as ReactHookFormDevTool from '@hookform/devtools/dist/index.cjs.development.js';`
  - https://github.com/react-hook-form/devtools/issues/61
```js
// node_modules/@hookform/devtools/dist/index.js

'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    DevTool: () => null,
  };
} else {
  module.exports = require('./index.cjs.development.js')
}
```
