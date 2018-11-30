# browser-detect

A browser detecion libray, based on [current-device](https://github.com/matthewhudson/current-device).

## usage

```html
<script src="browser-detect.min.js"></script>
<style>
  html.firefox .foo {
    /* style for firefox */
  }
  html.chrome .foo {
    /* style for chrome */
  }
</style>
<script>
  if (window.browserDetect.firefox()) {
    // code for firefox
  }
  if (window.browserDetect.chrome()) {
    // code for chrome
  }
</script>
```

---

```javascript
import { browserDetect } from 'browser-detect'; // ES modules
const { browserDetect } = require('browser-detect'); // CommonJS

if (broewserDetect.firefox()) {
  // code for firefox
}
if (broewserDetect.chrome()) {
  // code for chrome
}
```
