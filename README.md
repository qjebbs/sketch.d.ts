# Installation

Install and save to devDependencies:

```sh
npm install --save-dev git+https://github.com/qjebbs/sketch.d.ts.git
```

It's necessary to config TypeScript (use tsconfig.json) to use `es6` lib only, since:

- "Sketch runs JavaScript code in JavaScriptCore, with full ES6 support"([Here](https://developer.sketch.com/plugins/javascript-environment)). 
- Otherwise, TypeScript will introduce libs like `DOM`, which leads to duplicated definition to `Document` etc., and other unexpected behaviours.

```json
{
    "compilerOptions": {
        "lib": [
            "es6"
        ]
    }
}
```

# Summary
This package contains type definitions for [Sketch JavaScript API](https://developer.sketch.com/reference/api).

# Examples

```ts
// Require all
var sketch: Sketch = require('sketch');

// Or, require without UI, Settings, DataSupplier, Async,
var sketchDom: SketchDom = require('sketch/dom');
// and require others according to your needs
var async: Async = require('sketch/async');
var DataSupplier: DataSupplier = require('sketch/data-supplier');
var UI: UI = require('sketch/ui');
var Settings: Settings = require('sketch/settings');

var document: Document = sketch.getSelectedDocument();
var page: Page = document.selectedPage;
```