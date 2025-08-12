# ITSM Boilerplate (from HAR)

This is a minimal static boilerplate assembled from the ServiceNow ITSM page assets you uploaded.
It keeps a local copy of the key CSS/JS, fonts, and a logo, and wires them in a simple index.html.

## Contents
- assets/css/
- assets/js/
- assets/fonts/
- assets/img/
- index.html

## Use in React portfolio
- Copy the entire `boilerplate-itsm/` folder into your React app's `public/media/servicenow-itsm/`
- Then render it via iframe (simplest):
    <iframe src="/alantram.com/media/servicenow-itsm/index.html" width="100%" height="1200" style="border:0;"></iframe>

Or port the styles:
- Import the CSS into a React component and replicate the structure in JSX.

Notes:
- External analytics and SSO scripts were **not** included.
- If you need additional icons or images from the original page, add them into `assets/img/` and reference relatively.
